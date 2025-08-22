import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonial = {
    name: "Raphael Medeiros",
    location: "Aracaju/SE",
    avatar: "RM",
    rating: 5,
    text: "Tive perda total de um caminhão e da carga. Pensei que ia ser um pesadelo, mas foi tudo resolvido. Recebi R$ 720 mil em indenização, incluindo o veículo, a carga e até terceiros. Nunca imaginei que poderia ser tão rápido e transparente.",
  };

  return (
    <section id="testimonials" className="py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 fade-in-up">
          <h2 className="heading-section mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="text-hero max-w-3xl mx-auto">
            Histórias reais de quem confia na HFL para proteger seus veículos
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto fade-in-up scale-in">
          <div className="relative bg-gradient-to-br from-card to-secondary/30 p-12 lg:p-16 rounded-3xl shadow-[--shadow-hero] border border-border/30">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 text-primary/20">
              <Quote className="w-16 h-16" fill="currentColor" />
            </div>

            {/* Rating */}
            <div className="flex items-center justify-center gap-2 mb-8">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-2xl lg:text-3xl font-medium text-foreground text-center leading-relaxed mb-12 relative z-10">
              "{testimonial.text}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground font-bold text-xl">
                {testimonial.avatar}
              </div>
              <div className="text-center">
                <div className="font-semibold text-lg text-foreground">
                  {testimonial.name}
                </div>
                <div className="text-muted-foreground">
                  {testimonial.location}
                </div>
              </div>
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
          {[
            { number: "10.000+", label: "Veículos Protegidos" },
            { number: "18", label: "Anos de Experiência" },
            { number: "720mil", label: "Maior Indenização Paga" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-muted/30 fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;