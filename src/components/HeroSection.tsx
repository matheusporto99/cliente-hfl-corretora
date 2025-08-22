import { Star, Users } from "lucide-react";
import heroImage from "@/assets/hero-insurance.jpg";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/30 -z-10" />
      
      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 fade-in-up scale-in">
            {/* Achievement Badge */}
            <div className="trust-badge scale-in">
              <Users className="w-5 h-5" />
              +10.000 veículos protegidos sem dor de cabeça
            </div>

            {/* Headline */}
            <h1 className="heading-hero">
              Seguro Premium{" "}
              <span className="text-primary">sem Burocracia</span>: cobertura e 
              carro protegido em minutos!
            </h1>

            {/* Subheadline */}
            <p className="text-hero max-w-2xl">
              Explicamos cada detalhe do contrato para você não ser 
              surpreendido. Vistoria online, orçamento rápido e cobertura 
              imediata. Segurança contra roubo, furto e colisão — com 
              atendimento pessoal em todas as etapas do sinistro.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="btn-cta">
                Quero Minha Cotação Agora
              </button>
              
            </div>

            {/* Social Metric */}
            <div className="flex items-center gap-3 pt-8">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
              </div>
              <span className="text-lg font-semibold text-muted-foreground">
                +18 anos protegendo veículos em todo o Brasil
              </span>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative lg:order-2 fade-in-up scale-in">
            <div className="relative">
              <img src={heroImage} alt="Carro segurado com proteção premium" className="w-full h-auto rounded-3xl shadow-[--shadow-hero] transition-transform duration-700 hover:scale-105" />
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-primary text-primary-foreground p-4 rounded-2xl shadow-lg animate-bounce">
                <div className="text-center">
                  <div className="text-2xl font-bold">20min</div>
                  <div className="text-sm">Orçamento</div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-4 rounded-2xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">24h</div>
                  <div className="text-sm">Assistência</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;