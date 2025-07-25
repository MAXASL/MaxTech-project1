import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechStart Inc.",
    avatar: "",
    content: "LandingGlory transformed our conversion rates. We saw a 300% increase in sign-ups within the first month. The templates are beautiful and the analytics are incredibly detailed.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Founder",
    company: "GrowthLab",
    avatar: "",
    content: "As a non-technical founder, I was amazed at how easy it was to create professional landing pages. The drag-and-drop editor is intuitive and the results speak for themselves.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "InnovateCorp",
    avatar: "",
    content: "The A/B testing features have been game-changing for our campaigns. We can quickly test different variations and optimize for maximum conversions. Highly recommend!",
    rating: 5
  },
  {
    name: "David Thompson",
    role: "Digital Marketing Specialist",
    company: "ScaleUp Agency",
    avatar: "",
    content: "Managing multiple client campaigns has never been easier. The team collaboration features and white-label options make this perfect for agencies like ours.",
    rating: 5
  },
  {
    name: "Lisa Wang",
    role: "E-commerce Manager",
    company: "ShopSmart",
    avatar: "",
    content: "The mobile-responsive designs are fantastic. Our mobile conversion rates improved by 250% after switching to LandingGlory. The customer support is also top-notch.",
    rating: 5
  },
  {
    name: "Alex Mitchell",
    role: "Growth Hacker",
    company: "StartupBoost",
    avatar: "",
    content: "The speed of the pages is incredible. Sub-second load times have significantly improved our SEO rankings and user experience. This platform is a must-have for any serious marketer.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Loved by thousands of
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> marketers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;