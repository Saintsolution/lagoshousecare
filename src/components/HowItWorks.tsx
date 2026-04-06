import { MessageCircle, ClipboardList, Settings, CheckCircle } from "lucide-react";

const steps = [
  { icon: MessageCircle, num: "01", title: "Primeiro contato", desc: "Você entra em contato pelo WhatsApp e informa o tipo de imóvel, localização e necessidade." },
  { icon: ClipboardList, num: "02", title: "Entendimento da rotina", desc: "Avaliamos o perfil da casa, frequência desejada e tipo de atendimento necessário." },
  { icon: Settings, num: "03", title: "Atendimento personalizado", desc: "Definimos a melhor forma de cuidado para o imóvel, com transparência e atenção aos detalhes." },
  { icon: CheckCircle, num: "04", title: "Casa pronta e bem cuidada", desc: "Você encontra seu espaço limpo, organizado e preparado para uso." },
];

const HowItWorks = () => (
  <section id="como-funciona" className="bg-background py-20 md:py-28">
    <div className="container mx-auto px-6">
      <h2 className="text-center text-3xl font-light tracking-tight text-primary md:text-4xl lg:text-5xl">
        Como funciona
      </h2>
      <div className="mx-auto mt-14 grid max-w-4xl gap-10 sm:grid-cols-2">
        {steps.map((s) => (
          <div key={s.num} className="flex gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-secondary">
              <s.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
            </div>
            <div>
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-warm-gray">{s.num}</span>
              <h3 className="mt-1 font-serif text-lg font-medium text-foreground">{s.title}</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
