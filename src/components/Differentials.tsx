import { Check } from "lucide-react";

const items = [
  "Apresentação profissional",
  "Atenção aos detalhes",
  "Organização com padrão elevado",
  "Comunicação clara",
  "Atendimento personalizado",
  "Foco em casas de veraneio e imóveis de alto padrão",
];

const Differentials = () => (
  <section className="bg-background py-20 md:py-28">
    <div className="container mx-auto grid items-center gap-12 px-6 md:grid-cols-2">

      {/* IMAGE */}
      <div className="overflow-hidden rounded-2xl shadow-lg">
        <img
          src="/foto08.jpg"
          alt="Profissional limpando janela com vista para piscina e mar"
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      {/* TEXT */}
      <div>
        <h2 className="text-3xl font-light tracking-tight text-primary md:text-4xl lg:text-5xl">
          Por que escolher a Lagos House Care
        </h2>

        <ul className="mt-10 space-y-4">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary">
                <Check className="h-4 w-4 text-primary-foreground" strokeWidth={2} />
              </div>
              <span className="font-sans text-base text-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  </section>
);

export default Differentials;