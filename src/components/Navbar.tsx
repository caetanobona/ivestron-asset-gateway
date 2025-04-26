
import React from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm py-6 px-10 md:px-12 lg:px-16 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          {/* Logo */}
          <div className="flex items-center mr-12">
            <div className="w-10 h-10 rounded-md bg-ivestron-blue flex items-center justify-center text-white text-lg font-bold">I</div>
            <span className="ml-2 font-bold text-xl">IVESTRON</span>
          </div>
          
          {/* Navigation links */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="font-medium text-gray-800 hover:text-ivestron-blue transition-colors">Início</a>
            <a href="#" className="font-medium text-gray-800 hover:text-ivestron-blue transition-colors">Ativos</a>
            <a href="#" className="font-medium text-gray-800 hover:text-ivestron-blue transition-colors">Agilidade</a>
            <a href="#" className="font-medium text-gray-800 hover:text-ivestron-blue transition-colors">Ferramentas</a>
          </div>
        </div>
        
        {/* Right section: Language and Authentication */}
        <div className="flex items-center space-x-6">
          {/* Language selector */}
          <div className="hidden md:flex items-center cursor-pointer">
            <Globe size={16} className="text-gray-600" />
            <span className="mx-2 text-gray-800">Português</span>
            <ChevronDown size={16} className="text-gray-600" />
          </div>
          
          {/* Authentication buttons */}
          <a href="#" className="hidden md:block text-gray-800 hover:text-ivestron-blue transition-colors">Acessar</a>
          <Button className="bg-ivestron-blue hover:bg-ivestron-blue-dark text-white rounded-md px-5 py-2">
            Criar conta
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
