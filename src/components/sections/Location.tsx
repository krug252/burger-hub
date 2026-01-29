import { useEffect, useRef } from "react";

const Location = () => {
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
      id="localizacao"
      ref={sectionRef}
      className="section-padding hero-gradient"
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="animate-on-scroll inline-block mb-4 text-primary text-sm font-medium tracking-wider uppercase">
              Onde Estamos
            </span>
            <h2 className="animate-on-scroll animate-delay-100 font-display text-4xl md:text-6xl mb-6">
              VENHA <span className="text-gradient">NOS VISITAR</span>
            </h2>
            <div className="animate-on-scroll animate-delay-200 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl mb-1">ENDEREÇO</h3>
                  <p className="text-muted-foreground">
                    Rua das Hamburguerias, 123
                    <br />
                    Centro - São Paulo/SP
                    <br />
                    CEP: 01234-567
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl mb-1">HORÁRIO</h3>
                  <p className="text-muted-foreground">
                    Terça a Domingo: 18h às 23h
                    <br />
                    Sexta e Sábado: 18h às 00h
                    <br />
                    Segunda: Fechado
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="animate-on-scroll animate-delay-300 relative">
            <div className="rounded-2xl overflow-hidden card-shadow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976951333286!2d-46.65390492375828!3d-23.564611178805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1699999999999!5m2!1spt-BR!2sbr"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="absolute -z-10 -bottom-4 -left-4 w-full h-full border-2 border-primary/30 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
