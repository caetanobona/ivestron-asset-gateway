
import React, { useRef } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TradingInterface from '@/components/TradingInterface';
import AssetHighlight from '@/components/AssetHighlight';
import AssetButtons from '@/components/AssetButtons';
import DepositSection from '@/components/DepositSection';

const Index = () => {

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <TradingInterface />
        <AssetHighlight />
        <AssetButtons />
        <DepositSection />
      </main>
      <footer className="bg-white py-10 border-t">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center">
            <div className="w-8 h-8 rounded-md bg-ivestron-blue flex items-center justify-center text-white text-sm font-bold">I</div>
            <span className="ml-2 font-bold text-lg">IVESTRON</span>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            © 2025 IVESTRON. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
