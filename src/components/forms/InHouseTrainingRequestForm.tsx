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
import { CalendarIcon, Building2, Users, Target, Clock } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface InHouseTrainingRequestFormProps {
  trigger?: React.ReactNode;
}

const InHouseTrainingRequestForm = ({ trigger }: InHouseTrainingRequestFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [deliveryMode, setDeliveryMode] = useState("");
  const [preferredDate, setPreferredDate] = useState<Date>();
  const [alternateDate, setAlternateDate] = useState<Date>();
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const { toast } = useToast();

  const trainingTopics = [
    "Clinical Trial Design & Management",
    "Drug Development & Regulatory Affairs",
    "Good Manufacturing Practice (GMP)",
    "Quality Assurance & Quality Control",
    "Bioassay Development & Validation",
    "Process Scale-Up & Technology Transfer",
    "CMC Regulatory Affairs",
    "Extractables & Leachables Studies",
    "Statistical Methods in CMC",
    "Contract Manufacturing Management",
    "Fill-Finish Operations",
    "Drug-Device Combination Products",
    "Biologics Manufacturing",
    "Nucleic Acid Therapeutics",
    "Medical Device Regulations",
    "Risk Management",
    "Data Integrity",
    "Validation & Qualification"
  ];

  const handleTopicChange = (topic: string, checked: boolean) => {
    if (checked) {
      setSelectedTopics([...selectedTopics, topic]);
    } else {
      setSelectedTopics(selectedTopics.filter(t => t !== topic));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (!deliveryMode) {
      toast({
        title: "Delivery Mode Required",
        description: "Please select how you'd like the training delivered.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    if (selectedTopics.length === 0) {
      toast({
        title: "Training Topics Required",
        description: "Please select at least one training topic.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Request Submitted Successfully!",
      description: "Our team will review your requirements and send you a custom proposal within 48 hours.",
    });
    
    setIsSubmitting(false);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button size="lg" variant="secondary">
            Request Custom Training
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Building2 className="h-5 w-5 text-primary" />
            <span>Request In-House Training</span>
          </DialogTitle>
          <DialogDescription>
            Tell us about your training needs and we'll create a custom proposal for your team.
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
                      <SelectItem value="regulatory-consulting">Regulatory Consulting</SelectItem>
                      <SelectItem value="academia">Academia/Research Institution</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="companySize">Company Size</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select company size (optional)" />
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
              
              <div className="space-y-2">
                <Label htmlFor="location">Training Location/Address *</Label>
                <Textarea 
                  id="location" 
                  placeholder="Provide the address where training will be conducted (for on-site) or specify if virtual..."
                  rows={2}
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Training Requirements */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center space-x-2">
                <Target className="h-5 w-5" />
                <span>Training Requirements</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Delivery Mode */}
              <div className="space-y-3">
                <Label>Training Delivery Mode *</Label>
                <RadioGroup value={deliveryMode} onValueChange={setDeliveryMode}>
                  <div className="flex items-center space-x-3 border rounded-lg p-3">
                    <RadioGroupItem value="on_site" id="on_site" />
                    <Label htmlFor="on_site" className="cursor-pointer flex-1">
                      <strong>On-Site Training</strong>
                      <p className="text-sm text-muted-foreground">Trainer comes to your facility</p>
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-3 border rounded-lg p-3">
                    <RadioGroupItem value="virtual" id="virtual" />
                    <Label htmlFor="virtual" className="cursor-pointer flex-1">
                      <strong>Virtual Training</strong>
                      <p className="text-sm text-muted-foreground">Online live training sessions</p>
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-3 border rounded-lg p-3">
                    <RadioGroupItem value="hybrid" id="hybrid" />
                    <Label htmlFor="hybrid" className="cursor-pointer flex-1">
                      <strong>Hybrid Training</strong>
                      <p className="text-sm text-muted-foreground">Combination of on-site and virtual</p>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Number of Participants */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="participants">Number of Participants *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select number" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="8-12">8-12 participants</SelectItem>
                      <SelectItem value="13-20">13-20 participants</SelectItem>
                      <SelectItem value="21-30">21-30 participants</SelectItem>
                      <SelectItem value="31-50">31-50 participants</SelectItem>
                      <SelectItem value="50+">50+ participants</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Preferred Duration *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="half-day">Half Day (4 hours)</SelectItem>
                      <SelectItem value="full-day">Full Day (8 hours)</SelectItem>
                      <SelectItem value="2-days">2 Days</SelectItem>
                      <SelectItem value="3-days">3 Days</SelectItem>
                      <SelectItem value="4-5-days">4-5 Days</SelectItem>
                      <SelectItem value="custom">Custom Duration</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Preferred Dates */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Preferred Start Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !preferredDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {preferredDate ? format(preferredDate, "PPP") : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={preferredDate}
                        onSelect={setPreferredDate}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2">
                  <Label>Alternative Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !alternateDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {alternateDate ? format(alternateDate, "PPP") : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={alternateDate}
                        onSelect={setAlternateDate}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Training Topics */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Training Topics of Interest *</CardTitle>
              <CardDescription>
                Select all topics that are relevant to your training needs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3 max-h-60 overflow-y-auto">
                {trainingTopics.map((topic) => (
                  <div key={topic} className="flex items-center space-x-2">
                    <Checkbox
                      id={topic}
                      checked={selectedTopics.includes(topic)}
                      onCheckedChange={(checked) => handleTopicChange(topic, checked as boolean)}
                    />
                    <Label htmlFor={topic} className="text-sm cursor-pointer">
                      {topic}
                    </Label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Additional Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="experience">Team's Current Experience Level *</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner (0-2 years experience)</SelectItem>
                    <SelectItem value="intermediate">Intermediate (2-5 years experience)</SelectItem>
                    <SelectItem value="advanced">Advanced (5+ years experience)</SelectItem>
                    <SelectItem value="mixed">Mixed experience levels</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="objectives">Specific Learning Objectives *</Label>
                <Textarea 
                  id="objectives" 
                  placeholder="What specific skills or knowledge do you want your team to gain from this training?"
                  rows={3}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="challenges">Current Challenges or Pain Points</Label>
                <Textarea 
                  id="challenges" 
                  placeholder="Describe any specific challenges your team is facing that this training should address..."
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
                    <SelectItem value="under-10k">Under $10,000</SelectItem>
                    <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                    <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                    <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                    <SelectItem value="over-100k">Over $100,000</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="additionalInfo">Additional Requirements</Label>
                <Textarea 
                  id="additionalInfo" 
                  placeholder="Any other requirements, preferences, or information we should know..."
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
              disabled={isSubmitting || !deliveryMode || selectedTopics.length === 0}
              className="flex-1"
            >
              {isSubmitting ? "Submitting Request..." : "Submit Training Request"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default InHouseTrainingRequestForm;