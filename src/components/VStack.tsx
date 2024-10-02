import { cn } from "@/lib/utils";

type VStackProps = {
  children: React.ReactNode;
  className?: string;
};

const VStack: React.FC<VStackProps> = ({ children, className }) => (
  <div
    className={cn([
      "flex flex-col items-center justify-center gap-4",
      className,
    ])}
  >
    {children}
  </div>
);

export default VStack;
