
import React from 'react';
import { CheckCircle, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const BenefitCard = ({ title, description, icon, className }: { title: string; description: string; icon: React.ReactNode, className?:string }) => (
  <div className={cn("bg-stone-900 rounded-xl p-6 border border-stone-800", className)}>
    <div className="text-ivestron-blue mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-ivestron-text-gray">{description}</p>
  </div>
);

const BenefitsSection = () => {
  return (
    <section className="py-10 md:py-24 bg-stone-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Vantagens da <span className="text-ivestron-blue">IVESTRON</span>
          </h2>
          <p className="text-ivestron-text-gray text-lg max-w-3xl mx-auto">
            Nossa plataforma foi desenhada para oferecer a melhor experiência possível
            para investidores de todos os níveis de experiência.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BenefitCard 
            title="Operações Simples"
            description="Interface intuitiva para comprar e vender ativos com apenas alguns cliques."
            icon={<CheckCircle size={32} />}
          />
          
          <BenefitCard 
            title="+200 Ativos Disponíveis"
            description="Ampla variedade de criptomoedas, ações internacionais e commodities para diversificar seu portfólio."
            icon={<CheckCircle size={32} />}
          />
          
          <BenefitCard 
            title="Segurança Garantida"
            description="Mantenha seus fundos e investimentos protegidos com nosso sistema de segurança de última geração."
            icon={<CheckCircle size={32} />}
          />
          
          <BenefitCard 
            title="Saques Instantâneos" 
            description="Retire seus lucros a qualquer momento, sem tempo de espera, direto para sua conta bancária."
            icon={<CheckCircle size={32} />}
          />
          
          <BenefitCard 
            title="Tutoriais Completos"
            description="Aprenda a investir com nossos guias detalhados e vídeos educativos para todos os níveis."
            icon={<CheckCircle size={32} />}
          />
          
          <BenefitCard 
            title="Suporte 24/7"
            className=''
            description="Nossa equipe de especialistas está disponível para ajudar com qualquer dúvida ou problema."
            icon={<CheckCircle size={32} />}
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
