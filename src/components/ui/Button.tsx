"use client";

import Link from "next/link";
import type { CSSProperties, MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "ghost" | "demo";
  className?: string;
  target?: "_blank";
  rel?: string;
};

export default function Button({
  children,
  href,
  disabled = false,
  variant = "primary",
  className = "",
  target,
  rel
}: ButtonProps) {
  const base =
    "interactive-button inline-flex h-12 min-h-12 items-center justify-center rounded-xl px-5 text-center text-sm font-bold leading-none shadow-sm transition";

  const variants = {
    primary: "bg-slate-950 text-white hover:bg-slate-800",
    demo: "bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 shadow-lg shadow-emerald-500/20 hover:from-emerald-400 hover:to-cyan-400",
    secondary: "border border-slate-200 bg-white text-slate-800 hover:border-slate-300 hover:bg-slate-50",
    ghost: "text-slate-600 hover:text-slate-950"
  };

  const disabledClass = "pointer-events-none cursor-not-allowed opacity-40";
  const classes = cn(base, variants[variant], disabled && disabledClass, className);
  const handlePointerMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--pointer-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--pointer-y", `${event.clientY - rect.top}px`);
  };
  const buttonStyle = {
    "--pointer-x": "50%",
    "--pointer-y": "50%"
  } as CSSProperties;

  if (href && !disabled) {
    return (
      <Link href={href} className={classes} target={target} rel={rel} onMouseMove={handlePointerMove} style={buttonStyle}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} disabled={disabled} onMouseMove={handlePointerMove} style={buttonStyle}>
      {children}
    </button>
  );
}
