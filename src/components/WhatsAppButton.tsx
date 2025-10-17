import { MessageCircle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

const WhatsAppButton = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5543996700687?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento", "_blank");
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={handleWhatsApp}
            className="fixed bottom-6 right-6 z-50 bg-gradient-primary text-white rounded-full p-4 shadow-glow hover:scale-110 transition-all duration-300 animate-float"
            aria-label="Contato via WhatsApp"
          >
            <MessageCircle className="h-8 w-8" />
          </button>
        </TooltipTrigger>
        <TooltipContent side="top" className="mb-2">
          <p>Fale conosco</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default WhatsAppButton;
