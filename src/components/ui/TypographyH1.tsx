import { cn } from "@/lib/utils";

export function TypographyH1({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={cn([
        "scroll-m-20 text-4xl font-semibold lg:text-5xl text-title-normal",
        className,
      ])}
    >
      {children}
    </h1>
  );
}

export default TypographyH1;
