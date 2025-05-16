
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TradingInterface from '@/components/TradingInterface';
import AssetHighlight from '@/components/AssetHighlight';
import AssetButtons from '@/components/AssetButtons';
import SimplifiedTradingSection from '@/components/SimplifiedTradingSection';
import SimplifiedPlatformSection from '@/components/SimplifiedPlatformSection';
import BenefitsSection from '@/components/BenefitsSection';
import DepositSection from '@/components/DepositSection';
import AchievementsSection from '@/components/AchievementsSection';
import ToolsFeaturesSection from '@/components/ToolsFeaturesSection';
import NewsCalendarSection from '@/components/NewsCalendarSection';
import SimpleStepsSection from '@/components/SimpleStepsSection';
import FaqSection from '@/components/FaqSection';

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
        <SimplifiedTradingSection />
        <SimplifiedPlatformSection />
        <AchievementsSection />
        <ToolsFeaturesSection />
        <NewsCalendarSection />
        <SimpleStepsSection />
        <BenefitsSection />
        <FaqSection />
      </main>
      <footer className="bg-ivestron-bg-logo py-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center">
            <img 
              src="https://lh3.googleusercontent.com/pw/AP1GczNsn75s_7EapDC8_C10geQNRdq09CP7DNRdcUlLwrBI_IssP16ZPkv_0-r-joCtU_liyDasKmgYeeXzknld40PQUvbEFWPEuifH2a9BLc7eiv5BwObaVcUjmL4r8IPT1K6ts4lWFNth1MP6y--ADCk=w1024-h367-s-no?authuser=2" 
              alt="IVESTRON"
              className="h-10 w-auto"
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
