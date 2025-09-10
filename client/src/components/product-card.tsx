import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ExternalLink } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { type Product } from "@shared/schema";
import { createWhatsAppUrl, createProductOrderMessage } from "@/lib/whatsapp";
import * as LucideIcons from "lucide-react";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export default function ProductCard({ product, className = "" }: ProductCardProps) {
  const handleWhatsAppOrder = () => {
    const message = createProductOrderMessage(product.name);
    const url = createWhatsAppUrl(message);
    window.open(url, '_blank');
  };

  // Get the icon component dynamically
  const IconComponent = product.icon ? (LucideIcons as any)[product.icon] : LucideIcons.Package;

  return (
    <Card className={`hover:shadow-lg transition-all duration-300 hover:scale-105 ${className}`}>
      <CardContent className="p-6">
        <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
          {IconComponent && <IconComponent className="text-primary text-2xl w-8 h-8" />}
        </div>
        
        <div className="mb-2">
          <Badge variant="secondary" className="mb-2 text-xs">
            {product.category}
          </Badge>
          <h3 className="text-xl font-semibold text-foreground mb-2">{product.name}</h3>
        </div>
        
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
          {product.description}
        </p>
        
        {product.features && product.features.length > 0 && (
          <div className="space-y-2 mb-6">
            {product.features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-center text-sm text-muted-foreground">
                <Check className="text-secondary w-4 h-4 mr-2 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        )}
        
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-bold text-primary">{product.price}</span>
          {product.specifications && product.specifications.length > 0 && (
            <Button 
              variant="ghost" 
              size="sm"
              className="text-primary hover:text-primary/80"
              data-testid={`button-specs-${product.id}`}
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              Specs
            </Button>
          )}
        </div>
        
        <Button
          onClick={handleWhatsAppOrder}
          className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
          data-testid={`button-order-${product.id}`}
        >
          <SiWhatsapp className="w-4 h-4" />
          <span>Order on WhatsApp</span>
        </Button>
      </CardContent>
    </Card>
  );
}
