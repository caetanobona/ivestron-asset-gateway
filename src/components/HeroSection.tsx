import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { handleRegister } from '@/hooks/use-register';

const HeroSection = () => {
  return (
    <section id="hero" className="bg-stone-950 pt-10 lg:pt-32 lg:pb-12">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl mb-6">
          <span className='font-bold'>Uma só corretora</span>, <br />
          <span>inúmeras <span className="text-ivestron-green font-bold">oportunidades</span></span>
        </h1>
        
        <p className="text-ivestron-text-gray text-lg md:text-xl mb-10 max-w-3xl mx-auto">
          Comece a investir em criptomoedas, ações internacionais, 
          forex e mais de 200 ativos, de forma simples
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
          <a 
            className="bg-ivestron-green hover:bg-ivestron-green-dark text-white text-center text-lg rounded-md py-3 w-56 shadow-md"
            href='https://ivestron.com/register'
          >
            Comece Agora
          </a>
          
          <a href="#assets" className="flex items-center text-gray-700 hover:text-ivestron-green transition-colors">
            <span className="mr-2">Saiba mais</span>
            <ArrowDown size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
