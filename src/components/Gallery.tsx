import SectionDivider from "./SectionDivider";

const images = [
  { src: "/foto03.jpg", alt: "Organização de almofadas em sala elegante" },
  { src: "/foto04.jpg", alt: "Mesa sendo arrumada com cuidado" },
  { src: "/foto07.jpg", alt: "Atendimento ao cliente com tablet em residência de alto padrão" },
  { src: "/foto06.jpg", alt: "Ambiente de quarto organizado com padrão elevado" },
  { src: "/foto05.jpg", alt: "Limpeza de vidro com vista para piscina" }
  
];

const Gallery = () => (
  <>
    <SectionDivider color="hsl(var(--cream))" />

    <section className="bg-cream py-20 md:py-28">
      <div className="container mx-auto px-6">

        <h2 className="text-center text-3xl font-light tracking-tight text-primary md:text-4xl lg:text-5xl">
          Nosso trabalho
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-center font-sans text-base text-muted-foreground">
          Cuidado, sofisticação e postura profissional em cada detalhe.
        </p>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-xl ${
                i === 0 ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>

      </div>
    </section>

    <SectionDivider color="hsl(var(--cream))" flip />
  </>
);

export default Gallery;