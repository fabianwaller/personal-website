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
        "container relative ml-auto mr-auto w-screen max-w-custom px-8 md:px-0",
        center ? "flex flex-col items-center justify-center" : "",
        fullScreen ? "h-page-minus-header" : "",
        className,
      ])}
    >
      {children}
    </div>
  );
};

export default Container;
