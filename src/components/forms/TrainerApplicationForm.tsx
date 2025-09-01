import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { UserCheck, Upload, Award, Briefcase } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface TrainerApplicationFormProps {
  trigger?: React.ReactNode;
}

const TrainerApplicationForm = ({ trigger }: TrainerApplicationFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([]);
  const [selectedFormats, setSelectedFormats] = useState<string[]>([]);
  const { toast } = useToast();

  const expertiseAreas = [
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
    "Risk Management & ICH Guidelines",
    "Data Integrity & ALCOA+",
    "Validation & Qualification",
    "Pharmacovigilance",
    "Regulatory Submissions (FDA/EMA)",
    "Clinical Data Management",
    "Biostatistics"
  ];

  const trainingFormats = [
    "In-Person Training",
    "Virtual/Online Training",
    "Hybrid Training",
    "Workshop Facilitation",
    "Webinar Presentation",
    "One-on-One Coaching",
    "Mentoring Programs",
    "Conference Speaking",
    "Panel Discussions"
  ];

  const handleExpertiseChange = (area: string, checked: boolean) => {
    if (checked) {
      setSelectedExpertise([...selectedExpertise, area]);
    } else {
      setSelectedExpertise(selectedExpertise.filter(e => e !== area));
    }
  };

  const handleFormatChange = (format: string, checked: boolean) => {
    if (checked) {
      setSelectedFormats([...selectedFormats, format]);
    } else {
      setSelectedFormats(selectedFormats.filter(f => f !== format));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (selectedExpertise.length === 0) {
      toast({
        title: "Expertise Areas Required",
        description: "Please select at least one area of expertise.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    if (selectedFormats.length === 0) {
      toast({
        title: "Training Formats Required",
        description: "Please select at least one preferred training format.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Application Submitted Successfully!",
      description: "Thank you for your interest! Our team will review your application and contact you within 5 business days.",
    });
    
    setIsSubmitting(false);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="flex items-center space-x-2">
            <UserCheck className="h-4 w-4" />
            <span>Apply to be a Trainer</span>
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <UserCheck className="h-5 w-5 text-primary" />
            <span>Trainer Application</span>
          </DialogTitle>
          <DialogDescription>
            Join our team of expert trainers and share your knowledge with pharma and biotech professionals worldwide.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Personal Information</CardTitle>
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
                  <Label htmlFor="linkedin">LinkedIn Profile</Label>
                  <Input id="linkedin" placeholder="https://linkedin.com/in/yourprofile" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location *</Label>
                  <Input id="location" placeholder="City, Country" required />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Background */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center space-x-2">
                <Briefcase className="h-5 w-5" />
                <span>Professional Background</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="currentTitle">Current Job Title *</Label>
                  <Input id="currentTitle" placeholder="Your current position" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currentCompany">Current Company *</Label>
                  <Input id="currentCompany" placeholder="Your current company" required />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="experience">Years of Industry Experience *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5-10">5-10 years</SelectItem>
                      <SelectItem value="10-15">10-15 years</SelectItem>
                      <SelectItem value="15-20">15-20 years</SelectItem>
                      <SelectItem value="20+">20+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="education">Highest Education Level *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select education" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                      <SelectItem value="masters">Master's Degree</SelectItem>
                      <SelectItem value="phd">Ph.D./Doctorate</SelectItem>
                      <SelectItem value="md">M.D.</SelectItem>
                      <SelectItem value="pharmd">Pharm.D.</SelectItem>
                      <SelectItem value="other">Other Advanced Degree</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="educationDetails">Education Details *</Label>
                <Textarea 
                  id="educationDetails" 
                  placeholder="Please provide details about your educational background (degree, university, field of study, year)..."
                  rows={3}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="workHistory">Brief Work History *</Label>
                <Textarea 
                  id="workHistory" 
                  placeholder="Summarize your relevant work experience, key positions, and career progression..."
                  rows={4}
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Training Experience */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center space-x-2">
                <Award className="h-5 w-5" />
                <span>Training & Teaching Experience</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="trainingExperience">Training/Teaching Experience *</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">No formal training experience</SelectItem>
                    <SelectItem value="some">Some training experience (1-3 years)</SelectItem>
                    <SelectItem value="moderate">Moderate experience (3-7 years)</SelectItem>
                    <SelectItem value="extensive">Extensive experience (7+ years)</SelectItem>
                    <SelectItem value="professional">Professional trainer/educator</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="trainingDetails">Training Experience Details</Label>
                <Textarea 
                  id="trainingDetails" 
                  placeholder="Describe your training/teaching experience, including types of training delivered, audience size, organizations..."
                  rows={4}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="certifications">Professional Certifications</Label>
                <Textarea 
                  id="certifications" 
                  placeholder="List any relevant professional certifications, training credentials, or industry qualifications..."
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Expertise Areas */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Areas of Expertise *</CardTitle>
              <CardDescription>
                Select all areas where you have deep expertise and can provide training
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3 max-h-60 overflow-y-auto">
                {expertiseAreas.map((area) => (
                  <div key={area} className="flex items-center space-x-2">
                    <Checkbox
                      id={area}
                      checked={selectedExpertise.includes(area)}
                      onCheckedChange={(checked) => handleExpertiseChange(area, checked as boolean)}
                    />
                    <Label htmlFor={area} className="text-sm cursor-pointer">
                      {area}
                    </Label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Training Preferences */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Training Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Label>Preferred Training Formats *</Label>
                <div className="grid grid-cols-2 gap-3">
                  {trainingFormats.map((format) => (
                    <div key={format} className="flex items-center space-x-2">
                      <Checkbox
                        id={format}
                        checked={selectedFormats.includes(format)}
                        onCheckedChange={(checked) => handleFormatChange(format, checked as boolean)}
                      />
                      <Label htmlFor={format} className="text-sm cursor-pointer">
                        {format}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="availability">Availability *</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select availability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full-time">Full-time availability</SelectItem>
                    <SelectItem value="part-time">Part-time (evenings/weekends)</SelectItem>
                    <SelectItem value="project-based">Project-based engagement</SelectItem>
                    <SelectItem value="occasional">Occasional/As needed</SelectItem>
                    <SelectItem value="flexible">Flexible schedule</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="travelWillingness">Travel Willingness *</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select travel preference" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="no-travel">No travel (virtual only)</SelectItem>
                    <SelectItem value="local">Local travel only</SelectItem>
                    <SelectItem value="domestic">Domestic travel</SelectItem>
                    <SelectItem value="international">International travel</SelectItem>
                    <SelectItem value="extensive">Extensive travel (50%+)</SelectItem>
                  </SelectContent>
                </Select>
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
                <Label htmlFor="motivation">Why do you want to become a trainer with Synova Training? *</Label>
                <Textarea 
                  id="motivation" 
                  placeholder="Share your motivation for training and what you hope to achieve..."
                  rows={3}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="uniqueValue">What unique value would you bring to our training programs? *</Label>
                <Textarea 
                  id="uniqueValue" 
                  placeholder="Describe your unique perspective, experience, or approach to training..."
                  rows={3}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="publicSpeaking">Public Speaking & Presentation Experience</Label>
                <Textarea 
                  id="publicSpeaking" 
                  placeholder="Describe your experience with public speaking, presentations, conferences, workshops..."
                  rows={3}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="additionalInfo">Additional Information</Label>
                <Textarea 
                  id="additionalInfo" 
                  placeholder="Any other relevant information, achievements, publications, or special skills..."
                  rows={3}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="references">Professional References</Label>
                <Textarea 
                  id="references" 
                  placeholder="Please provide 2-3 professional references (name, title, company, contact information)..."
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>

          {/* File Uploads */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center space-x-2">
                <Upload className="h-5 w-5" />
                <span>Documents</span>
              </CardTitle>
              <CardDescription>
                Please prepare these documents to send via email after submission
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Required Documents (to be sent via email):</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Current Resume/CV</li>
                  <li>• Sample training materials or presentation slides (if available)</li>
                  <li>• List of publications or relevant work samples</li>
                  <li>• Professional headshot photo</li>
                  <li>• Any training certificates or credentials</li>
                </ul>
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
              disabled={isSubmitting || selectedExpertise.length === 0 || selectedFormats.length === 0}
              className="flex-1"
            >
              {isSubmitting ? "Submitting Application..." : "Submit Application"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TrainerApplicationForm;