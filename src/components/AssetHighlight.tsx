
import React from 'react';

const AssetHighlight = () => {
  return (
    <section id="assets" className="pt-16 md:pt-20 bg-stone-950">
      <div className="flex flex-col max-w-5xl mx-auto px-6 text-center">
        <div className='lg:flex lg:flex-row justify-center items-center'>
          <h2 className="text- md:text-5xl font-bold justify-center items-center">
            <span className="text-ivestron-green text-9xl lg:text-[152px]">+200</span>
            <br />
          </h2>
          <h2 className='text-4xl font-bold mb-4 lg:mb-0'>
            <span className="text-ivestron-green">Ativos para investir </span>
              
            <span>deforma totalmente descomplicada</span>
          </h2>
        </div>
        

        
        <p className="text-ivestron-text-gray text-lg max-w-3xl mx-auto mb-16">
          Escolha um dos ativos e comece a investir com poucos cliques.
        </p>
      </div>
    </section>
  );
};

export default AssetHighlight;
