import React from 'react';
import { Sunrise, Sun, Moon, Phone, MapPin } from 'lucide-react';
import RestaurantHeader from '@/components/food/RestaurantHeader';
import MenuSection from '@/components/food/MenuSection';
import { zambianFoods } from '@/data/zambianFoods';
import { CartProvider } from '@/contexts/CartContext';

const FoodOrder: React.FC = () => {
  const morningFoods = zambianFoods.filter(food => food.category === 'morning');
  const middayFoods = zambianFoods.filter(food => food.category === 'midday');
  const dinnerFoods = zambianFoods.filter(food => food.category === 'dinner');

  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <RestaurantHeader />
        
        <main>
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Welcome to <span className="text-primary">Zambian Delights</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Experience the authentic taste of Zambia with our traditional dishes, 
                made fresh daily with love and the finest local ingredients.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2 bg-background/50 rounded-full px-4 py-2">
                  <Sunrise className="w-4 h-4 text-primary" />
                  <span>Fresh Breakfast</span>
                </div>
                <div className="flex items-center gap-2 bg-background/50 rounded-full px-4 py-2">
                  <Sun className="w-4 h-4 text-primary" />
                  <span>Hearty Lunch</span>
                </div>
                <div className="flex items-center gap-2 bg-background/50 rounded-full px-4 py-2">
                  <Moon className="w-4 h-4 text-primary" />
                  <span>Delicious Dinner</span>
                </div>
              </div>
            </div>
          </section>

          {/* Menu Sections */}
          <MenuSection 
            title="Morning Delights" 
            foods={morningFoods}
            icon={<Sunrise className="w-8 h-8 text-primary" />}
          />
          
          <div className="bg-muted/30">
            <MenuSection 
              title="Midday Favorites" 
              foods={middayFoods}
              icon={<Sun className="w-8 h-8 text-primary" />}
            />
          </div>
          
          <MenuSection 
            title="Evening Specials" 
            foods={dinnerFoods}
            icon={<Moon className="w-8 h-8 text-primary" />}
          />
        </main>

        {/* Footer */}
        <footer className="bg-secondary py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-lg font-semibold mb-2">Zambian Delights Restaurant</h3>
            <p className="text-muted-foreground mb-4">
              Bringing you the authentic taste of Zambia since 2020
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+260 XX XXX XXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Lusaka, Zambia</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </CartProvider>
  );
};

export default FoodOrder;