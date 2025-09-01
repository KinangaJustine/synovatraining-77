import { useParams } from "react-router-dom";
import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, MapPin, Clock, Users, CheckCircle, Award, Briefcase } from "lucide-react";
import CurrencySelector from "@/components/ui/currency-selector";
import AgendaRequestForm from "@/components/forms/AgendaRequestForm";
import CourseRegistrationForm from "@/components/forms/CourseRegistrationForm";
import courseScaleUpImage from "@/assets/course-scale-up.jpg";
import courseBioassaysImage from "@/assets/course-bioassays.jpg";
import courseDrugDeviceImage from "@/assets/course-drug-device.jpg";
import courseStatisticsImage from "@/assets/course-statistics.jpg";
import courseCmcRegulatoryImage from "@/assets/course-cmc-regulatory.jpg";
import courseExtractablesImage from "@/assets/course-extractables.jpg";
import courseCmoManagementImage from "@/assets/course-cmo-management.jpg";
import courseFillFinishImage from "@/assets/course-fill-finish.jpg";

const CourseDetail = () => {
  const { id } = useParams();
  const [selectedCurrency, setSelectedCurrency] = useState<'USD' | 'EUR'>('USD');
  
  // Course data matching the courses from Courses.tsx
  const coursesData = [
    {
      id: 1,
      title: "Mastering Process Scale-Up & Seamless Tech Transfer in Biologics",
      date: "March 15-17, 2024",
      format: "Live Online Training",
      category: "Scale-up",
      image: courseScaleUpImage,
      description: "Master the complexities of scaling biologics processes from lab to production with seamless technology transfer strategies.",
      duration: "3 Days",
      participants: "12-20",
      priceUSD: 1950,
      priceEUR: 1850,
      deliveryModes: ["Live Online Training"],
      certificate: "Digital LinkedIn Certificate of Completion",
      objectives: [
        "Master scale-up methodologies for biologics processes",
        "Implement seamless technology transfer strategies",
        "Understand regulatory requirements for scale-up",
        "Optimize manufacturing processes for commercial production",
        "Navigate challenges in biologics manufacturing scale-up"
      ],
      modules: [
        "Scale-up Fundamentals and Process Characterization",
        "Technology Transfer Best Practices",
        "Manufacturing Process Optimization",
        "Quality Systems and Regulatory Compliance",
        "Risk Management in Scale-up Operations",
        "Case Studies and Practical Applications"
      ],
      audience: [
        "Process Development Scientists",
        "Manufacturing Engineers",
        "Technology Transfer Specialists",
        "Quality Assurance Professionals",
        "Regulatory Affairs Professionals"
      ],
      jobTitles: [
        "Process Development Scientist",
        "Manufacturing Engineer",
        "Technology Transfer Specialist",
        "Production Manager",
        "Quality Assurance Manager",
        "Regulatory Affairs Associate"
      ]
    },
    {
      id: 2,
      title: "Designing & Validating Robust Bioassays for Biologics",
      date: "April 10-11, 2024",
      format: "Live Online Training",
      category: "Pharma and Biotech",
      image: courseBioassaysImage,
      description: "Learn to design, develop, and validate robust bioassays that ensure quality and efficacy of biologics products.",
      duration: "2 Days",
      participants: "12-20",
      priceUSD: 1750,
      priceEUR: 1650,
      deliveryModes: ["Live Online Training"],
      certificate: "Digital LinkedIn Certificate of Completion",
      objectives: [
        "Design robust bioassay methodologies",
        "Understand validation requirements for bioassays",
        "Implement quality control measures",
        "Navigate regulatory expectations",
        "Apply statistical analysis to bioassay data"
      ],
      modules: [
        "Bioassay Design Principles",
        "Method Development and Optimization",
        "Validation Strategies and Requirements",
        "Statistical Analysis and Data Interpretation",
        "Regulatory Guidelines and Compliance",
        "Troubleshooting and Method Transfer"
      ],
      audience: [
        "Analytical Scientists",
        "Quality Control Analysts",
        "Method Development Scientists",
        "Validation Specialists",
        "Regulatory Affairs Professionals"
      ],
      jobTitles: [
        "Analytical Scientist",
        "Quality Control Analyst",
        "Method Development Scientist",
        "Validation Specialist",
        "QC Manager",
        "Regulatory Affairs Specialist"
      ]
    },
    {
      id: 3,
      title: "Navigating the Complex World of Drug-Device Combination Products",
      date: "May 8-10, 2024",
      format: "Live Online Training",
      category: "Combination Products",
      image: courseDrugDeviceImage,
      description: "Navigate regulatory pathways and development challenges for innovative drug-device combination products.",
      duration: "3 Days",
      participants: "12-20",
      priceUSD: 1950,
      priceEUR: 1850,
      deliveryModes: ["Live Online Training"],
      certificate: "Digital LinkedIn Certificate of Completion",
      objectives: [
        "Understand regulatory pathways for combination products",
        "Navigate FDA and EMA requirements",
        "Implement development strategies",
        "Manage cross-functional teams",
        "Address manufacturing challenges"
      ],
      modules: [
        "Combination Product Classification",
        "Regulatory Pathways and Requirements",
        "Development Strategy and Planning",
        "Manufacturing and Quality Considerations",
        "Clinical Development Approaches",
        "Post-Market Requirements"
      ],
      audience: [
        "Product Development Managers",
        "Regulatory Affairs Professionals",
        "Medical Device Engineers",
        "Clinical Research Associates",
        "Quality Assurance Specialists"
      ],
      jobTitles: [
        "Product Development Manager",
        "Regulatory Affairs Manager",
        "Medical Device Engineer",
        "Clinical Research Associate",
        "Quality Assurance Specialist",
        "Project Manager"
      ]
    }
  ];

  // Find the course based on ID, fallback to first course if not found
  const course = coursesData.find(c => c.id === parseInt(id || '1')) || coursesData[0];

  const getCurrentPrice = () => {
    return selectedCurrency === 'USD' ? course.priceUSD : course.priceEUR;
  };

  const getCurrencySymbol = () => {
    return selectedCurrency === 'USD' ? '$' : '€';
  };

  return (
    <Layout>
      <div className="bg-gradient-subtle min-h-screen">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <Badge variant="secondary" className="mb-4">{course.category}</Badge>
                <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
                <div className="space-y-3 mb-6 text-primary-foreground/90">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5" />
                    <span>{course.format}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5" />
                    <span>{course.duration}</span>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <CourseRegistrationForm 
                    courseTitle={course.title}
                    coursePrice={getCurrentPrice()}
                    courseId={course.id.toString()}
                    trigger={
                      <Button size="lg" variant="secondary">
                        Register Now
                      </Button>
                    }
                  />
                  <AgendaRequestForm 
                    courseTitle={course.title}
                    trigger={
                    <Button size="lg" variant="secondary">
                      Request Agenda
                    </Button>
                    }
                  />
                </div>
              </div>
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-16">
          {/* Training Overview Card - Immediately Accessible */}
          <Card className="mb-8 shadow-lg">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                {/* Left Column - Training Details */}
                <div className="space-y-6">
                  {/* Course Summary */}
                  <div>
                    <h2 className="text-2xl font-bold mb-3">Course Overview</h2>
                    <p className="text-muted-foreground leading-relaxed">{course.description}</p>
                  </div>

                  {/* Key Features Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                      <Clock className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium text-sm">Duration</p>
                        <p className="text-sm text-muted-foreground">{course.duration}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium text-sm">Delivery Mode</p>
                        <p className="text-sm text-muted-foreground">{course.format}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                      <Award className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium text-sm">Certificate</p>
                        <p className="text-sm text-muted-foreground">Digital LinkedIn</p>
                      </div>
                    </div>
                  </div>

                  {/* Certificate Information */}
                  <div className="p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border">
                    <div className="flex items-center space-x-2 mb-2">
                      <Award className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold">Certificate of Completion</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{course.certificate}</p>
                  </div>
                </div>

                {/* Right Column - Pricing & Actions */}
                <div className="space-y-6">
                  {/* Pricing Card */}
                  <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border-2 border-primary/20">
                    <h3 className="text-xl font-bold mb-4 text-center">Course Investment</h3>
                    
                    <div className="flex items-center justify-between mb-4">
                      <Label className="font-medium">Currency:</Label>
                      <CurrencySelector 
                        value={selectedCurrency}
                        onValueChange={setSelectedCurrency}
                        className="w-32"
                      />
                    </div>
                    
                    <div className="text-center mb-6">
                      <div className="text-4xl font-bold text-primary mb-1">
                        {getCurrencySymbol()}{getCurrentPrice().toLocaleString()}
                      </div>
                      <p className="text-sm text-muted-foreground">Per participant</p>
                    </div>
                    
                    <div className="space-y-3">
                      <CourseRegistrationForm 
                        courseTitle={course.title}
                        coursePrice={getCurrentPrice()}
                        courseId={course.id.toString()}
                        trigger={<Button className="w-full" size="lg">Register Now</Button>}
                      />
                      <AgendaRequestForm 
                        courseTitle={course.title}
                        trigger={<Button variant="secondary" className="w-full" size="lg">Request Agenda</Button>}
                      />
                    </div>
                  </div>

                  {/* Delivery Modes */}
                  <div>
                    <h4 className="font-semibold mb-3">Available Delivery Modes</h4>
                    <div className="space-y-2">
                      {course.deliveryModes.map((mode, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span className="text-sm">{mode}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Detailed Information Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Learning Objectives */}
              <Card>
                <CardHeader>
                  <CardTitle>Learning Objectives</CardTitle>
                  <CardDescription>What you'll achieve by the end of this course</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {course.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Key Topics & Modules */}
              <Card>
                <CardHeader>
                  <CardTitle>Key Topics & Modules</CardTitle>
                  <CardDescription>Comprehensive curriculum breakdown</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {course.modules.map((module, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary mt-0.5 flex-shrink-0">
                          {index + 1}
                        </div>
                        <span className="text-muted-foreground">{module}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Relevant Job Titles */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Briefcase className="h-5 w-5" />
                    <span>Relevant Job Titles</span>
                  </CardTitle>
                  <CardDescription>Career roles that benefit from this training</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-3">
                    {course.jobTitles.map((title, index) => (
                      <div key={index} className="flex items-center space-x-2 p-3 bg-muted/30 rounded-lg">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm font-medium">{title}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Who Should Attend */}
              <Card>
                <CardHeader>
                  <CardTitle>Who Should Attend</CardTitle>
                  <CardDescription>Ideal participant profiles and roles</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {course.audience.map((role, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{role}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CourseDetail;