"use client";

import { ReactNode, useRef } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  withGlow?: boolean;
}

export default function GlassCard({ children, className = "", withGlow = true }: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!withGlow || !cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Only apply gradient if inside the card
    if (x > 0 && x < rect.width && y > 0 && y < rect.height) {
      cardRef.current.style.backgroundImage = `radial-gradient(circle at ${x}px ${y}px, rgba(192, 193, 255, 0.05) 0%, transparent 60%)`;
    }
  };

  const handleMouseLeave = () => {
    if (!withGlow || !cardRef.current) return;
    cardRef.current.style.backgroundImage = 'none';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`glass-card inner-glow-border ${className}`}
    >
      {children}
    </div>
  );
}
