import Hero from "@/components/hero"
import Features from "@/components/features"
import CinematicSection from "@/components/cinematic-section"
import Ray3Section from "@/components/ray3-section"
import FreedomsSection from "@/components/freedoms-section"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Projects from "@/components/projects"
import Technologies from "@/components/technologies"
import AnimatedSilhouetteHero from "@/components/animated-silhouette-hero"

export default function Home() {
  return (
    <main className="relative">
      <AnimatedSilhouetteHero />
      <Navigation />
      {/* <Hero /> */}
      {/* <IconSelector /> */}
      <Projects />
      {/* <Features /> */}
      <CinematicSection />
      <Ray3Section />
      <FreedomsSection />
      <Technologies />
      <Contact />
      <Footer />
    </main>
  )
}