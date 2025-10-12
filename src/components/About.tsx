import { Award, Users, Clock, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Clock, value: "15+", label: "Anos no Mercado" },
    { icon: Users, value: "500+", label: "Clientes Satisfeitos" },
    { icon: Award, value: "1000+", label: "Projetos Entregues" },
    { icon: TrendingUp, value: "98%", label: "Taxa de Satisfação" },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sobre a <span className="text-primary">Arte Visual Software</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Há mais de 15 anos no mercado, somos especialistas em criar soluções digitais personalizadas que 
            transformam negócios. Nossa experiência e dedicação garantem projetos de alta qualidade, sempre 
            focados nas necessidades específicas de cada cliente.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 text-center hover:shadow-glow transition-all duration-300 hover:scale-105 border border-border"
            >
              <stat.icon className="h-10 w-10 text-primary mx-auto mb-4" />
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Por que escolher a Arte Visual?</h3>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div>
                <div className="text-5xl mb-2">🎯</div>
                <h4 className="font-semibold mb-2">Foco em Resultados</h4>
                <p className="text-sm opacity-90">Projetos alinhados aos seus objetivos de negócio</p>
              </div>
              <div>
                <div className="text-5xl mb-2">⚡</div>
                <h4 className="font-semibold mb-2">Agilidade</h4>
                <p className="text-sm opacity-90">Entregas rápidas sem comprometer a qualidade</p>
              </div>
              <div>
                <div className="text-5xl mb-2">🤝</div>
                <h4 className="font-semibold mb-2">Suporte Contínuo</h4>
                <p className="text-sm opacity-90">Acompanhamento completo em todas as etapas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
