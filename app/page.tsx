import Ray3Section from "@/components/ray3-section"
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
      <Projects />
      <Ray3Section />
      <Technologies />
      <Contact />
      <Footer />
    </main>
  )
}