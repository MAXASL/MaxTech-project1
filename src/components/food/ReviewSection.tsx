import React, { useState, useEffect } from 'react';
import { Star, MessageSquare, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';

interface Review {
  id: string;
  customer_name: string;
  rating: number;
  comment: string;
  created_at: string;
}

const ReviewSection: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newReview, setNewReview] = useState({
    customer_name: '',
    rating: 5,
    comment: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Fetch reviews from Supabase
  const fetchReviews = async () => {
    try {
      // This will be connected to Supabase once the table is created
      const mockReviews: Review[] = [
        {
          id: '1',
          customer_name: 'Sarah Mwanza',
          rating: 5,
          comment: 'Amazing traditional Zambian food! The nshima was perfectly prepared and the relish was incredibly flavorful.',
          created_at: '2024-01-15T10:30:00Z'
        },
        {
          id: '2',
          customer_name: 'John Tembo',
          rating: 4,
          comment: 'Great variety of dishes and authentic taste. The service was excellent and food arrived fresh and hot.',
          created_at: '2024-01-14T15:45:00Z'
        },
        {
          id: '3',
          customer_name: 'Mary Lungu',
          rating: 5,
          comment: 'Best Zambian restaurant I have tried! The kapenta was delicious and reminded me of home cooking.',
          created_at: '2024-01-13T12:20:00Z'
        }
      ];
      setReviews(mockReviews);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  // Submit new review
  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.customer_name.trim() || !newReview.comment.trim()) {
      toast({
        title: "Please fill in all fields",
        description: "Name and comment are required.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    try {
      // This will be connected to Supabase
      const review: Review = {
        id: Date.now().toString(),
        customer_name: newReview.customer_name,
        rating: newReview.rating,
        comment: newReview.comment,
        created_at: new Date().toISOString()
      };
      
      setReviews(prev => [review, ...prev]);
      setNewReview({ customer_name: '', rating: 5, comment: '' });
      
      toast({
        title: "Review submitted!",
        description: "Thank you for your feedback. Your review helps us improve our service.",
      });
    } catch (error) {
      toast({
        title: "Error submitting review",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStars = (rating: number, interactive = false, onRatingChange?: (rating: number) => void) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= rating 
                ? 'fill-primary text-primary' 
                : 'text-muted-foreground'
            } ${interactive ? 'cursor-pointer hover:text-primary' : ''}`}
            onClick={() => interactive && onRatingChange?.(star)}
          />
        ))}
      </div>
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const averageRating = reviews.length > 0 
    ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)
    : '0';

  return (
    <section className="bg-card/50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MessageSquare className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">Customer Reviews</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            See what our customers say about their experience with Zambian Delights
          </p>
          {reviews.length > 0 && (
            <div className="flex items-center justify-center gap-2">
              {renderStars(Math.round(Number(averageRating)))}
              <span className="text-lg font-semibold">{averageRating}</span>
              <span className="text-muted-foreground">({reviews.length} reviews)</span>
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Review Form */}
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Share Your Experience
              </CardTitle>
              <CardDescription>
                We'd love to hear about your dining experience with us
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Your Name</label>
                  <Input
                    value={newReview.customer_name}
                    onChange={(e) => setNewReview(prev => ({ ...prev, customer_name: e.target.value }))}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Rating</label>
                  {renderStars(
                    newReview.rating, 
                    true, 
                    (rating) => setNewReview(prev => ({ ...prev, rating }))
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Your Review</label>
                  <Textarea
                    value={newReview.comment}
                    onChange={(e) => setNewReview(prev => ({ ...prev, comment: e.target.value }))}
                    placeholder="Tell us about your experience with our food and service..."
                    rows={4}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Review'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Reviews Display */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Recent Reviews</h3>
            <div className="space-y-4 max-h-[600px] overflow-y-auto">
              {reviews.length === 0 ? (
                <Card className="p-6 text-center">
                  <p className="text-muted-foreground">No reviews yet. Be the first to share your experience!</p>
                </Card>
              ) : (
                reviews.map((review) => (
                  <Card key={review.id} className="border border-border/50 hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-10 h-10">
                            <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                              {review.customer_name.charAt(0).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-semibold">{review.customer_name}</h4>
                            <p className="text-sm text-muted-foreground">
                              {formatDate(review.created_at)}
                            </p>
                          </div>
                        </div>
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-primary text-primary" />
                          {review.rating}
                        </Badge>
                      </div>
                      <div className="mb-3">
                        {renderStars(review.rating)}
                      </div>
                      <p className="text-foreground leading-relaxed">{review.comment}</p>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;