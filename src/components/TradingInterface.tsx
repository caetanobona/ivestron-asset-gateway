
import { Bitcoin } from 'lucide-react';
import { FcGoogle } from "react-icons/fc";
import { FaMeta } from 'react-icons/fa6';
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import MockTradeEntry from './MockTradeEntry';

interface AssetCardProps {
  iconKey: string;
  name: string;
  profit: string;
  price: string;
  change: string;
  isPositive: boolean;
  position: string;
}

const AssetCard: React.FC<AssetCardProps> = ({ 
  iconKey, name, profit, price, change, isPositive, position 
}) => {
  // Position classes for the different card positions
  const positionClasses = {
    'top-left': 'absolute top-8 left-[86px] lg:left-36',
    'bottom-left': 'absolute bottom-8 left-36 lg:left-56',
    'right': 'absolute top-36 lg:top1/2 -translate-y-1/2 right-2 lg:right-8',
  };

  const iconMap = {
    'Google' : FcGoogle,
    'Bitcoin' : Bitcoin,
    'Meta' : FaMeta
  };

  function DynamicIcon({ name, ...props }) {  
    const IconComponent = iconMap[name];  
    if (!IconComponent) return null;  
    return <IconComponent {...props} />;  
  }

  return (
    <div className={`${positionClasses[position as keyof typeof positionClasses]} bg-black/90 text-white rounded-xl p-4 w-22 lg:w-44 h-[168px] shadow-lg`}>
      <div className="flex items-center mb-2">
        <div className="w-8 h-8 mr-2 rounded-full flex items-center justify-center bg-white/10">
          <DynamicIcon name={iconKey} />
        </div>
        <span className="font-bold left">{name}</span>
      </div>
      
      <div className="mt-2">
        <div className="text-gray-300 text-sm">Lucro</div>
        <div className="text-green-500 text-2xl font-bold">{profit}</div>
      </div>
      
      <div className="flex justify-between items-center mt-2">
        <div className="text-sm">
          <div className="text-gray-300">Preço</div>
          <div className="font-medium">{price}</div>
        </div>
        
        <div className={`text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {change}
        </div>
      </div>
    </div>
  );
};

// iPhone mockup component for mobile view
const IPhoneMockup = () => {
  return (
    <div className="w-full max-w-[320px] mx-auto relative">
      {/* iPhone frame */}
      <div className="relative w-full aspect-[9/19] bg-gray-200 rounded-[40px] p-3 shadow-xl overflow-hidden">
        {/* Notch with white border */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-white rounded-b-[14px] z-10 overflow-hidden">
          {/* Inner black part of notch */}
          <div className="absolute inset-[1.5px] bg-black rounded-b-[12px]">
            {/* Status bar icons inside notch */}
            <div className="flex justify-between items-center px-4 h-full text-white text-xs">
              <div className="flex items-center gap-1">
                <span className="text-xs">08:58</span>
                <span>☾</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs">•</span>
                <span className="i-lucide-wifi" />
                <div className="w-5 h-2.5 rounded-sm border border-white/60 relative">
                  <div className="absolute right-0.5 top-0.5 bottom-0.5 w-3 bg-red-500 rounded-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Screen */}
        <div className="w-full h-full bg-black rounded-[32px] overflow-hidden relative">
          {/* Account info */}
          <div className="px-5 pt-8 pb-3">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-400 text-sm">Demo account ▾</p>
                <p className="text-white font-bold text-2xl">$55,145.14</p>
              </div>
              <button className="border border-ivestron-green rounded-full px-4 py-2 text-ivestron-green">
                Deposit
              </button>
            </div>
            
            {/* Asset selection */}
            <div className="flex items-center gap-2 mt-4">
              <div className="flex items-center gap-2 bg-white/10 p-2 px-3 rounded-full">
                <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center">
                  <Bitcoin size={14} className="text-white" />
                </div>
                <div className="text-white text-sm">
                  <span className="font-medium">Bitcoin</span>
                  <p className="text-gray-400 text-xs">Up To 5 Min</p>
                </div>
                <div className="ml-2">✕</div>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white text-xl">
                +
              </div>
            </div>
            
            {/* Expected return */}
            <div className="mt-4">
              <p className="text-gray-400 text-sm">Expected return</p>
              <p className="text-ivestron-green text-lg">+$37.6 (+88%)</p>
            </div>
          </div>
          
          {/* Chart area */}
          <div className="flex-1 pb-16 mt-4">
            {/* Simple chart representation */}
            <div className="h-[180px] px-4 relative">
              <div className="absolute top-0 right-0 text-gray-500 text-xs">$5,200,000.00</div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-700"></div>
              <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-700 opacity-30"></div>
              <div className="absolute bottom-0 left-0 right-0 h-[80px] overflow-hidden">
                <svg className="w-full h-full">
                  <path 
                    d="M0,80 C20,75 40,60 60,65 C80,70 100,55 120,50 C140,45 160,55 180,45 C200,35 220,50 240,40 C260,30 280,20 300,25 L300,80 L0,80 Z" 
                    fill="none" 
                    stroke="rgba(3, 192, 74, 0.7)" 
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="absolute bottom-0 right-4 text-gray-500 text-xs">Low: 94.91</div>
            </div>
            
            {/* Time selections */}
            <div className="flex justify-center gap-6 mt-4 text-gray-400">
              <button className="text-white font-medium">5s</button>
              <button>1H</button>
              <button>30m</button>
            </div>
            
            {/* Trade buttons */}
            <div className="flex gap-2 px-4 mt-6">
              <button className="flex-1 bg-red-500 text-white py-3 rounded-md font-medium">
                Down
              </button>
              <button className="flex-1 bg-ivestron-green text-white py-3 rounded-md font-medium">
                Up
              </button>
            </div>
            
            {/* Amount control */}
            <div className="px-4 mt-6">
              <p className="text-gray-400 text-center mb-2">Amount ($)</p>
              <div className="flex items-center justify-center gap-4">
                <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                  -
                </button>
                <span className="text-white text-xl font-medium">20</span>
                <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Trade cards for visual effect */}
      <div className="absolute left-[-60px] top-[30%] rotate-[-8deg] w-[140px] scale-75">
        <MockTradeEntry className="shadow-lg" title="Google" titleColor="text-red-500" />
      </div>
      <div className="absolute right-[-60px] bottom-[25%] rotate-[8deg] w-[140px] scale-75">
        <MockTradeEntry className="shadow-lg" title="Bitcoin" titleColor="text-yellow-500" />
      </div>
    </div>
  );
};

const TradingInterface = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <section className="py-12 px-4 relative">
        <div className="max-w-6xl mx-auto relative">
          <IPhoneMockup />
        </div>
      </section>
    );
  } else {
    return (
      <section className="py-12 lg:py-6 px-6 relative">
        <div className="max-w-6xl mx-auto relative">
          {/* Main Trading Interface */}
          <div className="bg-gray-900 rounded-2xl shadow-xl relative overflow-hidden h-[500px] md:h-[600px]">
            {/* Watermark Logo */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
              <div className="w-40 h-40 rounded-full bg-ivestron-green/20 flex items-center justify-center text-white text-8xl font-bold">
                I
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-24 bg-black/90 p-3 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-8 mt-4">
                <div className="w-6 h-6 rounded-full bg-ivestron-green"></div>
              </div>
              
              {['How to trade?', 'Interface guide', 'All Videos', 'Basics', 'Technical Analysis', 'Fundamental Analysis'].map((item, index) => (
                <div key={index} className="text-white/60 text-[8px] md:text-[9px] text-center mb-5 cursor-pointer hover:text-ivestron-green">
                  {item}
                </div>
              ))}
            </div>
            
            {/* Chart Area */}
            <div className="ml-20 md:ml-24 h-full p-6">
              {/* Mock Chart - Using a simple representation */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-full h-3/4 flex items-end space-x-1">
                  {Array.from({ length: 50 }).map((_, i) => {
                    const height = 20 + Math.random() * 80;
                    const isPositive = Math.random() > 0.4;
                    
                    return (
                      <div 
                        key={i} 
                        className="h-full flex items-end"
                        style={{ width: `${100 / 60}%` }}
                      >
                        <div 
                          className={`w-full ${isPositive ? 'bg-green-500' : 'bg-red-500'}`}
                          style={{ height: `${height}%` }}
                        ></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            
            {/* Asset Cards */}
            <AssetCard 
              iconKey="Meta"
              name="Meta"
              profit="190%"
              price="577.62"
              change="+0.15%"
              isPositive={true}
              position="top-left"
            />
            
            <AssetCard 
              iconKey="Google"
              name="Google"
              profit="190%"
              price="120.85"
              change="+0.22%"
              isPositive={true}
              position="bottom-left"
            />
            
            <AssetCard 
              iconKey="Bitcoin"
              name="Bitcoin"
              profit="192%"
              price="62788.64"
              change="-0.17%"
              isPositive={false}
              position="right"
            />
          </div>
        </div>
      </section>
    );
  }
};

export default TradingInterface;
