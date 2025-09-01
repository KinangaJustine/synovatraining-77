import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, ArrowRight, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";
import course1Image from "@/assets/course-1.jpg";
import course2Image from "@/assets/course-2.jpg";
import course3Image from "@/assets/course-3.jpg";

const featuredCourses = [
  {
    id: 1,
    title: "Advanced Drug Development & Clinical Trials",
    date: "March 15-17, 2024",
    format: "Live Online Training",
    category: "Clinical Trials",
    image: course1Image,
    description: "Comprehensive training on modern drug development processes and regulatory requirements.",
    participants: "12-20"
  },
  {
    id: 2,
    title: "Biotech Manufacturing & Quality Control",
    date: "April 8-10, 2024",
    format: "In-Person Training",
    category: "Biotech",
    image: course2Image,
    description: "Advanced techniques in biotechnology manufacturing and quality assurance.",
    participants: "8-15"
  },
  {
    id: 3,
    title: "Pharmaceutical Regulatory Affairs",
    date: "May 20-22, 2024",
    format: "Hybrid Training",
    category: "Regulatory",
    image: course3Image,
    description: "Navigate complex regulatory landscapes in pharmaceutical development.",
    participants: "15-25"
  }
];

const benefits = [
  "Industry-leading expert trainers",
  "Hands-on practical experience",
  "Real-world case studies",
  "Networking opportunities",
  "Continuing education credits",
  "Post-training support"
];

const Index = () => {
  return (
    <Layout>
      <div className="bg-background">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="relative container mx-auto px-4 py-24">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
                Advance Your Pharma & 
                <span className="block text-accent-light">Biotech Expertise</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 animate-fade-in">
                Join thousands of professionals who have elevated their careers through our 
                specialized training programs in pharmaceutical and biotechnology development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/courses">
                    View Training Courses
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Request Course Agenda
                </Button>
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="relative bg-primary-foreground/10 backdrop-blur-sm border-t border-primary-foreground/20">
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary-foreground">500+</div>
                  <div className="text-sm text-primary-foreground/80">Courses Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-foreground">10k+</div>
                  <div className="text-sm text-primary-foreground/80">Professionals Trained</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-foreground">98%</div>
                  <div className="text-sm text-primary-foreground/80">Satisfaction Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-foreground">50+</div>
                  <div className="text-sm text-primary-foreground/80">Expert Trainers</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Courses */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Upcoming Training Courses</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover our most popular training programs designed to advance your expertise 
                in pharmaceutical and biotechnology development.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredCourses.map((course) => (
                <Card key={course.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300 animate-fade-in">
                  <div className="relative overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary">{course.category}</Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {course.title}
                    </CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{course.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{course.format}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-primary" />
                        <span>{course.participants} participants</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button asChild className="flex-1">
                        <Link to={`/courses/${course.id}`}>View Details</Link>
                      </Button>
                      <Button variant="outline">Request Agenda</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button size="lg" variant="outline" asChild>
                <Link to="/courses">
                  View All Training Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Why Choose Synova Training?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  We've been at the forefront of pharmaceutical and biotechnology training 
                  for over a decade, helping professionals excel in their careers.
                </p>
                
                <ul className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex space-x-4">
                  <Button size="lg" asChild>
                    <Link to="/about">Learn More About Us</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/trainers">Meet Our Trainers</Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="text-center p-6">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Star className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">4.9/5</div>
                    <div className="text-sm text-muted-foreground">Average Rating</div>
                  </Card>
                  
                  <Card className="text-center p-6">
                    <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                      <Users className="h-6 w-6 text-secondary" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">95%</div>
                    <div className="text-sm text-muted-foreground">Completion Rate</div>
                  </Card>
                  
                  <Card className="text-center p-6 col-span-2">
                    <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-6 w-6 text-accent" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">100+</div>
                    <div className="text-sm text-muted-foreground">Fortune 500 Companies Served</div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Advance Your Career?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Join thousands of professionals who have transformed their careers with our 
              expert-led training programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/courses">Browse Training Courses</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;