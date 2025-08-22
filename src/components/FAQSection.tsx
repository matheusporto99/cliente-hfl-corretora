import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Em quanto tempo meu carro fica segurado?",
      answer: "Assim que você envia a documentação, o orçamento sai em até 20 minutos e a vistoria online ativa a cobertura na mesma hora.",
    },
    {
      question: "Preciso ir até a corretora para fazer a vistoria?",
      answer: "Não. Você recebe um link, tira as fotos pelo celular e finaliza tudo online.",
    },
    {
      question: "E se meu carro for roubado ou furtado?",
      answer: "Você tem cobertura total conforme o contrato, sem burocracia e com agilidade no processo de indenização.",
    },
    {
      question: "O que acontece se eu sofrer um sinistro?",
      answer: "Acompanhamos pessoalmente do aviso até a saída do carro da oficina, garantindo que você não fique sozinho no processo.",
    },
    {
      question: "O preço é competitivo?",
      answer: "Sim. Trabalhamos com volume alto e seguradoras parceiras, garantindo condições especiais e valores justos.",
    },
    {
      question: "O que é preciso para contratar o seguro?",
      answer: "Seu documento de identificação e do veículo.",
    },
  ];

  return (
    <section id="faq" className="py-32 bg-gradient-to-br from-muted/20 to-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 fade-in-up">
          <h2 className="heading-section mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-hero max-w-3xl mx-auto">
            Tire suas dúvidas sobre nossos serviços de seguro automotivo
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto fade-in-up">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl border border-border/30 shadow-[--shadow-card] transition-all duration-300 hover:shadow-lg overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="px-8 py-6 text-left hover:no-underline hover:bg-secondary/30 transition-colors duration-300 [&[data-state=open]]:bg-secondary/50">
                  <span className="text-xl font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 pt-2">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 fade-in-up">
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ainda tem dúvidas? Fale conosco diretamente e tire todas as suas questões.
          </p>
          <button className="btn-secondary">
            Falar com um Especialista
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;