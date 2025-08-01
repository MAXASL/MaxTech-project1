import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const RestaurantFooter = () => {
  return (
    <footer className="bg-muted/50 border-t mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Zambian Delights
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Authentic Zambian cuisine served with love. Experience the rich flavors and traditional recipes passed down through generations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#morning" className="text-muted-foreground hover:text-primary transition-colors">Breakfast Menu</a></li>
              <li><a href="#midday" className="text-muted-foreground hover:text-primary transition-colors">Lunch Menu</a></li>
              <li><a href="#dinner" className="text-muted-foreground hover:text-primary transition-colors">Dinner Menu</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Menu Categories */}
          <div>
            <h3 className="font-semibold mb-4">Our Specialties</h3>
            <ul className="space-y-3">
              <li className="text-muted-foreground">Nshima & Relish</li>
              <li className="text-muted-foreground">Traditional Stews</li>
              <li className="text-muted-foreground">Grilled Meats</li>
              <li className="text-muted-foreground">Fresh Vegetables</li>
              <li className="text-muted-foreground">Local Beverages</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">
                  123 Uhuru Avenue, Lusaka, Zambia
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">
                  +260 123 456 789
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">
                  Daily: 6:00 AM - 10:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Zambian Delights Restaurant. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Food Safety</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default RestaurantFooter;