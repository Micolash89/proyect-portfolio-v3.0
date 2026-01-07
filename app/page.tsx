import Hero from "@/components/hero"
import IconSelector from "@/components/icon-selector"
import Features from "@/components/features"
import CinematicSection from "@/components/cinematic-section"
import Ray3Section from "@/components/ray3-section"
import FreedomsSection from "@/components/freedoms-section"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <IconSelector />
      <Features />
      <CinematicSection />
      <Ray3Section />
      <FreedomsSection />
      <Contact />
      <Footer />
    </main>
  )
}