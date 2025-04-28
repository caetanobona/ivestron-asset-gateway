
import React, { useRef } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TradingInterface from '@/components/TradingInterface';
import AssetHighlight from '@/components/AssetHighlight';
import AssetButtons from '@/components/AssetButtons';
import DepositSection from '@/components/DepositSection';

const Index = () => {

  return (
    <div className="min-h-screen flex flex-col bg-stone-950 text-white">
      <Navbar />
      <main>
        <HeroSection />
        <TradingInterface />
        <AssetHighlight />
        <AssetButtons />
        <DepositSection />
      </main>
      <footer className="bg-ivestron-bg-dark py-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center">
            <img 
              src="/lovable-uploads/795bb033-d644-4c19-be37-6a0ba0fa84d9.png" 
              alt="IVESTRON"
              className="h-6 w-auto"
            />
          </div>
          <p className="text-gray-400 text-sm mt-4">
            © 2025 IVESTRON. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
