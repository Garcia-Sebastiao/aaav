import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Image01, Image02, Image03 } from "@/assets/blog";

// Mock blog data - in a real app, this would come from a database or CMS
const blogPosts = {
  "futuro-viagens-sustentaveis": {
    title:
      "🌍✨ AAAV celebra o Mês do Turismo com Passeio Turístico em Luanda ✨🌍",
    author: "Sara Oliveira",
    date: "15 de Março, 2024",
    readTime: "2 min de leitura",
    category: "Sustentabilidade",
    image: Image01,
    content: `
      <p>No âmbito das celebrações do Dia Mundial do Turismo (27 de setembro), a Associação Angolana das Agências de Viagens (AAAV) realizou um passeio turístico pela cidade de Luanda, envolvendo associados, parceiros e amantes do turismo.</p> <br />

      <p>O evento teve como objetivo valorizar o potencial turístico de Angola, promover a integração entre os associados e reforçar o papel da AAAV na dinamização do setor das viagens e turismo no país. Foi um momento de partilha, networking e, sobretudo, de reconhecimento da importância do turismo como motor de desenvolvimento económico, cultural e social.</p><br />

      <p>A atividade contou com a participação ativa de vários associados da AAAV, que tiveram a oportunidade de explorar pontos icónicos de Luanda, fortalecendo o espírito de cooperação e demonstrando o compromisso da Associação em promover Angola como destino turístico de excelência.</p><br />

      <p>A AAAV reafirma o seu compromisso em trabalhar lado a lado com os seus associados, parceiros institucionais e stakeholders, no sentido de contribuir para uma indústria de turismo mais forte, inclusiva e sustentável em Angola.</p><br />

      <p>✈️ Porque viajar é conhecer, valorizar e transformar!</p>
    `,
  },
  "transformacao-digital-agencias-viagens": {
    title: "CONFERÊNCIA INTERNACIONAL DO TURISMO | LUANDA 2025",
    author: "Miguel Santos",
    date: "26 de Setembro, 2025",
    readTime: "3 min de leitura",
    category: "Tecnologia",
    image: Image02,
    content: `
      <p>No dia 26 de setembro de 2025, a Mediateca de Luanda acolheu a Conferência Internacional do Turismo, promovida pela Associação Angolana dos Agentes de Viagem (AAAV), com o objetivo de refletir sobre o presente e o futuro do turismo em Angola.</p><br />

      <p>O encontro contou com a participação de especialistas nacionais e internacionais, representantes de instituições públicas e privadas, operadores turísticos, académicos e empreendedores do setor, que partilharam experiências e boas práticas sobre a modernização e dinamização do turismo angolano.</p><br />

      <p>Entre os temas abordados destacaram-se:</p><br />

      <ul>
        <li>Sustentabilidade e preservação ambiental como pilares para o crescimento responsável do setor;</li><br />

        <li>Inovação tecnológica e a digitalização dos serviços turísticos;</li><br />

        <li>Cooperação internacional e oportunidades de investimento;</li><br />

        <li>Formação e capacitação profissional como fatores determinantes para elevar a qualidade do turismo em Angola.</li><br />
      </ul>


      <p>Durante a conferência, foi também sublinhado o papel estratégico do turismo na diversificação da economia nacional, na criação de emprego e na valorização do património cultural e natural do país.</p><br />

      <p>A AAAV reafirmou o seu compromisso em fortalecer a colaboração entre os agentes de viagem, operadores e instituições governamentais, promovendo políticas e iniciativas que consolidem Angola como um destino turístico emergente e competitivo no contexto africano e global.</p><br />

      <p>✨ AAAV – Juntos por Angola e pelo Turismo</p>
    `,
  },
   "construindo-redes-viagens-fortes": {
    title: "Construindo Redes de Viagens Mais Fortes",
    author: "Ana Rodrigues",
    date: "5 de Março, 2024",
    readTime: "5 min de leitura",
    category: "Networking",
    image: Image03,
    content: `
      <p>Num mundo cada vez mais conectado, a força da sua rede profissional pode fazer ou quebrar o sucesso da sua agência de viagens. Construir e manter relacionamentos fortes dentro da indústria abre portas para novas oportunidades, parcerias e crescimento.</p><br />

      <h2>O Poder das Conexões Profissionais</h2>
      <p>Networking não é apenas sobre trocar cartões de visita—é sobre criar relacionamentos significativos que beneficiam todas as partes envolvidas. Redes fortes fornecem acesso a insights da indústria, oportunidades colaborativas e apoio durante tempos desafiantes.</p><br />

      <h2>Estratégias para Networking Eficaz</h2>
      <p>Construir uma rede profissional robusta requer esforço intencional e envolvimento genuíno:</p><br />

      <ul>
        <li><strong>Participar em Eventos da Indústria:</strong> Conferências, feiras comerciais e workshops fornecem excelentes oportunidades para conhecer colegas e líderes da indústria.</li>
        <li><strong>Juntar-se a Associações Profissionais:</strong> Organizações como a Aliança Global de Viagens oferecem oportunidades estruturadas de networking e recursos.</li>
        <li><strong>Aproveitar as Redes Sociais:</strong> Plataformas como o LinkedIn permitem conectar-se com profissionais em todo o mundo e manter-se atualizado sobre tendências da indústria.</li>
        <li><strong>Oferecer Valor Primeiro:</strong> Concentre-se em como pode ajudar os outros em vez do que pode ganhar com o relacionamento.</li>
      </ul><br />

      <h2>Mantendo Relacionamentos de Longo Prazo</h2>
      <p>Construir uma rede é apenas o primeiro passo—manter esses relacionamentos ao longo do tempo é igualmente importante. Comunicação regular, apoio mútuo e interesse genuíno no sucesso dos outros são fundamentais para sustentar conexões profissionais valiosas.</p>
    `,
  },
};

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Artigo Não Encontrado</h1>
          <Link href="/#blog">
            <Button>Voltar ao Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <article className="pt-24 pb-16">
        {/* Hero Image */}
        <div className="relative h-[60vh] w-full mb-12">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="container max-w-4xl mx-auto px-4">
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao Blog
          </Link>

          <div className="mb-8">
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              {post.category}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance font-[family-name:var(--font-playfair)]">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          <div
            className="prose prose-lg max-w-none prose-headings:font-[family-name:var(--font-playfair)] prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-foreground/90 prose-p:leading-relaxed prose-p:mb-6 prose-ul:my-6 prose-li:my-2 prose-strong:text-foreground prose-strong:font-semibold"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  Escrito por
                </p>
                <p className="font-semibold text-lg">{post.author}</p>
              </div>
              <Link href="/#blog">
                <Button variant="outline">Ler Mais Artigos</Button>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
