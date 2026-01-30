import { useState } from "react";
import burgerClassic from "@/assets/burger-classic.jpg";
import burgerCheeseBacon from "@/assets/burger-cheese-bacon.jpg";
import burgerBbq from "@/assets/burger-bbq.jpg";
import burgerSpecial from "@/assets/burger-special.jpg";
import burgerEgg from "@/assets/burger-egg.jpg";
import burgerTruffle from "@/assets/burger-truffle.jpg";
import burgerHouse from "@/assets/burger-house.jpg";
import fries from "@/assets/fries.jpg";
import onionRings from "@/assets/onion-rings.jpg";
import friesLoaded from "@/assets/fries-loaded.jpg";
import comboClassic from "@/assets/combo-classic.jpg";
import comboPremium from "@/assets/combo-premium.jpg";


type Category =
  | "todos"
  | "classicos"
  | "especiais"
  | "combos"
  | "acompanhamentos";


interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: Category;
  featured?: boolean;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Smash Clássico",
    description: "Blend 160g, queijo cheddar, cebola caramelizada, pickles e molho especial",
    price: 32.9,
    image: burgerClassic,
    category: "classicos",
  },
  {
    id: 2,
    name: "Cheese Bacon",
    description: "Blend 160g, queijo cheddar duplo, bacon crocante e maionese defumada",
    price: 36.9,
    image: burgerCheeseBacon,
    category: "classicos",
  },
  {
    id: 3,
    name: "BBQ Ranch",
    description: "Blend 160g, queijo prato, bacon, onion rings, molho BBQ e ranch",
    price: 38.9,
    image: burgerBbq,
    category: "classicos",
  },
  {
    id: 4,
    name: "Blue Cheese",
    description: "Blend 180g, gorgonzola, bacon crocante, rúcula e cebola roxa",
    price: 44.9,
    image: burgerSpecial,
    category: "especiais",
  },
  {
    id: 5,
    name: "Egg Bacon",
    description: "Blend 180g, ovo com gema mole, bacon, queijo e molho chipotle",
    price: 42.9,
    image: burgerEgg,
    category: "especiais",
  },
  {
    id: 6,
    name: "Trufado",
    description: "Blend 180g, queijo brie, cogumelos salteados e maionese trufada",
    price: 49.9,
    image: burgerTruffle,
    category: "especiais",
  },
  {
    id: 7,
    name: "Monstro da Casa",
    description: "Blend triplo 480g, cheddar triplo, bacon duplo, onion rings e molho especial",
    price: 59.9,
    image: burgerHouse,
    category: "especiais",
    featured: true,
  },
  {
    id: 8,
    name: "Combo Clássico",
    description: "Smash Clássico + Fritas médias + Refrigerante 350ml",
    price: 49.9,
    image: comboClassic,
    category: "combos",
  },
  {
    id: 9,
    name: "Combo Premium",
    description: "Qualquer especial + Fritas grandes + Milk Shake",
    price: 69.9,
    image: comboPremium,
    category: "combos",
  },
  {
    id: 10,
    name: "Batata Frita",
    description: "Porção generosa de fritas crocantes com molho da casa",
    price: 18.9,
    image: fries,
    category: "acompanhamentos",
  },
  {
    id: 11,
    name: "Onion Rings",
    description: "Anéis de cebola empanados e crocantes",
    price: 22.9,
    image: onionRings,
    category: "acompanhamentos",
  },
  {
    id: 12,
    name: "Batata com Cheddar",
    description: "Fritas cobertas com cheddar cremoso e bacon",
    price: 28.9,
    image: friesLoaded,
    category: "acompanhamentos",
  },
];

const categories: { id: Category; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "classicos", label: "Clássicos" },
  { id: "especiais", label: "Especiais" },
  { id: "combos", label: "Combos" },
  { id: "acompanhamentos", label: "Acompanhamentos" },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] =
    useState<Category>("classicos");

const filteredItems =
  activeCategory === "todos"
    ? menuItems
    : menuItems.filter(
        (item) => item.category === activeCategory
      );


  return (
    <section id="cardapio" className="section-padding bg-background">
      <div className="container mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block mb-4 text-primary text-sm font-medium tracking-wider uppercase">
            Nosso Cardápio
          </span>

          <h2 className="font-display text-4xl md:text-5xl mb-4">
            CONHEÇA NOSSOS <span className="text-primary">SABORES</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Todos os hambúrgueres são feitos na hora, com ingredientes frescos e muito carinho.
          </p>
        </div>

        {/* Categorias */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300
                ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground scale-105 shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:scale-105"
                }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          key={activeCategory}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-300"
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-muted/30 rounded-2xl overflow-hidden
                         border border-border transition-all duration-300
                         hover:-translate-y-3 hover:shadow-2xl
                         hover:border-primary/40"
            >
              {/* Destaque */}
              {item.featured && (
                <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-secondary text-secondary-foreground text-xs font-bold rounded-full shadow-md">
                  ★ DESTAQUE
                </div>
              )}

              {/* Imagem */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500
                             group-hover:scale-110"
                />

                {/* Overlay brilho */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              {/* Conteúdo */}
              <div className="p-6 relative z-10">
                <h3 className="font-display text-2xl mb-2 transition-colors group-hover:text-primary">
                  {item.name}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {item.description}
                </p>

                <span className="font-display text-2xl text-primary">
                  R$ {item.price.toFixed(2).replace(".", ",")}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Menu;