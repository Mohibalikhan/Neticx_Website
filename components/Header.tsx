"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import GlowButton from "./GlowButton";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 border-b border-white/10 shadow-sm transition-colors duration-300 ${
        isScrolled ? "bg-[#131313]/85 backdrop-blur-xl" : "bg-[#131313]/30 backdrop-blur-xl"
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-16 py-4 max-w-7xl mx-auto">
        <Link href="/" className="font-bold text-2xl tracking-tight text-on-surface hover:opacity-80 transition-opacity">
          Neticx
        </Link>
        <div className="hidden md:flex items-center gap-10">
          <Link
            href="/"
            className={`font-medium transition-colors ${
              pathname === "/" ? "text-primary border-b-2 border-primary pb-1" : "text-on-surface-variant hover:text-primary"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`font-medium transition-colors ${
              pathname === "/about" ? "text-primary border-b-2 border-primary pb-1" : "text-on-surface-variant hover:text-primary"
            }`}
          >
            About
          </Link>
          <Link
            href="/services"
            className={`font-medium transition-colors ${
              pathname === "/services" ? "text-primary border-b-2 border-primary pb-1" : "text-on-surface-variant hover:text-primary"
            }`}
          >
            Services
          </Link>
          <Link
            href="/contact"
            className={`font-medium transition-colors ${
              pathname === "/contact" ? "text-primary border-b-2 border-primary pb-1" : "text-on-surface-variant hover:text-primary"
            }`}
          >
            Contact
          </Link>
        </div>
        <Link href="/contact" className="hidden sm:block">
          <button className="glow-button bg-primary-container text-on-primary-container px-6 py-2.5 rounded-xl font-medium transition-all duration-300">
            Start a Project
          </button>
        </Link>
        
        {/* Mobile menu button (visual only for now) */}
        <button className="md:hidden text-on-surface p-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
      </div>
    </nav>
  );
}
