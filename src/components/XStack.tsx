import { cn } from "@/lib/utils";

type XStackProps = {
  children: React.ReactNode;
  className?: string;
};

const XStack: React.FC<XStackProps> = ({ children, className }) => (
  <div
    className={cn([
      "flex flex-col items-center justify-center gap-4",
      className,
    ])}
  >
    {children}
  </div>
);

export default XStack;
