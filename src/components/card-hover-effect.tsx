"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import TypographyH3 from "./ui/TypographyH3";

export const CardHoverEffect = ({ active }: { active: boolean }) => {
  return (
    <AnimatePresence>
      {active && (
        <motion.span
          className="absolute inset-0 -left-4 block h-full w-full-plus rounded-lg bg-card-foreground"
          layoutId="hoverBackground"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.15 },
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.15, delay: 0.2 },
          }}
        />
      )}
    </AnimatePresence>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative -left-4 z-20 w-full-plus items-start overflow-hidden rounded-lg px-2 py-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <TypographyH3 className={className}>{children}</TypographyH3>;
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <p className={className}>{children}</p>;
};
