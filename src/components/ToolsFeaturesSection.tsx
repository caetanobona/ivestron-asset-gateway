
import React from 'react';
import { Settings } from 'lucide-react';

const ToolsFeaturesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-stone-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="lg:flex lg:items-start lg:gap-12">
          {/* Left column */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="lg:text-left mb-8">
              <div className="mb-4 inline-block p-3 bg-stone-800 rounded-full">
                <Settings className="w-8 h-8 text-ivestron-blue" />
              </div>
              
              <h2 className="text-5xl font-bold">
                Ferramentas
              </h2>
              <h2 className="text-5xl font-bold">
                favoritas <span className="text-ivestron-blue">dos</span>
              </h2>
              <h2 className="text-5xl font-bold mb-8">
                especialistas
              </h2>
              
              <p className="text-ivestron-text-gray text-lg">
                Acesse ferramentas de analise mais completas e avançadas para tomar as melhores decisões de investimento.
              </p>
            </div>
          </div>
          
          {/* Right column */}
          <div className="lg:w-1/2 space-y-6">
            <div className="bg-stone-900 rounded-xl p-6">
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/16683ae9-ae5b-4f89-a7a6-e12fc3d42a2c.png" 
                  alt="Trading chart" 
                  className="w-full h-auto rounded"
                />
              </div>
              
              <h3 className="text-2xl font-bold mb-2">
                <span className="text-ivestron-blue">Ative o Alerta</span> para movimento de preço
              </h3>
              
              <p className="text-ivestron-text-gray">
                Não perca o momento certo de fazer sua compra ou sua venda, ative o alerta e sempre iremos te avisar quando o seu valor esperado for atingido.
              </p>
            </div>
            
            <div className="bg-stone-900 rounded-xl p-6">
              <div className="flex flex-col lg:flex-row lg:gap-6">
                <div className="lg:w-1/2 mb-6 lg:mb-0">
                  <img 
                    src="/lovable-uploads/16683ae9-ae5b-4f89-a7a6-e12fc3d42a2c.png" 
                    alt="Trading chart" 
                    className="w-full h-auto rounded"
                  />
                </div>
                
                <div className="lg:w-1/2">
                  <h3 className="text-2xl font-bold mb-2">
                    Finalize as suas operações <span className="text-ivestron-blue">automaticamente</span>
                  </h3>
                  
                  <p className="text-ivestron-text-gray">
                    Determine os momentos corretos para que seus investimentos seja encerrados e aumente a suas chances de lucrar, minimizando seus riscos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsFeaturesSection;
