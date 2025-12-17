import { Instagram, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 sm:py-16">
      <div className="container-custom px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
          {/* Logo and Description */}
          <div className="text-center sm:text-left">
            <img
              src={logo}
              alt="Outlet Star House - Logo"
              className="h-14 sm:h-16 w-auto mb-4 brightness-0 invert mx-auto sm:mx-0"
            />
            <p className="font-body text-background/70 leading-relaxed">
              Há 9 anos transformando lares com conforto de qualidade e preços
              acessíveis.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="font-display text-lg font-semibold mb-4">
              Links rápidos
            </h3>
            <ul className="space-y-3">
              {[
                { href: "#inicio", label: "Início" },
                { href: "#sobre", label: "Sobre" },
                { href: "#produtos", label: "Produtos" },
                { href: "#depoimentos", label: "Depoimentos" },
                { href: "#contato", label: "Contato" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left sm:col-span-2 md:col-span-1">
            <h3 className="font-display text-lg font-semibold mb-4">
              Contato
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 justify-center sm:justify-start">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="font-body text-background/70">
                  Rua Ragueb Chohfi, 4470
                </span>
              </li>
              <li className="flex items-center gap-3 justify-center sm:justify-start">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="mailto:carlos.guto77@gmail.com"
                  className="font-body text-background/70 hover:text-primary transition-colors"
                >
                  carlos.guto77@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 justify-center sm:justify-start">
                <Instagram className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="https://www.instagram.com/outletstarhouse/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-background/70 hover:text-primary transition-colors"
                >
                  @outletstarhouse
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="font-body text-sm text-background/60">
            © {currentYear} Outlet Star House. Todos os direitos reservados.
          </p>
          <p className="font-body text-sm text-background/40 mt-2">
            CNPJ: 52.468.331/0001-54
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
