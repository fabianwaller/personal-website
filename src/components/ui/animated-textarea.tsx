import * as React from "react";
import { cn } from "@/lib/utils";
import { Textarea as BaseTextArea } from "./textarea";
import AnimatedRadial from "./animated-radial";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <AnimatedRadial>
        <BaseTextArea className={cn(className)} ref={ref} {...props} />
      </AnimatedRadial>
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
