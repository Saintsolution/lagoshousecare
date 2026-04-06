import { ShieldCheck, Sparkles, Eye, Award } from "lucide-react";
import SectionDivider from "./SectionDivider";

const values = [
  { icon: Sparkles, title: "Organização", desc: "Ambientes arrumados com cuidado e método." },
  { icon: ShieldCheck, title: "Confiança", desc: "Compromisso, pontualidade e respeito ao seu espaço." },
  { icon: Eye, title: "Discrição", desc: "Trabalho silencioso e respeitoso à sua privacidade." },
  { icon: Award, title: "Padrão elevado", desc: "Resultado impecável em cada detalhe." },
];

const About = () => (
  <>
    <SectionDivider color="hsl(var(--secondary))" />
    <section className="bg-secondary py-20 md:py-28">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-light tracking-tight text-primary md:text-4xl lg:text-5xl">
          Mais do que limpeza: cuidado, presença e confiança
        </h2>
        <p className="mx-auto mt-6 max-w-3xl font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
          A Lagos House Care oferece um serviço pensado para proprietários que desejam chegar à casa e encontrar tudo limpo, organizado e pronto. Atuamos com atenção aos detalhes, discrição, apresentação impecável e foco no conforto de quem valoriza um imóvel bem cuidado.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div
              key={v.title}
              className="group rounded-xl border border-border bg-background p-8 text-center transition-shadow hover:shadow-md"
            >
              <v.icon className="mx-auto h-8 w-8 text-primary transition-transform group-hover:scale-110" strokeWidth={1.5} />
              <h3 className="mt-4 text-lg font-medium text-foreground">{v.title}</h3>
              <p className="mt-2 font-sans text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <SectionDivider color="hsl(var(--secondary))" flip />
  </>
);

export default About;
