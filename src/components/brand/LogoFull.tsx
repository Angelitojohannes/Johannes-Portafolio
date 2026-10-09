import React from 'react';
import { LogoMark } from './LogoMark';

export interface LogoFullProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  showMark?: boolean;
  className?: string;
  textColor?: string;
}

/**
 * LogoFull - Wordmark oficial de Johannes con el isotipo original opcional.
 */
export const LogoFull: React.FC<LogoFullProps> = ({
  size = 'md',
  showTagline = true,
  showMark = true,
  className = '',
  textColor = '#F4F2EB',
}) => {
  const sizeConfig = {
    sm: {
      markSize: 26,
      wordmarkWidth: 112,
      tagText: 'text-[7.5px]',
      gap: 'gap-3',
    },
    md: {
      markSize: 34,
      wordmarkWidth: 142,
      tagText: 'text-[8.5px]',
      gap: 'gap-3.5',
    },
    lg: {
      markSize: 46,
      wordmarkWidth: 190,
      tagText: 'text-[10px]',
      gap: 'gap-4',
    },
  };

  const current = sizeConfig[size];

  return (
    <div className={`inline-flex items-center ${current.gap} select-none ${className}`}>
      {showMark && <LogoMark size={current.markSize} color={textColor} />}
      <div className="flex flex-col justify-center gap-1">
        <span
          role="img"
          aria-label="Johannes"
          className="block shrink-0"
          style={{
            width: current.wordmarkWidth,
            aspectRatio: '452 / 93',
            display: 'block',
            border: 'none',
            outline: 'none',
            boxShadow: 'none',
            overflow: 'hidden',
            backgroundColor: textColor,
            maskImage: 'url(/brand/johannes-wordmark-transparent.png)',
            WebkitMaskImage: 'url(/brand/johannes-wordmark-transparent.png)',
            maskSize: 'contain',
            WebkitMaskSize: 'contain',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskPosition: 'center',
            WebkitMaskPosition: 'center',
          }}
        />
        {showTagline && (
          <span
            className={`font-sans tracking-[0.12em] uppercase font-light whitespace-nowrap select-none ${current.tagText}`}
            style={{ color: textColor.toLowerCase() === '#111210' ? '#646653' : '#B7B1A5' }}
          >
            Desarrollo Web &amp; Soluciones Digitales
          </span>
        )}
      </div>
    </div>
  );
};
