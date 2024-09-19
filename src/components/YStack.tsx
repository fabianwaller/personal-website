import { cn } from "@/lib/utils";

type YStackProps = {
  children: React.ReactNode;
  className?: string;
};

const YStack: React.FC<YStackProps> = ({ children, className }) => (
  <div
    className={cn([
      "flex flex-row flex-wrap items-center justify-start gap-x-4 gap-y-3",
      className,
    ])}
  >
    {children}
  </div>
);

export default YStack;
