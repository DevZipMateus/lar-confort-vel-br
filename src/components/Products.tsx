import { Bed, Sofa, Armchair } from "lucide-react";
import { Button } from "@/components/ui/button";

const Products = () => {
  const products = [
    {
      icon: Bed,
      title: "Colchões",
      description:
        "Colchões de molas, espuma e híbridos das melhores marcas. Qualidade premium com preços de outlet para noites de sono perfeitas.",
      features: ["Molas ensacadas", "Espuma viscoelástica", "Ortopédicos"],
    },
    {
      icon: Sofa,
      title: "Sofás",
      description:
        "Sofás modernos e clássicos em diversos tamanhos e acabamentos. Elegância e conforto para sua sala de estar.",
      features: ["Retrátil e reclinável", "Canto e chaise", "Compactos"],
    },
    {
      icon: Armchair,
      title: "Estofados e móveis",
      description:
        "Poltronas, puffs e móveis complementares para criar o ambiente perfeito. Variedade de estilos e cores.",
      features: ["Poltronas decorativas", "Puffs e banquetas", "Cabeceiras"],
    },
  ];

  return (
    <section id="produtos" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nossos produtos
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma seleção completa de colchões, sofás, estofados e móveis com foco
            em conforto, qualidade e elegância.
          </p>
          <div className="w-24 h-1 bg-gradient-copper mx-auto rounded-full mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-elegant hover:shadow-copper transition-all duration-500 hover:-translate-y-3"
            >
              <div className="bg-gradient-copper p-8 flex items-center justify-center">
                <product.icon className="w-16 h-16 text-primary-foreground group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <div className="p-8">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                  {product.title}
                </h3>
                <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="font-body text-sm text-foreground flex items-center gap-2"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-copper-dark text-primary-foreground font-body font-semibold px-10 py-6 text-base shadow-copper transition-all duration-300 hover:scale-105"
          >
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar disponibilidade
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
