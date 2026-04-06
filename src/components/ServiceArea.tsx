import { MapPin } from "lucide-react";
import SectionDivider from "./SectionDivider";

const cities = ["Cabo Frio", "Arraial do Cabo", "Búzios"];

const ServiceArea = () => (
  <>
    <SectionDivider color="hsl(var(--cream))" />
    <section id="atendimento" className="bg-cream py-20 md:py-28">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-light tracking-tight text-primary md:text-4xl lg:text-5xl">
          Área de atendimento
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-sans text-base text-muted-foreground">
          Atendimento na Região dos Lagos, com foco em imóveis localizados em:
        </p>
        <div className="mx-auto mt-12 flex flex-wrap justify-center gap-6">
          {cities.map((city) => (
            <div
              key={city}
              className="flex items-center gap-3 rounded-full border border-border bg-background px-8 py-4 shadow-sm"
            >
              <MapPin className="h-5 w-5 text-primary" strokeWidth={1.5} />
              <span className="font-serif text-lg font-medium text-foreground">{city}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
    <SectionDivider color="hsl(var(--cream))" flip />
  </>
);

export default ServiceArea;
