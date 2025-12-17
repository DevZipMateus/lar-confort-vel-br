import { Button } from "@/components/ui/button";
import { useEffect, useState, useCallback } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import heroSofa from "@/assets/hero-sofa.jpg";
import heroColchao from "@/assets/hero-colchao.jpg";
import heroEstofados from "@/assets/hero-estofados.jpg";

const heroImages = [
  { src: heroBg, alt: "Ambiente elegante com sofá e cama confortáveis" },
  { src: heroSofa, alt: "Sala de estar luxuosa com sofá premium" },
  { src: heroColchao, alt: "Quarto elegante com colchão de alta qualidade" },
  { src: heroEstofados, alt: "Showroom com estofados premium" },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/40" />
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-primary w-8"
                : "bg-background/50 hover:bg-background/80"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-4 sm:px-6 md:px-8 pt-24 sm:pt-28 md:pt-20">
        <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 opacity-0 animate-fade-in-up">
            Outlet Star House
          </h1>
          
          <h2 className="font-display text-xl md:text-2xl lg:text-3xl text-cream mb-4 opacity-0 animate-fade-in-up animation-delay-200">
            Colchões e sofás premium com preços acessíveis para transformar seu lar
          </h2>
          
          <p className="font-body text-lg md:text-xl text-cream/90 mb-8 opacity-0 animate-fade-in-up animation-delay-400">
            "Conforto que transforma seu lar."
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-in-up animation-delay-600">
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
