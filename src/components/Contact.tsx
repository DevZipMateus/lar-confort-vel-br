import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua Ragueb Chohfi, 4470",
      link: "https://maps.google.com/?q=Rua+Ragueb+Chohfi+4470",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "carlos.guto77@gmail.com",
      link: "mailto:carlos.guto77@gmail.com",
    },
    {
      icon: Clock,
      title: "Horário de funcionamento",
      content: "Segunda a Sábado: 09:30 às 19:30\nDomingos: 09:30 às 14:00",
      link: null,
    },
    {
      icon: Instagram,
      title: "Instagram",
      content: "@outletstarhouse",
      link: "https://www.instagram.com/outletstarhouse/",
    },
  ];

  return (
    <section id="contato" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Entre em contato
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Visite nossa loja ou entre em contato conosco. Estamos prontos para
            ajudar você a encontrar o conforto ideal para seu lar.
          </p>
          <div className="w-24 h-1 bg-gradient-copper mx-auto rounded-full mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-elegant hover:shadow-copper transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div className="w-14 h-14 bg-gradient-copper rounded-xl flex items-center justify-center mx-auto mb-4">
                <info.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {info.title}
              </h3>
              
              {info.link ? (
                <a
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-muted-foreground hover:text-primary transition-colors whitespace-pre-line"
                >
                  {info.content}
                </a>
              ) : (
                <p className="font-body text-muted-foreground whitespace-pre-line">
                  {info.content}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Map */}
        <div className="mt-8 sm:mt-12 rounded-2xl overflow-hidden shadow-elegant">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.4!2d-46.48!3d-23.61!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRua%20Ragueb%20Chohfi%2C%204470!5e0!3m2!1spt-BR!2sbr!4v1234567890"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Outlet Star House"
            className="h-[250px] sm:h-[300px] md:h-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
