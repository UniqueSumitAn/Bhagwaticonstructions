"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  once?: boolean;
  className?: string;
  as?: "div" | "section" | "span" | "li" | "p" | "h1" | "h2" | "h3";
} & Omit<HTMLMotionProps<"div">, "children" | "initial" | "whileInView" | "viewport" | "transition">;

export function Reveal({
  children,
  delay = 0,
  y = 32,
  duration = 0.9,
  once = true,
  className,
  as = "div",
  ...rest
}: RevealProps) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

type RevealTextProps = {
  text: string;
  delay?: number;
  className?: string;
  stagger?: number;
};

export function RevealWords({
  text,
  delay = 0,
  className,
  stagger = 0.06,
}: RevealTextProps) {
  const words = text.split(" ");
  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            initial={{ y: "110%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.9,
              delay: delay + i * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block"
            aria-hidden
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
