import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock } from 'lucide-react';
import Cart from './Cart';

const RestaurantHeader: React.FC = () => {
  return (
    <header className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div>
              <h1 className="text-2xl font-bold text-primary">Zambian Delights</h1>
              <p className="text-sm text-muted-foreground">Authentic Zambian Cuisine</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Lusaka, Zambia</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>+260 XX XXX XXXX</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>6:00 AM - 10:00 PM</span>
            </div>
          </div>

          <Cart />
        </div>
      </div>
    </header>
  );
};

export default RestaurantHeader;