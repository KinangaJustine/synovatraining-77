import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UserCheck, Clock } from "lucide-react";
import TrainerApplicationForm from "@/components/forms/TrainerApplicationForm";

const Trainers = () => {
  return (
    <Layout>
      <div className="bg-gradient-subtle min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Our Expert Trainers</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Industry-leading experts delivering world-class training in pharmaceutical and biotechnology development.
            </p>
          </div>

          <Card className="max-w-2xl mx-auto text-center">
            <CardHeader>
              <div className="mx-auto h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="text-2xl">Coming Soon</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                We're currently building our comprehensive trainer profiles page. Our expert trainers 
                bring decades of industry experience from leading pharmaceutical and biotechnology companies.
              </p>
              
              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="font-semibold text-foreground mb-3">Want to Join Our Team?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  We're always looking for experienced professionals to join our training team. 
                  If you have expertise in pharma, biotech, or related fields, we'd love to hear from you.
                </p>
                <TrainerApplicationForm 
                  trigger={
                    <Button>
                      <UserCheck className="mr-2 h-4 w-4" />
                      Apply to be a Trainer
                    </Button>
                  }
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Trainers;