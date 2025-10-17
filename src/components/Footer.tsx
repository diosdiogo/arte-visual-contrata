import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <img src={logo} alt="Arte Visual Software - Desenvolvimento de Sites e Softwares" className="h-16 w-auto mb-4" />
            <p className="text-sm opacity-90">
              Empresa especializada em desenvolvimento de sites, e-commerce, sistemas web e aplicativos personalizados. 15 anos transformando ideias em soluções digitais.
            </p>
          </div>

          <nav aria-label="Links rápidos">
            <h3 className="font-semibold mb-4 text-primary">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-primary transition-colors"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-primary transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-primary transition-colors"
                >
                  Portfólio
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-primary transition-colors"
                >
                  Depoimentos
                </button>
              </li>
            </ul>
          </nav>

          <address className="not-italic">
            <h3 className="font-semibold mb-4 text-primary">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                <a href="tel:+5543996700687" className="hover:text-primary transition-colors">(43) 99670-0687</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                <a href="mailto:contato@artevisual.com.br" className="hover:text-primary transition-colors">contato@artevisual.com.br</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                <span>Maringá, PR - Brasil</span>
              </li>
            </ul>
          </address>

          <div>
            <h3 className="font-semibold mb-4 text-primary">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/arte-visual-desenvolvimento"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="LinkedIn da Arte Visual Software"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/arte.visual.soft/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Instagram da Arte Visual Software"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/Arte.Visual.Soft"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Facebook da Arte Visual Software"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm opacity-75">
          <p>© {new Date().getFullYear()} Arte Visual Software. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
