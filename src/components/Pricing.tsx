import WhatsAppButton from "./WhatsAppButton";
import SectionDivider from "./SectionDivider";

const plans = [
  { title: "Diária de atendimento", price: "A partir de R$ 350", desc: "Atendimento completo por diária, conforme o perfil do imóvel." },
  { title: "Atendimento recorrente", price: "Sob consulta", desc: "Valores definidos conforme frequência e perfil do imóvel." },
  { title: "Serviços extras", price: "Orçados à parte", desc: "Serviços adicionais avaliados individualmente." },
];

const Pricing = () => (
  <>
    <SectionDivider color="hsl(var(--secondary))" />
    <section id="precos" className="bg-secondary py-20 md:py-28">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl font-light tracking-tight text-primary md:text-4xl lg:text-5xl">
          Atendimento e valores
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center font-sans text-base text-muted-foreground">
          Os valores variam de acordo com o perfil do imóvel, frequência do atendimento e nível de detalhe necessário.
        </p>

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.title} className="flex flex-col rounded-xl border border-border bg-background p-8 text-center shadow-sm transition-shadow hover:shadow-md">
              <h3 className="font-serif text-lg font-medium text-foreground">{p.title}</h3>
              <p className="mt-3 font-serif text-2xl font-semibold text-primary">{p.price}</p>
              <p className="mt-3 flex-1 font-sans text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-2xl rounded-xl border border-border bg-background/60 p-6">
          <h4 className="font-serif text-base font-medium text-foreground">Observações importantes</h4>
          <ul className="mt-3 space-y-1.5 font-sans text-sm text-muted-foreground">
            <li>• Material de limpeza por conta do cliente</li>
            <li>• Serviços extras são avaliados separadamente</li>
            <li>• Valores podem variar conforme localização, tamanho do imóvel e complexidade do atendimento</li>
          </ul>
        </div>

        <div className="mt-10 text-center">
          <WhatsAppButton text="Solicitar orçamento" />
        </div>
      </div>
    </section>
    <SectionDivider color="hsl(var(--secondary))" flip />
  </>
);

export default Pricing;
