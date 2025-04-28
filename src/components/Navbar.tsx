
import React, { MouseEventHandler, useRef } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const sectionsRefs = {
    'inicio' : useRef(null),
    'ativos' : useRef(null),
    'agilidade' : useRef(null),
    'ferramentas'  : useRef(null)
  }

  const scrollInto = (event, route : string) => {
    event.preventDefault()

    const section = sectionsRefs[route];

    if(section == null) {
      return
    }

    section.scrollIntoView()
  }

  return (
    <nav className="w-full bg-white shadow-sm py-6 px-10 md:px-12 lg:px-16 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          {/* Logo */}
          <div>
            
          </div>
          
          {/* Navigation links */}
          <div className="hidden md:flex space-x-8">
            <a onClick={event => scrollInto(event, 'inicio')} className="font-medium text-gray-800 hover:text-ivestron-blue transition-colors">Início</a>
            <a onClick={event => scrollInto(event, 'ativos')} className="font-medium text-gray-800 hover:text-ivestron-blue transition-colors">Ativos</a>
            <a onClick={event => scrollInto(event, 'agilidade')} className="font-medium text-gray-800 hover:text-ivestron-blue transition-colors">Agilidade</a>
            <a onClick={event => scrollInto(event, 'ferramentas')} className="font-medium text-gray-800 hover:text-ivestron-blue transition-colors">Ferramentas</a>
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
