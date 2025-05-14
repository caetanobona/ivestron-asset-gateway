
import React from 'react';
import { Button } from './ui/button';
import { handleRegister } from '@/hooks/use-register';

type StepProps = {
  number: number;
  title: string;
  subtitle: string;
  description: string;
};

const Step = ({ number, title, subtitle, description }: StepProps) => {
  return (
    <div className="flex items-start gap-6 mb-12">
      <div className="bg-stone-800 rounded-lg h-12 w-12 flex items-center justify-center flex-shrink-0">
        <span className="text-xl font-bold">{number}</span>
      </div>
      
      <div>
        <p className="text-ivestron-green text-lg font-medium mb-1">{title}</p>
        <h3 className="text-2xl md:text-3xl font-bold mb-4">{subtitle}</h3>
        <p className="text-ivestron-text-gray">{description}</p>
      </div>
    </div>
  );
};

const SimpleStepsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-stone-950">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            Comece em apenas
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-ivestron-green">3 Passos Simples</span>
          </h2>
          
          <p className="text-ivestron-text-gray text-lg max-w-3xl mx-auto">
            Simplificamos tudo, para você começar o mais rápido possível a ganhar dinheiro com ativos no mercado.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Step 
            number={1} 
            title="Primeiro Passo" 
            subtitle="Crie sua conta de graça" 
            description="Você pode clicar no botão 'Nova conta' no canto superior da sua tela, criar sua conta e deixar tudo pronto para começar em poucos minutos."
          />
          
          <Step 
            number={2} 
            title="Segundo Passo" 
            subtitle="Pratique sem riscos" 
            description="Você receberá $10.000,00 uma conta demonstrativa para simular investimentos até se tornar confiante e lucrativo, sem riscos."
          />
          
          <Step 
            number={3} 
            title="Terceiro Passo" 
            subtitle="Deposite e lucre" 
            description="Faça seu primeiro depósito e comece a investir em mais de 200 ativos diferentes de forma simples."
          />
        </div>
      </div>
    </section>
  );
};

export default SimpleStepsSection;
