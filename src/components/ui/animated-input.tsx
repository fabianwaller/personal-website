import * as React from "react";
import { cn } from "@/lib/utils";
import { Input as BaseInput } from "./input";
import AnimatedRadial from "./animated-radial";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <AnimatedRadial>
        <BaseInput type={type} className={cn(className)} ref={ref} {...props} />
      </AnimatedRadial>
    );
  },
);
Input.displayName = "Input";

export { Input };
