import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Globe, Award } from "lucide-react";

const Clients = () => {
  const topPharmaCompanies = [
    "Pfizer", "Johnson & Johnson", "Roche/Genentech", "Novartis", "AbbVie",
    "Merck & Co", "Bristol Myers Squibb", "AstraZeneca", "GSK", "Sanofi",
    "Amgen", "Gilead Sciences", "Eli Lilly", "Biogen", "Regeneron",
    "Moderna", "BioNTech", "Vertex Pharmaceuticals", "Alexion", "Celgene"
  ];

  const clientCategories = [
    {
      title: "Big Pharma",
      companies: topPharmaCompanies.slice(0, 10),
      icon: Building2,
      description: "Leading global pharmaceutical companies"
    },
    {
      title: "Biotech Leaders",
      companies: topPharmaCompanies.slice(10, 20),
      icon: Award,
      description: "Innovative biotechnology companies"
    }
  ];

  const partnershipAreas = [
    "Clinical Trial Training",
    "Regulatory Affairs Consulting",
    "Quality Management Systems",
    "Process Development & Scale-up",
    "Biologics Manufacturing",
    "Drug-Device Combinations",
    "CMC Regulatory Strategy",
    "Technology Transfer"
  ];

  return (
    <Layout>
      <div className="bg-gradient-subtle min-h-screen">
        {/* Hero Section */}
        <div className="bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Clients</h1>
              <p className="text-xl text-primary-foreground/90">
                Trusted by leading pharmaceutical and biotechnology companies worldwide
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardContent className="p-6">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-foreground mb-2">50+</h3>
                <p className="text-muted-foreground">Global Companies Served</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-foreground mb-2">1000+</h3>
                <p className="text-muted-foreground">Professionals Trained</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-foreground mb-2">95%</h3>
                <p className="text-muted-foreground">Client Satisfaction Rate</p>
              </CardContent>
            </Card>
          </div>

          {/* Client Categories */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Industry Leaders We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From established pharmaceutical giants to innovative biotech startups, 
              we partner with the world's most respected companies in healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {clientCategories.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <category.icon className="h-6 w-6 text-primary mr-3" />
                    {category.title}
                  </CardTitle>
                  <p className="text-muted-foreground">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.companies.map((company, companyIndex) => (
                      <Badge key={companyIndex} variant="outline" className="text-sm">
                        {company}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Partnership Areas */}
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Partnership Areas</CardTitle>
              <p className="text-center text-muted-foreground">
                Key areas where we collaborate with our clients
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {partnershipAreas.map((area, index) => (
                  <div key={index} className="text-center p-4 border border-border rounded-lg">
                    <p className="text-sm font-medium text-foreground">{area}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Testimonial Section */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">What Our Clients Say</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground italic mb-4">
                    "Synova Training's programs have significantly enhanced our team's capabilities 
                    in regulatory affairs and clinical trial management. Their expertise is unmatched."
                  </p>
                  <div className="flex items-center">
                    <div>
                      <p className="font-semibold text-foreground">Dr. Sarah Johnson</p>
                      <p className="text-sm text-muted-foreground">VP of Regulatory Affairs, Major Pharma Co.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground italic mb-4">
                    "The in-house training provided by Synova Training was perfectly tailored to our needs. 
                    Our biologics development process is now much more efficient."
                  </p>
                  <div className="flex items-center">
                    <div>
                      <p className="font-semibold text-foreground">Mark Chen</p>
                      <p className="text-sm text-muted-foreground">Director of Operations, Biotech Innovation Inc.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Clients;