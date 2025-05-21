
import { Bitcoin } from 'lucide-react';
import { FcGoogle } from "react-icons/fc";
import { FaMeta } from 'react-icons/fa6';
import React from 'react';

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
      <div className="relative w-full aspect-[9/19] bg-zinc-900 rounded-[40px] p-3 shadow-xl overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-zinc-900 rounded-b-[14px] z-10">
        </div>
        
        {/* Screen */}
        <div className="w-full h-full bg-black rounded-[32px] overflow-hidden relative">
          {/* Status bar */}
          <img 
            src="src\assets\MobileTrading.png"
            alt="" 
            className='w-full h-full bg-white'
          />
        </div>
      </div>

      {/* Trade cards for visual effect */}
    </div>
  );
};

const TradingInterface = () => {
    return (
      <div>
        <div className="block md:hidden py-12 px-4 relative">
          <div className="max-w-6xl mx-auto relative">
            <IPhoneMockup />
          </div>
        </div>
        <div className="hidden md:block py-12 lg:py-6 px-6 relative">
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
        </div>
      </div>
    );
};

export default TradingInterface;
