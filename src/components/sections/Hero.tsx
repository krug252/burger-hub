import { useEffect, useRef } from "react";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import heroBurger from "@/assets/hero-burger.jpg";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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

    const elements = heroRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBurger}
          alt="Hambúrguer artesanal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <span className="animate-on-scroll inline-block mb-4 px-4 py-2 rounded-full border border-primary/50 text-primary text-sm font-medium tracking-wider uppercase">
          Hambúrgueria Artesanal
        </span>
        
        <h1 className="animate-on-scroll animate-delay-100 font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-none mb-6">
          O HAMBÚRGUER
          <br />
          <span className="text-gradient">QUE VOCÊ RESPEITA</span>
        </h1>
        
        <p className="animate-on-scroll animate-delay-200 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Blend artesanal, ingredientes selecionados e aquele sabor que só a grelha certa consegue dar. 
          Feito pra quem entende.
        </p>

        <div className="animate-on-scroll animate-delay-300 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <WhatsAppButton size="lg">
            Pedir Agora
          </WhatsAppButton>
          <a
            href="#cardapio"
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold border border-foreground/20 rounded-lg hover:bg-foreground/5 transition-colors"
          >
            Ver Cardápio
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-muted-foreground"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
