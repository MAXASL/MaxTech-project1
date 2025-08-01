import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, Menu, X, MessageCircle } from 'lucide-react';
import Cart from './Cart';

const RestaurantHeader: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleContactClick = () => {
    // Scroll to contact section or open contact modal
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback: direct phone call
      window.location.href = 'tel:+260XXXXXXXX';
    }
  };

  return (
    <header className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-primary">Zambian Delights</h1>
              <p className="text-xs md:text-sm text-muted-foreground">Authentic Zambian Cuisine</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <a href="#morning" className="text-sm font-medium hover:text-primary transition-colors">
              Morning
            </a>
            <a href="#midday" className="text-sm font-medium hover:text-primary transition-colors">
              Midday
            </a>
            <a href="#dinner" className="text-sm font-medium hover:text-primary transition-colors">
              Dinner
            </a>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Lusaka, Zambia</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4 text-primary" />
              <span>6:00 AM - 10:00 PM</span>
            </div>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" onClick={handleContactClick}>
              <MessageCircle className="w-4 h-4 mr-2" />
              Contact Us
            </Button>
            <Cart />
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center space-x-2">
            <Cart />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t">
            <nav className="flex flex-col space-y-4 pt-4">
              <a 
                href="#morning" 
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Morning Delights
              </a>
              <a 
                href="#midday" 
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Midday Favorites
              </a>
              <a 
                href="#dinner" 
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Evening Specials
              </a>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Lusaka, Zambia</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>+260 XX XXX XXXX</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-primary" />
                <span>6:00 AM - 10:00 PM</span>
              </div>
              
              <Button variant="outline" onClick={handleContactClick} className="w-full">
                <MessageCircle className="w-4 h-4 mr-2" />
                Contact Us
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default RestaurantHeader;