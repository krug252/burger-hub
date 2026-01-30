import { motion } from "framer-motion";

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  text: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Lucas M.",
    avatar: "LM",
    rating: 5,
    text: "Melhor hambúrguer da cidade, sem comparação! O blend é absurdo de bom e o atendimento é nota 10.",
  },
  {
    id: 2,
    name: "Carla S.",
    avatar: "CS",
    rating: 5,
    text: "O Monstro da Casa é simplesmente inacreditável. Chegou quentinho e perfeito. Virei cliente fiel!",
  },
  {
    id: 3,
    name: "Pedro R.",
    avatar: "PR",
    rating: 5,
    text: "Qualidade premium a um preço justo. O pão brioche é sensacional e o bacon super crocante.",
  },
  {
    id: 4,
    name: "Ana B.",
    avatar: "AB",
    rating: 5,
    text: "Finalmente um hambúrguer artesanal de verdade! Dá pra sentir a diferença em cada mordida.",
  },
];

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

const Reviews = () => {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block mb-4 text-primary text-sm font-medium tracking-wider uppercase">
            Avaliações
          </span>
          <h2 className="font-display text-4xl md:text-5xl">
            O QUE NOSSOS CLIENTES{" "}
            <span className="text-primary">DIZEM</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-[1200px]"
        >
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              variants={cardVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{
                rotateX: -8,
                rotateY: 8,
                scale: 1.05,
              }}
              className="relative bg-muted/30 rounded-2xl p-6 transform-gpu shadow-lg hover:shadow-2xl transition-shadow"
            >
              {/* Glow */}
              <div className="absolute -inset-1 bg-primary/10 opacity-0 hover:opacity-100 blur-xl rounded-2xl transition-opacity -z-10" />

              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                  {review.avatar}
                </div>

                <div>
                  <h4 className="font-semibold">{review.name}</h4>
                  <div className="flex gap-0.5">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <motion.svg
                        key={i}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="w-4 h-4 text-secondary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </motion.svg>
                    ))}
                  </div>
                </div>
              </div>

              {/* Text */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                “{review.text}”
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
