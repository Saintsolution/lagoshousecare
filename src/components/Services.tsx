import { Home, Luggage, RefreshCw, CalendarCheck, UserCheck } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const services = [
  { icon: Home, title: "Limpeza e organização residencial", desc: "Cuidado completo dos ambientes com foco em apresentação, ordem e bem-estar." },
  { icon: Luggage, title: "Preparação pré-chegada", desc: "Deixe sua casa pronta para receber você, sua família ou convidados." },
  { icon: RefreshCw, title: "Pós-estadia e recomposição", desc: "Organização e limpeza após uso do imóvel, com atenção aos detalhes." },
  { icon: CalendarCheck, title: "Manutenção periódica de imóveis", desc: "Acompanhamento recorrente para manter a casa sempre em excelente estado." },
  { icon: UserCheck, title: "Atendimento personalizado", desc: "Cada imóvel possui necessidades específicas. O atendimento é ajustado à rotina e ao perfil de uso da casa." },
];

const Services = () => (
  <section id="servicos" className="bg-background py-20 md:py-28">
    <div className="container mx-auto px-6">
      <div className="grid items-center gap-12 md:grid-cols-2">
        
        {/* TEXT */}
        <div>
          <h2 className="text-3xl font-light tracking-tight text-primary md:text-4xl lg:text-5xl">
            Serviços
          </h2>

          <div className="mt-10 space-y-6">
            {services.map((s) => (
              <div key={s.title} className="flex gap-4">
                <s.icon className="mt-1 h-6 w-6 shrink-0 text-primary" strokeWidth={1.5} />
                <div>
                  <h3 className="font-serif text-lg font-medium text-foreground">{s.title}</h3>
                  <p className="mt-1 font-sans text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 font-sans text-xs italic text-warm-gray">
            Serviços extras podem ser avaliados e orçados à parte.
          </p>

          <div className="mt-8">
            <WhatsAppButton text="Solicitar orçamento" variant="outline" />
          </div>
        </div>

        {/* IMAGE */}
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img
            src="/foto02.jpg"
            alt="Profissional organizando mesa elegante em casa de veraneio"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>

      </div>
    </div>
  </section>
);

export default Services;