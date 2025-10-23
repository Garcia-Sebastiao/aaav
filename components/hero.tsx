"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Users, Award } from "lucide-react"
import { useEffect, useRef } from "react"

export function Hero() {
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const stats = statsRef.current?.querySelectorAll(".stat-card")
    stats?.forEach((stat) => observer.observe(stat))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative min-h-screen pb-10 flex items-center justify-center overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5" />
      <div className="absolute inset-0 bg-[url('/world-map-pattern.png')] opacity-5 bg-cover bg-center" />

      <div className="container mx-auto mt-10 pb-10 px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-8 animate-scale-in">
            <Globe className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Conectando Agências de Viagem em Angola</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance font-[family-name:var(--font-playfair)] animate-fade-in-up">
            Associação Angolana das <span className="text-primary">Agências de Viagens</span>
          </h1>

          <p
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto text-balance animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Junte-se à principal associação angolana de profissionais de viagens. Tenha acesso a recursos exclusivos,
            oportunidades de networking e insights estratégicos sobre o setor.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 group">
              Tornar-se Membro
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
              Explorar Benefícios
            </Button>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="stat-card bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg opacity-0">
              <Users className="h-12 w-12 text-primary mb-4 mx-auto" />
              <div className="text-4xl font-bold mb-2 font-[family-name:var(--font-playfair)]">5,000+</div>
              <div className="text-muted-foreground">Agências Parceiras</div>
            </div>
            <div
              className="stat-card bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-accent/50 transition-all hover:shadow-lg opacity-0"
              style={{ animationDelay: "0.1s" }}
            >
              <Globe className="h-12 w-12 text-accent mb-4 mx-auto" />
              <div className="text-4xl font-bold mb-2 font-[family-name:var(--font-playfair)]">120+</div>
              <div className="text-muted-foreground">Países Representados</div>
            </div>
            <div
              className="stat-card bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-secondary/50 transition-all hover:shadow-lg opacity-0"
              style={{ animationDelay: "0.2s" }}
            >
              <Award className="h-12 w-12 text-secondary mb-4 mx-auto" />
              <div className="text-4xl font-bold mb-2 font-[family-name:var(--font-playfair)]">25</div>
              <div className="text-muted-foreground">Anos de Excelência</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />
    </section>
  )
}
