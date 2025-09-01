import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, MessageCircle, Target, Clock, Building2 } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface ConsultingRequestFormProps {
  trigger?: React.ReactNode;
}

const ConsultingRequestForm = ({ trigger }: ConsultingRequestFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [consultingType, setConsultingType] = useState("");
  const [urgency, setUrgency] = useState("");
  const [preferredStartDate, setPreferredStartDate] = useState<Date>();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const { toast } = useToast();

  const consultingServices = [
    "Regulatory Strategy & Submissions",
    "Clinical Trial Design & Management",
    "Quality Management Systems",
    "Compliance & Validation",
    "Risk Assessment & Management",
    "Process Development & Optimization",
    "Technology Transfer",
    "Due Diligence & Assessment",
    "Training Program Development",
    "Standard Operating Procedures (SOPs)",
    "Audit Preparation & Response",
    "Change Control Implementation",
    "Data Integrity & ALCOA+",
    "Computer System Validation",
    "Method Development & Validation",
    "Supplier Qualification",
    "Corrective & Preventive Actions (CAPA)",
    "Market Access Strategy"
  ];

  const handleServiceChange = (service: string, checked: boolean) => {
    if (checked) {
      setSelectedServices([...selectedServices, service]);
    } else {
      setSelectedServices(selectedServices.filter(s => s !== service));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (!consultingType) {
      toast({
        title: "Consulting Type Required",
        description: "Please select the type of consulting engagement.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    if (selectedServices.length === 0) {
      toast({
        title: "Services Required",
        description: "Please select at least one consulting service.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Consulting Request Submitted!",
      description: "Our expert consultants will review your request and contact you within 24 hours.",
    });
    
    setIsSubmitting(false);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="flex items-center space-x-2">
            <MessageCircle className="h-4 w-4" />
            <span>Request Consulting</span>
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <MessageCircle className="h-5 w-5 text-primary" />
            <span>Request Consulting Services</span>
          </DialogTitle>
          <DialogDescription>
            Tell us about your consulting needs and our expert team will provide tailored solutions.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Contact Information */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" placeholder="Your first name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" placeholder="Your last name" required />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="your.email@company.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" placeholder="Your phone number" required />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="jobTitle">Job Title *</Label>
                  <Input id="jobTitle" placeholder="Your job title" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Input id="department" placeholder="Your department" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Company Information */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Company Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="company">Company Name *</Label>
                <Input id="company" placeholder="Your company name" required />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pharmaceutical">Pharmaceutical</SelectItem>
                      <SelectItem value="biotechnology">Biotechnology</SelectItem>
                      <SelectItem value="medical-devices">Medical Devices</SelectItem>
                      <SelectItem value="cro">Contract Research Organization (CRO)</SelectItem>
                      <SelectItem value="cmo">Contract Manufacturing Organization (CMO)</SelectItem>
                      <SelectItem value="cdmo">Contract Development & Manufacturing Organization (CDMO)</SelectItem>
                      <SelectItem value="startup">Biotech/Pharma Startup</SelectItem>
                      <SelectItem value="investor">Investment/Venture Capital</SelectItem>
                      <SelectItem value="academia">Academia/Research Institution</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="companySize">Company Size *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select company size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="startup">Startup (1-50 employees)</SelectItem>
                      <SelectItem value="small">Small (51-200 employees)</SelectItem>
                      <SelectItem value="medium">Medium (201-1000 employees)</SelectItem>
                      <SelectItem value="large">Large (1000+ employees)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Consulting Requirements */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center space-x-2">
                <Target className="h-5 w-5" />
                <span>Consulting Requirements</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Type of Engagement */}
              <div className="space-y-3">
                <Label>Type of Consulting Engagement *</Label>
                <RadioGroup value={consultingType} onValueChange={setConsultingType}>
                  <div className="flex items-center space-x-3 border rounded-lg p-3">
                    <RadioGroupItem value="strategic" id="strategic" />
                    <Label htmlFor="strategic" className="cursor-pointer flex-1">
                      <strong>Strategic Consulting</strong>
                      <p className="text-sm text-muted-foreground">High-level strategy, planning, and decision support</p>
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-3 border rounded-lg p-3">
                    <RadioGroupItem value="operational" id="operational" />
                    <Label htmlFor="operational" className="cursor-pointer flex-1">
                      <strong>Operational Consulting</strong>
                      <p className="text-sm text-muted-foreground">Process improvement, implementation, and optimization</p>
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-3 border rounded-lg p-3">
                    <RadioGroupItem value="technical" id="technical" />
                    <Label htmlFor="technical" className="cursor-pointer flex-1">
                      <strong>Technical Consulting</strong>
                      <p className="text-sm text-muted-foreground">Expert technical guidance and problem-solving</p>
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-3 border rounded-lg p-3">
                    <RadioGroupItem value="interim" id="interim" />
                    <Label htmlFor="interim" className="cursor-pointer flex-1">
                      <strong>Interim Management</strong>
                      <p className="text-sm text-muted-foreground">Temporary leadership and management support</p>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Timeline & Urgency */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="duration">Expected Duration *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-week">1 Week</SelectItem>
                      <SelectItem value="2-4-weeks">2-4 Weeks</SelectItem>
                      <SelectItem value="1-3-months">1-3 Months</SelectItem>
                      <SelectItem value="3-6-months">3-6 Months</SelectItem>
                      <SelectItem value="6-12-months">6-12 Months</SelectItem>
                      <SelectItem value="ongoing">Ongoing Relationship</SelectItem>
                      <SelectItem value="project-based">Project-Based</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="urgency">Urgency Level *</Label>
                  <Select required value={urgency} onValueChange={setUrgency}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select urgency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="urgent">Urgent (Start within 1 week)</SelectItem>
                      <SelectItem value="high">High (Start within 2-4 weeks)</SelectItem>
                      <SelectItem value="medium">Medium (Start within 1-2 months)</SelectItem>
                      <SelectItem value="low">Low (Flexible timeline)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Preferred Start Date */}
              <div className="space-y-2">
                <Label>Preferred Start Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !preferredStartDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {preferredStartDate ? format(preferredStartDate, "PPP") : "Select start date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={preferredStartDate}
                      onSelect={setPreferredStartDate}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </CardContent>
          </Card>

          {/* Consulting Services */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Areas of Consulting Interest *</CardTitle>
              <CardDescription>
                Select all areas where you need consulting support
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3 max-h-60 overflow-y-auto">
                {consultingServices.map((service) => (
                  <div key={service} className="flex items-center space-x-2">
                    <Checkbox
                      id={service}
                      checked={selectedServices.includes(service)}
                      onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
                    />
                    <Label htmlFor={service} className="text-sm cursor-pointer">
                      {service}
                    </Label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Project Details */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Project Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="projectBackground">Project Background & Context *</Label>
                <Textarea 
                  id="projectBackground" 
                  placeholder="Provide background information about your project, company situation, or challenge..."
                  rows={3}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="objectives">Consulting Objectives *</Label>
                <Textarea 
                  id="objectives" 
                  placeholder="What specific outcomes do you want to achieve through this consulting engagement?"
                  rows={3}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="challenges">Key Challenges or Pain Points *</Label>
                <Textarea 
                  id="challenges" 
                  placeholder="Describe the main challenges you're facing that require consulting expertise..."
                  rows={3}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="scope">Scope of Work</Label>
                <Textarea 
                  id="scope" 
                  placeholder="If you have specific ideas about the scope of work, deliverables, or approach..."
                  rows={3}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="budget">Budget Range</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget range (optional)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-25k">Under $25,000</SelectItem>
                    <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                    <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                    <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                    <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                    <SelectItem value="over-500k">Over $500,000</SelectItem>
                    <SelectItem value="flexible">Flexible/To be discussed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="previousExperience">Previous Consulting Experience</Label>
                <Textarea 
                  id="previousExperience" 
                  placeholder="Have you worked with consultants before? What worked well or didn't work well?"
                  rows={2}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="additionalInfo">Additional Information</Label>
                <Textarea 
                  id="additionalInfo" 
                  placeholder="Any other relevant information, requirements, or questions..."
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>
          
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
              disabled={isSubmitting || !consultingType || selectedServices.length === 0}
              className="flex-1"
            >
              {isSubmitting ? "Submitting Request..." : "Submit Consulting Request"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultingRequestForm;