import React from 'react';
import { Settings, Bell } from 'lucide-react';
import AlertCard from './AlertCard';
import AutoFinalizeCard from './AutoFinalizeCard';

const ToolsFeaturesSection = () => {
  return (
    <section id="tools" className="pb-6 pt-16 md:pt-24 bg-stone-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="lg:flex lg:items-start lg:gap-12">
          {/* Left column */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="text-center lg:text-left mb-8">
              <div className="mb-4 inline-block p-3 bg-stone-800 rounded-full">
                <Settings className="w-8 h-8 text-ivestron-green" />
              </div>
              
              <div className=''>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">
                  Ferramentas
                </h2>
                <h2 className="text-4xl md:text-5xl mb-2">
                  <span className='font-bold'>favoritas</span> dos
                </h2>
                <h2 className="text-4xl md:text-5xl mb-8">
                  especialistas
                </h2>
                
                <p className="text-ivestron-text-gray text-lg">
                  Acesse ferramentas de analise mais completas e avançadas para tomar as melhores decisões de investimento.
                </p>
              </div>

            </div>
          </div>
          
          {/* Right column */}
          <div className="">
            <div className="mb-6">
              <AlertCard /> 
            </div>
          </div>
          
        </div>
        <AutoFinalizeCard />
      </div>
    </section>
  );
};

export default ToolsFeaturesSection;
