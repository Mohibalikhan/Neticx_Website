"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ClientEffects() {
  const pathname = usePathname();

  useEffect(() => {
    // Function to reveal elements that are in viewport
    const revealVisibleElements = () => {
      document.querySelectorAll(".scroll-reveal").forEach(el => {
        const rect = el.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isInViewport) {
          el.classList.add("reveal-visible");
        }
      });
    };

    // Scroll Reveal Implementation with Intersection Observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Setup observer for all scroll-reveal elements
    const setupObserver = () => {
      document.querySelectorAll(".scroll-reveal").forEach(el => {
        if (!el.classList.contains("reveal-visible")) {
          observer.observe(el);
        }
      });
    };

    // Reveal elements immediately on mount and after small delay
    revealVisibleElements();
    setTimeout(() => {
      revealVisibleElements();
      setupObserver();
    }, 50);

    // Listen to scroll events for additional reveals
    const handleScroll = () => {
      document.querySelectorAll(".scroll-reveal:not(.reveal-visible)").forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add("reveal-visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return null;
}
