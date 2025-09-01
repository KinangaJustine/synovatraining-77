import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, User, Clock, BookOpen } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();
  
  // Mock blog post data - in real app, fetch based on ID
  const post = {
    id: parseInt(id || '1'),
    title: "The Future of Generics: Navigating Complex Manufacturing Challenges",
    category: "Generics",
    author: "Dr. Michael Roberts",
    date: "March 15, 2024",
    readTime: "8 min read",
    relatedCourse: "Precision Bioequivalence: Supply Chain & GMP Resilience",
    content: `
      <h2>Introduction</h2>
      <p>The generic pharmaceutical industry stands at a critical juncture. As patents on blockbuster drugs continue to expire, the opportunity for generic manufacturers has never been greater. However, the challenges they face are equally unprecedented.</p>
      
      <h2>Current Market Dynamics</h2>
      <p>The global generic drugs market is experiencing rapid transformation. Regulatory requirements are becoming more stringent, manufacturing complexities are increasing, and competition is intensifying. Companies that can navigate these challenges successfully will emerge as industry leaders.</p>
      
      <h3>Key Market Trends</h3>
      <ul>
        <li>Increased regulatory scrutiny from FDA and EMA</li>
        <li>Growing demand for complex generics</li>
        <li>Supply chain resilience requirements</li>
        <li>Quality-by-design implementation</li>
      </ul>
      
      <h2>Manufacturing Excellence</h2>
      <p>Modern generic manufacturing requires a sophisticated approach to quality control and process optimization. The implementation of advanced analytical methods and continuous manufacturing technologies is becoming essential for competitive advantage.</p>
      
      <blockquote>
        "Success in generics manufacturing is no longer just about cost reduction—it's about building robust, quality-focused operations that can adapt to changing regulatory landscapes."
      </blockquote>
      
      <h2>Regulatory Considerations</h2>
      <p>The regulatory pathway for generics continues to evolve. Companies must stay ahead of changing requirements while maintaining operational efficiency. This includes understanding new guidance documents, implementing risk-based approaches, and ensuring global compliance.</p>
      
      <h2>Future Outlook</h2>
      <p>The future belongs to generic manufacturers who can combine operational excellence with strategic innovation. This means investing in technology, talent, and systems that support both current operations and future growth.</p>
      
      <h3>Strategic Recommendations</h3>
      <ol>
        <li>Invest in advanced manufacturing technologies</li>
        <li>Develop robust quality management systems</li>
        <li>Build strategic partnerships with suppliers</li>
        <li>Focus on talent development and training</li>
      </ol>
      
      <h2>Conclusion</h2>
      <p>The generic pharmaceutical industry will continue to play a crucial role in global healthcare. Companies that can successfully navigate the current challenges while positioning themselves for future opportunities will drive the industry forward.</p>
    `
  };

  return (
    <Layout>
      <div className="bg-gradient-subtle min-h-screen">
        {/* Navigation */}
        <div className="container mx-auto px-4 py-8">
          <Button variant="ghost" asChild className="mb-6">
            <Link to="/blog" className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Blog</span>
            </Link>
          </Button>
        </div>

        {/* Article */}
        <div className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <Badge variant="secondary" className="mb-4">{post.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {post.title}
              </h1>
              
              <div className="flex items-center space-x-6 text-muted-foreground mb-6">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3">
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  {/* Related Training */}
                  {post.relatedCourse && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center space-x-2">
                          <BookOpen className="h-5 w-5" />
                          <span>Related Training</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="mb-4">
                          Enhance your knowledge with our specialized training course
                        </CardDescription>
                        <h4 className="font-semibold text-foreground mb-3">
                          {post.relatedCourse}
                        </h4>
                        <Button asChild className="w-full">
                          <Link to="/courses">
                            View Course Details
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  )}

                  {/* Newsletter Signup */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Stay Updated</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4">
                        Get the latest industry insights delivered to your inbox
                      </CardDescription>
                      <div className="space-y-3">
                        <input 
                          type="email" 
                          placeholder="Enter your email" 
                          className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <Button className="w-full">Subscribe</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;