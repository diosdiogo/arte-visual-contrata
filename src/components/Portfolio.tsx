import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Premium",
      description: "Loja virtual completa com integração de pagamento e gestão de estoque",
      category: "E-commerce",
      image: project1,
    },
    {
      title: "Sistema de Gestão",
      description: "ERP empresarial com dashboard analítico e relatórios em tempo real",
      category: "Sistema Web",
      image: project2,
    },
    {
      title: "App de Delivery",
      description: "Aplicativo mobile para delivery com rastreamento em tempo real",
      category: "Mobile",
      image: project3,
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nosso <span className="text-primary">Portfólio</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Conheça alguns dos projetos que desenvolvemos com excelência
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border-border hover:shadow-glow transition-all duration-300 hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="text-white flex items-center gap-2">
                    <ExternalLink className="h-5 w-5" />
                    <span>Ver Detalhes</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-primary font-semibold mb-2">{project.category}</div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
