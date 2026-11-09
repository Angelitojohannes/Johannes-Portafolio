'use client';

import {
  Children,
  forwardRef,
  isValidElement,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react';
import type { CSSProperties, ReactElement, ReactNode } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { BeachIcon, BridgeIcon, CloudIcon, SunsetIcon } from '@hugeicons/core-free-icons';
import './CardSwap.css';

export type CardSwapItem = {
  title?: string;
  image?: string;
  icon?: ReactNode;
  alt?: string;
  style?: CSSProperties;
};

export type CardSwapProps = {
  items?: CardSwapItem[];
  children?: ReactNode;
  width?: number;
  height?: number;
  cardDistance?: number;
  verticalDistance?: number;
  depth?: number;
  skewAmount?: number;
  visibleCards?: number;
  delay?: number;
  autoplay?: boolean;
  pauseOnHover?: boolean;
  draggable?: boolean;
  speed?: number;
  bounce?: number;
  parallax?: number;
  hoverSpread?: number;
  dim?: number;
  cardRadius?: number;
  intro?: boolean;
  theme?: 'dark' | 'light';
  onCardClick?: (index: number) => void;
  onChange?: (index: number) => void;
  className?: string;
};

const defaultItems: CardSwapItem[] = [
  {
    title: 'Golden hour',
    image: 'https://images.unsplash.com/photo-1514519334989-3d5c8b1a9f91?w=900&q=80&auto=format&fit=crop',
    icon: <HugeiconsIcon icon={SunsetIcon} size={14} strokeWidth={1.8} />,
  },
  {
    title: 'Black beach',
    image: 'https://images.unsplash.com/photo-1511300636408-a63a89df3482?w=900&q=80&auto=format&fit=crop',
    icon: <HugeiconsIcon icon={BeachIcon} size={14} strokeWidth={1.8} />,
  },
  {
    title: 'Steel arches',
    image: 'https://images.unsplash.com/photo-1520930528075-4ea5ead759f5?w=900&q=80&auto=format&fit=crop',
    icon: <HugeiconsIcon icon={BridgeIcon} size={14} strokeWidth={1.8} />,
  },
  {
    title: 'Pink drift',
    image: 'https://images.unsplash.com/photo-1778849097774-0ab2a873a858?w=900&q=80&auto=format&fit=crop',
    icon: <HugeiconsIcon icon={CloudIcon} size={14} strokeWidth={1.8} />,
  },
];

const THEMES = {
  dark: {
    '--swap-tile': 'linear-gradient(180deg, #3a3644 0%, #27242f 100%)',
    '--swap-tile-edge': 'rgba(255, 255, 255, 0.07)',
    '--swap-tile-highlight': 'rgba(255, 255, 255, 0.12)',
    '--swap-shadow': '0 30px 60px -24px rgba(0, 0, 0, 0.8), 0 10px 24px -12px rgba(0, 0, 0, 0.55)',
    '--swap-media-edge': 'rgba(255, 255, 255, 0.06)',
    '--swap-ink': '#f4f4f5',
    '--swap-badge': 'rgba(255, 255, 255, 0.08)',
    '--swap-shade': '#100e15',
  },
  light: {
    '--swap-tile': 'linear-gradient(180deg, #ffffff 0%, #f6f6f8 100%)',
    '--swap-tile-edge': 'rgba(24, 24, 27, 0.08)',
    '--swap-tile-highlight': 'rgba(255, 255, 255, 1)',
    '--swap-shadow': '0 30px 60px -28px rgba(24, 24, 27, 0.35), 0 10px 24px -14px rgba(24, 24, 27, 0.2)',
    '--swap-media-edge': 'rgba(24, 24, 27, 0.06)',
    '--swap-ink': '#27272a',
    '--swap-badge': 'rgba(24, 24, 27, 0.05)',
    '--swap-shade': '#ffffff',
  },
} as const;

export const Card = forwardRef<HTMLDivElement, {
  customClass?: string;
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
  onClick?: () => void;
}>(({ customClass, className, children, style, ...rest }, ref) => (
  <div ref={ref} {...rest} style={style} className={['card-swap-card', customClass, className].filter(Boolean).join(' ')}>
    {children}
    <span className="card-swap-card-rim" aria-hidden="true" />
  </div>
));
Card.displayName = 'Card';

const ItemCard = ({ item }: { item: CardSwapItem }) => (
  <Card style={item.style}>
    <div className="card-swap-item">
      {(item.icon || item.title) && (
        <div className="card-swap-head">
          {item.icon && <span className="card-swap-icon">{item.icon}</span>}
          {item.title && <span className="card-swap-title">{item.title}</span>}
        </div>
      )}
      {item.image && (
        <div className="card-swap-media">
          <img src={item.image} alt={item.alt ?? item.title ?? ''} draggable={false} />
        </div>
      )}
    </div>
  </Card>
);

export const CardSwap = forwardRef<{ next: () => void; prev: () => void }, CardSwapProps>(
  (
    {
      items,
      children,
      width = 460,
      height = 340,
      cardDistance = 60,
      verticalDistance = 70,
      depth = 90,
      skewAmount = 6,
      visibleCards = 4,
      delay = 4000,
      autoplay = true,
      pauseOnHover = true,
      draggable = true,
      speed = 1,
      bounce = 0.35,
      parallax = 0.5,
      hoverSpread = 0.12,
      dim = 0.5,
      cardRadius = 18,
      intro: _intro = true,
      theme = 'dark',
      onCardClick,
      onChange,
      className = '',
    },
    ref,
  ) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    const resolvedItems = useMemo(() => {
      const childCards = Children.toArray(children).filter(
        (child): child is ReactElement<{ title?: string; image?: string; alt?: string; icon?: ReactNode; style?: CSSProperties }> => isValidElement(child),
      );
      if (childCards.length > 0) {
        return childCards.map((child) => {
          const props = child.props as {
            title?: string;
            image?: string;
            alt?: string;
            icon?: ReactNode;
            style?: CSSProperties;
          };
          return {
            title: props.title,
            image: props.image,
            alt: props.alt,
            icon: props.icon,
            style: props.style,
          };
        });
      }
      return (items && items.length > 0 ? items : defaultItems).map((item) => ({ ...item }));
    }, [children, items]);

    const visible = useMemo(() => {
      const count = Math.min(visibleCards, resolvedItems.length || 1);
      return Array.from({ length: count }, (_, offset) => {
        const index = (activeIndex + offset) % resolvedItems.length;
        return resolvedItems[index];
      });
    }, [activeIndex, resolvedItems, visibleCards]);

    const advance = useCallback(
      (direction: 1 | -1 = 1) => {
        if (resolvedItems.length === 0) return;
        setActiveIndex((current) => {
          const next = (current + direction + resolvedItems.length) % resolvedItems.length;
          onChange?.(next);
          return next;
        });
      },
      [onChange, resolvedItems.length],
    );

    useImperativeHandle(ref, () => ({
      next: () => advance(1),
      prev: () => advance(-1),
    }));

    useEffect(() => {
      if (!autoplay || resolvedItems.length <= 1 || (pauseOnHover && isHovering)) return;
      const timer = window.setTimeout(() => advance(1), delay);
      return () => window.clearTimeout(timer);
    }, [advance, autoplay, delay, isHovering, pauseOnHover, resolvedItems.length]);

    const handleCardClick = (index: number) => {
      onCardClick?.(index);
      setActiveIndex(index);
      onChange?.(index);
    };

    const rootStyle: CSSProperties & Record<string, string | number> = {
      '--card-width': `${width}px`,
      '--card-height': `${height}px`,
      '--card-distance': `${cardDistance}px`,
      '--card-vertical-distance': `${verticalDistance}px`,
      '--card-depth': `${depth}px`,
      '--card-skew': `${skewAmount}deg`,
      '--card-radius': `${cardRadius}px`,
      '--card-dim': dim,
      '--card-hover-spread': hoverSpread,
      '--card-parallax': parallax,
      '--card-speed': `${speed}`,
      '--card-bounce': `${bounce}`,
      ...THEMES[theme],
    };

    return (
      <div
        className={['card-swap', className].filter(Boolean).join(' ')}
        style={rootStyle}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {visible.map((item, index) => {
          const isFront = index === 0;
          const offset = index * cardDistance * (1 + hoverSpread);
          const offsetY = index * verticalDistance * (1 + hoverSpread * 0.8);
          const offsetZ = -index * depth;
          const scale = 1 - index * 0.08;
          const skew = index * skewAmount;
          const cardOpacity = Math.max(0, 1 - index * dim);
          const zIndex = visibleCards - index;
          const transform = `translate(-50%, -50%) translate3d(${offset}px, ${offsetY}px, ${offsetZ}px) rotate(${skew}deg) scale(${scale})`;

          return (
            <div
              key={`${item.title ?? 'card'}-${index}-${activeIndex}`}
              className="card-swap-layer"
              style={{
                zIndex,
                opacity: cardOpacity,
                transform,
                filter: isFront ? 'none' : `brightness(${1 - index * 0.08})`,
                pointerEvents: !isFront && !draggable ? 'none' : 'auto',
              }}
              onClick={() => handleCardClick((activeIndex + index) % resolvedItems.length)}
              aria-label={item.title ?? 'Tarjeta'}
            >
              <ItemCard item={item} />
            </div>
          );
        })}
      </div>
    );
  },
);

CardSwap.displayName = 'CardSwap';

export default CardSwap;
