import React, { Children, cloneElement, isValidElement } from 'react';
import { Reveal, RevealProps } from './Reveal';

interface RevealGroupProps {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
  stagger?: number;
  id?: string;
  'aria-label'?: string;
}

export const RevealGroup: React.FC<RevealGroupProps> = ({
  children,
  as: Element = 'div',
  className = '',
  stagger = 90,
  id,
  'aria-label': ariaLabel,
}) => (
  <Element id={id} aria-label={ariaLabel} className={`reveal-group ${className}`.trim()}>
    {Children.map(children, (child, index) => {
      if (!isValidElement<RevealProps>(child) || child.type !== Reveal) {
        return child;
      }

      return cloneElement(child, {
        delay: Math.min(index * stagger, 600),
      });
    })}
  </Element>
);
