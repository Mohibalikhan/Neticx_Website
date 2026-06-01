import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MeshGradient from "@/components/MeshGradient";
import ClientEffects from "@/components/ClientEffects";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neticx | Engineering Tomorrow's Digital Excellence",
  description: "Neticx is a boutique software house dedicated to high-growth ventures. We combine technical precision with aesthetic sophistication to deliver digital craftsmanship that scales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} dark antialiased`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-background text-on-surface selection:bg-primary/30 selection:text-on-surface overflow-x-hidden">
        <ClientEffects />
        <MeshGradient />
        <Header />
        <main className="flex-1 relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
