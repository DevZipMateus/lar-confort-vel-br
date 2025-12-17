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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
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

        {/* Google-style Review */}
        <div className="bg-background rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-elegant max-w-lg mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="font-body text-sm text-muted-foreground">Avaliação do Google</span>
          </div>
          
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 text-[#FBBC05] fill-[#FBBC05]"
              />
            ))}
          </div>
          
          <p className="font-body text-foreground leading-relaxed mb-4">
            "Eu amei o colchão, excelente qualidade. E o atendimento excelente, perfeito, me ajudaram a escolher o colchão exatamente para minhas necessidades e superou as minhas expectativas. Muito obrigada!"
          </p>
          
          <p className="font-body text-sm text-muted-foreground">
            Cliente verificado
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
