import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, Microscope, Truck, Shield } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Link } from "wouter";
import { createWhatsAppUrl, createGeneralInquiryMessage } from "@/lib/whatsapp";

export default function HeroSection() {
  const handleWhatsAppClick = () => {
    const message = "Hello Laxmi Biomedicals, I want to place an order. Please send me your product catalog.";
    const url = createWhatsAppUrl(message);
    window.open(url, '_blank');
  };

  return (
    <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="secondary" className="inline-flex items-center space-x-2 mb-6">
              <Award className="w-4 h-4" />
              <span>Trusted Laboratory Equipment Supplier</span>
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Professional <span className="text-primary">Laboratory Equipment</span> & Chemicals
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Laxmi Biomedicals provides the best range of laboratory chemicals, diagnostic test kits, gas analyzers, spectrometers, refractometers & digital polarimeters with effective & timely delivery.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 text-lg flex items-center space-x-2"
                data-testid="button-hero-whatsapp"
              >
                <SiWhatsapp className="w-5 h-5" />
                <span>Order on WhatsApp</span>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg"
                data-testid="button-hero-products"
              >
                <Link href="/services">
                  <Microscope className="w-5 h-5 mr-2" />
                  View Products
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24hr</div>
                <div className="text-sm text-muted-foreground">Fast Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern laboratory equipment and workspace" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                  <Truck className="text-secondary-foreground w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Fast Delivery</div>
                  <div className="text-sm text-muted-foreground">Same day dispatch</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-card border border-border rounded-xl p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Shield className="text-primary-foreground w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Certified</div>
                  <div className="text-sm text-muted-foreground">Quality assured</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
