import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Menu from "@/components/sections/Menu";
import Delivery from "@/components/sections/Delivery";
import Reviews from "@/components/sections/Reviews";
import Location from "@/components/sections/Location";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Delivery />
        <Reviews />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
