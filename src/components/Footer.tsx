import { Linkedin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-8">
          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              HFL Corretora de Seguros
            </h2>
            <p className="text-background/80 max-w-2xl mx-auto">
              Mais de 18 anos protegendo veículos em todo o Brasil com 
              transparência, agilidade e atendimento humanizado.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="flex items-center justify-center w-12 h-12 rounded-lg bg-background/10 text-background hover:bg-background hover:text-foreground transition-all duration-300 hover:scale-110"
                aria-label={social.name}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-background/20">
            <p className="text-background/60">
              © 2025 HFL Corretora de Seguros. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;