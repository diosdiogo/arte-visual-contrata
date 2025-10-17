import { Globe, Laptop, ShoppingCart, Database, Smartphone, Paintbrush } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Sites Institucionais",
      description: "Sites corporativos modernos e responsivos para fortalecer sua presença online",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Lojas virtuais completas com sistema de pagamento integrado e gestão de produtos",
    },
    {
      icon: Laptop,
      title: "Sistemas Web",
      description: "Aplicações web personalizadas para otimizar processos do seu negócio",
    },
    {
      icon: Database,
      title: "Gestão Empresarial",
      description: "ERPs e CRMs sob medida para automatizar e controlar sua empresa",
    },
    {
      icon: Smartphone,
      title: "Aplicativos Mobile",
      description: "Apps nativos e híbridos para iOS e Android com interface intuitiva",
    },
    {
      icon: Paintbrush,
      title: "UI/UX Design",
      description: "Design de interfaces modernas focadas em experiência do usuário",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background" aria-labelledby="services-heading">
      <div className="container mx-auto px-4">
        <header className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 id="services-heading" className="text-4xl md:text-5xl font-bold mb-6">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Oferecemos soluções completas em desenvolvimento de software e design digital
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-border hover:border-primary transition-all duration-300 hover:shadow-glow hover:scale-105 group"
            >
              <CardContent className="p-6">
                <service.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
