import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  text?: string;
  variant?: "primary" | "outline" | "floating";
  className?: string;
}

const WHATSAPP_URL = "https://wa.me/5521983095552?text=Olá! Gostaria de saber mais sobre os serviços da Lagos House Care.";

const WhatsAppButton = ({ text = "Falar no WhatsApp", variant = "primary", className = "" }: WhatsAppButtonProps) => {
  if (variant === "floating") {
    return (
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-110 ${className}`}
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-7 w-7 text-primary-foreground" />
      </a>
    );
  }

  if (variant === "outline") {
    return (
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 font-sans text-sm font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground ${className}`}
      >
        <MessageCircle className="h-4 w-4" />
        {text}
      </a>
    );
  }

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-sans text-sm font-medium text-primary-foreground transition-all hover:opacity-90 ${className}`}
    >
      <MessageCircle className="h-4 w-4" />
      {text}
    </a>
  );
};

export default WhatsAppButton;
