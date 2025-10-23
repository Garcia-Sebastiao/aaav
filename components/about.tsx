"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Target, Lightbulb, Heart, TrendingUp } from "lucide-react"

export function About() {
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

  const values = [
    {
      icon: Target,
      title: "Nossa Missão",
      description:
        "Unir agências de viagem em todo o mundo, promovendo colaboração e excelência na indústria de viagens.",
      color: "text-primary",
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Abraçando tecnologia de ponta e práticas sustentáveis para moldar o futuro das viagens.",
      color: "text-accent",
    },
    {
      icon: Heart,
      title: "Comunidade",
      description: "Construindo uma rede de apoio onde os membros compartilham conhecimento, recursos e oportunidades.",
      color: "text-secondary",
    },
    {
      icon: TrendingUp,
      title: "Crescimento",
      description:
        "Capacitando agências com ferramentas, treinamento e insights para prosperar num mercado competitivo.",
      color: "text-chart-1",
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 fade-in-element opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
            Sobre a Associação
          </h2>
          <p className="text-xl text-muted-foreground text-balance">
            Há mais de 25 anos, somos o parceiro de confiança das agências de viagens que procuram elevar o seu negócio
            e conectar-se a uma comunidade global de profissionais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <Card
                key={value.title}
                className="fade-in-element opacity-0 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className={`h-12 w-12 ${value.color} mb-4`} />
                <h3 className="text-2xl font-bold mb-3 font-[family-name:var(--font-playfair)]">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            )
          })}
        </div>

        <div
          className="fade-in-element opacity-0 max-w-4xl mx-auto bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-3xl p-12 border border-border"
          style={{ animationDelay: "0.4s" }}
        >
          <h3 className="text-3xl font-bold mb-6 text-center font-[family-name:var(--font-playfair)]">
            Por que Juntar-se a Nós?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <p className="text-foreground/90">Acesso a relatórios exclusivos da indústria e insights de mercado</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
              <p className="text-foreground/90">Oportunidades de networking em conferências e eventos globais</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
              <p className="text-foreground/90">Programas de desenvolvimento profissional e certificação</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-chart-1 rounded-full mt-2 flex-shrink-0" />
              <p className="text-foreground/90">Tarifas preferenciais com parceiros e fornecedores da indústria</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <p className="text-foreground/90">Recursos de marketing e oportunidades de co-branding</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
              <p className="text-foreground/90">Suporte ao membro 24/7 e serviços de advocacia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
