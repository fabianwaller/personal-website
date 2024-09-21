import { cn } from "@/lib/utils";

export function TypographyH2({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={cn([
        "mb-1 scroll-m-20 text-xl font-semibold text-title-normal lg:text-2xl",
        className,
      ])}
    >
      {children}
    </h3>
  );
}

export default TypographyH2;
