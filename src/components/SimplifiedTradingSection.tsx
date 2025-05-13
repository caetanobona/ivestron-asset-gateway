
import React from 'react';
import { Button } from '@/components/ui/button';
import MockTradeEntry from './MockTradeEntry';

const SimplifiedTradingSection = () => {
  return (
    <section className="py-16 md:py-24 bg-stone-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-center items-center space-x-4 gap-10">
          {/* Trading Platform Mockup */}
          {/* <div className="relative w-full lg:w-1/2">
            <div className="bg-ivestron-green rounded-3xl p-1.5 w-full max-w-md mx-auto">
              <div className="bg-white rounded-2xl p-4">
                <div className="text-center text-gray-700 text-lg font-medium mb-6">
                  Entrada de compra
                </div>
                
                <div className="flex justify-between mb-4">
                  <div className="text-gray-600">Valor de Entrada</div>
                  <div className="text-gray-600">Expiração</div>
                </div>
                
                <div className="flex justify-between gap-4 mb-6">
                  <div className="bg-ivestron-green/20 rounded-lg px-4 py-2 flex items-center justify-between w-full">
                    <span>$100</span>
                    <div className="flex">
                      <span className="px-2 cursor-pointer">-</span>
                      <span className="px-2 cursor-pointer">+</span>
                    </div>
                  </div>
                  
                  <div className="bg-ivestron-green/20 rounded-lg px-4 py-2 flex items-center justify-between w-full">
                    <span>5m</span>
                    <div className="flex">
                      <span className="px-2 cursor-pointer">-</span>
                      <span className="px-2 cursor-pointer">+</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-stone-900 text-white rounded-lg p-4 text-center mb-6">
                  Comprar
                </div>
                 */}
                {/* Floating Sell Panel */}
                {/* <div className="absolute bg-white rounded-xl shadow-lg p-4 w-[90%] mx-auto left-0 right-0">
                  <div className="text-center text-red-500 font-medium mb-4">
                    Entrada de Venda
                  </div>
                  
                  <div className="flex justify-between mb-4">
                    <div className="text-gray-600">Valor de Entrada:</div>
                    <div className="text-gray-600">Expiração:</div>
                  </div>
                  
                  <div className="flex justify-between gap-4 mb-6">
                    <div className="bg-gray-100 rounded-lg px-4 py-2 flex items-center justify-between w-full">
                      <span>$ 432</span>
                      <div className="flex">
                        <span className="px-2 cursor-pointer">-</span>
                        <span className="px-2 cursor-pointer">+</span>
                      </div>
                    </div>
                    
                    <div className="bg-gray-100 rounded-lg px-4 py-2 flex items-center justify-between w-full">
                      <span>10m</span>
                      <div className="flex">
                        <span className="px-2 cursor-pointer">-</span>
                        <span className="px-2 cursor-pointer">+</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-stone-900 text-white rounded-lg p-4 text-center">
                    Vender
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div className='space-y-6 bg-ivestron-green p-10 rounded-[36px] relative w-80 h-[426px] lg:w-96 lg:h-[488px]'>
            <MockTradeEntry className='absolute right-6 lg:right-8 blur-[2px]' title='Entrada de Compra' titleColor='text-green-500'/>
            <MockTradeEntry className='absolute top-40 left-4 lg:top-44 lg:left-6' title='Entrada de Venda' titleColor='text-red-500'/>
          </div>
          
          {/* Content */}
          <div className="w-full lg:w-1/2 mt-4 lg:mt-0 text-center lg:text-start">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span>Faça </span>
              <span className="text-ivestron-green">trading </span>
              <span>de forma </span>
              <span className="text-ivestron-green">simplificada</span>
            </h2>
            
            <p className="text-ivestron-text-gray text-lg mb-8">
              Abra uma posição de compra ou venda e se após o tempo 
              escolhido o ativo tiver movimentado a seu favor, você receberá 
              seus lucros imediatamente!
            </p>
            
            <div className="flex-col flex items-center gap-6 lg:flex-row">
              <Button className="bg-ivestron-green w-full text-md hover:bg-ivestron-green-dark text-white px-8 py-6 rounded-md lg:w-auto">
                Comece Agora
              </Button>
              
              <div className="flex items-center">
                <div className="ml-2 flex flex-col w-full">
                  <div className="font-bold text-2xl">700K<span className="text-ivestron-green">+</span></div>
                  <div className="text-ivestron-text-gray text-sm">Usuários Investindo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimplifiedTradingSection;
