import burgerHouse from "@/assets/burger-house.jpg";

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <img
                src={burgerHouse}
                alt="Hambúrguer da casa"
                className="w-full aspect-square object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block mb-4 text-primary text-sm font-medium tracking-wider uppercase">
              Nossa História
            </span>
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              MAIS QUE UM HAMBÚRGUER,<br />
              <span className="text-primary">UMA EXPERIÊNCIA</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                Nascemos da obsessão por um hambúrguer perfeito. Nada de 
                fórmulas prontas ou ingredientes genéricos. Cada detalhe é 
                pensado para entregar uma experiência única.
              </p>
              <p>
                Nosso blend é desenvolvido com cortes nobres selecionados 
                diariamente. O pão brioche é assado aqui mesmo, e todos os 
                molhos são preparados artesanalmente, do zero.
              </p>
              <p>
                Desde 2019, servimos sabor de verdade para quem valoriza 
                qualidade. Seja no balcão ou no delivery, a experiência é 
                a mesma: hambúrguer artesanal sem frescura, mas com muito respeito.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-6">
              <div className="text-center">
                <span className="block font-display text-4xl text-primary">5+</span>
                <span className="text-sm text-muted-foreground">Anos de história</span>
              </div>
              <div className="text-center">
                <span className="block font-display text-4xl text-primary">50K+</span>
                <span className="text-sm text-muted-foreground">Burgers servidos</span>
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
