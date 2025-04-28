
import React from 'react';

interface AssetCardProps {
  logo: string;
  name: string;
  profit: string;
  price: string;
  change: string;
  isPositive: boolean;
  position: string;
}

const AssetCard: React.FC<AssetCardProps> = ({ 
  logo, name, profit, price, change, isPositive, position 
}) => {
  // Position classes for the different card positions
  const positionClasses = {
    'top-left': 'absolute top-8 left-8',
    'bottom-left': 'absolute bottom-8 left-8',
    'right': 'absolute top-1/2 -translate-y-1/2 right-8',
  };

  return (
    <div className={`${positionClasses[position as keyof typeof positionClasses]} bg-black/90 text-white rounded-xl p-4 w-44 h-[168px] shadow-lg`}>
      <div className="flex items-center mb-2">
        <div className="w-8 h-8 mr-2 rounded-full flex items-center justify-center bg-white/10">
          {logo}
        </div>
        <span className="font-bold">{name}</span>
      </div>
      
      <div className="mt-2">
        <div className="text-gray-300 text-sm">Lucro</div>
        <div className="text-ivestron-blue text-2xl font-bold">{profit}</div>
      </div>
      
      <div className="flex justify-between items-center mt-2">
        <div className="text-sm">
          <div className="text-gray-300">Preço</div>
          <div className="font-medium">{price}</div>
        </div>
        
        <div className={`text-sm ${isPositive ? 'text-ivestron-blue' : 'text-red-500'}`}>
          {change}
        </div>
      </div>
    </div>
  );
};

const TradingInterface = () => {
  return (
    <section className="py-12 px-6 relative">
      <div className="max-w-6xl mx-auto relative">
        {/* Main Trading Interface */}
        <div className="bg-gray-900 rounded-2xl shadow-xl relative overflow-hidden h-[500px] md:h-[600px]">
          {/* Watermark Logo */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
            <div className="w-40 h-40 rounded-full bg-ivestron-blue/20 flex items-center justify-center text-white text-8xl font-bold">
              I
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-24 bg-black/90 p-3 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-8 mt-4">
              <div className="w-6 h-6 rounded-full bg-ivestron-blue"></div>
            </div>
            
            {['How to trade?', 'Interface guide', 'All Videos', 'Basics', 'Technical Analysis', 'Fundamental Analysis'].map((item, index) => (
              <div key={index} className="text-white/60 text-[8px] md:text-[9px] text-center mb-5 cursor-pointer hover:text-ivestron-blue">
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
            logo="M"
            name="Meta"
            profit="190%"
            price="577.62"
            change="+0.15%"
            isPositive={true}
            position="top-left"
          />
          
          <AssetCard 
            logo="G"
            name="Google"
            profit="190%"
            price="120.85"
            change="+0.22%"
            isPositive={true}
            position="bottom-left"
          />
          
          <AssetCard 
            logo="₿"
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
};

export default TradingInterface;
