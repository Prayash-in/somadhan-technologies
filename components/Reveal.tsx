"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const inView = useInView(ref, { once: true, amount: 0, initial: true });

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const show = !mounted || inView;

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={show ? { opacity: 1 } : { opacity: 0 }}
      transition={
        show
          ? { duration: 0.35, ease: "easeOut", delay: Math.min(delay, 0.15) }
          : { duration: 0 }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}