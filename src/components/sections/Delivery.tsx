import { useEffect, useRef } from "react";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const Delivery = () => {
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
      id="delivery"
      ref={sectionRef}
      className="section-padding hero-gradient relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="animate-on-scroll inline-block mb-4 text-primary text-sm font-medium tracking-wider uppercase">
            Delivery
          </span>
          <h2 className="animate-on-scroll animate-delay-100 font-display text-4xl md:text-6xl mb-6">
            RECEBA EM CASA <span className="text-gradient">QUENTINHO</span>
          </h2>
          <p className="animate-on-scroll animate-delay-200 text-xl text-muted-foreground mb-12">
            Faça seu pedido pelo WhatsApp e receba seu hambúrguer artesanal no conforto da sua casa.
          </p>

          <div className="animate-on-scroll animate-delay-300 mb-12">
            <WhatsAppButton size="lg">
              Pedir pelo WhatsApp
            </WhatsAppButton>
          </div>

          {/* Info Cards */}
          <div className="animate-on-scroll animate-delay-400 grid md:grid-cols-3 gap-6">
            <div className="card-gradient rounded-2xl p-6 card-shadow">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-primary"
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
              <h3 className="font-display text-2xl mb-2">HORÁRIO</h3>
              <p className="text-muted-foreground">
                Ter a Dom: 18h às 23h
                <br />
                Sex e Sáb: 18h às 00h
              </p>
            </div>

            <div className="card-gradient rounded-2xl p-6 card-shadow">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-primary"
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
              <h3 className="font-display text-2xl mb-2">ÁREA DE ENTREGA</h3>
              <p className="text-muted-foreground">
                Centro e bairros próximos
                <br />
                Raio de até 8km
              </p>
            </div>

            <div className="card-gradient rounded-2xl p-6 card-shadow">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-display text-2xl mb-2">TAXA</h3>
              <p className="text-muted-foreground">
                A partir de R$ 5,00
                <br />
                Grátis acima de R$ 80
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
