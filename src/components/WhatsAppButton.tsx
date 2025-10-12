import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento", "_blank");
  };

  return (
    <button
      onClick={handleWhatsApp}
      className="fixed bottom-6 right-6 z-50 bg-gradient-primary text-white rounded-full p-4 shadow-glow hover:scale-110 transition-all duration-300 animate-float group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-secondary text-secondary-foreground px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
        Fale conosco!
      </span>
    </button>
  );
};

export default WhatsAppButton;
