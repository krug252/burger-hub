import { useEffect, useRef } from "react";
import burgerHouse from "@/assets/burger-house.jpg";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="section-padding hero-gradient"
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="animate-on-scroll relative">
            <div className="relative rounded-2xl overflow-hidden card-shadow">
              <img
                src={burgerHouse}
                alt="Hambúrguer da casa"
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-4 py-2 bg-primary text-primary-foreground text-sm font-bold rounded-full">
                  ★ HAMBÚRGUER DA CASA
                </span>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full border-2 border-primary/30 rounded-2xl" />
          </div>

          {/* Content */}
          <div>
            <span className="animate-on-scroll inline-block mb-4 text-primary text-sm font-medium tracking-wider uppercase">
              Nossa História
            </span>
            <h2 className="animate-on-scroll animate-delay-100 font-display text-4xl md:text-6xl mb-6">
              FEITO COM <span className="text-gradient">PAIXÃO</span>
            </h2>
            <div className="animate-on-scroll animate-delay-200 space-y-4 text-muted-foreground">
              <p className="text-lg">
                Nascemos da obsessão por um hambúrguer perfeito. Nada de 
                fórmulas prontas ou ingredientes genéricos. Cada detalhe é 
                pensado pra entregar uma experiência única.
              </p>
              <p>
                Nosso blend é desenvolvido com cortes nobres, o pão é assado 
                diariamente e os molhos são feitos aqui, do zero. O resultado? 
                Um hambúrguer que você não encontra em qualquer esquina.
              </p>
              <p>
                Desde 2019, servimos sabor de verdade pra quem valoriza 
                qualidade. Seja no balcão ou no delivery, a experiência é a mesma: 
                hambúrguer artesanal sem frescura, mas com muito respeito.
              </p>
            </div>

            <div className="animate-on-scroll animate-delay-300 mt-8 grid grid-cols-3 gap-6">
              <div className="text-center">
                <span className="block font-display text-4xl text-primary">5+</span>
                <span className="text-sm text-muted-foreground">Anos de história</span>
              </div>
              <div className="text-center">
                <span className="block font-display text-4xl text-primary">50K+</span>
                <span className="text-sm text-muted-foreground">Burgers vendidos</span>
              </div>
              <div className="text-center">
                <span className="block font-display text-4xl text-primary">4.9</span>
                <span className="text-sm text-muted-foreground">Avaliação média</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
