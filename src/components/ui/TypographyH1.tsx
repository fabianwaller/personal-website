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
        "scroll-m-20 text-4xl font-semibold text-title-normal lg:text-5xl",
        className,
      ])}
    >
      {children}
    </h1>
  );
}

export default TypographyH1;
