import type { ReactNode } from "react";

type PageRevealProps = {
  children: ReactNode;
  className?: string;
  itemClassName?: string;
};

type RevealItemProps = {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  disableOnMobile?: boolean;
};

export function PageReveal({ children, className = "" }: PageRevealProps) {
  return <main className={className}>{children}</main>;
}

export function RevealItem({ children, className = "" }: RevealItemProps) {
  return <div className={className}>{children}</div>;
}
