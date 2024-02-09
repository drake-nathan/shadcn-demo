import { cn } from "@/utils";
import { forwardRef } from "react";

const Footnote = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ children, className, ...props }, ref) => (
  <p
    className={cn("text-footnote-textColor p-1 text-xs", className)}
    ref={ref}
    {...props}
  >
    {children}
  </p>
));

Footnote.displayName = "Footnote";

export default Footnote;
