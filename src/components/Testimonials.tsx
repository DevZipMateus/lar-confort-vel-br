import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Fernanda",
      text: "Kamily, eu amei o colchão, excelente qualidade. E o atendimento excelente, perfeito, você me ajudou a escolher o colchão exatamente para minhas necessidades e superou as minhas expectativas. Muito obrigada!",
      rating: 5,
    },
    {
      name: "Carlos M.",
      text: "Comprei um sofá retrátil e reclinável e estou muito satisfeito. Qualidade impecável e preço justo. Recomendo a todos!",
      rating: 5,
    },
    {
      name: "Ana Paula",
      text: "Atendimento humanizado de verdade. Me senti acolhida e encontrei exatamente o que precisava para minha casa nova.",
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            A satisfação dos nossos clientes é o nosso maior orgulho
          </p>
          <div className="w-24 h-1 bg-gradient-copper mx-auto rounded-full mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-8 shadow-elegant hover:shadow-copper transition-all duration-300 relative"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-primary fill-primary"
                  />
                ))}
              </div>
              
              <p className="font-body text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-copper rounded-full flex items-center justify-center">
                  <span className="font-display text-lg font-bold text-primary-foreground">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <span className="font-display font-semibold text-foreground">
                  {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
