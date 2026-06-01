import Image from "next/image";
import GlowButton from "@/components/GlowButton";
import GlassCard from "@/components/GlassCard";

export default function About() {
  return (
    <div className="pt-24 pb-0">
      {/* Hero / Vision Section */}
      <section className="min-h-[80vh] flex flex-col justify-center px-6 md:px-16 max-w-7xl mx-auto pt-12 pb-24 relative">
        <div className="glow-blob top-[-10%] left-[-10%]"></div>
        <div className="glow-blob top-[40%] right-[-10%] bg-secondary/10"></div>
        
        <div className="scroll-reveal max-w-4xl relative z-10">
          <span className="text-primary text-sm font-semibold tracking-widest mb-4 block uppercase">Our Vision</span>
          <h1 className="text-5xl md:text-[72px] font-bold mb-8 leading-tight tracking-tighter">
            Redefining the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">DNA of Digital</span> Products.
          </h1>
          <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Neticx was founded on a singular premise: that software should be as beautiful as it is functional. We build high-performance ecosystems for ventures that refuse to settle for the status quo.
          </p>
        </div>

        {/* Stats/Impact Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 scroll-reveal relative z-10">
          <GlassCard className="p-8 rounded-xl text-center">
            <div className="text-primary text-4xl md:text-5xl font-bold mb-2">120+</div>
            <div className="text-sm font-medium text-on-surface-variant">Projects Delivered</div>
          </GlassCard>
          <GlassCard className="p-8 rounded-xl text-center delay-100">
            <div className="text-primary text-4xl md:text-5xl font-bold mb-2">$500M+</div>
            <div className="text-sm font-medium text-on-surface-variant">Client Funding Raised</div>
          </GlassCard>
          <GlassCard className="p-8 rounded-xl text-center delay-200">
            <div className="text-primary text-4xl md:text-5xl font-bold mb-2">12</div>
            <div className="text-sm font-medium text-on-surface-variant">Design Awards</div>
          </GlassCard>
          <GlassCard className="p-8 rounded-xl text-center delay-300">
            <div className="text-primary text-4xl md:text-5xl font-bold mb-2">24/7</div>
            <div className="text-sm font-medium text-on-surface-variant">Technical Support</div>
          </GlassCard>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="mb-16 scroll-reveal text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Core Principles</h2>
          <p className="text-base text-on-surface-variant">The foundation of our digital craftsmanship.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard className="p-10 rounded-2xl scroll-reveal h-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary mb-6"><path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M11 3 8 9l4 13 4-13-3-6"/><path d="M2 9h20"/></svg>
            <h3 className="text-2xl font-semibold mb-4">Excellence</h3>
            <p className="text-base text-on-surface-variant">We don't just ship code; we engineer precision. Every pixel and every line is scrutinized for peak performance and aesthetic harmony.</p>
          </GlassCard>
          
          <GlassCard className="p-10 rounded-2xl scroll-reveal delay-100 h-full border-primary/30">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-secondary mb-6"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
            <h3 className="text-2xl font-semibold mb-4">Transparency</h3>
            <p className="text-base text-on-surface-variant">Radical honesty is our default state. We provide real-time access to our dev cycles, ensuring you're never in the dark about progress.</p>
          </GlassCard>
          
          <GlassCard className="p-10 rounded-2xl scroll-reveal delay-200 h-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-tertiary mb-6"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            <h3 className="text-2xl font-semibold mb-4">Innovation</h3>
            <p className="text-base text-on-surface-variant">Staying ahead of the curve isn't a goal; it's our requirement. We leverage emerging tech to solve tomorrow's challenges today.</p>
          </GlassCard>
        </div>
      </section>

      {/* Team/Leadership Section */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto bg-surface-container-low/50 rounded-[40px] my-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 scroll-reveal gap-8 px-6 md:px-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">The Minds Behind Neticx</h2>
            <p className="text-lg text-on-surface-variant">A collective of architects, designers, and engineers dedicated to elevating the digital standard.</p>
          </div>
          <GlowButton variant="ghost" className="rounded-full">Join the team</GlowButton>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 scroll-reveal px-6 md:px-12">
          {/* Team Member 1 */}
          <div className="group">
            <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/5] glass-card border-white/5">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVwSgkV7FCABrSk6OUq2_8QFGa6Ri6rSc1qjFhHKdUe9_eWX12b8jatx82u_fTZsIconCI7DN3dFCuZ2o-WbcqRt3nxOuxGhUBxBAZGVK9c9KvPfi1XAUQYHhn-_vip0akZHEBKC4Z5MDKxf06beoJmc_V1O0BXGk8hBEt9H2Q93jC46i3QAJDN82JSXR6l3oyYwZyBaLq_ZPPy-oywLjhBVK7oYkN0r9OCdan7mvEc5lTvYbBySSgimGjNed_Jf378HR9ftJG5Q" 
                alt="Marcus Thorne" 
                fill 
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" 
              />
              <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform bg-primary/90 text-on-primary">
                <p className="text-xs font-semibold uppercase tracking-tighter">CTO & Founder</p>
              </div>
            </div>
            <h4 className="text-2xl font-semibold">Marcus Thorne</h4>
            <p className="text-base text-on-surface-variant">Systems Architect</p>
          </div>
          
          {/* Team Member 2 */}
          <div className="group">
            <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/5] glass-card border-white/5">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIoLlQF8Ac-mAnEfeSWmQNlMMDNaioOrp2uUoDKf-lgUSTr57TOZtrMaNLrbhia3LfwFNVUsHWEV7DpfHdwaAIzPHh-0h8asnQE37o_ySrqBtug-0NlnKPPnYTux8S8xRl1WbizB3RL-PDRnlv-EJDS82BnS-l_1e7C1TrHvRSRSinYvl2Rhd42B9OTGZTD0BPwcl1ifggPZ7v0-_LxagbU1YAsVYLfnytc1qztoXduofynY8zRgsTlqPIAdO8QTf2VAgIvXh5_Q" 
                alt="Elena Vance" 
                fill 
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" 
              />
              <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform bg-primary/90 text-on-primary">
                <p className="text-xs font-semibold uppercase tracking-tighter">Head of Design</p>
              </div>
            </div>
            <h4 className="text-2xl font-semibold">Elena Vance</h4>
            <p className="text-base text-on-surface-variant">Experience Designer</p>
          </div>
          
          {/* Team Member 3 */}
          <div className="group">
            <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/5] glass-card border-white/5">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJMKd-Ugk9E2Rn8j6BFAxqXWJklSyq3SkRYzoWFcrl7mdPa52Gs5R66l9WVddaGmQStayCUX2732uD9fDw30EPWkhUbyGYb9kC3i4LjQh2lOIZN4dU6BSMEJC2EDxg3X1imrfphgIlxlFpTL0kopa833islkVS5JDbUwEhKEm-9kAqe4dQz7AZj0QktnQlTL0JECks7cUTuZBAj4etHiUAk-kJQxdUSSnMHCavuPNo0WfyJtRR2023a_LsLxNDjiTeJDDl1dwgdg" 
                alt="David Chen" 
                fill 
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" 
              />
              <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform bg-primary/90 text-on-primary">
                <p className="text-xs font-semibold uppercase tracking-tighter">Director of Eng</p>
              </div>
            </div>
            <h4 className="text-2xl font-semibold">David Chen</h4>
            <p className="text-base text-on-surface-variant">Full-Stack Lead</p>
          </div>
          
          {/* Team Member 4 */}
          <div className="group">
            <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/5] glass-card border-white/5">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAN_3Ijc5JFMVo5Uxji4FXk0aDSxCjBT4jU0k39YlKhtlimRxhUQ_pfKZ-TlVLosxmh1djfKJX0bxbLRjwr1WeqPyNVyy7yKqMdb8Nw-1CCszN083nf-duvG2XdtfqI63COOfzDuSAzM9DO0CnNXQRUZNJH0FgAHWrlTBpN0Gbx0SZZwVa3Md8UoMqW6dzVHySO7QUPxA5h3G_jIvnpI5Pi_0MPqpXkKivKqpU73TB78E2FHopu30G27v-kEwlBpo_ie9X5YfFvdw" 
                alt="Sasha Grey" 
                fill 
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" 
              />
              <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform bg-primary/90 text-on-primary">
                <p className="text-xs font-semibold uppercase tracking-tighter">Strategy Lead</p>
              </div>
            </div>
            <h4 className="text-2xl font-semibold">Sasha Grey</h4>
            <p className="text-base text-on-surface-variant">Product Strategist</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 md:px-16 max-w-7xl mx-auto text-center relative overflow-hidden">
        <div className="scroll-reveal relative z-10">
          <h2 className="text-5xl md:text-[72px] font-bold mb-8 tracking-tighter">Ready to Build the Future?</h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto mb-12">We are currently accepting new projects for Q3 and Q4. Let's discuss how Neticx can accelerate your venture.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <GlowButton className="rounded-full shadow-[0_0_20px_rgba(192,193,255,0.3)]">Get in Touch</GlowButton>
            <GlowButton variant="glass" className="rounded-full">View Our Work</GlowButton>
          </div>
        </div>
        
        {/* Decorative Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      </section>
    </div>
  );
}
