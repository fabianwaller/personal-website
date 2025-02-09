import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Card as BaseCard } from "./ui/card";

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
    <BaseCard
      className={cn(
        "border-none shadow-none hover:bg-transparent",
        "relative -left-4 z-20 w-full-plus bg-transparent",
        className,
      )}
    >
      {children}
    </BaseCard>
  );
};
