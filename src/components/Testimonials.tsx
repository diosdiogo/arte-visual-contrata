import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Mendes",
      role: "CEO, TechStart",
      content:
        "A Arte Visual transformou completamente nosso negócio com um sistema sob medida. Profissionalismo e qualidade em cada detalhe!",
      rating: 5,
    },
    {
      name: "Marina Silva",
      role: "Diretora, Fashion Store",
      content:
        "Desenvolveram nosso e-commerce com perfeição. As vendas aumentaram 300% nos primeiros 3 meses. Equipe sensacional!",
      rating: 5,
    },
    {
      name: "Roberto Alves",
      role: "Gerente, LogiTrans",
      content:
        "15 anos de experiência fazem toda diferença. Entregaram um sistema complexo no prazo e com suporte excepcional.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-background" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-4">
        <header className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-bold mb-6">
            O que dizem nossos <span className="text-primary">Clientes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Depoimentos reais de clientes satisfeitos com nosso trabalho
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
