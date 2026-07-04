"use client";

import { motion, type MotionProps, type Variants } from "framer-motion";
import type { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

type RevealProps = PropsWithChildren<
  {
    className?: string;
    delay?: number;
    y?: number;
  } & MotionProps
>;

export function Reveal({ children, className, delay = 0, y = 28, ...props }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.24, margin: "-80px" }}
      transition={{ duration: 0.85, ease: smoothEase, delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.08,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: smoothEase },
  },
};
