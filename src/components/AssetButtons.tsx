
import React from 'react';

interface AssetButtonProps {
  logo: string;
  name: string;
  color: string;
}

const AssetButton: React.FC<AssetButtonProps> = ({ logo, name, color }) => {
  return (
    <button className="bg-stone-900 rounded-2xl shadow-md py-4 px-5 flex items-center min-w-40 hover:shadow-lg transition-shadow">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${color}`}>
        {logo}
      </div>
      <span className="font-semibold">{name}</span>
    </button>
  );
};

const AssetButtons = () => {
  const assets = [
    { logo: "M", name: "Meta", color: "bg-blue-500 text-white" },
    { logo: "D", name: "Doge", color: "bg-yellow-400 text-white" },
    { logo: "O", name: "Oil Brent", color: "bg-black text-white" },
    { logo: "A", name: "Amazon.com Inc.", color: "bg-orange-500 text-white" },
    { logo: "O", name: "Ouro", color: "bg-yellow-500 text-white" },
    { logo: "C", name: "Coca-Cola Company", color: "bg-red-600 text-white" },
  ];

  return (
    <section className="py-10 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {assets.map((asset, index) => (
            <AssetButton 
              key={index}
              logo={asset.logo}
              name={asset.name}
              color={asset.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssetButtons;
