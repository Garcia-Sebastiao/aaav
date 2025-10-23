"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Image1, Image10, Image11, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9 } from "@/assets/gallery";

export function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-scale-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".gallery-item");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const images = [
    {
      src: Image10,
      alt: "Conferência Anual de Viagens",
      span: "md:col-span-2 md:row-span-2",
    },
    {
      src: Image2,
      alt: "Evento de Networking de Membros",
      span: "",
    },
    {
      src: Image1,
      alt: "Cerimónia de Prémios de Excelência",
      span: "",
    },
    {
      src: Image4,
      alt: "Workshop de Desenvolvimento Profissional",
      span: "md:col-span-2",
    },
    {
      src: Image5,
      alt: "Mostra de Destinos",
      span: "",
    },
    {
      src: Image6,
      alt: "Expo de Tecnologia de Viagens",
      span: "",
    },
    {
      src: Image11,
      alt: "Cimeira de Viagens Sustentáveis",
      span: "",
    },
    {
      src: Image8,
      alt: "Assinatura de Parceria Global",
      span: "",
    },
  ];

  return (
    <section id="gallery" ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-playfair)] animate-fade-in-up">
            Galeria
          </h2>
          <p
            className="text-xl text-muted-foreground text-balance animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Explore momentos dos nossos eventos, conferências e encontros de
            membros ao redor do mundo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className={`gallery-item opacity-0 relative overflow-hidden rounded-2xl cursor-pointer group ${image.span}`}
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => setSelectedImage(image.src as unknown as string)}
            >
              <div className="relative aspect-square md:aspect-auto md:h-full min-h-[300px]">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-semibold text-lg">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-5xl p-0 overflow-hidden">
          {selectedImage && (
            <div className="relative w-full h-[80vh]">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Gallery image"
                fill
                className="object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
