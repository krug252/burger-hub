import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Delivery = () => {
  return (
    <section id="delivery" className="section-padding bg-muted/30 overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="inline-block mb-4 text-primary text-sm font-medium tracking-wider uppercase">
            Funcionamento
          </span>

          <h2 className="font-display text-4xl md:text-5xl mb-6">
            HORÁRIOS E <span className="text-primary">ENTREGA</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-14">
            Atendemos presencialmente e também via delivery para a sua comodidade.
          </p>

          {/* Info Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 perspective-[1200px]"
          >
            {[
              {
                title: "HORÁRIO",
                text: (
                  <>
                    Ter a Dom: 18h às 23h
                    <br />
                    Sex e Sáb: 18h às 00h
                  </>
                ),
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                ),
              },
              {
                title: "ÁREA DE ENTREGA",
                text: (
                  <>
                    Centro e bairros próximos
                    <br />
                    Raio de até 8km
                  </>
                ),
                icon: (
                  <>
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
                  </>
                ),
              },
              {
                title: "TAXA",
                text: (
                  <>
                    A partir de R$ 5,00
                    <br />
                    Grátis acima de R$ 80
                  </>
                ),
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                ),
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{
                  rotateX: -6,
                  rotateY: 6,
                  scale: 1.05,
                }}
                className="relative bg-background rounded-2xl p-6 border border-border shadow-lg hover:shadow-2xl transition-shadow transform-gpu"
              >
                {/* Glow */}
                <div className="absolute -inset-1 bg-primary/10 opacity-0 hover:opacity-100 blur-xl rounded-2xl transition-opacity -z-10" />

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 6, scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center"
                >
                  <svg
                    className="w-7 h-7 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {item.icon}
                  </svg>
                </motion.div>

                <h3 className="font-display text-2xl mb-2">
                  {item.title}
                </h3>

                <p className="text-muted-foreground">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Delivery;