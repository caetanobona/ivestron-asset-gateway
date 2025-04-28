
import React from 'react';

const AssetHighlight = () => {
  return (
    <section id="assets" className="py-16 md:py-20 bg-white">
      <div className="flex flex-col max-w-5xl mx-auto px-6 text-center">
        <div className='flex flex-row'>
          <h2 className="text- md:text-5xl font-bold mb-8">
            <span className="text-ivestron-blue md:text-9xl">+200</span>
            <br />
          </h2>
          <h2 className='text-4xl font-bold'>
            <span className="text-ivestron-blue">Ativos para investir</span>
              <br />
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
