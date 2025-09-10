import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Award, 
  Users, 
  Truck, 
  Shield, 
  Clock, 
  Globe, 
  Star,
  Target,
  Heart,
  Zap
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Link } from "wouter";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export default function About() {
  const handleWhatsAppContact = () => {
    const message = "Hello Laxmi Biomedicals, I would like to know more about your company and services. Please contact me.";
    const url = createWhatsAppUrl(message);
    window.open(url, '_blank');
  };

  const stats = [
    { icon: Users, value: "1000+", label: "Satisfied Customers" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Globe, value: "500+", label: "Products Available" },
    { icon: Truck, value: "24hr", label: "Fast Delivery" },
  ];

  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "We provide precise, high-quality laboratory equipment that meets the exact needs of scientific research and diagnostics."
    },
    {
      icon: Heart,
      title: "Care",
      description: "We care about our customers' success and provide personalized support to ensure the best outcomes for their projects."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We stay at the forefront of laboratory technology, offering the latest innovations in scientific instrumentation."
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Our customers trust us for consistent quality, timely delivery, and dependable service across all interactions."
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Laxmi Biomedicals | Laboratory Equipment Specialists</title>
        <meta name="description" content="Learn about Laxmi Biomedicals' 15+ years of experience in providing high-quality laboratory equipment, chemicals, and diagnostic solutions. Trusted by 1000+ customers nationwide." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="inline-flex items-center space-x-2 mb-6">
              <Award className="w-4 h-4" />
              <span>15+ Years of Excellence</span>
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              About <span className="text-primary">Laxmi Biomedicals</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Your trusted partner in laboratory excellence, providing high-quality equipment and chemicals to advance scientific research and diagnostics.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="text-primary w-6 h-6" />
                  </div>
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded with a vision to bridge the gap between cutting-edge laboratory technology and accessibility, 
                Laxmi Biomedicals has been at the forefront of the laboratory equipment industry for over 15 years.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                What started as a small distribution business has grown into a comprehensive laboratory solutions provider, 
                serving research institutions, hospitals, diagnostic centers, and educational facilities across the nation.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our commitment to quality, innovation, and customer satisfaction has made us the preferred choice for 
                laboratory professionals who demand excellence in their scientific endeavors.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-secondary text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Quality Assurance</h4>
                    <p className="text-muted-foreground">Every product undergoes rigorous quality checks before delivery</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-secondary text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Expert Support</h4>
                    <p className="text-muted-foreground">Technical consultation and after-sales support from experienced professionals</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-secondary text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Nationwide Network</h4>
                    <p className="text-muted-foreground">Extensive distribution network ensuring timely delivery across India</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600" 
                alt="Laboratory professionals working with advanced equipment" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Target className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower scientific research and healthcare diagnostics by providing reliable access to high-quality 
                  laboratory equipment and chemicals. We strive to be the bridge between innovation and implementation, 
                  ensuring that every laboratory has the tools they need to make breakthrough discoveries and provide 
                  accurate diagnoses.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                  <Star className="text-secondary w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the most trusted and comprehensive laboratory solutions provider in India, known for our 
                  commitment to quality, innovation, and customer success. We envision a future where every scientific 
                  institution has seamless access to world-class laboratory equipment and expert support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do at Laxmi Biomedicals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="text-primary w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Why Choose Laxmi Biomedicals?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the difference that comes with working with laboratory equipment specialists
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Fast Delivery</h4>
                  <p className="text-muted-foreground">
                    Same-day dispatch for most products with delivery within 24-48 hours across major cities. 
                    Emergency orders handled with priority shipping.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="text-secondary w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Quality Guaranteed</h4>
                  <p className="text-muted-foreground">
                    All products come with manufacturer warranties and our quality assurance. We stand behind 
                    every product we sell with comprehensive support.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Expert Team</h4>
                  <p className="text-muted-foreground">
                    Our team consists of experienced professionals with deep knowledge of laboratory requirements 
                    and technical specifications.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="text-secondary w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Nationwide Reach</h4>
                  <p className="text-muted-foreground">
                    Serving laboratories across India with established distribution networks and local support 
                    in major metropolitan areas.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=500" 
                alt="Modern laboratory with advanced equipment" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Ready to Partner with Us?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of satisfied customers who trust Laxmi Biomedicals for their laboratory equipment needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleWhatsAppContact}
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 text-lg"
              data-testid="button-whatsapp-contact"
            >
              <SiWhatsapp className="w-5 h-5 mr-2" />
              Contact on WhatsApp
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg"
              data-testid="button-contact-form"
            >
              <Link href="/contact">
                Get Detailed Quote
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
