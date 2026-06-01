import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full py-12 border-t border-white/5 relative z-10 mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col gap-4">
          <div className="text-2xl font-black text-on-surface tracking-tight">Neticx</div>
          <p className="text-sm text-on-surface-variant max-w-md leading-relaxed">
            © {new Date().getFullYear()} Neticx. Digital Craftsmanship for High-Growth Ventures. We build resilient software that defines markets.
          </p>
          <div className="flex gap-6 mt-2">
            <a href="#" className="opacity-80 hover:opacity-100 transition-all hover:text-secondary text-on-surface-variant">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" className="opacity-80 hover:opacity-100 transition-all hover:text-secondary text-on-surface-variant">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-8 md:justify-items-end mt-6 md:mt-0">
          <div className="flex flex-col gap-3">
            <h5 className="text-xs text-primary uppercase tracking-widest font-semibold mb-1">Navigation</h5>
            <Link href="/" className="text-sm text-on-surface-variant hover:text-secondary transition-colors">Home</Link>
            <Link href="/about" className="text-sm text-on-surface-variant hover:text-secondary transition-colors">About</Link>
            <Link href="/services" className="text-sm text-on-surface-variant hover:text-secondary transition-colors">Services</Link>
            <Link href="/contact" className="text-sm text-on-surface-variant hover:text-secondary transition-colors">Contact</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="text-xs text-primary uppercase tracking-widest font-semibold mb-1">Legal</h5>
            <a href="#" className="text-sm text-on-surface-variant hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-on-surface-variant hover:text-secondary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
