import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Building2, Users, Calendar, Target } from "lucide-react";
import InHouseTrainingRequestForm from "@/components/forms/InHouseTrainingRequestForm";

const InHouseTraining = () => {
  const benefits = [
    "Customized curriculum to match your specific needs",
    "Training delivered at your facility or virtually",
    "Flexible scheduling to minimize business disruption",
    "Cost-effective for teams of 8 or more participants",
    "Real-world case studies using your company scenarios",
    "Post-training support and consultation"
  ];

  const features = [
    {
      icon: Building2,
      title: "On-Site or Virtual",
      description: "We deliver training at your location or through our advanced virtual platform"
    },
    {
      icon: Users,
      title: "Team-Focused",
      description: "Tailored specifically for your team's roles, challenges, and objectives"
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Choose dates and times that work best for your business operations"
    },
    {
      icon: Target,
      title: "Custom Content",
      description: "Curriculum designed around your industry, products, and regulatory requirements"
    }
  ];

  return (
    <Layout>
      <div className="bg-gradient-subtle min-h-screen">
        {/* Hero Section */}
        <div className="bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                In-House Training Solutions
              </h1>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Bring our expertise directly to your team with customized training programs
                designed specifically for your organization's needs and objectives.
              </p>
              <InHouseTrainingRequestForm 
                trigger={<Button size="lg" variant="secondary">Request Custom Training</Button>}
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-16">
          {/* Why Choose In-House */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Choose In-House Training?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              When our public courses don't perfectly fit your needs, we'll create bespoke training 
              programs tailored to your team's specific requirements and challenges.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Benefits and Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Perfect for teams of 8+</h4>
                <p className="text-sm text-muted-foreground">
                  In-house training becomes cost-effective when you have 8 or more participants.
                  Contact us for a customized quote based on your specific requirements.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Request In-House Training</CardTitle>
                <CardDescription>
                  Tell us about your training needs and we'll create a custom proposal for your team.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <InHouseTrainingRequestForm 
                  trigger={<Button className="w-full">Request Custom Training Proposal</Button>}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InHouseTraining;