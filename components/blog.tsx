"use client";

import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Image01, Image02, Image03 } from "@/assets/blog";

export function Blog() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".fade-in-element");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const posts = [
    {
      title:
        "🌍✨ AAAV celebra o Mês do Turismo com Passeio Turístico em Luanda ✨🌍",
      excerpt:
        "No âmbito das celebrações do Dia Mundial do Turismo (27 de setembro), a Associação Angolana das Agências de Viagens (AAAV) realizou um passeio turístico pela cidade de Luanda, envolvendo associados, parceiros e amantes do turismo.",
      category: "Sustentabilidade",
      date: "15 de Março, 2024",
      readTime: "2 min de leitura",
      image: Image01,
      slug: "futuro-viagens-sustentaveis",
    },
    {
      title: "CONFERÊNCIA INTERNACIONAL DO TURISMO | LUANDA 2025",
      excerpt:
        "No dia 26 de setembro de 2025, a Mediateca de Luanda acolheu a Conferência Internacional do Turismo, promovida pela Associação Angolana dos Agentes de Viagem (AAAV), com o objetivo de refletir sobre o presente e o futuro do turismo em Angola.",
      category: "Turismo",
      date: "26 de Setembro, 2025",
      readTime: "3 min de leitura",
      image: Image02,
      slug: "transformacao-digital-agencias-viagens",
    },
    {
      title: "Construindo Redes de Viagens Mais Fortes",
      excerpt:
        "A importância da colaboração e networking na criação de parcerias bem-sucedidas de agências de viagens.",
      category: "Networking",
      date: "5 de Março, 2024",
      readTime: "5 min de leitura",
      image: Image03,
      slug: "construindo-redes-viagens-fortes",
    },
  ];

  return (
    <section id="blog" ref={sectionRef} className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 fade-in-element opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
            Últimas Novidades
          </h2>
          <p className="text-xl text-muted-foreground text-balance">
            Mantenha-se informado com as últimas tendências, insights e melhores
            práticas na indústria de viagens.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {posts.map((post, index) => (
            <Card
              key={post.slug}
              className="fade-in-element overflow-hidden opacity-0 p-0 -hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  {post.category}
                </Badge>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 font-[family-name:var(--font-playfair)] line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <Link href={`/blog/${post.slug}`}>
                  <Button
                    variant="ghost"
                    className="group/btn hover:text-primary p-0 h-auto hover:bg-transparent"
                  >
                    Ler Mais
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
