import { cn } from "@/utils";
import { forwardRef } from "react";

const Label = forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ children, className, ...props }, ref) => (
  <label
    className={cn("p-1 text-sm font-semibold text-label-textColor", className)}
    ref={ref}
    {...props}
  >
    {children}
  </label>
));

Label.displayName = "Label";

export default Label;
