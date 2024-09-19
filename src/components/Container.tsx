import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  fullScreen?: boolean;
  center?: boolean;
};

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  fullScreen,
  center,
}) => {
  return (
    <div
      className={cn([
        "relative mr-auto ml-auto container max-w-custom w-full",
        center ? "flex flex-col items-center justify-center" : "",
        fullScreen ? "h-page-minus-header" : "",
        className,
        "px-4",
      ])}
    >
      {children}
    </div>
  );
};

export default Container;
