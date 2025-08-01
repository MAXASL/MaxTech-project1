import React from 'react';
import { Sunrise, Sun, Moon, Phone, MapPin, Clock } from 'lucide-react';
import RestaurantHeader from '@/components/food/RestaurantHeader';
import RestaurantFooter from '@/components/food/RestaurantFooter';
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
          <div id="morning">
            <MenuSection 
              title="Morning Delights" 
              foods={morningFoods}
              icon={<Sunrise className="w-8 h-8 text-primary" />}
            />
          </div>
          
          <div id="midday" className="bg-muted/30">
            <MenuSection 
              title="Midday Favorites" 
              foods={middayFoods}
              icon={<Sun className="w-8 h-8 text-primary" />}
            />
          </div>
          
          <div id="dinner">
            <MenuSection 
              title="Evening Specials" 
              foods={dinnerFoods}
              icon={<Moon className="w-8 h-8 text-primary" />}
            />
          </div>

          {/* Contact Section */}
          <section id="contact-section" className="bg-secondary py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="space-y-2">
                  <Phone className="w-8 h-8 text-primary mx-auto" />
                  <h3 className="font-semibold">Call Us</h3>
                  <p className="text-muted-foreground">+260 XX XXX XXXX</p>
                  <p className="text-sm text-muted-foreground">Available 6:00 AM - 10:00 PM</p>
                </div>
                <div className="space-y-2">
                  <MapPin className="w-8 h-8 text-primary mx-auto" />
                  <h3 className="font-semibold">Visit Us</h3>
                  <p className="text-muted-foreground">Lusaka, Zambia</p>
                  <p className="text-sm text-muted-foreground">Downtown Area</p>
                </div>
                <div className="space-y-2">
                  <Clock className="w-8 h-8 text-primary mx-auto" />
                  <h3 className="font-semibold">Opening Hours</h3>
                  <p className="text-muted-foreground">Daily: 6:00 AM - 10:00 PM</p>
                  <p className="text-sm text-muted-foreground">Fresh food all day</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <RestaurantFooter />
      </div>
    </CartProvider>
  );
};

export default FoodOrder;