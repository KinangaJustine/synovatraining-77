import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Generics: Navigating Complex Manufacturing Challenges",
      category: "Generics",
      excerpt: "Explore the evolving landscape of generic drug manufacturing, from regulatory hurdles to quality control innovations that are shaping the industry. Learn about precision bioequivalence strategies and supply chain resilience.",
      author: "Dr. Michael Roberts",
      date: "March 15, 2024",
      readTime: "8 min read",
      featured: true,
      relatedCourse: "Precision Bioequivalence: Supply Chain & GMP Resilience"
    },
    {
      id: 2,
      title: "Biologics Manufacturing: Advanced Scale-Up Strategies for 2024",
      category: "Biologics",
      excerpt: "Deep dive into cutting-edge biologics manufacturing techniques, exploring new approaches to cell culture optimization and downstream processing. Master the complexities of scaling from lab to production.",
      author: "Sarah Chen, PhD",
      date: "March 12, 2024",
      readTime: "12 min read",
      featured: true,
      relatedCourse: "Mastering Process Scale-Up & Seamless Tech Transfer in Biologics"
    },
    {
      id: 3,
      title: "AI Revolution in Drug Discovery: Generative Models Transforming Pharma",
      category: "AI & Technology",
      excerpt: "Discover how artificial intelligence and generative models are revolutionizing drug discovery processes, accelerating development timelines and improving success rates.",
      author: "Dr. Emma Watson",
      date: "March 18, 2024", 
      readTime: "10 min read",
      featured: true,
      relatedCourse: "Unlocking Tomorrow: AI & Generative Models for Smarter Drug Discovery"
    },
    {
      id: 4,
      title: "Gene & Cell Therapy Manufacturing: Building the Future of Medicine",
      category: "Advanced Therapeutics",
      excerpt: "Explore the revolutionary world of gene and cell therapy manufacturing, from vector production to quality control in this rapidly expanding field.",
      author: "Prof. David Kim",
      date: "March 16, 2024",
      readTime: "14 min read", 
      featured: true,
      relatedCourse: "Advanced Therapeutics: Building Skills for the Gene & Cell Therapy Revolution"
    },
    {
      id: 5,
      title: "Personalized Medicine: From Genomics to Patient Care",
      category: "Precision Medicine",
      excerpt: "Learn how personalized medicine strategies are transforming patient care through genomic data translation and precision healthcare approaches.",
      author: "Dr. Lisa Chen",
      date: "March 14, 2024",
      readTime: "11 min read",
      featured: true,
      relatedCourse: "The Power of Precision: Personalized Medicine Strategies in Action"
    },
    {
      id: 6,
      title: "mRNA Technology: From COVID-19 Success to Future Applications",
      category: "mRNA Therapeutics", 
      excerpt: "Discover how mRNA technology is expanding beyond vaccines into therapeutic applications, with insights into large-scale manufacturing strategies.",
      author: "Dr. Robert Johnson",
      date: "March 13, 2024",
      readTime: "13 min read",
      featured: true,
      relatedCourse: "The mRNA Revolution: From Lab to Large-Scale Manufacturing"
    },
    {
      id: 7,
      title: "ADCs Revolution: Engineering the Next Generation of Targeted Therapies",
      category: "ADCs",
      excerpt: "Antibody-drug conjugates are transforming cancer treatment. Learn about the latest developments in linker technology and payload optimization for enhanced therapeutic efficacy.",
      author: "Dr. James Wilson",
      date: "March 10, 2024",
      readTime: "10 min read",
      featured: false,
      relatedCourse: "Antibody-Drug Conjugates (ADCs): Building the Next Generation of Targeted Therapies"
    },
    {
      id: 8,
      title: "Medical Device Integration: Regulatory Pathways for Combination Products",
      category: "Medical Devices",
      excerpt: "Understanding the complex regulatory landscape for drug-device combinations and best practices for successful FDA submissions and market access.",
      author: "Lisa Martinez, PhD", 
      date: "March 8, 2024",
      readTime: "15 min read",
      featured: false,
      relatedCourse: "Navigating the Complex World of Drug-Device Combination Products"
    },
    {
      id: 9,
      title: "CDMO Industry Trends: Outsourcing Strategies for Pharma Success",
      category: "CDMO",
      excerpt: "How contract development and manufacturing organizations are evolving to meet the complex needs of modern pharmaceutical companies through strategic partnerships.",
      author: "Robert Kim",
      date: "March 5, 2024",
      readTime: "9 min read",
      featured: false,
      relatedCourse: "Tech Transfer Mastery: Seamless Scale-Up & CMO/CDMO Partnerships"
    },
    {
      id: 10,
      title: "CMO Partnership Excellence: Quality Oversight and Risk Management",
      category: "CMO",
      excerpt: "Strategic approaches to managing contract manufacturing relationships, ensuring quality compliance and cost optimization through effective partnership management.",
      author: "Dr. Emily Thompson",
      date: "March 3, 2024",
      readTime: "11 min read",
      featured: false,
      relatedCourse: "Strategic CMO Management: Contracts, Quality & Cost Optimization"
    },
    {
      id: 11,
      title: "Pediatric Drug Development: Unique Challenges and Innovative Solutions",
      category: "Pediatrics",
      excerpt: "Addressing the special considerations in pediatric pharmaceutical development, from formulation challenges to ethical trial design and patient-centric approaches.",
      author: "Dr. Antonio Garcia",
      date: "February 28, 2024",
      readTime: "13 min read",
      featured: false,
      relatedCourse: "From Patient Voice to Product Success: Embedding Patient-Centricity in Drug Development"
    },
    {
      id: 12,
      title: "Biosimilars Market Dynamics: Regulatory Strategies for Global Success",
      category: "Biosimilars", 
      excerpt: "Navigate the complex biosimilars landscape with insights into regulatory requirements, market access, and competitive positioning through robust comparability studies.",
      author: "Dr. Priya Patel",
      date: "February 25, 2024",
      readTime: "14 min read",
      featured: false,
      relatedCourse: "Designing Comparability Studies for Biosimilars: Proving Equivalence with Confidence"
    },
    {
      id: 13,
      title: "Extractables & Leachables: Ensuring Patient Safety in Modern Packaging",
      category: "E&L Studies",
      excerpt: "Comprehensive guide to E&L testing methodologies, regulatory requirements, and risk assessment strategies for pharmaceutical packaging and patient safety assurance.",
      author: "Dr. Mark Johnson",
      date: "February 22, 2024",
      readTime: "16 min read",
      featured: false,
      relatedCourse: "Ensuring Patient Safety Through E&L Studies in Pharma & Biologics"
    }
  ];

  const categories = [
    "All", "Generics", "Biologics", "ADCs", "Medical Devices", 
    "CDMO", "CMO", "Pediatrics", "Biosimilars", "E&L Studies"
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <Layout>
      <div className="bg-gradient-subtle min-h-screen">
        {/* Hero Section */}
        <div className="bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Industry Insights & Knowledge Hub</h1>
              <p className="text-xl text-primary-foreground/90">
                Latest insights, trends, and expert analysis covering the full spectrum of 
                pharmaceutical and biotechnology development
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          {/* Categories Filter */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((category, index) => (
              <Badge 
                key={index} 
                variant={index === 0 ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Featured Posts */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {post.date}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Button variant="ghost" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground w-full" asChild>
                          <Link to={`/blog/${post.id}`}>
                            Read More <ArrowRight className="h-4 w-4 ml-1" />
                          </Link>
                        </Button>
                        {post.relatedCourse && (
                          <div className="text-xs text-center">
                            <span className="text-muted-foreground">Related training: </span>
                            <Button variant="link" size="sm" className="h-auto p-0 text-xs text-primary" asChild>
                              <Link to="/courses">
                                {post.relatedCourse}
                              </Link>
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Regular Posts */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{post.category}</Badge>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3 text-sm">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-muted-foreground">
                        <div className="flex items-center mb-1">
                          <User className="h-3 w-3 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {post.date}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Button variant="ghost" size="sm" className="text-xs group-hover:bg-primary group-hover:text-primary-foreground" asChild>
                          <Link to={`/blog/${post.id}`}>
                            Read <ArrowRight className="h-3 w-3 ml-1" />
                          </Link>
                        </Button>
                        {post.relatedCourse && (
                          <div className="text-xs text-center">
                            <span className="text-muted-foreground">Training: </span>
                            <Button variant="link" size="sm" className="h-auto p-0 text-xs text-primary" asChild>
                              <Link to="/courses">
                                {post.relatedCourse.length > 30 ? post.relatedCourse.substring(0, 30) + "..." : post.relatedCourse}
                              </Link>
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <Card className="mt-16">
            <CardHeader className="text-center">
              <CardTitle>Stay Updated</CardTitle>
              <CardDescription>
                Subscribe to our newsletter for the latest industry insights and training updates
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="max-w-md mx-auto flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button>Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;