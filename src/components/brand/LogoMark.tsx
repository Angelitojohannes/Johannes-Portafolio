import React from 'react';

export interface LogoMarkProps {
  size?: number | string;
  className?: string;
  opacity?: number;
  color?: string;
}

/**
 * LogoMark - Isotipo oficial "J" de Johannes (Renderizado en PNG)
 */
export const LogoMark: React.FC<LogoMarkProps> = ({
  size = 36,
  className = '',
  opacity = 1,
  color = '#F1EDE3',
}) => {
  const pixelSize = typeof size === 'number' ? `${size}px` : size;
  const isSmallMark = typeof size === 'number' && size <= 56;

  return (
    <div
      className={`brand-mark inline-flex items-center justify-center select-none shrink-0 ${isSmallMark ? 'brand-mark--animated' : ''} ${className}`}
      role="img"
      aria-label="Johannes"
      style={{
        width: pixelSize,
        height: pixelSize,
        display: 'block',
        padding: 0,
        border: 'none',
        outline: 'none',
        boxShadow: 'none',
        overflow: 'hidden',
        opacity,
      }}
    >
      <span
        className="brand-mark__shape"
        aria-hidden="true"
        style={{
          backgroundColor: color,
          maskImage: 'url(/brand/johannes-j-transparent.png)',
          WebkitMaskImage: 'url(/brand/johannes-j-transparent.png)',
          maskSize: 'contain',
          WebkitMaskSize: 'contain',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskPosition: 'center',
          WebkitMaskPosition: 'center',
        }}
      />
      {isSmallMark && <span className="brand-mark__dust" aria-hidden="true" />}
    </div>
  );
};
