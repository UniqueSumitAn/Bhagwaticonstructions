"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/cn";

type MediaSlotProps = {
  src?: string;
  alt?: string;
  aspect?: string;
  className?: string;
  parallax?: boolean;
  label?: string;
  priority?: boolean;
  rounded?: boolean;
};

/**
 * Drop-in image slot. Pass `src` (svg | jpg | webp | png).
 * Falls back to a styled gradient placeholder when src is missing.
 * Replace `src` per-slot with your real asset later.
 */
export default function MediaSlot({
  src,
  alt = "",
  aspect = "aspect-[4/5]",
  className,
  parallax = false,
  label,
  priority = false,
  rounded = false,
}: MediaSlotProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], parallax ? ["-8%", "8%"] : ["0%", "0%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], parallax ? [1.08, 1.02, 1.08] : [1, 1, 1]);

  const isSvg = !!src && /\.svg(\?|$)/i.test(src);

  return (
    <div
      ref={ref}
      className={cn(
        "relative overflow-hidden bg-sand",
        aspect,
        rounded && "rounded-md",
        className,
      )}
    >
      {src ? (
        <motion.div style={{ y, scale }} className="absolute inset-0">
          {isSvg ? (
            // SVGs are vector — skip next/image optimization, use plain img
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={src}
              alt={alt}
              loading={priority ? "eager" : "lazy"}
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover"
              priority={priority}
            />
          )}
        </motion.div>
      ) : (
        <>
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-br from-[#e0d8c8] via-[#ebe5da] to-[#d6cebd]"
          />
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.18] mix-blend-multiply"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, rgba(60,50,40,0.08) 0 1px, transparent 1px 14px)",
            }}
          />
          <span className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.2em] text-muted">
            {label ?? "Image"}
          </span>
        </>
      )}
    </div>
  );
}
