import { Hero } from "@/app/components/Hero";
import { About } from "@/app/components/About";
import { Skills } from "@/app/components/Skills";
import { Experience } from "@/app/components/Experience";
import { Projects } from "@/app/components/Projects";
import { Contact } from "@/app/components/Contact";
import { Footer } from "@/app/components/Footer";
import { AnimatedBackground } from "@/app/components/AnimatedBackground";
import { Toaster } from "@/app/components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 relative">
      <AnimatedBackground />
      <div className="relative" style={{ zIndex: 2 }}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </div>
  );
}