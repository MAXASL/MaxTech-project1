import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Star } from 'lucide-react';
import { FoodItem } from '@/types/food';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

interface FoodCardProps {
  food: FoodItem;
}

const FoodCard: React.FC<FoodCardProps> = ({ food }) => {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addItem(food);
    toast({
      title: "Added to cart",
      description: `${food.name} has been added to your cart.`,
    });
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={food.image} 
            alt={food.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {food.popular && (
            <Badge className="absolute top-2 right-2 bg-accent text-accent-foreground">
              <Star className="w-3 h-3 mr-1" />
              Popular
            </Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <CardTitle className="text-lg mb-2">{food.name}</CardTitle>
        <p className="text-muted-foreground text-sm mb-3">{food.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">K{food.price}</span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={handleAddToCart}
          className="w-full"
          size="sm"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FoodCard;