import { cva, VariantProps } from "class-variance-authority";

const button = cva("font-semibold shadow-sm ", {
  variants: {
    intent: {
      primary:
        "bg-primary text-white hover:bg-btn-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600",
      secondary:
        "bg-transparent text-primary ring-1 ring-inset ring-primary hover:bg-btn-hover hover:text-white",
      soft: "bg-[#ECEEF6] text-black  hover:bg-btn-hover hover:text-white",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm px-3 py-1.5",
      md: "text-md px-4 py-2",
      lg: "text-md",
      xl: "text-md",
    },
    rounded: {
      normal: "",
      full: "rounded-full",
    },
  },

  compoundVariants: [
    { size: ["xs", "sm"], rounded: "normal", className: "rounded" },
    { size: ["md", "lg", "xl"], rounded: "normal", className: "rounded-md" },
  ],

  defaultVariants: {
    intent: "primary",
    size: "md",
    rounded: "normal",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  intent,
  rounded,
  size,
  className,
  ...props
}) => (
  <button className={button({ intent, rounded, size, className })} {...props} />
);

//  tailwind MErge
