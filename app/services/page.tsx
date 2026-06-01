import Image from "next/image";
import GlowButton from "@/components/GlowButton";
import GlassCard from "@/components/GlassCard";

export default function Services() {
  return (
    <div className="pt-24 pb-0">
      {/* Hero Section */}
      <header className="px-6 md:px-16 max-w-7xl mx-auto mb-24 relative pt-12">
        <div className="glow-blob -top-24 -left-24"></div>
        <div className="max-w-3xl scroll-reveal">
          <h1 className="text-5xl md:text-[72px] font-bold mb-6 leading-tight tracking-tighter">
            Engineering <span className="text-gradient">Digital Dominance</span>
          </h1>
          <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            We architect elite software solutions for ambitious enterprises. From deep-tech AI integration to seamless cloud orchestration, our services are the bedrock of high-growth digital infrastructure.
          </p>
        </div>
      </header>

      {/* Services Bento/Stack */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto space-y-12 pb-12">
        {/* Custom Software */}
        <GlassCard className="rounded-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center overflow-hidden relative scroll-reveal">
          <div className="space-y-6 relative z-10">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>
              </div>
              <span className="text-sm font-semibold text-primary tracking-widest uppercase">Development</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Custom Software Engineering</h2>
            <p className="text-on-surface-variant text-base leading-relaxed">We build high-performance, scalable platforms tailored to your unique operational logic. Our engineering team prioritizes clean architecture and long-term maintainability.</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary mt-0.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                <span className="text-on-surface">Enterprise-grade Web & Mobile Applications</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary mt-0.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                <span className="text-on-surface">Legacy System Modernization & Microservices</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary mt-0.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                <span className="text-on-surface">API First Architecture & Secure Integrations</span>
              </li>
            </ul>
            <a href="/contact" className="group mt-8 flex items-center gap-2 text-primary font-bold text-base inline-block">
              Discuss Your Needs
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </div>
          <div className="relative group rounded-xl overflow-hidden h-[400px]">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 blur-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuByYEZdZ_cxxBx3UoBWANksiNW5iXgAG_PbZlST7GNnQBjFbBJKuWkJ4kphwcP81EGDXSAiONP6ShYTuBWO6jATXunYHeZ5_HAbQA3lEFcpKfDJRkPXQMMkMftAeUYgbJzv0VaUc9q3cR1vtysYmN_kopHhQlTZh18pnS_NzaPahssAo0neZo_Gf9w-L9O81pCYesx00HgVf6zo_VyoYJKbjwwRZW5caSdWLNyy40rAOklGk_fp1nuqt8yVSYlkGmsBVSxOuvYJlA" 
              alt="Custom Software Engineering" 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-lg shadow-2xl relative z-10 border border-white/5 transition-transform duration-700 group-hover:scale-105" 
            />
          </div>
        </GlassCard>

        {/* UI/UX Design */}
        <GlassCard className="rounded-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center overflow-hidden relative scroll-reveal">
          <div className="order-2 md:order-1 relative group rounded-xl overflow-hidden h-[400px]">
            <div className="absolute -inset-4 bg-gradient-to-r from-tertiary/20 to-primary/20 blur-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlDrmnEqoim7nzkGimLHP1wNcF0JqSx5V10kEAH63ttY_wWaLJZxC5RZIDM2Yd4TGbHs_m-YN9XPCcfxqa_E_yRSRckGsjm5969gwdyBzwhwomHUNSXrkfya4C7F_xF_EuJJprbWAYiZQKZn2JaRdhRoC15xfcbX7fJVnLdK-k5ZP7yjH9xVC5_ksG2rrIcHtwROVnVfc2lVk9Ocao0Py0TrF2ndKvgywEiUB9LDX_y63ybVFKxOMX_Cf7mUfLo9QzPFGY_2vQCA" 
              alt="UI/UX Design Systems" 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-lg shadow-2xl relative z-10 border border-white/5 transition-transform duration-700 group-hover:scale-105" 
            />
          </div>
          <div className="space-y-6 order-1 md:order-2 relative z-10">
            <div className="flex items-center gap-3">
              <div className="bg-tertiary/10 p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tertiary"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <span className="text-sm font-semibold text-tertiary tracking-widest uppercase">Experience</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">UI/UX Design Systems</h2>
            <p className="text-on-surface-variant text-base leading-relaxed">We create immersive digital experiences that convert. Our design process combines behavioral psychology with high-end aesthetics to build interfaces that users love.</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tertiary mt-0.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                <span className="text-on-surface">Atomic Design Systems for Multi-platform Scale</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tertiary mt-0.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                <span className="text-on-surface">User Journey Mapping & Behavioral Research</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tertiary mt-0.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                <span className="text-on-surface">Interactive Prototyping & Usability Testing</span>
              </li>
            </ul>
            <a href="/contact" className="group mt-8 flex items-center gap-2 text-tertiary font-bold text-base inline-block">
              Discuss Your Needs
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </div>
        </GlassCard>

        {/* Cloud Strategy */}
        <GlassCard className="rounded-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center overflow-hidden relative scroll-reveal">
          <div className="space-y-6 relative z-10">
            <div className="flex items-center gap-3">
              <div className="bg-secondary/10 p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
              </div>
              <span className="text-sm font-semibold text-secondary tracking-widest uppercase">Infrastructure</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Cloud Strategy & DevOps</h2>
            <p className="text-on-surface-variant text-base leading-relaxed">Resilient, secure, and auto-scaling infrastructure designed for zero-downtime performance. We optimize your cloud spend while maximizing speed-to-market.</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary mt-0.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                <span className="text-on-surface">AWS, Azure & Google Cloud Optimization</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary mt-0.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                <span className="text-on-surface">Kubernetes Orchestration & Containerization</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary mt-0.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                <span className="text-on-surface">Automated CI/CD Pipelines & Security Audits</span>
              </li>
            </ul>
            <a href="/contact" className="group mt-8 flex items-center gap-2 text-secondary font-bold text-base inline-block">
              Discuss Your Needs
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </div>
          <div className="relative group rounded-xl overflow-hidden h-[400px]">
            <div className="absolute -inset-4 bg-gradient-to-r from-secondary-container/20 to-primary/20 blur-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJ-vhhBrL5e8NVyjSfG9BGb0-mkazGx2L2_iegIQH_wpMo5g3CPxOFwKDVYd1ru9DnIUArLzWib_9309_B_fzuuPtWuRmBm5IcR2WPk6YHNSwUjQPyCD1LCldN9d44eUjArhi-ezeXCKKDIXr42XZ5wNTmrhG35HEpDTAwjL3yRyYlYB0Y5QaOtWpr_XP10tCyZb3VrEYdJYY9Kwj-iBJSlMkO4n95JCI1p0QHgEmWbLmzVObEuVZ2uXSlCDdI5H_HsOz8j9wt-g" 
              alt="Cloud Strategy & DevOps" 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-lg shadow-2xl relative z-10 border border-white/5 transition-transform duration-700 group-hover:scale-105" 
            />
          </div>
        </GlassCard>

        {/* AI/ML Development */}
        <GlassCard className="rounded-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center overflow-hidden relative scroll-reveal">
          <div className="order-2 md:order-1 relative group rounded-xl overflow-hidden h-[400px]">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-container/20 to-tertiary/20 blur-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA5XBkOSrILKMOc-s23dCK24wVCyYDlLeqmNxlEWNLV5E7-oXwgPE2EmWhwfY0x5MNycpRzwmEx2Y8iNylJ8znc-tO3f4Z-3cm_p4UyNGBMUMPGEj1yn_tXmxyMlD8xzNOVOgSgxuhiv8ykC3qhXmXyxShXc5CNLzOw-jD-htOtVWN_v3bphTr4mw_SIeOOotmODRmBI-Vx-grUEdO3GwOqE2WqHKR6poCw-nhb5QVEPd2Re-nO70Hz-c0fa4AplaprlLvNEi0rg" 
              alt="AI & Machine Learning" 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-lg shadow-2xl relative z-10 border border-white/5 transition-transform duration-700 group-hover:scale-105" 
            />
          </div>
          <div className="space-y-6 order-1 md:order-2 relative z-10">
            <div className="flex items-center gap-3">
              <div className="bg-primary-container/20 p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-fixed"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <span className="text-sm font-semibold text-primary-fixed tracking-widest uppercase">Intelligence</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">AI & Machine Learning</h2>
            <p className="text-on-surface-variant text-base leading-relaxed">Transform data into a strategic asset. We deploy custom LLMs, predictive models, and computer vision systems that drive measurable business intelligence.</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-container mt-0.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                <span className="text-on-surface">Generative AI & LLM Fine-tuning</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-container mt-0.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                <span className="text-on-surface">Predictive Analytics & Data Science Modeling</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-container mt-0.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                <span className="text-on-surface">Computer Vision & Natural Language Processing</span>
              </li>
            </ul>
            <a href="/contact" className="group mt-8 flex items-center gap-2 text-primary-fixed font-bold text-base inline-block">
              Discuss Your Needs
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </div>
        </GlassCard>
      </section>

      {/* CTA Section */}
      <section className="mt-20 mb-32 px-6 md:px-16 max-w-7xl mx-auto text-center">
        <GlassCard className="rounded-2xl py-16 px-8 relative overflow-hidden scroll-reveal">
          <div className="glow-blob top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-40"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-[48px] font-bold mb-6 tracking-tight">Ready to upgrade your stack?</h2>
            <p className="text-on-surface-variant max-w-xl mx-auto mb-10 text-lg leading-relaxed">
              Join the vanguard of tech-driven companies partnering with Neticx to build the future of software.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlowButton className="rounded-full shadow-[0_0_20px_rgba(192,193,255,0.3)]">
                Schedule a Strategy Session
              </GlowButton>
              <GlowButton variant="ghost" className="rounded-full">
                View Case Studies
              </GlowButton>
            </div>
          </div>
        </GlassCard>
      </section>
    </div>
  );
}
