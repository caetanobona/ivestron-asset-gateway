
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, PlayCircle, Book, BarChart3, PieChart } from 'lucide-react';
import { handleRegister } from '@/hooks/use-register';

const SimplifiedPlatformSection = () => {
  return (
    <section className="py-16 md:py-24 bg-stone-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-5xl md:text-6xl mb-4">
              <span className='font-bold'>Simplificamos</span><br />
              <span className="text-gray-200">tudo que poderia</span><br />
              <span className="text-gray-200">ser complexo</span>
            </h2>
            
            <p className="text-ivestron-text-gray text-lg mb-8 mt-6">
              Criamos uma plataforma onde tudo está a 1 clique de 
              distância, além de uma gama de tutoriais práticos para você 
              não se perder e nem ter medo de começar!
            </p>
            
            <Button 
              className="bg-ivestron-green hover:bg-ivestron-green-dark text-white px-8 py-6 rounded-md text-md w-full lg:w-auto"
              onClick={handleRegister()}  
            >
              Comece Agora
            </Button>
          </div>
          
          {/* Tutorials Section */}
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0 relative">
            <div className="relative z-10 max-w-md mx-auto">
              <div className="bg-stone-900 p-6 rounded-2xl border border-stone-800 shadow-xl">
                <div className="flex justify-center items-center mb-8">
                  <h3 className="text-xl font-semibold ">Tutoriais</h3>
                </div>
                
                {/* Tutorial Items */}
                <div className="space-y-4">
                  <div className="bg-stone-800 rounded-xl p-4 flex items-center">
                    <div className="w-10 h-10 bg-stone-700 rounded-full flex items-center justify-center mr-3">
                      <MessageCircle size={20} className="text-ivestron-green" />
                    </div>
                    <div>
                      <div className="font-medium">Como negociar?</div>
                      <div className="text-xs text-ivestron-text-gray">Até 15 min</div>
                    </div>
                  </div>
                  
                  <div className="bg-stone-800 rounded-xl p-4 flex items-center">
                    <div className="w-10 h-10 bg-stone-700 rounded-full flex items-center justify-center mr-3">
                      <MessageCircle size={20} className="text-ivestron-green" />
                    </div>
                    <div>
                      <div className="font-medium">Guia de Interface</div>
                      <div className="text-xs text-ivestron-text-gray">Introdução Rápida</div>
                    </div>
                  </div>
                  
                  <div className="mt-6 mb-4">
                    <div className='justify-center items-center'>
                      <div className="text-sm font-medium mb-4">Video tutorais</div>
                    </div>
                    
                    <div className="bg-stone-800 rounded-xl p-4 flex items-center">
                      <div className="w-10 h-10 bg-stone-700 rounded-full flex items-center justify-center mr-3">
                        <PlayCircle size={20} className="text-ivestron-green" />
                      </div>
                      <div>
                        <div className="font-medium">Todos os Vídeos</div>
                        <div className="text-xs text-ivestron-text-gray">41 Vídeos</div>
                      </div>
                    </div>
                    
                    <div className="bg-stone-800 rounded-xl p-4 flex items-center mt-4">
                      <div className="w-10 h-10 bg-stone-700 rounded-full flex items-center justify-center mr-3">
                        <Book size={20} className="text-ivestron-green" />
                      </div>
                      <div>
                        <div className="font-medium">Noções Básicas</div>
                        <div className="text-xs text-ivestron-text-gray">14 Vídeos</div>
                      </div>
                    </div>
                    
                    <div className="bg-stone-800 rounded-xl p-4 flex items-center mt-4">
                      <div className="w-10 h-10 bg-stone-700 rounded-full flex items-center justify-center mr-3">
                        <BarChart3 size={20} className="text-ivestron-green" />
                      </div>
                      <div>
                        <div className="font-medium">Análise Técnica</div>
                        <div className="text-xs text-ivestron-text-gray">4 Vídeos</div>
                      </div>
                    </div>
                    
                    <div className="bg-stone-800 rounded-xl p-4 flex items-center mt-4">
                      <div className="w-10 h-10 bg-stone-700 rounded-full flex items-center justify-center mr-3">
                        <PieChart size={20} className="text-ivestron-green" />
                      </div>
                      <div>
                        <div className="font-medium">Análise Fundamental</div>
                        <div className="text-xs text-ivestron-text-gray">5 Vídeos</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-ivestron-green/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimplifiedPlatformSection;
