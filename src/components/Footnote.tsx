import { forwardRef } from "react";

import { cn } from "../utils";

const Footnote = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ children, className, ...props }, ref) => (
  <p
    className={cn("p-1 text-xs text-footnote-textColor", className)}
    ref={ref}
    {...props}
  >
    {children}
  </p>
));

Footnote.displayName = "Footnote";

export default Footnote;
