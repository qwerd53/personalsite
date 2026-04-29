"use client";

import { useEffect, useRef, useState } from "react";

interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

export default function RevealSection({ children, className = "", delay = 0, threshold = 0.12 }: RevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" },
    );

    // Check initial intersection immediately
    const initialCheck = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
        initialCheck.unobserve(node);
        if (!entry.isIntersecting) {
          observer.observe(node);
        }
      },
      { threshold: 0, rootMargin: "0px 0px -40px 0px" },
    );

    initialCheck.observe(node);
    return () => {
      observer.disconnect();
      initialCheck.disconnect();
    };
  }, [threshold]);

  // Default: no animation class (visible, works without JS)
  const animClass = visible === null ? "" : visible ? "revealed" : "unrevealed";

  return (
    <div
      ref={ref}
      className={`${className} ${animClass}`}
      style={visible === false ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
