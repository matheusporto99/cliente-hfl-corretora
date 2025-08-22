import { useState } from "react";
import { Menu, X } from "lucide-react";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [{
    name: "Features",
    href: "#features"
  }, {
    name: "How It Works",
    href: "#how-it-works"
  }, {
    name: "Why Choose",
    href: "#why-choose"
  }, {
    name: "Testimonials",
    href: "#testimonials"
  }, {
    name: "FAQ",
    href: "#faq"
  }];
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">
              HFL Corretora de Seguros
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => {})}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button className="btn-primary">
              Quero Minha Cotação
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground hover:text-primary transition-colors duration-300">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navLinks.map(link => <a key={link.name} href={link.href} className="text-foreground hover:text-primary transition-colors duration-300 font-medium px-4 py-2" onClick={() => setIsOpen(false)}>
                  {link.name}
                </a>)}
              <div className="px-4 pt-4">
                <button className="btn-primary w-full">
                  Quero Minha Cotação
                </button>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;