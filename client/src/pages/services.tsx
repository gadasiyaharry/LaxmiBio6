import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter } from "lucide-react";
import ProductCard from "@/components/product-card";
import { type Product } from "@shared/schema";
import { useLocation } from "wouter";

export default function Services() {
  const [location] = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get category from URL params if available
  const urlParams = new URLSearchParams(location.split('?')[1] || '');
  const urlCategory = urlParams.get('category');

  const { data: products = [], isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  // Get unique categories
  const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];

  // Filter products based on search and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const effectiveCategory = urlCategory || selectedCategory;
    const matchesCategory = effectiveCategory === "All" || product.category === effectiveCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Group products by category for tabbed view
  const productsByCategory = categories.reduce((acc, category) => {
    if (category === "All") {
      acc[category] = products;
    } else {
      acc[category] = products.filter(p => p.category === category);
    }
    return acc;
  }, {} as Record<string, Product[]>);

  return (
    <>
      <Helmet>
        <title>Laboratory Equipment & Products - Laxmi Biomedicals</title>
        <meta name="description" content="Browse our comprehensive range of laboratory equipment including spectrometers, refractometers, gas analyzers, diagnostic test kits, microtomes, and laboratory chemicals. Quality assured with fast delivery." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="inline-flex items-center space-x-2 mb-6">
              <Filter className="w-4 h-4" />
              <span>500+ Premium Products</span>
            </Badge>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Laboratory <span className="text-primary">Equipment</span> & Products
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover our comprehensive range of high-quality laboratory instruments, chemicals, and diagnostic solutions 
              trusted by professionals worldwide.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search products, categories, or specifications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 text-lg"
                  data-testid="input-product-search"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Tabs */}
          <Tabs value={urlCategory || selectedCategory} onValueChange={setSelectedCategory} className="mb-12">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-8 mb-8">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="text-xs sm:text-sm"
                  data-testid={`tab-category-${category.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {categories.map((category) => (
              <TabsContent key={category} value={category}>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    {category === "All" ? "All Products" : category}
                  </h2>
                  <p className="text-muted-foreground">
                    {category === "All" 
                      ? `Browse our complete catalog of ${products.length} laboratory products`
                      : `High-quality ${category.toLowerCase()} for professional laboratory use`
                    }
                  </p>
                </div>
                
                {isLoading ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <Card key={i} className="animate-pulse">
                        <CardContent className="p-6">
                          <div className="w-16 h-16 bg-muted rounded-lg mb-4"></div>
                          <div className="h-4 bg-muted rounded mb-2"></div>
                          <div className="h-3 bg-muted rounded mb-4"></div>
                          <div className="space-y-2 mb-6">
                            <div className="h-3 bg-muted rounded"></div>
                            <div className="h-3 bg-muted rounded"></div>
                          </div>
                          <div className="h-10 bg-muted rounded"></div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <>
                    {filteredProducts.length === 0 ? (
                      <Card className="p-12 text-center">
                        <CardContent>
                          <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                          <h3 className="text-xl font-semibold text-foreground mb-2">No products found</h3>
                          <p className="text-muted-foreground mb-4">
                            Try adjusting your search terms or browse different categories
                          </p>
                          <Button 
                            onClick={() => {
                              setSearchTerm("");
                              setSelectedCategory("All");
                            }}
                            variant="outline"
                            data-testid="button-clear-search"
                          >
                            Clear Search
                          </Button>
                        </CardContent>
                      </Card>
                    ) : (
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredProducts.map((product) => (
                          <ProductCard key={product.id} product={product} />
                        ))}
                      </div>
                    )}
                  </>
                )}
              </TabsContent>
            ))}
          </Tabs>
          
          {/* Results Summary */}
          {!isLoading && filteredProducts.length > 0 && (
            <div className="text-center mt-12">
              <p className="text-muted-foreground">
                Showing {filteredProducts.length} of {products.length} products
                {searchTerm && ` for "${searchTerm}"`}
                {selectedCategory !== "All" && ` in ${selectedCategory}`}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Category Highlights */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Product Categories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our specialized product categories designed for every laboratory need
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.filter(cat => cat !== "All").map((category) => {
              const categoryProducts = productsByCategory[category] || [];
              const productCount = categoryProducts.length;
              
              return (
                <Card key={category} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{category}</h3>
                    <p className="text-muted-foreground mb-4">
                      {productCount} product{productCount !== 1 ? 's' : ''} available
                    </p>
                    <Button
                      onClick={() => setSelectedCategory(category)}
                      variant="outline"
                      className="w-full"
                      data-testid={`button-view-category-${category.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      View {category}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
