import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Target, Users, CheckCircle } from "lucide-react";
import ConsultingRequestForm from "@/components/forms/ConsultingRequestForm";

const Consulting = () => {
  const services = [
    "Regulatory Strategy & Submissions",
    "Clinical Trial Design & Management", 
    "Quality Management Systems",
    "Process Development & Optimization",
    "Risk Assessment & Management",
    "Technology Transfer"
  ];

  return (
    <Layout>
      <div className="bg-gradient-subtle min-h-screen">
        <div className="bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Expert Consulting Services
              </h1>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Strategic guidance and technical expertise to accelerate your pharmaceutical 
                and biotechnology development programs.
              </p>
              <ConsultingRequestForm 
                trigger={
                  <Button size="lg" variant="secondary">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Request Consulting
                  </Button>
                }
              />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Consulting Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From strategic planning to technical implementation, we provide comprehensive 
              consulting solutions tailored to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="font-medium">{service}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <ConsultingRequestForm 
              trigger={
                <Button size="lg">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Get Started with Consulting
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Consulting;