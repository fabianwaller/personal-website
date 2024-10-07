import { cn } from "@/lib/utils";

type VStackProps = {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
};

const VStack: React.FC<VStackProps> = ({ children, className, narrow }) => (
  <div
    className={cn([
      "flex flex-col items-center justify-center gap-4",
      narrow && "gap-2",
      className,
    ])}
  >
    {children}
  </div>
);

export default VStack;
