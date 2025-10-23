"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star } from "lucide-react"
import Image from "next/image"

export function Members() {
  const sectionRef = useRef<HTMLElement>(null)

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

    const elements = sectionRef.current?.querySelectorAll(".fade-in-element")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const members = [
    {
      name: "Viagens Wanderlust",
      location: "Luanda, Angola",
      specialty: "Viagens de Luxo",
      image: "/luxury-travel-agency.jpg",
      rating: 4.9,
      featured: true,
    },
    {
      name: "Exploradores Globais",
      location: "Lisboa, Portugal",
      specialty: "Tours de Aventura",
      image: "/adventure-travel-agency.jpg",
      rating: 4.8,
      featured: true,
    },
    {
      name: "Viagens Serenidade",
      location: "São Paulo, Brasil",
      specialty: "Experiências Culturais",
      image: "/cultural-travel-agency.jpg",
      rating: 5.0,
      featured: false,
    },
    {
      name: "Parceiros EcoViagem",
      location: "Cidade do Cabo, África do Sul",
      specialty: "Turismo Sustentável",
      image: "/eco-travel-agency.jpg",
      rating: 4.9,
      featured: true,
    },
    {
      name: "Jornadas Patrimoniais",
      location: "Paris, França",
      specialty: "Tours Históricos",
      image: "/heritage-travel-agency.jpg",
      rating: 4.7,
      featured: false,
    },
    {
      name: "Escapadas Costeiras",
      location: "Barcelona, Espanha",
      specialty: "Resorts de Praia",
      image: "/beach-resort-travel.jpg",
      rating: 4.8,
      featured: false,
    },
  ]

  return (
    <section id="members" ref={sectionRef} className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 fade-in-element opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
            Membros em Destaque
          </h2>
          <p className="text-xl text-muted-foreground text-balance">
            Conheça algumas das nossas agências membros destacadas de todo o mundo, cada uma trazendo expertise única e
            excelência para a indústria de viagens.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {members.map((member, index) => (
            <Card
              key={member.name}
              className="fade-in-element opacity-0 overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {member.featured && (
                  <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">Destaque</Badge>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 font-[family-name:var(--font-playfair)]">{member.name}</h3>
                <div className="flex items-center gap-2 text-muted-foreground mb-3">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{member.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-primary border-primary/30">
                    {member.specialty}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-secondary text-secondary" />
                    <span className="font-semibold">{member.rating}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
