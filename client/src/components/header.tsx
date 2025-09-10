import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Plus, MessageCircle, Menu, X } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { createWhatsAppUrl, createGeneralInquiryMessage } from "@/lib/whatsapp";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/", current: location === "/" },
    { name: "About", href: "/about", current: location === "/about" },
    { name: "Products", href: "/services", current: location === "/services" },
    { name: "Contact", href: "/contact", current: location === "/contact" },
  ];

  const handleWhatsAppClick = () => {
    const message = createGeneralInquiryMessage();
    const url = createWhatsAppUrl(message);
    window.open(url, '_blank');
  };

  return (
    <header className="bg-card/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3" data-testid="link-home-logo">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Plus className="text-primary-foreground text-lg" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Laxmi Biomedicals</h1>
              <p className="text-xs text-muted-foreground">Laboratory Equipment Specialists</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  item.current
                    ? "text-foreground font-medium"
                    : "text-muted-foreground"
                } hover:text-primary transition-colors`}
                data-testid={`link-nav-${item.name.toLowerCase()}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button
              onClick={handleWhatsAppClick}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
              data-testid="button-whatsapp-header"
            >
              <SiWhatsapp className="w-4 h-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${
                    item.current
                      ? "text-foreground font-medium"
                      : "text-muted-foreground"
                  } hover:text-primary transition-colors py-2`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
