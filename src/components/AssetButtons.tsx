
import React from 'react';
import { CarouselItem, ContinuousCarousel } from './ContinuousCarousel';
import { FaAmazon, FaEthereum, FaMeta } from 'react-icons/fa6';
import { SiCocacola, SiDogecoin } from 'react-icons/si'
import { MdOutlineOilBarrel } from 'react-icons/md';
import { TbBrandDisney } from 'react-icons/tb';
import { AiFillGold } from 'react-icons/ai';

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
  const assets : CarouselItem[] = [
    { icon: <FaMeta color='black'/>, label: "Meta" },
    { icon: <SiDogecoin color='black'/>, label: "Doge" },
    { icon: <MdOutlineOilBarrel color='black'/>, label: "Oil Brent" },
    { icon: <FaAmazon color='black'/>, label: "Amazon.com Inc." },
    { icon: <AiFillGold color='black'/>, label: "Ouro" },
    { icon: <SiCocacola color='black'/>, label: "Coca-Cola Company" },
    { icon: <FaEthereum color='black'/>, label: "Ethereum" },
    { icon: <TbBrandDisney color='black'/>, label: "Walt Disney Company" }
  ];

  return (
    <ContinuousCarousel items={assets}/>
  );
};

export default AssetButtons;
