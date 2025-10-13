import About from "@/components/About";
import Contact from "@/components/Contactme";
import Timeline from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import StatsCards from "@/components/StatCards";
import { Testimonials } from "@/components/Testimonials";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"]
});


export default function Home() {

  const techNavLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <main className={`min-h-screen scroll-smooth overflow-x-hidden md:overflow-x-visible ${montserrat.className}`} >
      <Hero />
      <div className="hidden md:block">
        <StatsCards />
      </div>
      <About />
      <Skills />
      <Timeline />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
