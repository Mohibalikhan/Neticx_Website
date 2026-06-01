"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import GlassCard from "@/components/GlassCard";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus("success");
      
      // Reset after success
      setTimeout(() => {
        setFormStatus("idle");
        (e.target as HTMLFormElement).reset();
      }, 3000);
    }, 1500);
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-16 max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side: Information */}
        <div className="lg:col-span-5 flex flex-col justify-center scroll-reveal">
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold mb-6 leading-tight tracking-tighter">
            Let's build <span className="text-primary">something</span> remarkable.
          </h1>
          <p className="text-lg text-on-surface-variant mb-12 max-w-md leading-relaxed">
            We partner with high-growth ventures to engineer high-end software solutions. Reach out and let's discuss your next milestone.
          </p>
          
          <div className="space-y-8">
            {/* Contact Item */}
            <div className="flex items-start gap-4 group">
              <GlassCard className="w-12 h-12 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </GlassCard>
              <div>
                <p className="text-xs uppercase tracking-widest font-semibold text-on-surface-variant mb-1">Email Us</p>
                <p className="text-xl font-bold">hello@neticx.studio</p>
              </div>
            </div>
            
            {/* Contact Item */}
            <div className="flex items-start gap-4 group">
              <GlassCard className="w-12 h-12 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </GlassCard>
              <div>
                <p className="text-xs uppercase tracking-widest font-semibold text-on-surface-variant mb-1">Visit Us</p>
                <p className="text-xl font-bold">124 Design District, London, UK</p>
              </div>
            </div>
            
            {/* Social Icons */}
            <div className="pt-8 border-t border-white/5 flex gap-6">
              <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
              <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="lg:col-span-7 scroll-reveal delay-100">
          <GlassCard className="p-8 md:p-12 rounded-3xl relative overflow-hidden border-t-white/20 border-l-white/20">
            {/* Internal Halo Effect */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none"></div>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-on-surface ml-1">Full Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="John Doe"
                    className="bg-surface-dim/50 border border-white/10 rounded-xl px-4 py-3 text-base text-on-surface focus:border-primary focus:ring-1 focus:ring-primary input-glow transition-all" 
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-on-surface ml-1">Email Address</label>
                  <input 
                    type="email" 
                    required
                    placeholder="john@company.com"
                    className="bg-surface-dim/50 border border-white/10 rounded-xl px-4 py-3 text-base text-on-surface focus:border-primary focus:ring-1 focus:ring-primary input-glow transition-all" 
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-on-surface ml-1">Project Type</label>
                <select className="bg-surface-dim/50 border border-white/10 rounded-xl px-4 py-3 text-base text-on-surface focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none cursor-pointer">
                  <option>Web Platform</option>
                  <option>Mobile Application</option>
                  <option>Blockchain Solutions</option>
                  <option>UI/UX Design Audit</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-on-surface ml-1">Your Message</label>
                <textarea 
                  rows={5}
                  required
                  placeholder="Tell us about your project vision..."
                  className="bg-surface-dim/50 border border-white/10 rounded-xl px-4 py-3 text-base text-on-surface focus:border-primary focus:ring-1 focus:ring-primary input-glow transition-all resize-none" 
                ></textarea>
              </div>
              
              <div className="pt-4">
                <button 
                  type="submit"
                  disabled={formStatus !== "idle"}
                  className={`group relative w-full py-4 rounded-xl text-xl font-bold overflow-hidden transition-all duration-300 ${
                    formStatus === "success" 
                      ? "bg-tertiary-container text-on-tertiary-container" 
                      : "bg-primary text-on-primary-container hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_20px_rgba(192,193,255,0.3)]"
                  } ${formStatus === "loading" ? "opacity-80" : ""}`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {formStatus === "idle" && (
                      <>
                        Send Message
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="translate-x-0 group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                      </>
                    )}
                    {formStatus === "loading" && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-spin"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
                    )}
                    {formStatus === "success" && (
                      <>
                        Sent Successfully! 
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                      </>
                    )}
                  </span>
                  {/* Glow Bloom Effect */}
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                </button>
              </div>
            </form>
          </GlassCard>

          {/* Trusted By Snippet */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
            <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuArYCE4dmlnoFviYfaMRkyVCnATapiQ1pIk0JYd1cHVx92o3nTUUW6oYGIEq4q1L1qX09mJv6RByXSfFq6l9ODQFXA9NbzVy2pBFCZ6cEfv-l0kzjMmC6-U3oA5Fp0AprOlSnxJl0eGXHNMD7VVdEduzhoIxLuvHkz4JKik8jr4Og3UoIQlBIkR99_xKQx6B6sQEk0mXW94oe81s5RvaTrk0uwMBRZFPAJpmh9xFpITdN9cFbnXIhX7owfctiAv7L1-OlrIZBlTZQ" alt="Partner 1" width={100} height={24} className="h-6 w-auto" style={{height: 'auto'}} />
            <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8qyqSLE98eQ_OUyG8pUmYBWTciGFJ7tT0eTvQ49rwOP_hs3snxzY3isHY2fkjKxK4i0FJkOjXLiO7SKr7guu53h6SEdDCSAsgZauNw6DN-8mSE0CSt-5pfHYkZA9Agbpq_KGKx6BIdpPDxx46yZfnwWNVU-48LvkYflDfNolk53Mo7SwNNBMnTt0TVVU7R6HLSl_ZRXzOm2LXfa42tfNOLY7Q60eRNGAXCXbsIcGGSx7MrDxCDq5gCS970_Ag-39ktjjc4O39Mg" alt="Partner 2" width={100} height={24} className="h-6 w-auto" style={{height: 'auto'}} />
            <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkotMYROKuOnhLt1LAP50Wd5o3Ty1UXcyGudK06flMAccJUoSVMBPjYoyBJr-b18Aa0MyyJS8J3reQhkIqKxgTHrCFqJRiwwxl68K4CqNiWiZCCSjcEK4No8-f_fzbu7assVcNUeQurA7JPunknN7Tv7sN7ma_ch8ft4O0PoBtvcYmmEQNPm5zZ1BbI659hNMEFQuwCVDQCAvAj9gBmvj39s_JAlpLBNqWHKQG7FP2tL4RW8NFaNpugHxab7NsLHSr_AESBDrkzA" alt="Partner 3" width={100} height={24} className="h-6 w-auto" style={{height: 'auto'}} />
          </div>
        </div>
      </div>
    </div>
  );
}
