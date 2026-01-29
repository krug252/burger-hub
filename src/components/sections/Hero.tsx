import heroBurger from "@/assets/hero-burger.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBurger}
          alt="Hambúrguer artesanal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <span className="inline-block mb-4 px-4 py-2 rounded-full border border-primary/50 text-primary text-sm font-medium tracking-wider uppercase">
          Hambúrgueria Artesanal
        </span>
        
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl leading-none mb-6">
          BURGER<span className="text-primary">HOUSE</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Desde 2019 servindo hambúrgueres artesanais com ingredientes 
          selecionados e muito carinho. Conheça nossa história.
        </p>

        <a
          href="#sobre"
          className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold border border-foreground/20 rounded-lg hover:bg-foreground/5 transition-colors"
        >
          Conheça a Casa
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <svg
          className="w-6 h-6 text-muted-foreground animate-bounce"
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
