import { cn } from "@/lib/utils";

export function TypographyH2({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn([
        "mb-2 scroll-m-20 text-3xl font-semibold text-title-normal lg:text-4xl",
        className,
      ])}
    >
      {children}
    </h2>
  );
}

export default TypographyH2;
