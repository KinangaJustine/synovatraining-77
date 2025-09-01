import Layout from "@/components/Layout";
import ContactForm from "@/components/forms/ContactForm";

const Contact = () => {
  return (
    <Layout>
      <div className="bg-gradient-subtle min-h-screen">
        {/* Hero Section */}
        <div className="bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-primary-foreground/90">
                Get in touch with our team to discuss your training needs and discover how we can support your professional development
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <ContactForm />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;