import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FileText, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AgendaRequestFormProps {
  courseTitle: string;
  trigger?: React.ReactNode;
}

const AgendaRequestForm = ({ courseTitle, trigger }: AgendaRequestFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const requestData = {
      courseTitle,
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      company: formData.get('company'),
      jobTitle: formData.get('jobTitle'),
      industry: formData.get('industry'),
      phone: formData.get('phone'),
      specificInterests: formData.get('specificInterests')
    };
    
    // Simulate API call - in production, send to backend
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Request Submitted Successfully!",
      description: "We'll send the detailed course agenda to your email within 24 hours.",
    });
    
    setIsSubmitting(false);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" className="flex items-center space-x-2">
            <FileText className="h-4 w-4" />
            <span>Request Agenda</span>
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Download className="h-5 w-5 text-primary" />
            <span>Request Course Agenda</span>
          </DialogTitle>
          <DialogDescription>
            Get the detailed agenda for "{courseTitle}". We'll send it to your email within 24 hours.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input id="firstName" name="firstName" placeholder="Your first name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input id="lastName" name="lastName" placeholder="Your last name" required />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input id="email" name="email" type="email" placeholder="your.email@company.com" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="company">Company *</Label>
            <Input id="company" name="company" placeholder="Your company name" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="jobTitle">Job Title *</Label>
            <Input id="jobTitle" name="jobTitle" placeholder="Your job title" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="industry">Industry *</Label>
            <Select name="industry" required>
              <SelectTrigger>
                <SelectValue placeholder="Select your industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pharmaceutical">Pharmaceutical</SelectItem>
                <SelectItem value="biotechnology">Biotechnology</SelectItem>
                <SelectItem value="medical-devices">Medical Devices</SelectItem>
                <SelectItem value="contract-research">Contract Research Organization (CRO)</SelectItem>
                <SelectItem value="contract-manufacturing">Contract Manufacturing Organization (CMO)</SelectItem>
                <SelectItem value="regulatory-consulting">Regulatory Consulting</SelectItem>
                <SelectItem value="academia">Academia/Research Institution</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" name="phone" placeholder="Your phone number (optional)" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="specificInterests">Specific Interests (Optional)</Label>
            <Textarea 
              id="specificInterests" 
              name="specificInterests"
              placeholder="Any specific topics or questions you'd like the agenda to address..."
              rows={3}
            />
          </div>
          
          <div className="flex space-x-3 pt-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setIsOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="flex-1"
            >
              {isSubmitting ? "Submitting..." : "Request Agenda"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AgendaRequestForm;