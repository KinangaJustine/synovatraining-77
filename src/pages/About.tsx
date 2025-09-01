import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Heart, Handshake, Users } from "lucide-react";

const About = () => {
  const trainingCategories = [
    {
      title: "Drug Development",
      courses: [
        "Advanced Drug Development & Clinical Trials",
        "Navigating the Complex World of Drug-Device Combination Products",
        "Applied Statistics for CMC Decision-Making"
      ]
    },
    {
      title: "Tech Transfer",
      courses: [
        "Mastering Process Scale-Up & Seamless Tech Transfer in Biologics",
        "Strategic CMO Management: Contracts, Quality & Cost Optimization"
      ]
    },
    {
      title: "Regulatory",
      courses: [
        "CMC Regulatory Affairs in the Era of Nucleics & Biologics",
        "Ensuring Patient Safety Through E&L Studies in Pharma & Biologics"
      ]
    },
    {
      title: "Orphan Drugs",
      courses: [
        "Designing & Validating Robust Bioassays for Biologics",
        "From Vial to Patient: Excellence in Biologics Fill-Finish"
      ]
    }
  ];

  return (
    <Layout>
      <div className="bg-gradient-subtle min-h-screen">
        {/* Hero Section */}
        <div className="bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Synova Training</h1>
              <p className="text-xl text-primary-foreground/90">
                Leading the evolution of pharmaceutical and biotechnology training and consulting
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          {/* Mission Section */}
          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center justify-center">
                <span className="mr-3">🌱</span> Our Mission
              </h2>
            </div>
            <Card>
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  At Synova Training, our mission is to advance healthcare and biotechnology by evolving traditional pharmaceutical practices into innovative, sustainable, and patient-centric solutions.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">We are committed to:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Empowering professionals through world-class training and knowledge sharing</li>
                      <li>• Bridging science and regulation to accelerate safe and effective therapies</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-2 text-muted-foreground mt-8 md:mt-0">
                      <li>• Driving innovation in biologics, nucleics, and advanced drug delivery systems</li>
                      <li>• Partnering with global networks to improve access, quality, and outcomes in pharma and biotech</li>
                    </ul>
                  </div>
                </div>
                <p className="text-muted-foreground mt-6 italic">
                  By continuously learning and adapting, we strive to transform ideas into impactful solutions that improve lives worldwide.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Training Portfolio */}
          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Training Portfolio</h2>
              <p className="text-xl text-muted-foreground">All public courses are delivered online</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {trainingCategories.map((category, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Badge variant="outline" className="mr-2">{category.title}</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.courses.map((course, courseIndex) => (
                        <li key={courseIndex} className="text-sm text-muted-foreground">
                          • {course}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Main Goal */}
          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center justify-center">
                <span className="mr-3">🎯</span> Our Main Goal
              </h2>
            </div>
            <Card>
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  The main goal of Synova Training is to become a trusted leader in advancing pharmaceutical and biotech knowledge, innovation, and partnerships — enabling the seamless evolution from research to patient care.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">We aim to:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Support biopharma companies, researchers, and professionals with expert training</li>
                      <li>• Bridge the gap between science, regulation, and industry practice</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-2 text-muted-foreground mt-8 md:mt-0">
                      <li>• Ensure patient safety and product excellence through knowledge-driven solutions</li>
                      <li>• Foster global collaboration that accelerates innovation in healthcare</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Our Commitment */}
          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center justify-center">
                <span className="mr-3">🤝</span> Our Commitment
              </h2>
            </div>
            <Card>
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  At Synova Training, we are committed to:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Delivering high-quality, science-driven training tailored to the evolving needs of pharma and biotech</li>
                    <li>• Upholding the highest ethical and regulatory standards to ensure trust and compliance</li>
                  </ul>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Promoting patient safety, innovation, and sustainability across all our programs</li>
                    <li>• Building long-term partnerships that drive growth, knowledge-sharing, and global healthcare advancement</li>
                  </ul>
                </div>
                <p className="text-muted-foreground mt-6 italic">
                  We pledge to remain reliable, innovative, and dedicated in supporting our clients, partners, and the communities we serve.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Management */}
          <section>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Management</h2>
            </div>
            <Card>
              <CardContent className="p-8 text-center">
                <Users className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-foreground mb-4">Aligning Soon</h3>
                <p className="text-muted-foreground">
                  Our leadership team information will be available shortly. 
                  We're currently finalizing our management structure to better serve our clients.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default About;