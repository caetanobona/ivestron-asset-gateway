
import React from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const FaqSection = () => {
  const faqItems = [
    {
      question: 'Qual o saque e depósito mínimo?',
      answer: 'Dentro da plataforma você pode depositar no mínimo 10 dólares. O saque mínimo é de 2 dólares via e-wallet, e 25 dólares ou 150 reais nas demais formas de transferência.'
    },
    {
      question: 'Posso tirar dinheiro quando eu quiser?',
      answer: 'Sim! Você pode abrir uma solicitação de saque sempre que quiser, sem burocracias.'
    },
    {
      question: 'Posso operar pelo celular?',
      answer: 'Sim! Nossa plataforma é 100% responsiva para todos os celulares.'
    },
    {
      question: 'Como abrir um chamado de suporte?',
      answer: 'Dentro da plataforma no menu lateral esquerdo procure pela aba de suporte e inicie um chamado instantaneamente.'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-stone-950">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Perguntas Frequentes
        </h2>
        <p className="text-center text-ivestron-text-gray text-lg mb-12 mx-auto max-w-3xl">
          Separamos diversas dúvidas frequentes que nossos usuários tem, para facilitar sua 
          jornada e descomplicar o seu início no mundo dos investimentos
        </p>

        <div className="flex justify-center mb-16">
          <Button className="bg-ivestron-blue hover:bg-ivestron-blue-dark text-white text-lg rounded-md py-6 px-8 w-56">
            Comece Agora
          </Button>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <Accordion 
              key={index} 
              type="single" 
              collapsible 
              className="border-none"
            >
              <AccordionItem 
                value={`item-${index}`} 
                className='overflow-hidden border-none rounded-md'
              >
                <AccordionTrigger 
                  className='px-6 py-4 flex justify-between hover:no-underline'
                >
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-white">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
