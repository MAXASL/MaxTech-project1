import React from 'react';
import { FoodItem } from '@/types/food';
import FoodCard from './FoodCard';

interface MenuSectionProps {
  title: string;
  foods: FoodItem[];
  icon: React.ReactNode;
}

const MenuSection: React.FC<MenuSectionProps> = ({ title, foods, icon }) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center gap-3">
            {icon}
            <h2 className="text-3xl font-bold text-center">{title}</h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {foods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;