import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Ambiente elegante com sofá e cama confortáveis"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-4 md:px-8 pt-20">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 opacity-0 animate-fade-in-up">
            Outlet Star House
          </h1>
          
          <h2 className="font-display text-xl md:text-2xl lg:text-3xl text-cream mb-4 opacity-0 animate-fade-in-up animation-delay-200">
            Colchões e sofás premium com preços acessíveis para transformar seu lar
          </h2>
          
          <p className="font-body text-lg md:text-xl text-cream/90 mb-8 opacity-0 animate-fade-in-up animation-delay-400">
            "Conforto que transforma seu lar."
          </p>

          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up animation-delay-600">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-copper-dark text-primary-foreground font-body font-semibold px-8 py-6 text-base shadow-copper transition-all duration-300 hover:scale-105"
            >
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fale conosco
              </a>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-cream/60 bg-cream/10 text-cream hover:bg-cream hover:text-foreground font-body font-semibold px-8 py-6 text-base transition-all duration-300"
            >
              <a href="#produtos">Ver produtos</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
