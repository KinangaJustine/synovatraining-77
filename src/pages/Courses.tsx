import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Eye, EyeOff, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
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

const courses = [
  {
    id: 1,
    title: "Mastering Process Scale-Up & Seamless Tech Transfer in Biologics",
    format: "Live Online Training",
    category: "Scale-up",
    image: courseScaleUpImage,
    description: "Master the complexities of scaling biologics processes from lab to production with seamless technology transfer strategies.",
    price: 1850,
    duration: "3 days",
    shortDescription: "Advanced process scale-up methodologies and technology transfer best practices for biologics manufacturing..."
  },
  {
    id: 2,
    title: "Designing & Validating Robust Bioassays for Biologics",
    format: "Live Online Training",
    category: "Pharma and Biotech",
    image: courseBioassaysImage,
    description: "Learn to design, develop, and validate robust bioassays that ensure quality and efficacy of biologics products.",
    price: 1650,
    duration: "2 days",
    shortDescription: "Comprehensive bioassay development and validation strategies for biologics quality control..."
  },
  {
    id: 3,
    title: "Navigating the Complex World of Drug-Device Combination Products",
    format: "Live Online Training",
    category: "Combination Products",
    image: courseDrugDeviceImage,
    description: "Navigate regulatory pathways and development challenges for innovative drug-device combination products.",
    price: 1850,
    duration: "3 days",
    shortDescription: "Regulatory pathways and development strategies for drug-device combination products..."
  },
  {
    id: 4,
    title: "Applied Statistics for CMC Decision-Making",
    format: "Live Online Training",
    category: "CMC",
    image: courseStatisticsImage,
    description: "Apply statistical methods effectively in chemistry, manufacturing, and controls for data-driven decision making.",
    price: 1650,
    duration: "2 days",
    shortDescription: "Statistical methods and data analysis techniques for CMC and regulatory decision-making..."
  },
  {
    id: 5,
    title: "CMC Regulatory Affairs in the Era of Nucleics & Biologics",
    format: "Live Online Training",
    category: "CMC",
    image: courseCmcRegulatoryImage,
    description: "Stay current with evolving CMC regulatory requirements for nucleic acid therapeutics and complex biologics.",
    price: 1850,
    duration: "3 days",
    shortDescription: "Current CMC regulatory requirements for nucleic acid therapeutics and advanced biologics..."
  },
  {
    id: 6,
    title: "Ensuring Patient Safety Through E&L Studies in Pharma & Biologics",
    format: "Live Online Training",
    category: "Pharma and Biotech",
    image: courseExtractablesImage,
    description: "Conduct comprehensive extractables and leachables studies to ensure patient safety and regulatory compliance.",
    price: 1850,
    duration: "3 days",
    shortDescription: "Extractables and leachables study design and implementation for pharmaceutical products..."
  },
  {
    id: 7,
    title: "Strategic CMO Management: Contracts, Quality & Cost Optimization",
    format: "Live Online Training",
    category: "AI and Manufacturing",
    image: courseCmoManagementImage,
    description: "Optimize contract manufacturing relationships through strategic management, quality oversight, and cost control.",
    price: 1650,
    duration: "2 days",
    shortDescription: "Strategic management of contract manufacturing relationships and quality oversight..."
  },
  {
    id: 8,
    title: "From Vial to Patient: Excellence in Biologics Fill-Finish",
    format: "Live Online Training",
    category: "AI and Manufacturing",
    image: courseFillFinishImage,
    description: "Achieve excellence in fill-finish operations ensuring product integrity from final manufacturing to patient delivery.",
    price: 1850,
    duration: "3 days",
    shortDescription: "Fill-finish operations excellence and quality assurance for biologics manufacturing..."
  },
  {
    id: 9,
    title: "Unlocking Tomorrow: AI & Generative Models for Smarter Drug Discovery",
    format: "Live Online Training",
    category: "AI and Manufacturing",
    image: courseScaleUpImage,
    description: "Explore cutting-edge AI and generative models revolutionizing drug discovery processes.",
    price: 1850,
    duration: "3 days",
    shortDescription: "Revolutionary AI applications and generative modeling for accelerated drug discovery..."
  },
  {
    id: 10,
    title: "Advanced Therapeutics: Building Skills for the Gene & Cell Therapy Revolution",
    format: "Live Online Training",
    category: "Pharma and Biotech",
    image: courseBioassaysImage,
    description: "Master the complexities of gene and cell therapy development and manufacturing.",
    price: 1850,
    duration: "3 days",
    shortDescription: "Comprehensive gene and cell therapy development and manufacturing strategies..."
  },
  {
    id: 11,
    title: "The Power of Precision: Personalized Medicine Strategies in Action",
    format: "Live Online Training",
    category: "Clinical Trials",
    image: courseDrugDeviceImage,
    description: "Implement personalized medicine approaches in clinical development and patient care.",
    price: 1650,
    duration: "2 days",
    shortDescription: "Personalized medicine implementation strategies and precision healthcare approaches..."
  },
  {
    id: 12,
    title: "3D Bioprinting & Regenerative Medicine: The Future of Healing",
    format: "Live Online Training",
    category: "Medical Devices",
    image: courseStatisticsImage,
    description: "Explore revolutionary 3D bioprinting technologies and regenerative medicine applications.",
    price: 1850,
    duration: "3 days",
    shortDescription: "Advanced 3D bioprinting techniques and regenerative medicine innovations..."
  },
  {
    id: 13,
    title: "Translating Genomic Data into Clinical Breakthroughs",
    format: "Live Online Training",
    category: "Clinical Trials",
    image: courseCmcRegulatoryImage,
    description: "Bridge genomic research and clinical applications for therapeutic development.",
    price: 1650,
    duration: "2 days",
    shortDescription: "Genomic data translation strategies for clinical therapeutic development..."
  },
  {
    id: 14,
    title: "Continuous Manufacturing in Biologics: Innovation Without Interruption",
    format: "Live Online Training",
    category: "AI and Manufacturing",
    image: courseExtractablesImage,
    description: "Implement continuous manufacturing processes for enhanced biologics production.",
    price: 1850,
    duration: "3 days",
    shortDescription: "Continuous manufacturing implementation and optimization for biologics..."
  },
  {
    id: 15,
    title: "Next-Gen Delivery Systems: Nanotech for Safer, Faster Medicines",
    format: "Live Online Training",
    category: "Pharma and Biotech",
    image: courseCmoManagementImage,
    description: "Develop advanced nanotechnology-based drug delivery systems.",
    price: 1850,
    duration: "3 days",
    shortDescription: "Nanotechnology applications in advanced drug delivery system development..."
  },
  {
    id: 16,
    title: "AI in Clinical Trials: Smarter Designs, Faster Approvals",
    format: "Live Online Training",
    category: "AI and Manufacturing",
    image: courseFillFinishImage,
    description: "Leverage AI technologies to optimize clinical trial design and execution.",
    price: 1650,
    duration: "2 days",
    shortDescription: "AI-powered clinical trial optimization and regulatory approval acceleration..."
  },
  {
    id: 17,
    title: "Regulatory Mastery: Manufacturing & Adoption; Interchangeability & Market Access",
    format: "Live Online Training",
    category: "CMC",
    image: courseScaleUpImage,
    description: "Navigate complex regulatory pathways for manufacturing and market access strategies.",
    price: 1850,
    duration: "3 days",
    shortDescription: "Comprehensive regulatory strategies for manufacturing and market access..."
  },
  {
    id: 18,
    title: "Precision Bioequivalence: Supply Chain & GMP Resilience",
    format: "Live Online Training",
    category: "AI and Manufacturing",
    image: courseBioassaysImage,
    description: "Ensure bioequivalence through robust supply chain and GMP practices.",
    price: 1650,
    duration: "2 days",
    shortDescription: "Bioequivalence assurance through supply chain resilience and GMP excellence..."
  },
  {
    id: 19,
    title: "The mRNA Revolution: From Lab to Large-Scale Manufacturing",
    format: "Live Online Training",
    category: "Pharma and Biotech",
    image: courseDrugDeviceImage,
    description: "Master mRNA therapeutic development from research to commercial manufacturing.",
    price: 1850,
    duration: "3 days",
    shortDescription: "mRNA therapeutic development and large-scale manufacturing strategies..."
  },
  {
    id: 20,
    title: "Antibody-Drug Conjugates (ADCs): Building the Next Generation of Targeted Therapies",
    format: "Live Online Training",
    category: "Pharma and Biotech",
    image: courseStatisticsImage,
    description: "Develop next-generation ADCs with enhanced targeting and therapeutic efficacy.",
    price: 1850,
    duration: "3 days",
    shortDescription: "Advanced ADC development and targeted therapy optimization strategies..."
  },
  {
    id: 21,
    title: "Surviving FDA & EMA Audits: Practical GMP Readiness & Mock Inspections",
    format: "Live Online Training",
    category: "CMC",
    image: courseCmcRegulatoryImage,
    description: "Prepare for regulatory audits with practical GMP readiness strategies.",
    price: 1650,
    duration: "2 days",
    shortDescription: "GMP audit preparation and regulatory inspection readiness strategies..."
  },
  {
    id: 22,
    title: "AI in Compliance: Digital Twins & Smart Quality Systems for Pharma",
    format: "Live Online Training",
    category: "AI and Manufacturing",
    image: courseExtractablesImage,
    description: "Implement AI-driven compliance and quality systems in pharmaceutical operations.",
    price: 1850,
    duration: "3 days",
    shortDescription: "AI-powered compliance systems and digital twin technology for pharma..."
  },
  {
    id: 23,
    title: "Risk Management & Pharmacovigilance: Ensuring Patient Safety in a Data-Driven Era",
    format: "Live Online Training",
    category: "Clinical Trials",
    image: courseCmoManagementImage,
    description: "Implement comprehensive risk management and pharmacovigilance strategies.",
    price: 1650,
    duration: "2 days",
    shortDescription: "Advanced risk management and pharmacovigilance in modern healthcare..."
  },
  {
    id: 24,
    title: "Cleaning Validation in Complex Facilities: Strategies for Multi-Product Success",
    format: "Live Online Training",
    category: "AI and Manufacturing",
    image: courseFillFinishImage,
    description: "Master cleaning validation for complex multi-product manufacturing facilities.",
    price: 1650,
    duration: "2 days",
    shortDescription: "Cleaning validation strategies for complex multi-product manufacturing..."
  },
  {
    id: 25,
    title: "Tech Transfer Mastery: Seamless Scale-Up & CMO/CDMO Partnerships",
    format: "Live Online Training",
    category: "Scale-up",
    image: courseScaleUpImage,
    description: "Achieve seamless technology transfer and optimize CMO/CDMO partnerships.",
    price: 1850,
    duration: "3 days",
    shortDescription: "Technology transfer excellence and strategic CMO/CDMO partnerships..."
  },
  {
    id: 26,
    title: "Real-World Evidence (RWE) in Action: Unlocking Market Access for Biologics",
    format: "Live Online Training",
    category: "Clinical Trials",
    image: courseBioassaysImage,
    description: "Leverage real-world evidence for biologics market access and regulatory success.",
    price: 1650,
    duration: "2 days",
    shortDescription: "Real-world evidence strategies for biologics market access and approval..."
  },
  {
    id: 27,
    title: "From Patient Voice to Product Success: Embedding Patient-Centricity in Drug Development",
    format: "Live Online Training",
    category: "Clinical Trials",
    image: courseDrugDeviceImage,
    description: "Integrate patient-centric approaches throughout drug development processes.",
    price: 1650,
    duration: "2 days",
    shortDescription: "Patient-centric drug development strategies and implementation..."
  },
  {
    id: 28,
    title: "Designing Comparability Studies for Biosimilars: Proving Equivalence with Confidence",
    format: "Live Online Training",
    category: "Pharma and Biotech",
    image: courseStatisticsImage,
    description: "Design robust comparability studies for successful biosimilar development.",
    price: 1850,
    duration: "3 days",
    shortDescription: "Biosimilar comparability study design and regulatory compliance..."
  },
  {
    id: 29,
    title: "Future-Proofing Pharma Supply Chains: Building Resilience Amid Global Disruption",
    format: "Live Online Training",
    category: "AI and Manufacturing",
    image: courseCmcRegulatoryImage,
    description: "Build resilient pharmaceutical supply chains for global market challenges.",
    price: 1650,
    duration: "2 days",
    shortDescription: "Supply chain resilience strategies for pharmaceutical manufacturing..."
  },
  {
    id: 30,
    title: "Sterile & Aseptic Manufacturing Mastery: Ensuring Safety in Injectable Production",
    format: "Live Online Training",
    category: "AI and Manufacturing",
    image: courseExtractablesImage,
    description: "Master sterile and aseptic manufacturing for safe injectable production.",
    price: 1850,
    duration: "3 days",
    shortDescription: "Sterile manufacturing excellence and aseptic processing mastery..."
  },
  {
    id: 31,
    title: "Seamless Scale-Up of Sterile Injectables: Strategies for Speed, Safety & Success",
    format: "Live Online Training",
    category: "Scale-up",
    image: courseCmoManagementImage,
    description: "Achieve seamless scale-up of sterile injectable manufacturing processes.",
    price: 1850,
    duration: "3 days",
    shortDescription: "Sterile injectable scale-up strategies for manufacturing success..."
  },
  {
    id: 32,
    title: "CMC Excellence: From Lab to Commercial Manufacturing",
    format: "Live Online Training",
    category: "CMC",
    image: courseCmcRegulatoryImage,
    description: "Master CMC development from laboratory scale through commercial manufacturing excellence.",
    price: 1850,
    duration: "3 days",
    shortDescription: "Comprehensive CMC development strategies from lab to commercial scale..."
  },
  {
    id: 33,
    title: "Pharma Supply Chain Resilience & Risk Mitigation",
    format: "Live Online Training",
    category: "AI and Manufacturing",
    image: courseExtractablesImage,
    description: "Build resilient pharmaceutical supply chains with effective risk mitigation strategies.",
    price: 1650,
    duration: "2 days",
    shortDescription: "Supply chain resilience and risk management for pharmaceutical operations..."
  },
  {
    id: 34,
    title: "Navigating Global Regulatory Pathways for Biologics, Nucleics, and ATMPs",
    format: "Live Online Training (Available in-house)",
    category: "CMC",
    image: courseBioassaysImage,
    description: "Navigate complex global regulatory requirements for advanced therapeutic modalities.",
    price: 1850,
    duration: "3 days",
    shortDescription: "Global regulatory strategies for biologics, nucleics, and ATMP development..."
  },
  {
    id: 35,
    title: "Analytical & Bioassay Strategies for Next-Gen Modalities",
    format: "Live Online Training",
    category: "Pharma and Biotech",
    image: courseBioassaysImage,
    description: "Develop analytical and bioassay strategies for next-generation therapeutic modalities.",
    price: 1650,
    duration: "2 days",
    shortDescription: "Advanced analytical strategies for next-generation therapeutic development..."
  },
  {
    id: 36,
    title: "Advanced GMP, Data Integrity & Risk-Based Quality Management",
    format: "Live Online Training",
    category: "CMC",
    image: courseStatisticsImage,
    description: "Master advanced GMP principles with data integrity and risk-based quality management.",
    price: 1850,
    duration: "3 days",
    shortDescription: "Advanced GMP implementation with data integrity and quality management..."
  },
  {
    id: 37,
    title: "Extractables & Leachables Risk Assessment for Drug-Device Products",
    format: "Live Online Training",
    category: "Combination Products",
    image: courseExtractablesImage,
    description: "Conduct comprehensive E&L risk assessments for drug-device combination products.",
    price: 1650,
    duration: "2 days",
    shortDescription: "E&L risk assessment strategies for drug-device combination products..."
  },
  {
    id: 38,
    title: "AI & Digital Tools in Pharma R&D, Manufacturing & Compliance",
    format: "Live Online Training (Available in-house)",
    category: "AI and Manufacturing",
    image: courseScaleUpImage,
    description: "Implement AI and digital technologies across pharmaceutical R&D, manufacturing, and compliance.",
    price: 1850,
    duration: "3 days",
    shortDescription: "AI and digital transformation in pharmaceutical operations and compliance..."
  },
  {
    id: 39,
    title: "Strategic CMO/CDMO Oversight & Value Optimization",
    format: "Live Online Training (Available in-house)",
    category: "AI and Manufacturing",
    image: courseCmoManagementImage,
    description: "Optimize CMO/CDMO relationships through strategic oversight and value maximization.",
    price: 1650,
    duration: "2 days",
    shortDescription: "Strategic CMO/CDMO management and value optimization strategies..."
  },
  {
    id: 40,
    title: "Upskilling Pharma Teams for Emerging Modalities & Technologies",
    format: "Live Online Training (Available in-house)",
    category: "Pharma and Biotech",
    image: courseFillFinishImage,
    description: "Upskill pharmaceutical teams for emerging therapeutic modalities and cutting-edge technologies.",
    price: 1650,
    duration: "2 days",
    shortDescription: "Team upskilling strategies for emerging pharmaceutical technologies..."
  }
];

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("All courses");
  
  const categories = [
    "All courses",
    "Pharma and Biotech", 
    "CMC",
    "Medical Devices",
    "Scale-up",
    "Clinical Trials",
    "Combination Products",
    "AI and Manufacturing"
  ];

  const filteredCourses = selectedCategory === "All courses" 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  return (
    <Layout>
      <div className="bg-gradient-subtle">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Training Courses</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advance your expertise with our specialized pharma and biotech training programs
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((category) => (
              <Badge 
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={() => window.location.href = `/courses/${course.id}`}>
                <div className="relative overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{course.category}</Badge>
                  </div>
                </div>
                
                  <CardHeader>
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {course.shortDescription} 
                      <span className="text-xs text-muted-foreground/60 block mt-1">
                        🔒 Full details available in course agenda
                      </span>
                    </CardDescription>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-2xl font-bold text-primary">€{course.price.toLocaleString()}</span>
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <EyeOff className="h-4 w-4" />
                        <span>Request agenda for details</span>
                      </div>
                    </div>
                  </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="text-sm text-muted-foreground">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{course.format}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Course preview - click to view details */}
                  <div className="bg-muted/30 p-4 rounded-lg border border-dashed">
                    <p className="text-sm text-muted-foreground text-center mb-2">
                      📋 <strong>Click to view full course details</strong>
                    </p>
                    <div className="space-y-1 text-xs text-muted-foreground/60">
                      <p>• Complete learning objectives and curriculum</p>
                      <p>• Pricing and delivery mode options</p>
                      <p>• Certificate information</p>
                      <p>• Registration and agenda request options</p>
                    </div>
                    <p className="text-xs text-center mt-2 font-medium text-primary">
                      View training
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Courses;