import Image from "next/image";
import GlowButton from "@/components/GlowButton";
import GlassCard from "@/components/GlassCard";

export default function Home() {
  return (
    <div className="pt-24 pb-0">
      {/* Hero Section */}
      <section className="relative pt-12 pb-32 overflow-hidden px-6 md:px-16">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="hero-glow absolute -top-48 -left-48 w-96 h-96 opacity-50 pointer-events-none rounded-full"></div>
          
          <div className="max-w-3xl scroll-reveal">
            <span className="inline-block mb-6 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wider">
              PREMIUM DIGITAL SOLUTIONS
            </span>
            <h1 className="text-5xl md:text-[72px] font-bold leading-tight mb-8 tracking-tighter">
              Engineering <span className="text-primary italic">Tomorrow's</span> Digital Excellence
            </h1>
            <p className="text-lg text-on-surface-variant mb-12 max-w-2xl leading-relaxed">
              Neticx is a boutique software house dedicated to high-growth ventures. We combine technical precision with aesthetic sophistication to deliver digital craftsmanship that scales.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <GlowButton>
                Start Your Project
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </GlowButton>
              <GlowButton variant="glass">
                View Case Studies
              </GlowButton>
            </div>
          </div>
        </div>

        {/* Hero Image/Graphic Placeholder */}
        <div className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-[600px] pointer-events-none scroll-reveal delay-200">
          <div className="glass-card inner-glow-border w-full h-full rounded-l-[40px] opacity-40 rotate-3 overflow-hidden relative">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0qsN_tqRpNpyRD3UIN2cAk_vqNDOEw6rD2nSDNcNubI31Xl7zmVSvKwIfo5X8nrOJJpwogWWK2HUE43fDpEAGXGzGBN7RoejQ_hm_aejBMOB8XC1rUQuLyRLwax6QDB5-8A23AtNGfIbIsanny_NLPNKVglPShwMtcv86yiBU6DyhCPL84DdraHRaR9ctrIfngixF_dQMtOI3GI-QMi3mcd09lAOV3llRaY-pKXiPmaCkbiT721j68HE3gaYqQkspeP6sCdT0oQ"
              alt="High-tech server rack illuminated by subtle blue and purple LED lights"
              fill
              sizes="(max-width: 1024px) 0px, 33vw"
              className="object-cover grayscale opacity-50 mix-blend-overlay"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-l from-background to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-6 md:px-16 bg-surface-container-lowest/50 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 scroll-reveal">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Our Core Expertise</h2>
              <p className="text-lg text-on-surface-variant">Strategic digital interventions designed for impact and endurance.</p>
            </div>
            <a href="/services" className="text-primary text-sm font-medium flex items-center gap-2 hover:gap-4 transition-all">
              View all services 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Web Apps */}
            <GlassCard className="p-10 rounded-3xl flex flex-col h-full scroll-reveal">
              <div className="w-16 h-16 rounded-2xl bg-primary-container/20 flex items-center justify-center mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Web Apps</h3>
              <p className="text-base text-on-surface-variant mb-8 flex-grow">
                Bespoke web ecosystems built with React, Next.js, and modern architectures for unmatched speed and SEO performance.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-surface-container-high px-3 py-1 rounded-full text-xs font-semibold text-primary">React</span>
                <span className="bg-surface-container-high px-3 py-1 rounded-full text-xs font-semibold text-primary">Node.js</span>
              </div>
            </GlassCard>

            {/* Cloud Solutions */}
            <GlassCard className="p-10 rounded-3xl flex flex-col h-full scroll-reveal delay-100">
              <div className="w-16 h-16 rounded-2xl bg-secondary-container/20 flex items-center justify-center mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Cloud Solutions</h3>
              <p className="text-base text-on-surface-variant mb-8 flex-grow">
                Scalable infrastructure using AWS and Azure. We architect for zero-downtime and maximum security in high-traffic environments.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-surface-container-high px-3 py-1 rounded-full text-xs font-semibold text-secondary">AWS</span>
                <span className="bg-surface-container-high px-3 py-1 rounded-full text-xs font-semibold text-secondary">Docker</span>
              </div>
            </GlassCard>

            {/* AI Integration */}
            <GlassCard className="p-10 rounded-3xl flex flex-col h-full scroll-reveal delay-200">
              <div className="w-16 h-16 rounded-2xl bg-tertiary-container/20 flex items-center justify-center mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-tertiary"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">AI Integration</h3>
              <p className="text-base text-on-surface-variant mb-8 flex-grow">
                Leveraging LLMs and machine learning to automate complex workflows and provide predictive insights for your business.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-surface-container-high px-3 py-1 rounded-full text-xs font-semibold text-tertiary">Python</span>
                <span className="bg-surface-container-high px-3 py-1 rounded-full text-xs font-semibold text-tertiary">PyTorch</span>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-center mb-20 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Why Partners Choose Neticx</h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Innovation */}
          <div className="flex flex-col items-center text-center p-6 group scroll-reveal">
            <div className="mb-6 transform transition-transform group-hover:scale-110 duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
            </div>
            <h4 className="text-2xl font-semibold mb-3">Innovation First</h4>
            <p className="text-base text-on-surface-variant">We don't just follow trends; we set them using cutting-edge tech stacks and experimental methodologies.</p>
          </div>

          {/* Quality */}
          <div className="flex flex-col items-center text-center p-6 group scroll-reveal delay-100">
            <div className="mb-6 transform transition-transform group-hover:scale-110 duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="m9 12 2 2 4-4"/><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/></svg>
            </div>
            <h4 className="text-2xl font-semibold mb-3">Technical Quality</h4>
            <p className="text-base text-on-surface-variant">Our code is clean, documented, and tested rigorously to ensure long-term maintainability.</p>
          </div>

          {/* Speed */}
          <div className="flex flex-col items-center text-center p-6 group scroll-reveal delay-200">
            <div className="mb-6 transform transition-transform group-hover:scale-110 duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            </div>
            <h4 className="text-2xl font-semibold mb-3">High Velocity</h4>
            <p className="text-base text-on-surface-variant">We deliver milestones with unmatched speed without sacrificing the architectural integrity of the product.</p>
          </div>

          {/* Design */}
          <div className="flex flex-col items-center text-center p-6 group scroll-reveal delay-300">
            <div className="mb-6 transform transition-transform group-hover:scale-110 duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
            </div>
            <h4 className="text-2xl font-semibold mb-3">Aesthetic Focus</h4>
            <p className="text-base text-on-surface-variant">Software should be beautiful. We prioritize UI/UX as highly as we do the backend performance.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto scroll-reveal">
          <div className="glass-card rounded-[40px] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-container/10 via-transparent to-secondary-container/10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Ready to Scale Your Vision?</h2>
              <p className="text-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
                Join the elite league of high-growth ventures partnering with Neticx to build the future. Our slots are limited to ensure focus.
              </p>
              <GlowButton className="mx-auto px-12 py-5 rounded-full text-xl font-bold">
                Let's Talk
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
              </GlowButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
