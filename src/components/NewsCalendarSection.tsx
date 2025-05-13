
import React from 'react';
import { FileText, Calendar, DollarSign } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const NewsItem = ({ flag, title, value }: { flag: string, title: string, value: string }) => (
  <div className="flex items-center gap-3 py-4 border-b border-white/5">
    <div className="w-8 h-8 flex-shrink-0">
      <img src={flag} alt="Country flag" className="w-full h-full rounded-full object-cover" />
    </div>
    <div className="flex-grow">
      <p className="text-gray-200 font-medium">{title}</p>
    </div>
    <div className="text-gray-400">
      {value}
    </div>
  </div>
);

const CalendarItem = ({ flag, title, time }: { flag: string, title: string, time: string }) => (
  <div className="flex items-center gap-3 py-4 border-b border-white/5">
    <div className="w-8 h-8 flex-shrink-0">
      <img src={flag} alt="Country flag" className="w-full h-full rounded-full object-cover" />
    </div>
    <div className="flex-grow">
      <p className="text-gray-200 font-medium">{title}</p>
    </div>
    <div className="flex flex-col items-end">
      <span className="text-gray-400">{time}</span>
      <span className="w-2 h-2 rounded-full bg-green-500 mt-1"></span>
    </div>
  </div>
);

const NewsCalendarSection = () => {
  return (
    <section className="pb-16 md:pb-20 bg-stone-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* News Feed Card */}
          <Card className="bg-gray-900 border-none rounded-xl overflow-hidden">
            <CardContent className="p-0">
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-400 mb-2">
                  <FileText size={18} className="text-ivestron-green" />
                  <span>Notícias</span>
                  
                  <div className="ml-auto flex gap-2">
                    <button className="w-6 h-6 flex items-center justify-center rounded-full bg-white/5">
                      <span className="sr-only">Settings</span>
                      ⚙️
                    </button>
                    <button className="w-6 h-6 flex items-center justify-center rounded-full bg-white/5">
                      <span className="sr-only">Close</span>
                      ✕
                    </button>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className=" bg-ivestron-green/20 text-ivestron-green rounded-full px-3 py-1 text-sm flex items-center gap-1">
                    Ativos Populares
                  </span>
                </div>
                
                <div className="space-y-0">
                  <NewsItem 
                    flag="https://flagcdn.com/w40/us.png" 
                    title="AUD/CAD" 
                    value="0.89226"
                  />
                  <NewsItem 
                    flag="https://flagcdn.com/w40/us.png" 
                    title="Walgreens Boots All" 
                    value="0.89226"
                  />
                  <NewsItem 
                    flag="https://flagcdn.com/w40/gb.png" 
                    title="United Kingdom" 
                    value="0.89226"
                  />
                </div>
                
                <p className="text-gray-400 text-sm mt-4">
                  US Dollar / Yen Commentary - Wednesday, March
                </p>
              </div>
              
              <div className="px-6 py-8">
                <h3 className="text-3xl font-bold mb-2 text-gray-200">
                  Tenha um Feed de <span className="text-green-400">notícias inteligente</span>
                </h3>
                
                <p className="text-gray-400 mt-4">
                  Fique por dentro dos acontecimentos do mercado mundial para se preparar para investir
                </p>
              </div>
            </CardContent>
          </Card>
          
          {/* Calendar Card */}
          <Card className="bg-gray-900 border-none rounded-xl overflow-hidden">
            <CardContent className="p-0">
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-400 mb-4">
                  <Calendar size={18} className="text-ivestron-green" />
                  <span>Calendário econômico</span>
                  
                  <div className="ml-auto flex gap-2">
                    <button className="w-6 h-6 flex items-center justify-center rounded-full bg-white/5">
                      <span className="sr-only">Settings</span>
                      ⚙️
                    </button>
                    <button className="w-6 h-6 flex items-center justify-center rounded-full bg-white/5">
                      <span className="sr-only">Close</span>
                      ✕
                    </button>
                  </div>
                </div>
                
                <div className="space-y-0">
                  <CalendarItem 
                    flag="https://flagcdn.com/w40/ar.png" 
                    title="Chegada de visitantes anuais" 
                    time="15:45"
                  />
                  <CalendarItem 
                    flag="https://flagcdn.com/w40/ca.png" 
                    title="Investimentos em títulos estrangeiros" 
                    time="16:42"
                  />
                  <CalendarItem 
                    flag="https://flagcdn.com/w40/br.png" 
                    title="Investimentos em ações por estrangeiros" 
                    time="16:30"
                  />
                  <CalendarItem 
                    flag="https://flagcdn.com/w40/us.png" 
                    title="Balanços de preços de casas RICS" 
                    time="15:28"
                  />
                </div>
              </div>
              
              <div className="px-6 py-8">
                <h3 className="text-3xl font-bold mb-2 text-gray-200">
                  Acesso ao <span className="text-green-400">Calendário</span> econômico Integrado
                </h3>
                
                <p className="text-gray-400 mt-4">
                  O tempo certo para investir faz toda diferença, nosso calendário te mantem por dentro dos movimentos.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-8 text-center md:flex md:items-center md:justify-between">
          <p className="text-gray-400 mb-6 md:mb-0 md:text-left pr-4">
            Comece a investir na IVESTRON, com segurança através de uma gama de ferramentas ideais para sua tomada de decisão.
          </p>
          
          <Button className="bg-ivestron-green hover:bg-green-600 text-white px-10 py-6 w-full text-lg sm:w-[76%]">
            Comece Agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsCalendarSection;
