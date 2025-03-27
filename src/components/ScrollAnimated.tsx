"use client";

import * as React from "react";
import { HTMLMotionProps, motion } from "framer-motion";

const ScrollAnimated = React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  ({ ...props }, ref) => (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      {...props}
    />
  ),
);
ScrollAnimated.displayName = "ScrollAnimated";

export default ScrollAnimated;
