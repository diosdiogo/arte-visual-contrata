import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      scrollToSection("hero");
    }
  };

  const handleOrcamento = () => {
    navigate("/orcamento");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Menu principal"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2 cursor-pointer" onClick={handleLogoClick}>
            <img src={logo} alt="Arte Visual Software - Desenvolvimento de Sites e Softwares" className="h-12 w-auto" />
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors">
              Sobre
            </button>
            <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-primary transition-colors">
              Serviços
            </button>
            <button onClick={() => scrollToSection("portfolio")} className="text-foreground hover:text-primary transition-colors">
              Portfólio
            </button>
            <button onClick={() => scrollToSection("testimonials")} className="text-foreground hover:text-primary transition-colors">
              Depoimentos
            </button>
            <Button onClick={handleOrcamento} variant="hero" size="lg">
              Fale com um especialista
            </Button>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Portfólio
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Depoimentos
            </button>
            <Button onClick={handleOrcamento} variant="hero" size="lg" className="w-full">
              Fale com um especialista
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
