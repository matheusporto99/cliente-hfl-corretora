import { Clock, Shield, Users, Phone, CheckCircle, Headphones } from "lucide-react";

const FeaturesSection = () => {
  const mainFeature = {
    icon: Clock,
    title: "Orçamento em até 20 minutos",
    description: "Processo 100% digital e transparente. Receba sua cotação personalizada em minutos, não em dias.",
  };

  const secondaryFeatures = [
    {
      icon: Shield,
      title: "Vistoria online rápida",
      description: "Tire fotos pelo celular e finalize tudo online. Sem sair de casa.",
    },
    {
      icon: CheckCircle,
      title: "Cobertura ativada na hora",
      description: "Seu carro fica protegido imediatamente após a aprovação.",
    },
    {
      icon: Users,
      title: "Atendimento humano e exclusivo",
      description: "Fale sempre com a mesma pessoa que conhece seu histórico.",
    },
    {
      icon: Phone,
      title: "Acompanhamento de sinistro até o fim",
      description: "Estamos com você desde o aviso até a saída do carro da oficina.",
    },
    {
      icon: Headphones,
      title: "Assistência 24h completa",
      description: "Carro reserva, guincho, chaveiro e suporte a qualquer hora.",
    },
  ];

  return (
    <section id="features" className="py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 fade-in-up">
          <h2 className="heading-section mb-6">
            Features
          </h2>
          <p className="text-hero max-w-3xl mx-auto">
            Tecnologia de ponta para um seguro moderno e sem complicações
          </p>
        </div>

        {/* Main Feature Card */}
        <div className="mb-16 fade-in-up scale-in">
          <div className="feature-card max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 text-primary mb-8">
              <mainFeature.icon className="w-10 h-10" />
            </div>
            <h3 className="heading-feature mb-6">
              {mainFeature.title}
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {mainFeature.description}
            </p>
          </div>
        </div>

        {/* Secondary Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {secondaryFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className="benefit-card fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary mb-6">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;