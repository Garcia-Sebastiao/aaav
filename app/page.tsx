import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Members } from "@/components/members"
import { Gallery } from "@/components/gallery"
import { Blog } from "@/components/blog"
import { Partners } from "@/components/partners"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Members />
      <Gallery />
      <Blog />
      <Partners />
      <Footer />
    </main>
  )
}
