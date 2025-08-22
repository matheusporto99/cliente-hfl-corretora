const CredibilityLogos = () => {
  const partners = [
    { name: "Partner 1", logo: "P1" },
    { name: "Partner 2", logo: "P2" },
    { name: "Partner 3", logo: "P3" },
    { name: "Partner 4", logo: "P4" },
    { name: "Partner 5", logo: "P5" },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-muted-foreground font-medium">
            Trabalhamos com as principais seguradoras do Brasil
          </p>
        </div>
        <div className="flex justify-center items-center gap-8 lg:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-500">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 bg-background rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:scale-110"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-2xl font-bold text-muted-foreground">
                {partner.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredibilityLogos;