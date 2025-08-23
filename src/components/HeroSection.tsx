import { Users } from "lucide-react";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/30 -z-10" />
      
      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="flex justify-center">
          {/* Content */}
          <div className="space-y-8 fade-in-up scale-in max-w-4xl text-center flex flex-col">
            {/* Achievement Badge */}
            <div className="trust-badge scale-in">
              <Users className="w-5 h-5" />
              +10.000 veículos protegidos sem dor de cabeça
            </div>

            {/* Headline */}
            <h1 className="heading-hero">
              Seguro Premium&nbsp;
              <span className="text-primary">sem Burocracia</span>: <br />
              cobertura e carro protegido em minutos!
            </h1>

            {/* Subheadline */}
            <p className="text-hero max-w-[834px] mx-auto">
              Explicamos cada detalhe do contrato para você não ser
              surpreendido. Vistoria online, orçamento rápido e cobertura
              imediata. Segurança contra roubo, furto e colisão — com
              atendimento pessoal em todas as etapas do sinistro.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="btn-cta mx-auto">
                Quero Minha Cotação Agora
              </button>

            </div>

            {/* Social Metric */}
            <span className="text-lg font-semibold text-muted-foreground mx-auto">
              +18 anos protegendo veículos em todo o Brasil
            </span>
          </div>

        </div>
      </div>
    </section>;
};
export default HeroSection;
