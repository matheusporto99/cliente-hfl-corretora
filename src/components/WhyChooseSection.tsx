import { Award, FileText, Zap, Users, Clock, DollarSign } from "lucide-react";
const WhyChooseSection = () => {
  const pillars = [{
    icon: Award,
    title: "18 anos de mercado",
    description: "Histórico sólido, com milhares de clientes atendidos e sinistros pagos sem dor de cabeça."
  }, {
    icon: FileText,
    title: "Explicação clara do contrato",
    description: "Sem letras miúdas: você entende cada cobertura antes de assinar."
  }, {
    icon: Zap,
    title: "Agilidade incomparável",
    description: "Orçamento em até 20 minutos e vistoria online com cobertura imediata."
  }, {
    icon: Users,
    title: "Acompanhamento pessoal no sinistro",
    description: "Estamos do seu lado até a saída do carro da oficina, não deixamos você sozinho."
  }, {
    icon: Clock,
    title: "Assistência 24h completa",
    description: "Carro reserva equivalente, guincho, chaveiro e suporte emergencial a qualquer hora."
  }, {
    icon: DollarSign,
    title: "Preço competitivo",
    description: "Condições exclusivas pelo volume de produção e relacionamento com seguradoras."
  }];
  return <section id="why-choose" className="py-32 bg-gradient-to-br from-secondary/50 to-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 fade-in-up">
          <h2 className="heading-section mb-6">
            Por que escolher a <span className="text-primary">HFL</span>?
          </h2>
          <p className="text-hero max-w-3xl mx-auto">Há 18 anos protegendo veículos com excelência e confiança.</p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => <div key={pillar.title} className="group relative bg-card p-8 rounded-2xl shadow-[--shadow-card] transition-all duration-500 hover:shadow-[--shadow-hero] hover:-translate-y-2 border border-border/30 fade-in-up" style={{
          animationDelay: `${index * 150}ms`
        }}>
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <pillar.icon className="w-8 h-8" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>)}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 fade-in-up">
          <button className="btn-cta">
            Conheça Nossa Proposta
          </button>
        </div>
      </div>
    </section>;
};
export default WhyChooseSection;