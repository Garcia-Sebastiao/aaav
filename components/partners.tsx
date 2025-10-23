"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  Partner01,
  Partner02,
  Partner03,
  Partner04,
  Partner05,
  Partner06,
  Partner07,
  Partner08,
  Partner09,
  Partner10,
  Partner11,
  Partner12,
  Partner13,
} from "@/assets/partners";

export function Partners() {
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

  const partners = [
    { name: "Global Airlines", logo: Partner01 },
    { name: "Global Airlines", logo: Partner02 },
    { name: "Global Airlines", logo: Partner03 },
    { name: "Global Airlines", logo: Partner04 },
    { name: "Global Airlines", logo: Partner05 },
    { name: "Global Airlines", logo: Partner06 },
    { name: "Global Airlines", logo: Partner07 },
    { name: "Global Airlines", logo: Partner08 },
    { name: "Global Airlines", logo: Partner09 },
    { name: "Global Airlines", logo: Partner10 },
    { name: "Global Airlines", logo: Partner11 },
    { name: "Global Airlines", logo: Partner12 },
    { name: "Global Airlines", logo: Partner13, normalScale: true },
  ];

  return (
    <section id="partners" ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 fade-in-element opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
            Nossos Parceiros
          </h2>
          <p className="text-xl text-muted-foreground text-balance">
            Colaboramos com organizações líderes da indústria para fornecer aos
            nossos membros benefícios exclusivos e oportunidades.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="fade-in-element opacity-0 bg-card rounded-2xl p-8 flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="relative w-full h-16  transition-all duration-300">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className={`object-contain scale-150 ${
                    partner.normalScale ? "!scale-100" : ""
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

        <div
          className="fade-in-element opacity-0 max-w-4xl mx-auto mt-16 text-center bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-3xl p-12 border border-border"
          style={{ animationDelay: "0.4s" }}
        >
          <h3 className="text-3xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
            Torne-se um Parceiro
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Junte-se à nossa rede de parceiros confiáveis e conecte-se com
            milhares de agências de viagens em todo o mundo. Juntos, podemos
            criar experiências de viagem excepcionais.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:parcerias@aliancaglobalviagens.com"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Contactar Equipa de Parcerias
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
