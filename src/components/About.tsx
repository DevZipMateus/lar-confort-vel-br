import { Target, Eye, Heart } from "lucide-react";
import lojaShowroom from "@/assets/loja-showroom.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Missão",
      description:
        "Oferecer colchões, sofás e produtos de conforto com qualidade, design e preço acessível, proporcionando bem-estar e experiências positivas para cada cliente.",
    },
    {
      icon: Eye,
      title: "Visão",
      description:
        "Ser a principal referência em conforto e mobiliário acessível na região, reconhecida pela qualidade dos produtos e excelência no atendimento.",
    },
    {
      icon: Heart,
      title: "Valores",
      description:
        "Conforto e qualidade, atendimento humanizado, honestidade, acessibilidade, compromisso com o lar do cliente e inovação contínua.",
    },
  ];

  return (
    <section id="sobre" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Sobre a Outlet Star House
          </h2>
          <div className="w-24 h-1 bg-gradient-copper mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
              Nossa história
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              A Outlet Star House surgiu há 9 anos com a missão de oferecer
              conforto acessível por meio de colchões e sofás. Começamos como um
              saldão, focados em oportunidades de preço, mas rapidamente
              percebemos que nossos clientes buscavam algo além: qualidade,
              elegância e produtos que valorizassem o lar.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Essa percepção nos fez evoluir. Transformamos nossa operação em
              uma rede de outlet premium, com produtos selecionados, design
              moderno e atendimento mais próximo e cuidadoso, sempre mantendo o
              compromisso com o preço justo.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Hoje, a Outlet Star House une o melhor dos dois mundos:{" "}
              <span className="text-primary font-semibold">
                conforto de alta qualidade e acessibilidade
              </span>
              , oferecendo peças que transformam ambientes e elevam a
              experiência dos nossos clientes.
            </p>
          </div>

          <div className="relative max-w-sm mx-auto lg:mx-0">
            <div className="rounded-2xl overflow-hidden shadow-elegant">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-cover rounded-2xl"
              >
                <source src="/sofa.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/30 rounded-2xl -z-10" />
          </div>
        </div>

        {/* Showroom Image */}
        <div className="mb-20 rounded-2xl overflow-hidden shadow-elegant">
          <img
            src={lojaShowroom}
            alt="Showroom Outlet Star House - Colchões e Sofás"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="bg-gradient-copper p-6 text-center">
            <p className="font-display text-lg md:text-xl text-primary-foreground">
              Visite nossa loja e confira nossa variedade de produtos
            </p>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <div
              key={item.title}
              className="bg-background rounded-2xl p-8 shadow-elegant hover:shadow-copper transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-copper rounded-xl flex items-center justify-center mb-6">
                <item.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                {item.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
