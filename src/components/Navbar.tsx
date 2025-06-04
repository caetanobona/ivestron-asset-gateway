
import React from 'react';
import { Button } from "@/components/ui/button";
import { handleRegister } from '@/hooks/use-register';

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="w-full bg-[#0f0f11] shadow-lg border-b border-white/10 py-6 px-10 md:px-12 lg:px-16 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          {/* Logo */}
          <div className="mr-4 lg:mr-12">
            <a href="https://imgbb.com/">
              <img src="https://i.ibb.co/wZkdpDbT/Logo.png" alt="Logo" className="h-12 w-auto"/>
            </a>
          </div>
          
          {/* Navigation links */}
          <div className="hidden lg:flex space-x-8">
            <a 
              href="#hero" 
              onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }} 
              className="font-medium text-white/80 hover:text-ivestron-green transition-colors"
            >
              Início
            </a>
            <a 
              href="#assets" 
              onClick={(e) => { e.preventDefault(); scrollToSection('assets'); }} 
              className="font-medium text-white/80 hover:text-ivestron-green transition-colors"
            >
              Ativos
            </a>
            <a 
              href="#agility" 
              onClick={(e) => { e.preventDefault(); scrollToSection('agility'); }} 
              className="font-medium text-white/80 hover:text-ivestron-green transition-colors"
            >
              Agilidade
            </a>
            <a 
              href="#tools" 
              onClick={(e) => { e.preventDefault(); scrollToSection('tools'); }} 
              className="font-medium text-white/80 hover:text-ivestron-green transition-colors"
            >
              Ferramentas
            </a>
          </div>
        </div>
        
        {/* Right section: Language and Authentication */}
        <div className="flex items-center space-x-6">
          
          {/* Authentication buttons */}
          <a href="#" className="hidden md:block text-white/80 hover:text-ivestron-green transition-colors">Acessar</a>
          <a 
            className="bg-ivestron-green hover:bg-ivestron-green-dark text-white text-center text-lg rounded-md py-3 w-56 shadow-md"
            href='https://ivestron.com/register'
          >
            Criar conta
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
