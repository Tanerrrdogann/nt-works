"use client";

import { Children, isValidElement, type ReactNode } from "react";
import { motion, type Variants } from "framer-motion";

type Direction = "up" | "left" | "right";

type PageRevealProps = {
  children: ReactNode;
  className?: string;
  itemClassName?: string;
};

type RevealItemProps = {
  children: ReactNode;
  className?: string;
  direction?: Direction;
};

const itemVariants = (direction: Direction): Variants => {
  const offset = {
    up: { x: 0, y: 34 },
    left: { x: -42, y: 0 },
    right: { x: 42, y: 0 },
  }[direction];

  return {
    hidden: { opacity: 0, ...offset, filter: "blur(7px)" },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.05, ease: [0.16, 1, 0.3, 1] },
    },
  };
};

export function PageReveal({ children, className = "", itemClassName = "" }: PageRevealProps) {
  return (
    <main className={className}>
      {Children.map(children, (child, index) => {
        if (!isValidElement<{ className?: string }>(child)) return child;
        return (
          <motion.div
            className={itemClassName}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.18, margin: "-70px" }}
            variants={itemVariants(index % 2 === 0 ? "up" : "right")}
          >
            {child}
          </motion.div>
        );
      })}
    </main>
  );
}

export function RevealItem({ children, className = "", direction = "up" }: RevealItemProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.16, margin: "-60px" }}
      variants={itemVariants(direction)}
    >
      {children}
    </motion.div>
  );
}
