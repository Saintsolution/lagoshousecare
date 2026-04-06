import WhatsAppButton from "./WhatsAppButton";

const FinalCTA = () => (
  <section id="contato" className="bg-primary py-24 md:py-32">
    <div className="container mx-auto px-6 text-center">
      <h2 className="font-serif text-3xl font-light tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
        Sua casa merece estar sempre pronta para receber bem
      </h2>
      <p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-relaxed text-primary-foreground/80">
        Entre em contato para verificar disponibilidade, entender o atendimento ideal para o seu imóvel e solicitar um orçamento personalizado.
      </p>
      <div className="mt-10">
        <a
          href="https://wa.me/5521983095552?text=Olá! Gostaria de saber mais sobre os serviços da Lagos House Care."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border-2 border-primary-foreground bg-transparent px-8 py-4 font-sans text-base font-medium text-primary-foreground transition-all hover:bg-primary-foreground hover:text-primary"
        >
          Falar no WhatsApp
        </a>
      </div>
    </div>
  </section>
);

export default FinalCTA;
