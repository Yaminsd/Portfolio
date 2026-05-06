import type { CSSProperties, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  title?: string;
  className?: string;
  style?: CSSProperties;
  variant?: 'default' | 'inset';
};

export function PixelFrame({ children, title, className, style, variant = 'default' }: Props) {
  return (
    <div
      className={`pixel-frame ${variant === 'inset' ? 'pixel-frame--inset' : ''} ${className ?? ''}`.trim()}
      style={style}
    >
      {title ? <div className="pixel-frame__title">{title}</div> : null}
      <div className="pixel-frame__body">{children}</div>
    </div>
  );
}
