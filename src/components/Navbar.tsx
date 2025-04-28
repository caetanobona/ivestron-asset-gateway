
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
    <nav className="w-full bg-ivestron-bg shadow-lg border-b border-white/10 py-6 px-10 md:px-12 lg:px-16 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          {/* Logo */}
          <div className="flex items-center mr-12">
            <img 
              src="/lovable-uploads/795bb033-d644-4c19-be37-6a0ba0fa84d9.png" 
              alt="IVESTRON"
              className="h-8 w-auto"
            />
          </div>
          
          {/* Navigation links */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="font-medium text-white/80 hover:text-ivestron-blue transition-colors">Início</a>
            <a href="#" className="font-medium text-white/80 hover:text-ivestron-blue transition-colors">Ativos</a>
            <a href="#" className="font-medium text-white/80 hover:text-ivestron-blue transition-colors">Agilidade</a>
            <a href="#" className="font-medium text-white/80 hover:text-ivestron-blue transition-colors">Ferramentas</a>
          </div>
        </div>
        
        {/* Right section: Language and Authentication */}
        <div className="flex items-center space-x-6">
          {/* Language selector */}
          <div className="hidden md:flex items-center cursor-pointer text-white/80">
            <Globe size={16} />
            <span className="mx-2">Português</span>
            <ChevronDown size={16} />
          </div>
          
          {/* Authentication buttons */}
          <a href="#" className="hidden md:block text-white/80 hover:text-ivestron-blue transition-colors">Acessar</a>
          <Button className="bg-ivestron-blue hover:bg-ivestron-blue-dark text-white rounded-md px-5 py-2">
            Criar conta
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
