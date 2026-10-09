import React, { CSSProperties } from 'react';
import { useInView } from '../../hooks/useInView';

export type RevealVariant = 'up' | 'down' | 'left' | 'right' | 'zoom' | 'fade' | 'line';

interface RevealProps {
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  distance?: number;
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

type RevealStyle = CSSProperties & {
  '--reveal-delay': string;
  '--reveal-duration': string;
  '--reveal-distance': string;
};

export const Reveal: React.FC<RevealProps> = ({
  variant = 'up',
  delay = 0,
  duration = 700,
  distance = 32,
  as: Element = 'div',
  className = '',
  children,
}) => {
  const { ref, isInView } = useInView<HTMLElement>();
  const style: RevealStyle = {
    '--reveal-delay': `${delay}ms`,
    '--reveal-duration': `${duration}ms`,
    '--reveal-distance': `${distance}px`,
  };

  return (
    <Element
      ref={ref}
      className={`reveal reveal--${variant} ${className}`.trim()}
      data-reveal-state={isInView ? 'visible' : 'hidden'}
      data-reveal-variant={variant}
      style={style}
    >
      {children}
    </Element>
  );
};

export type { RevealProps };
