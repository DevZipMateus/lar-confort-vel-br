import { Instagram, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container-custom px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo and Description */}
          <div>
            <img
              src={logo}
              alt="Outlet Star House - Logo"
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="font-body text-background/70 leading-relaxed">
              Há 9 anos transformando lares com conforto de qualidade e preços
              acessíveis.
            </p>
          </div>

          {/* Quick Links */}
          <div>
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
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">
              Contato
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="font-body text-background/70">
                  Rua Ragueb Chohfi, 4470
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="mailto:carlos.guto77@gmail.com"
                  className="font-body text-background/70 hover:text-primary transition-colors"
                >
                  carlos.guto77@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
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
