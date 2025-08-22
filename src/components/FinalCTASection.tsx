import { Shield, Clock, DollarSign, ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/30 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 fade-in-up">
            <h2 className="heading-section">
              Proteja seu carro{" "}
              <span className="text-primary">hoje mesmo</span>
            </h2>
            
            <p className="text-hero">
              Orçamento rápido, cobertura imediata e preço justo. 
              Não deixe seu patrimônio desprotegido.
            </p>

            {/* Benefits */}
            <div className="space-y-4">
              {[
                { icon: Clock, text: "Orçamento em até 20 minutos" },
                { icon: Shield, text: "Cobertura ativada na hora" },
                { icon: DollarSign, text: "Preço competitivo garantido" },
              ].map((benefit, index) => (
                <div
                  key={benefit.text}
                  className="flex items-center gap-4 p-4 bg-card/50 rounded-xl border border-border/30 backdrop-blur-sm transition-all duration-300 hover:bg-card hover:shadow-lg"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <span className="text-lg font-medium text-foreground">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <button className="btn-cta group">
                Quero Minha Cotação Agora
                <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="btn-secondary">
                Falar com Especialista
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
          <div className="relative fade-in-up scale-in">
            <div className="relative max-w-md mx-auto">
              {/* Phone Mockup */}
              <div className="bg-gradient-to-br from-card to-secondary p-8 rounded-3xl shadow-[--shadow-hero] border-8 border-foreground/10">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Cotação Rápida
                    </h3>
                    <p className="text-muted-foreground">
                      Em poucos cliques
                    </p>
                  </div>

                  {/* Form Preview */}
                  <div className="space-y-4">
                    <div className="h-12 bg-input rounded-lg border border-border"></div>
                    <div className="h-12 bg-input rounded-lg border border-border"></div>
                    <div className="h-12 bg-input rounded-lg border border-border"></div>
                    
                    <button className="w-full h-14 bg-gradient-to-r from-primary to-primary-hover text-primary-foreground rounded-lg font-semibold text-lg">
                      Calcular Seguro
                    </button>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 text-sm">
                    {[
                      "✓ Sem ligações chatas",
                      "✓ Orçamento em 20min",
                      "✓ Vistoria online",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-muted-foreground">
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground p-3 rounded-xl shadow-lg animate-bounce">
                <div className="text-center">
                  <div className="text-lg font-bold">18</div>
                  <div className="text-xs">Anos</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground p-3 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-lg font-bold">10k+</div>
                  <div className="text-xs">Clientes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;