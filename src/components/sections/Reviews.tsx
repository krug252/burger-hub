import { useEffect, useRef } from "react";

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

const Reviews = () => {
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
    <section ref={sectionRef} className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="animate-on-scroll inline-block mb-4 text-primary text-sm font-medium tracking-wider uppercase">
            Avaliações
          </span>
          <h2 className="animate-on-scroll animate-delay-100 font-display text-4xl md:text-6xl mb-4">
            O QUE <span className="text-gradient">DIZEM POR AÍ</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={`animate-on-scroll animate-delay-${index * 100} card-gradient rounded-2xl p-6 card-shadow`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                  {review.avatar}
                </div>
                <div>
                  <h4 className="font-semibold">{review.name}</h4>
                  <div className="flex gap-0.5">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-secondary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
