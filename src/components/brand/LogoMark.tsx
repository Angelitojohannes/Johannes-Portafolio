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

  return (
    <div
      className={`inline-flex items-center justify-center select-none shrink-0 ${className}`}
      role="img"
      aria-label="Johannes"
      style={{
        width: pixelSize,
        height: pixelSize,
        opacity,
        display: 'block',
        padding: 0,
        border: 'none',
        outline: 'none',
        boxShadow: 'none',
        overflow: 'hidden',
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
  );
};
