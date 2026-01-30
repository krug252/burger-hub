import burgerHouse from "@/assets/burger-house.jpg";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const imageReveal = {
  hidden: { clipPath: "inset(0 0 100% 0)" },
  visible: { clipPath: "inset(0 0 0% 0)" },
};

const About = () => {
  return (
    <motion.section
      id="sobre"
      className="section-padding bg-muted/30 overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              variants={imageReveal}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="rounded-2xl overflow-hidden group"
            >
              <motion.img
                src={burgerHouse}
                alt="Hambúrguer da casa"
                className="w-full aspect-square object-cover"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </motion.div>

            {/* Glow decorativo */}
            <div className="absolute -inset-6 bg-primary/10 blur-3xl -z-10 rounded-full" />
          </motion.div>

          {/* Content */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <span className="inline-block mb-4 text-primary text-sm font-medium tracking-wider uppercase">
              Nossa História
            </span>

            {/* Linha animada */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="h-[2px] bg-primary mb-6"
            />

            <h2 className="font-display text-4xl md:text-5xl mb-6 leading-tight">
              MAIS QUE UM HAMBÚRGUER,
              <br />
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

            {/* Stats */}
            <motion.div
              className="mt-10 grid grid-cols-3 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
            >
              {[
                { value: "5+", label: "Anos de história" },
                { value: "50K+", label: "Burgers servidos" },
                { value: "4.9", label: "Avaliação média" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="text-center"
                >
                  <span className="block font-display text-4xl text-primary">
                    {item.value}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
