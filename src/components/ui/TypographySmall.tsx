import React from "react";

export function TypographySmall({ children }: { children: React.ReactNode }) {
  return <small className="text-sm font-medium leading-none">{children}</small>;
}
