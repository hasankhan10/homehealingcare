"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface MotionWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function MotionWrapper({ children, className, delay = 0 }: MotionWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5, delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
