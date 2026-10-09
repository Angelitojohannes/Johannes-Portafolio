const fs = require('fs');
const zlib = require('zlib');

function crc32(buf) {
  let c;
  const table = [];
  for (let n = 0; n < 256; n++) {
    c = n;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    }
    table[n] = c;
  }
  let crc = 0 ^ (-1);
  for (let i = 0; i < buf.length; i++) {
    crc = (crc >>> 8) ^ table[(crc ^ buf[i]) & 0xff];
  }
  return (crc ^ (-1)) >>> 0;
}

function makeChunk(type, data) {
  const len = data.length;
  const buf = Buffer.alloc(12 + len);
  buf.writeUInt32BE(len, 0);
  buf.write(type, 4, 4, 'ascii');
  data.copy(buf, 8);
  const typeAndData = buf.slice(4, 8 + len);
  buf.writeUInt32BE(crc32(typeAndData), 8 + len);
  return buf;
}

function unfilterPng(buf) {
  let pos = 8;
  const idatChunks = [];
  let w = 0, h = 0;
  while (pos < buf.length) {
    const len = buf.readUInt32BE(pos);
    const type = buf.toString('ascii', pos + 4, pos + 8);
    if (type === 'IHDR') {
      w = buf.readUInt32BE(pos + 8);
      h = buf.readUInt32BE(pos + 12);
    }
    if (type === 'IDAT') idatChunks.push(buf.slice(pos + 8, pos + 8 + len));
    pos += 12 + len;
  }
  const raw = zlib.inflateSync(Buffer.concat(idatChunks));
  const bpp = 4; // RGBA
  const stride = w * bpp;
  const result = Buffer.alloc(h * stride);
  
  let rawPos = 0;
  for (let y = 0; y < h; y++) {
    const filter = raw[rawPos++];
    const prevRow = y > 0 ? (y - 1) * stride : null;
    const currRow = y * stride;
    
    for (let x = 0; x < stride; x++) {
      const a = x >= bpp ? result[currRow + x - bpp] : 0;
      const b = prevRow !== null ? result[prevRow + x] : 0;
      const c = (prevRow !== null && x >= bpp) ? result[prevRow + x - bpp] : 0;
      let val = raw[rawPos++];
      
      if (filter === 0) {
        // None
      } else if (filter === 1) {
        val = (val + a) & 0xff;
      } else if (filter === 2) {
        val = (val + b) & 0xff;
      } else if (filter === 3) {
        val = (val + Math.floor((a + b) / 2)) & 0xff;
      } else if (filter === 4) {
        const p = a + b - c;
        const pa = Math.abs(p - a);
        const pb = Math.abs(p - b);
        const pc = Math.abs(p - c);
        let pr;
        if (pa <= pb && pa <= pc) pr = a;
        else if (pb <= pc) pr = b;
        else pr = c;
        val = (val + pr) & 0xff;
      }
      result[currRow + x] = val;
    }
  }
  return { w, h, data: result };
}

function encodePng(w, h, rgbaBuffer) {
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(w, 0);
  ihdrData.writeUInt32BE(h, 4);
  ihdrData[8] = 8;
  ihdrData[9] = 6; // RGBA
  ihdrData[10] = 0;
  ihdrData[11] = 0;
  ihdrData[12] = 0;
  const ihdr = makeChunk('IHDR', ihdrData);

  const stride = w * 4;
  const raw = Buffer.alloc(h * (stride + 1));
  for (let y = 0; y < h; y++) {
    const rawOffset = y * (stride + 1);
    raw[rawOffset] = 0; // Filter 0
    rgbaBuffer.copy(raw, rawOffset + 1, y * stride, (y + 1) * stride);
  }

  const compressed = zlib.deflateSync(raw);
  const idat = makeChunk('IDAT', compressed);
  const iend = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([sig, ihdr, idat, iend]);
}

function processAsset(inPath, outPath, pad = 12) {
  const decoded = unfilterPng(fs.readFileSync(inPath));
  const { w, h, data } = decoded;

  let minX = w, maxX = 0, minY = h, maxY = 0;

  // Background luminance ~ 12, foreground ~ 238
  const bgL = 12.0;
  const fgL = 238.0;

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      const lum = r * 0.299 + g * 0.587 + b * 0.114;
      if (lum > 40) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  minX = Math.max(0, minX - pad);
  minY = Math.max(0, minY - pad);
  maxX = Math.min(w - 1, maxX + pad);
  maxY = Math.min(h - 1, maxY + pad);

  const cropW = maxX - minX + 1;
  const cropH = maxY - minY + 1;
  const outBuf = Buffer.alloc(cropW * cropH * 4);

  for (let y = 0; y < cropH; y++) {
    const origY = minY + y;
    for (let x = 0; x < cropW; x++) {
      const origX = minX + x;
      const origIdx = (origY * w + origX) * 4;
      const outIdx = (y * cropW + x) * 4;

      const r = data[origIdx], g = data[origIdx+1], b = data[origIdx+2];
      const lum = r * 0.299 + g * 0.587 + b * 0.114;

      let alpha = 0;
      if (lum > 22) {
        const factor = Math.max(0, Math.min(1, (lum - 22) / (fgL - 22)));
        alpha = Math.round(factor * 255);
      }

      // Crisp clean ivory #F2EFEA
      outBuf[outIdx] = 242;
      outBuf[outIdx + 1] = 239;
      outBuf[outIdx + 2] = 234;
      outBuf[outIdx + 3] = alpha;
    }
  }

  const png = encodePng(cropW, cropH, outBuf);
  fs.writeFileSync(outPath, png);
  console.log(`Generated clean transparent asset: ${outPath} (${cropW}x${cropH})`);
  return { w: cropW, h: cropH, data: outBuf };
}

// Generate the official clean PNGs
const markData = processAsset('public/brand/johannes-j-isotipo.png', 'public/brand/johannes-j-transparent.png', 8);
processAsset('public/brand/johannes-wordmark.png', 'public/brand/johannes-wordmark-transparent.png', 8);

// Bilinear resample function for icons
function resizeRgba(srcW, srcH, srcData, dstW, dstH) {
  const dst = Buffer.alloc(dstW * dstH * 4);
  const xRatio = srcW / dstW;
  const yRatio = srcH / dstH;

  for (let y = 0; y < dstH; y++) {
    const srcY = y * yRatio;
    const y0 = Math.floor(srcY);
    const y1 = Math.min(y0 + 1, srcH - 1);
    const yLerp = srcY - y0;

    for (let x = 0; x < dstW; x++) {
      const srcX = x * xRatio;
      const x0 = Math.floor(srcX);
      const x1 = Math.min(x0 + 1, srcW - 1);
      const xLerp = srcX - x0;

      const idx00 = (y0 * srcW + x0) * 4;
      const idx10 = (y0 * srcW + x1) * 4;
      const idx01 = (y1 * srcW + x0) * 4;
      const idx11 = (y1 * srcW + x1) * 4;

      const dstIdx = (y * dstW + x) * 4;

      for (let c = 0; c < 4; c++) {
        const top = srcData[idx00 + c] * (1 - xLerp) + srcData[idx10 + c] * xLerp;
        const btm = srcData[idx01 + c] * (1 - xLerp) + srcData[idx11 + c] * xLerp;
        dst[dstIdx + c] = Math.round(top * (1 - yLerp) + btm * yLerp);
      }
    }
  }
  return dst;
}

// Generate square icons on navy background #00263F
function makeSquareIcon(targetSize, innerSize, outPath) {
  // Navy background: #00263F (0, 38, 63)
  const bgR = 0, bgG = 38, bgB = 63;
  const iconBuf = Buffer.alloc(targetSize * targetSize * 4);

  // Fill navy
  for (let i = 0; i < targetSize * targetSize; i++) {
    iconBuf[i * 4] = bgR;
    iconBuf[i * 4 + 1] = bgG;
    iconBuf[i * 4 + 2] = bgB;
    iconBuf[i * 4 + 3] = 255;
  }

  // Calculate scaled mark preserving aspect ratio
  const scale = innerSize / Math.max(markData.w, markData.h);
  const markW = Math.round(markData.w * scale);
  const markH = Math.round(markData.h * scale);
  const resizedMark = resizeRgba(markData.w, markData.h, markData.data, markW, markH);

  const startX = Math.floor((targetSize - markW) / 2);
  const startY = Math.floor((targetSize - markH) / 2);

  for (let y = 0; y < markH; y++) {
    for (let x = 0; x < markW; x++) {
      const markIdx = (y * markW + x) * 4;
      const alpha = resizedMark[markIdx + 3] / 255;
      const dstIdx = ((startY + y) * targetSize + (startX + x)) * 4;

      iconBuf[dstIdx] = Math.round(resizedMark[markIdx] * alpha + bgR * (1 - alpha));
      iconBuf[dstIdx + 1] = Math.round(resizedMark[markIdx + 1] * alpha + bgG * (1 - alpha));
      iconBuf[dstIdx + 2] = Math.round(resizedMark[markIdx + 2] * alpha + bgB * (1 - alpha));
      iconBuf[dstIdx + 3] = 255;
    }
  }

  const png = encodePng(targetSize, targetSize, iconBuf);
  fs.writeFileSync(outPath, png);
  console.log(`Generated icon: ${outPath} (${targetSize}x${targetSize})`);
  return png;
}

// Generate favicon 32x32, 180x180, and ico
const png32 = makeSquareIcon(32, 24, 'public/favicon-32x32.png');
const png180 = makeSquareIcon(180, 136, 'public/apple-touch-icon.png');
makeSquareIcon(32, 24, 'public/favicon.png');

// Create standard ICO file wrapping the 32x32 PNG
function makeIcoFromPng(pngBuffer, size = 32) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // ICO type
  header.writeUInt16LE(1, 4); // 1 image

  const dirEntry = Buffer.alloc(16);
  dirEntry.writeUInt8(size, 0); // width
  dirEntry.writeUInt8(size, 1); // height
  dirEntry.writeUInt8(0, 2);    // colors in palette
  dirEntry.writeUInt8(0, 3);    // reserved
  dirEntry.writeUInt16LE(1, 4); // color planes
  dirEntry.writeUInt16LE(32, 6);// bpp
  dirEntry.writeUInt32LE(pngBuffer.length, 8); // size of image data
  dirEntry.writeUInt32LE(22, 12); // offset (6 + 16 = 22)

  return Buffer.concat([header, dirEntry, pngBuffer]);
}

const ico = makeIcoFromPng(png32, 32);
fs.writeFileSync('public/favicon.ico', ico);
console.log('Generated public/favicon.ico');
