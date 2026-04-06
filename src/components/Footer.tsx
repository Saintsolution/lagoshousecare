import { Instagram, MessageCircle } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Preços", href: "#precos" },
  { label: "Atendimento", href: "#atendimento" },
  { label: "Contato", href: "#contato" },
];

const Footer = () => (
  <footer className="border-t border-border bg-background py-14">
    <div className="container mx-auto px-6">
      <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <span className="font-serif text-xl font-semibold tracking-wide text-primary">Lagos House Care</span>
          <p className="mt-2 max-w-xs font-sans text-sm text-muted-foreground">
            Cuidado completo para casas de veraneio e imóveis de alto padrão.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="font-sans text-sm text-muted-foreground transition-colors hover:text-primary">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/5521983095552"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            aria-label="WhatsApp"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
          <a
            href="https://instagram.com/lagoshousecare"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="mt-10 border-t border-border pt-6 text-center">
        <p className="font-sans text-xs text-muted-foreground">
          © {new Date().getFullYear()} Lagos House Care. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
