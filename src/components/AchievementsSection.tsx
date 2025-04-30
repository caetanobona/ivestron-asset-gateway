
import React from 'react';
import { Star } from 'lucide-react';

type TestimonialCardProps = {
  name: string;
  age: number;
  testimonial: string;
  rating: number;
  className?: string;
};

const TestimonialCard = ({ name, age, testimonial, rating, className }: TestimonialCardProps) => {
  return (
    <div className={`bg-stone-900 rounded-xl p-6 ${className}`}>
      <p className="text-white mb-6">{testimonial}</p>
      
      <div>
        <p className="font-bold mb-2">{name}, {age}</p>
        <div className="flex">
          {Array(5).fill(0).map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              fill={i < rating ? "#FFD700" : "transparent"} 
              color="#FFD700"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const AchievementsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-stone-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            Conheça um pouco das
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            nossas <span className="text-ivestron-blue">conquistas</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-stone-900 rounded-xl p-6">
            <p className="mb-6">Sou trader a 3 anos eu sofria com corretoras que tinham delay no gráfico, interface complexa e poucas ferramentas de análise, finalmente encontrei uma verdadeiramente boa!</p>
            <p className="font-bold mb-2">Ricardo Nogueira, 24</p>
            <div className="flex">
              {Array(5).fill(0).map((_, i) => (
                <Star key={i} size={16} fill="#FFD700" color="#FFD700" />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-stone-900 rounded-xl p-6 flex justify-center items-center">
              <div className="text-center">
                <h3 className="text-6xl font-bold text-ivestron-blue">700K<span className="text-green-400">+</span></h3>
                <p className="text-lg">Usuários investindo</p>
              </div>
            </div>
            
            <div className="bg-stone-900 rounded-xl overflow-hidden">
              <img 
                src="/lovable-uploads/87860589-00a0-4a88-8904-d41bdd4501da.png" 
                alt="Trading chart" 
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="bg-stone-900 rounded-xl p-6">
            <p className="mb-6">Eu comecei a fazer minhas operações na avalon no ano passado, de lá até aqui eu já lucrei mais de 10 salários só aplicando as estratégias dos grupos! Claro que sempre tem risco, mas investindo com calma é sempre sucesso.</p>
            <p className="font-bold mb-2">Nicolas Alves, 33</p>
            <div className="flex">
              {Array(5).fill(0).map((_, i) => (
                <Star key={i} size={16} fill="#FFD700" color="#FFD700" />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="md:col-span-2">
            <div className="bg-stone-900 rounded-xl p-6 h-full">
              <p className="mb-6">Sou iniciante apenas copio as operacoes de outros traders, já usei outras corretoras mas escolhi a IVESTRON por que as ordens sao instantaneas, e nunca tive problemas de saque.</p>
              <p className="font-bold mb-2">Angela Doncato, 20</p>
              <div className="flex">
                {Array(4).fill(0).map((_, i) => (
                  <Star key={i} size={16} fill="#FFD700" color="#FFD700" />
                ))}
                <Star size={16} fill="transparent" color="#FFD700" />
              </div>
            </div>
          </div>

          <div className="bg-stone-900 rounded-xl overflow-hidden">
            <img 
              src="/lovable-uploads/c75f0900-17f3-4656-a926-87976798a930.png" 
              alt="Trading chart" 
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="mt-8 bg-green-500 rounded-xl p-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-3 text-white">
            $896 <span className="text-3xl md:text-5xl">Milhões</span>
          </h2>
          <p className="text-xl text-white">
            distribuídos em lucro para nossos usuários!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
