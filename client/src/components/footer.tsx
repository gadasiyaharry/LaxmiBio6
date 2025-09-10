import { Link } from "wouter";
import { Plus, Phone, Mail, MapPin } from "lucide-react";
import { SiWhatsapp, SiFacebook, SiLinkedin } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Plus className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Laxmi Biomedicals</h3>
                <p className="text-sm text-accent-foreground/70">Laboratory Equipment Specialists</p>
              </div>
            </div>
            <p className="text-accent-foreground/80 mb-4">
              Trusted supplier of high-quality laboratory equipment and chemicals with fast, reliable delivery.
            </p>
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors"
                data-testid="link-social-facebook"
              >
                <SiFacebook className="text-primary w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors"
                data-testid="link-social-linkedin"
              >
                <SiLinkedin className="text-primary w-4 h-4" />
              </a>
              <a 
                href="https://wa.me/919876543210" 
                className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center hover:bg-secondary/30 transition-colors"
                data-testid="link-social-whatsapp"
              >
                <SiWhatsapp className="text-secondary w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-accent-foreground mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/services?category=Laboratory+Chemicals" 
                  className="text-accent-foreground/70 hover:text-accent-foreground transition-colors"
                  data-testid="link-footer-chemicals"
                >
                  Laboratory Chemicals
                </Link>
              </li>
              <li>
                <Link 
                  href="/services?category=Diagnostic+Test+Kits" 
                  className="text-accent-foreground/70 hover:text-accent-foreground transition-colors"
                  data-testid="link-footer-test-kits"
                >
                  Diagnostic Test Kits
                </Link>
              </li>
              <li>
                <Link 
                  href="/services?category=Gas+Analyzers" 
                  className="text-accent-foreground/70 hover:text-accent-foreground transition-colors"
                  data-testid="link-footer-gas-analyzers"
                >
                  Gas Analyzers
                </Link>
              </li>
              <li>
                <Link 
                  href="/services?category=Spectrometers" 
                  className="text-accent-foreground/70 hover:text-accent-foreground transition-colors"
                  data-testid="link-footer-spectrometers"
                >
                  Spectrometers
                </Link>
              </li>
              <li>
                <Link 
                  href="/services?category=Refractometers" 
                  className="text-accent-foreground/70 hover:text-accent-foreground transition-colors"
                  data-testid="link-footer-refractometers"
                >
                  Refractometers
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-accent-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="text-accent-foreground/70 hover:text-accent-foreground transition-colors"
                  data-testid="link-footer-home"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-accent-foreground/70 hover:text-accent-foreground transition-colors"
                  data-testid="link-footer-about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className="text-accent-foreground/70 hover:text-accent-foreground transition-colors"
                  data-testid="link-footer-products"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-accent-foreground/70 hover:text-accent-foreground transition-colors"
                  data-testid="link-footer-contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-accent-foreground mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-accent-foreground/70">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-accent-foreground/70">orders@laxmibiomedicals.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-accent-foreground/70">
                  Industrial Area, Phase 2<br />
                  Laboratory Equipment Hub
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-accent-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-accent-foreground/60 text-sm">
              © 2024 Laxmi Biomedicals. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a 
                href="#" 
                className="text-accent-foreground/60 hover:text-accent-foreground text-sm transition-colors"
                data-testid="link-footer-terms"
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className="text-accent-foreground/60 hover:text-accent-foreground text-sm transition-colors"
                data-testid="link-footer-privacy"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
