import { Bed, Sofa, Armchair } from "lucide-react";
import { Button } from "@/components/ui/button";
import colchaoBenefit from "@/assets/colchao-benefit.jpg";
import colchaoMegasupport from "@/assets/colchao-megasupport.jpg";

const Products = () => {
  const categories = [
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

  const gallery = [
    {
      image: colchaoBenefit,
      title: "Colchão Benefit",
      description: "Conforto premium com design elegante e cabeceira capitonê",
    },
    {
      image: colchaoMegasupport,
      title: "Colchão Mega Support",
      description: "Suporte extra para até 150kg - Densidade D45",
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

        {/* Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {categories.map((product) => (
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

        {/* Real Product Gallery */}
        <div className="bg-card rounded-3xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Conheça nossos produtos
            </h3>
            <p className="font-body text-muted-foreground">
              Fotos reais da nossa loja
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {gallery.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-elegant hover:shadow-copper transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="font-display text-xl font-semibold text-background mb-2">
                    {item.title}
                  </h4>
                  <p className="font-body text-sm text-background/80">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
