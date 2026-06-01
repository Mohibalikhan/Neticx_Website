import { ButtonHTMLAttributes, ReactNode } from "react";

interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "ghost" | "glass";
  className?: string;
}

export default function GlowButton({ 
  children, 
  variant = "primary", 
  className = "", 
  ...props 
}: GlowButtonProps) {
  const baseClasses = "glow-button px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all duration-300";
  
  const variants = {
    primary: "bg-primary text-on-primary",
    ghost: "border border-white/20 text-on-surface hover:bg-white/5",
    glass: "glass-card inner-glow-border text-on-surface hover:border-primary"
  };

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
