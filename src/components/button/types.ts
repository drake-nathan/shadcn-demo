const variants = {
  alt: "alt",
  borderless: "borderless",
  default: "default",
  outline: "outline",
  primary: "primary",
} as const;
export const variantValues = Object.values(variants);
export type Variant = (typeof variantValues)[number];

const sizes = {
  large: "large",
  small: "small",
  standard: "standard",
} as const;
export const sizeValues = Object.values(sizes);
export type Size = (typeof sizeValues)[number];
