import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import HeroSection from "@/components/hero-section";
import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, List, Phone, Mail, MapPin } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Link } from "wouter";
import { type Product } from "@shared/schema";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export default function Home() {
  const { data: products = [], isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  // Group products by category for display
  const productCategories = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, Product[]>);

  // Get one product from each category for display
  const categoryProducts = Object.entries(productCategories).map(([category, products]) => ({
    category,
    product: products[0]
  }));

  // Featured products (first 3)
  const featuredProducts = products.slice(0, 3);

  return (
    <>
      <Helmet>
        <title>Laxmi Biomedicals - Laboratory Equipment Wholesaler & Distributor</title>
        <meta name="description" content="Laxmi Biomedicals provides the best range of laboratory chemicals, diagnostic test kits, gas analyzers, spectrometers, refractometers & digital polarimeters with effective & timely delivery." />
      </Helmet>

      {/* Hero Section */}
      <HeroSection />

      {/* Product Categories */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Product Categories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive range of high-quality laboratory equipment and chemicals for all your research and diagnostic needs
            </p>
          </div>
          
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="bg-muted/50 border border-border rounded-xl p-6 animate-pulse">
                  <div className="w-16 h-16 bg-muted rounded-lg mb-4"></div>
                  <div className="h-4 bg-muted rounded mb-2"></div>
                  <div className="h-3 bg-muted rounded mb-4"></div>
                  <div className="space-y-2 mb-6">
                    <div className="h-3 bg-muted rounded"></div>
                    <div className="h-3 bg-muted rounded"></div>
                  </div>
                  <div className="h-10 bg-muted rounded"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categoryProducts.map(({ category, product }) => (
                <ProductCard key={category} product={product} />
              ))}
              
              {/* View All Products Card */}
              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <List className="text-primary-foreground text-2xl w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">View All Products</h3>
                  <p className="text-muted-foreground mb-4 text-sm">Browse our complete catalog of laboratory equipment and chemicals</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="text-secondary w-4 h-4 mr-2" />
                      <span>500+ Products</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="text-secondary w-4 h-4 mr-2" />
                      <span>Detailed Specifications</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="text-secondary w-4 h-4 mr-2" />
                      <span>Instant Quotes</span>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                    data-testid="button-browse-catalog"
                  >
                    <Link href="/services">
                      <ArrowRight className="w-4 h-4" />
                      <span>Browse Catalog</span>
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Featured Laboratory Equipment</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional-grade instruments trusted by laboratories worldwide
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <img 
                    src={product.image || "https://images.unsplash.com/photo-1576671081837-49000212a370"} 
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold text-foreground mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-primary">{product.price}</span>
                    <Button
                      onClick={() => {
                        const message = `Hello Laxmi Biomedicals, I want to order ${product.name}. Name: [Your Name], Quantity: [x], City: [Your City], Phone: [Your Phone]`;
                        const url = createWhatsAppUrl(message);
                        window.open(url, '_blank');
                      }}
                      className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-4 py-2 rounded-lg font-medium transition-colors"
                      data-testid={`button-order-featured-${product.id}`}
                    >
                      Order Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">About Laxmi Biomedicals</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With over 15 years of experience in the laboratory equipment industry, Laxmi Biomedicals has established itself as a trusted wholesaler and distributor of high-quality laboratory instruments and chemicals.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We specialize in providing comprehensive solutions for research laboratories, diagnostic centers, educational institutions, and industrial facilities across the region.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-secondary text-xl" />
                  <span className="text-foreground font-medium">Quality assured products from trusted manufacturers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-secondary text-xl" />
                  <span className="text-foreground font-medium">Fast delivery within 24-48 hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-secondary text-xl" />
                  <span className="text-foreground font-medium">Competitive wholesale pricing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-secondary text-xl" />
                  <span className="text-foreground font-medium">Expert technical support and consultation</span>
                </div>
              </div>
              
              <Button asChild variant="link" className="text-primary hover:text-primary/80 p-0">
                <Link href="/about">
                  <span>Learn more about our company</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=500" 
                alt="Laboratory technician working with professional equipment" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <Card className="bg-card/95 backdrop-blur-sm border border-border">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">Trusted by 1000+ Laboratories</h4>
                    <p className="text-sm text-muted-foreground">Serving research facilities, hospitals, and educational institutions nationwide</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Get in Touch</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to place an order or need more information? Contact us today for fast quotes and expert assistance.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-primary w-6 h-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                <p className="text-muted-foreground mb-2">+91 98765 43210</p>
                <p className="text-sm text-muted-foreground">Call for immediate assistance</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <SiWhatsapp className="text-secondary w-6 h-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">WhatsApp</h3>
                <a href="https://wa.me/919876543210" className="text-secondary hover:text-secondary/80">+91 98765 43210</a>
                <p className="text-sm text-muted-foreground mt-2">Quick orders and quotes</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-primary w-6 h-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <a href="mailto:orders@laxmibiomedicals.com" className="text-primary hover:text-primary/80">orders@laxmibiomedicals.com</a>
                <p className="text-sm text-muted-foreground mt-2">Send detailed requirements</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <Link href="/contact">
                <span>Contact Us Today</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
