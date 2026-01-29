const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <a href="#" className="font-display text-2xl mb-4 inline-block">
              BURGER<span className="text-primary">HOUSE</span>
            </a>
            <p className="text-muted-foreground text-sm">
              Hambúrgueres artesanais feitos com paixão. 
              Blend exclusivo, ingredientes premium e aquele 
              sabor que você não encontra em qualquer lugar.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-4">NAVEGAÇÃO</h4>
            <nav className="flex flex-col gap-2">
              <a href="#sobre" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Sobre Nós
              </a>
              <a href="#cardapio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Cardápio
              </a>
              <a href="#delivery" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Delivery
              </a>
              <a href="#localizacao" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Localização
              </a>
              <a href="#contato" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contato
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg mb-4">CONTATO</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Rua das Hamburguerias, 123</p>
              <p>Centro - São Paulo/SP</p>
              <p>Tel: (11) 99999-9999</p>
              <p>@burgerhouse</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} BurgerHouse. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
