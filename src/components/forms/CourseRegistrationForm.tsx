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
import { Badge } from "@/components/ui/badge";
import { CreditCard, Building2, Calculator, UserPlus, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CourseRegistrationFormProps {
  courseTitle: string;
  coursePrice: number;
  courseId: string;
  trigger?: React.ReactNode;
}

const CourseRegistrationForm = ({ courseTitle, coursePrice, courseId, trigger }: CourseRegistrationFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [includeVAT, setIncludeVAT] = useState(false);
  const [country, setCountry] = useState("");
  const { toast } = useToast();

  // Calculate VAT (20% for EU, 0% for non-EU for simplicity)
  const isEUCountry = ["UK", "Germany", "France", "Italy", "Spain", "Netherlands", "Belgium", "Austria", "Ireland"].includes(country);
  const vatRate = isEUCountry && includeVAT ? 0.20 : 0;
  const vatAmount = coursePrice * vatRate;
  const totalPrice = coursePrice + vatAmount;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (!paymentMethod) {
      toast({
        title: "Payment Method Required",
        description: "Please select a payment method to continue.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate API call for registration
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    if (paymentMethod === "credit_card") {
      // Here would be the Stripe integration
      // For now, we'll simulate the payment process
      toast({
        title: "Redirecting to Payment",
        description: "You'll be redirected to our secure payment processor shortly.",
      });
      
      // Simulate redirect to payment processor
      setTimeout(() => {
        toast({
          title: "Registration Successful!",
          description: `You've been registered for ${courseTitle}. Check your email for confirmation details.`,
        });
      }, 3000);
      
    } else if (paymentMethod === "bank_transfer") {
      toast({
        title: "Registration Submitted!",
        description: "We'll send you bank transfer details via email within 30 minutes.",
      });
    }
    
    setIsSubmitting(false);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="flex items-center space-x-2">
            <UserPlus className="h-4 w-4" />
            <span>Register Now</span>
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <UserPlus className="h-5 w-5 text-primary" />
            <span>Course Registration</span>
          </DialogTitle>
          <DialogDescription>
            Register for "{courseTitle}" - Complete your details and choose your payment method.
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
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" placeholder="your.email@company.com" required />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" placeholder="Your phone number" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="jobTitle">Job Title *</Label>
                  <Input id="jobTitle" placeholder="Your job title" required />
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
                  <Label htmlFor="country">Country *</Label>
                  <Select required onValueChange={setCountry}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="UK">United Kingdom</SelectItem>
                      <SelectItem value="Germany">Germany</SelectItem>
                      <SelectItem value="France">France</SelectItem>
                      <SelectItem value="Italy">Italy</SelectItem>
                      <SelectItem value="Spain">Spain</SelectItem>
                      <SelectItem value="Netherlands">Netherlands</SelectItem>
                      <SelectItem value="Belgium">Belgium</SelectItem>
                      <SelectItem value="Austria">Austria</SelectItem>
                      <SelectItem value="Ireland">Ireland</SelectItem>
                      <SelectItem value="USA">United States</SelectItem>
                      <SelectItem value="Canada">Canada</SelectItem>
                      <SelectItem value="Australia">Australia</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pharmaceutical">Pharmaceutical</SelectItem>
                      <SelectItem value="biotechnology">Biotechnology</SelectItem>
                      <SelectItem value="medical-devices">Medical Devices</SelectItem>
                      <SelectItem value="cro">Contract Research Organization</SelectItem>
                      <SelectItem value="cmo">Contract Manufacturing Organization</SelectItem>
                      <SelectItem value="academia">Academia/Research</SelectItem>
                      <SelectItem value="regulatory">Regulatory Consulting</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Information */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center space-x-2">
                <Calculator className="h-5 w-5" />
                <span>Payment Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Price Summary */}
              <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                <div className="flex justify-between">
                  <span>Course Fee:</span>
                  <span>${coursePrice.toLocaleString()}</span>
                </div>
                {isEUCountry && (
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="vat" 
                      checked={includeVAT}
                      onCheckedChange={(checked) => setIncludeVAT(checked as boolean)}
                    />
                    <Label htmlFor="vat" className="text-sm">Include VAT (20%)</Label>
                  </div>
                )}
                {vatAmount > 0 && (
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>VAT (20%):</span>
                    <span>+${vatAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between font-semibold text-lg border-t pt-2">
                  <span>Total:</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </div>

              {/* Payment Method Selection */}
              <div className="space-y-3">
                <Label>Payment Method *</Label>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="flex items-center space-x-3 border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                    <RadioGroupItem value="credit_card" id="credit_card" />
                    <div className="flex-1">
                      <Label htmlFor="credit_card" className="flex items-center space-x-2 cursor-pointer">
                        <CreditCard className="h-4 w-4 text-primary" />
                        <span>Credit/Debit Card</span>
                        <Badge variant="secondary">Instant</Badge>
                      </Label>
                      <p className="text-sm text-muted-foreground mt-1">
                        Secure payment via Stripe. Immediate course access.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                    <RadioGroupItem value="bank_transfer" id="bank_transfer" />
                    <div className="flex-1">
                      <Label htmlFor="bank_transfer" className="flex items-center space-x-2 cursor-pointer">
                        <Building2 className="h-4 w-4 text-primary" />
                        <span>Bank Transfer</span>
                        <Badge variant="outline">2-3 days</Badge>
                      </Label>
                      <p className="text-sm text-muted-foreground mt-1">
                        Traditional bank transfer. Course access after payment confirmation.
                      </p>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <p>
                  Your payment information is secure and encrypted. We comply with PCI DSS standards 
                  for maximum security.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Special Requirements */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Additional Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label htmlFor="specialRequirements">Special Requirements or Dietary Restrictions</Label>
                <Textarea 
                  id="specialRequirements" 
                  placeholder="Any accessibility needs, dietary restrictions, or special requirements..."
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
              disabled={isSubmitting || !paymentMethod}
              className="flex-1"
            >
              {isSubmitting ? "Processing..." : `Register & Pay $${totalPrice.toFixed(2)}`}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CourseRegistrationForm;