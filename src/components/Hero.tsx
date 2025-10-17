import { ArrowRight, Code, Smartphone, Palette } from "lucide-react";
import { Button } from "./ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const handleOrcamento = () => {
    window.location.href = "/orcamento";
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="container mx-auto px-4 relative z-10">
        <article className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Desenvolvimento de Sites e Softwares Personalizados
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Transformamos suas ideias em realidade digital com 15 anos de experiência em desenvolvimento web, e-commerce, sistemas e apps
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button onClick={handleOrcamento} variant="hero" size="lg" className="text-lg">
              Fale com um especialista <ArrowRight className="ml-2" />
            </Button>
            <Button
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
              variant="outline"
              size="lg"
              className="text-lg bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            >
              Ver Projetos
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <article className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <Code className="h-12 w-12 text-primary mb-4 mx-auto" />
              <h2 className="text-xl font-semibold mb-2 text-white">Desenvolvimento Web</h2>
              <p className="text-gray-300">Sites modernos e responsivos para seu negócio</p>
            </article>
            <article className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <Smartphone className="h-12 w-12 text-primary mb-4 mx-auto" />
              <h2 className="text-xl font-semibold mb-2 text-white">Apps Personalizados</h2>
              <p className="text-gray-300">Soluções sob medida para sua empresa</p>
            </article>
            <article className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <Palette className="h-12 w-12 text-primary mb-4 mx-auto" />
              <h2 className="text-xl font-semibold mb-2 text-white">Design Profissional</h2>
              <p className="text-gray-300">Interface moderna e experiência única</p>
            </article>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Hero;
