
import React from 'react';
import { ArrowUpCircle, DollarSign } from 'lucide-react';

const DepositSection = () => {
  return (
    <section className="py-16 md:py-20 bg-stone-950">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Circular Icon */}
        <div className="w-14 h-14 mx-auto mb-6 bg-white rounded-full shadow-md flex items-center justify-center">
          <div className="text-ivestron-blue">
            <DollarSign className="w-6 h-6" />
          </div>
        </div>
        
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          <div>Deposito rápido,</div>
          <div>Saque ainda mais<span className="text-ivestron-blue">!</span></div>
        </h2>
        
        {/* Subheadline */}
        <p className="text-ivestron-text-gray text-lg max-w-3xl mx-auto">
          Seu deposito na plataforma é imediato, e após fazer seu lucro,  
          você pode sacar tudo de forma instantânea!
        </p>
      </div>
    </section>
  );
};

export default DepositSection;
