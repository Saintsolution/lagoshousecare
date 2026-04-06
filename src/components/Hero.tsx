import WhatsAppButton from "./WhatsAppButton";

const Hero = () => (
  <section id="inicio" className="relative overflow-hidden bg-background pt-20 md:pt-24">
    <div className="container mx-auto grid items-center gap-10 px-6 pb-16 md:grid-cols-2 md:gap-16 md:pb-24">
      {/* LEFT */}
      <div className="animate-fade-up flex flex-col justify-center md:mx-auto md:w-full md:max-w-2xl">
        {/* LOGO */}
        <div className="mb-5 flex justify-center md:justify-center">
          <img
            src="/logo.jpg"
            alt="Lagos House Care"
            className="h-52 w-200 object-contain md:h-60"
          />
        </div>

        {/* TITLE */}
        <h1 className="text-center text-4xl font-light leading-tight tracking-tight text-primary md:text-center md:text-5xl lg:text-6xl">
          Seu imóvel sempre limpo, organizado e pronto para você chegar
        </h1>

        {/* TEXT */}
        <p className="mt-6 text-center font-sans text-lg font-light leading-relaxed text-muted-foreground md:text-center md:text-xl">
          Cuidado completo para casas de veraneio e residências de alto padrão em Cabo Frio, Arraial do Cabo e Búzios.
        </p>

        <p className="mt-4 text-center font-sans text-base text-muted-foreground md:text-center">
          Limpeza, organização e manutenção com atenção aos detalhes, discrição e padrão elevado de apresentação.
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <WhatsAppButton text="Agendar pelo WhatsApp" />
          <WhatsAppButton text="Solicitar atendimento" variant="outline" />
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div
        className="animate-fade-in overflow-hidden rounded-2xl shadow-xl"
        style={{ animationDelay: "0.3s" }}
      >
        <img
          src="/foto01.jpg"
          alt="Profissional organizando sala de estar em casa de alto padrão com vista para o mar"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  </section>
);

export default Hero;