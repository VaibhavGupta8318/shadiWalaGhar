import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "solid" | "outline" | "dark";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  solid:
    "bg-gold text-maroon-dark shadow-lg shadow-black/20 hover:scale-105",
  outline:
    "border border-gold-light/70 text-cream hover:bg-gold-light/10",
  dark:
    "bg-maroon text-cream shadow-lg shadow-maroon/20 hover:scale-105",
};

export function Button({
  variant = "solid",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`rounded-full px-8 py-3 font-semibold transition-all ${VARIANT_CLASSES[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
