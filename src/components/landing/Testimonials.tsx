import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Luanshya Municipal Council",
    role: "Internship Supervisor",
    company: "Luanshya Municipal Council",
    avatar: "",
    content:
      "Maxas has played an essential role in maintaining and improving our software and hardware systems. His proactive approach to troubleshooting and automation has improved operational efficiency across departments.",
    rating: 5
  },
  {
    name: "QA Lead",
    role: "Quality Assurance",
    company: "Luanshya Municipal Council",
    avatar: "",
    content:
      "Maxas supported the QA team by logging and tracking over 80 issues across multiple projects. His attention to detail and documentation skills were critical to our debugging success.",
    rating: 5
  },
  {
    name: "IT Department",
    role: "Senior Technician",
    company: "Luanshya Municipal Council",
    avatar: "",
    content:
      "Maxas has been instrumental in streamlining internal tools using PHP and JavaScript. His contributions have accelerated our digital transformation initiatives.",
    rating: 5
  },
  {
    name: "Mulungushi University",
    role: "Lecturer – Computer Science",
    company: "Mulungushi University",
    avatar: "",
    content:
      "Throughout his studies, Maxas consistently demonstrated deep understanding of computer science concepts and real-world application. He’s a driven learner with hands-on skills.",
    rating: 5
  },
  {
    name: "Internal Automation Team",
    role: "Lead Developer",
    company: "Luanshya Municipal Council",
    avatar: "",
    content:
      "His assistance with automating internal processes and improving system installations across Windows, Linux, and Mac environments saved the department considerable time and effort.",
    rating: 5
  },
  {
    name: "Supervisor",
    role: "Systems Integration",
    company: "Luanshya Municipal Council",
    avatar: "",
    content:
      "Maxas showcased strong teamwork, problem-solving, and technical skills during his internship, especially when integrating third-party APIs and managing system-wide updates.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by teams and professionals at
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Luanshya Municipal Council</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See what mentors and team leads are saying about Maxas Lukwesa's skills, reliability, and impact.
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
                      {testimonial.name.split(" ").map((n) => n[0]).join("")}
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
