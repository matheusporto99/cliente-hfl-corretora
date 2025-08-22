import { Shield, Clock, DollarSign, ArrowRight } from "lucide-react";
const FinalCTASection = () => {
  return <section className="py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/30 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{
        animationDelay: '1s'
      }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 fade-in-up">
            <h2 className="heading-section">
              Proteja seu carro&nbsp;
              <span className="text-primary">hoje mesmo</span>
            </h2>
            
            <p className="text-hero">
              Orçamento rápido, cobertura imediata e preço justo. 
              Não deixe seu patrimônio desprotegido.
            </p>

            {/* Benefits */}
            <div className="space-y-4">
              {[{
              icon: Clock,
              text: "Orçamento em até 20 minutos"
            }, {
              icon: Shield,
              text: "Cobertura ativada na hora"
            }, {
              icon: DollarSign,
              text: "Preço competitivo garantido"
            }].map((benefit, index) => <div key={benefit.text} className="flex items-center gap-4 p-4 bg-card/50 rounded-xl border border-border/30 backdrop-blur-sm transition-all duration-300 hover:bg-card hover:shadow-lg" style={{
              animationDelay: `${index * 200}ms`
            }}>
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <span className="text-lg font-medium text-foreground">
                    {benefit.text}
                  </span>
                </div>)}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <button className="btn-cta group">
                <div className="flex flex-row">
                  <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  &nbsp;Quero Minha Cotação Agora
                </div>
              </button>
            </div>

            {/* Trust Elements */}
            <div className="flex items-center gap-8 pt-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent" />
                <span className="font-medium">100% Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent" />
                <span className="font-medium">Sem Compromisso</span>
              </div>
            </div>
          </div>

          {/* Right Column - App Mockup */}
          
        </div>
      </div>
    </section>;
};
export default FinalCTASection;
