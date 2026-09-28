"use client";

import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type HTMLAttributes,
} from "react";
import { cn } from "@/lib/cn";

export interface RevealProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  delay?: number;
  threshold?: number;
}

export default function Reveal({
  as: Tag = "div",
  delay = 0,
  threshold = 0.12,
  className,
  style,
  children,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Tag
      ref={ref}
      className={cn(visible ? "animate-fade-slide-in" : "reveal-hidden", className)}
      style={{
        ...(visible && delay ? { animationDelay: `${delay}ms` } : null),
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
