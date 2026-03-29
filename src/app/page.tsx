import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="grid-pattern noise-overlay fixed inset-0 pointer-events-none" />
      <Navbar />
      <Hero />
      <Projects />
      <TechStack />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
