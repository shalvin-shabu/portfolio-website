import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import LoadingScreen from "@/components/layout/LoadingScreen";
import ParticlesBackground from "@/components/ui/ParticlesBackground";
import Hero from "@/components/sections/Hero";
import Impact from "@/components/sections/Impact";
import About from "@/components/sections/About";
import Mission from "@/components/sections/Mission";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Leadership from "@/components/sections/Leadership";
import Achievements from "@/components/sections/Achievements";
import GitHub from "@/components/sections/GitHub";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <ParticlesBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Impact />
        <About />
        <Mission />
        <Skills />
        <Projects />
        <Leadership />
        <Achievements />
        <GitHub />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
