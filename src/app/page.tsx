import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="paper-grain relative min-h-screen">
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Marquee />
        <Projects />
        <TechStack />
        <About />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
