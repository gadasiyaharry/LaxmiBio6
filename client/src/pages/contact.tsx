import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  Clock, 
  MessageCircle,
  CheckCircle
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { apiRequest } from "@/lib/queryClient";
import { createWhatsAppUrl, createContactFormMessage } from "@/lib/whatsapp";
import { insertContactSchema } from "@shared/schema";

const contactFormSchema = insertContactSchema.extend({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      productInterest: "",
      message: "",
    },
  });

  const submitContactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
      setIsSubmitted(true);
      toast({
        title: "Message sent successfully!",
        description: "We'll redirect you to WhatsApp to continue the conversation.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly via WhatsApp.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await submitContactMutation.mutateAsync(data);
      
      // Create WhatsApp message and redirect
      const whatsappMessage = createContactFormMessage({
        ...data,
        productInterest: data.productInterest || undefined
      });
      const whatsappUrl = createWhatsAppUrl(whatsappMessage);
      
      // Small delay to show success message
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        form.reset();
      }, 1500);
      
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleDirectWhatsApp = () => {
    const message = "Hello Laxmi Biomedicals, I need an immediate quote for laboratory equipment. Please contact me as soon as possible.";
    const url = createWhatsAppUrl(message);
    window.open(url, '_blank');
  };

  if (isSubmitted) {
    return (
      <>
        <Helmet>
          <title>Message Sent - Laxmi Biomedicals</title>
        </Helmet>
        
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-secondary/5 min-h-[80vh] flex items-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-secondary-foreground w-8 h-8" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Message Sent Successfully!</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Thank you for contacting us. We're redirecting you to WhatsApp to continue the conversation.
            </p>
            <Button
              onClick={handleDirectWhatsApp}
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            >
              <SiWhatsapp className="w-5 h-5 mr-2" />
              Continue on WhatsApp
            </Button>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Contact Us - Laxmi Biomedicals | Get Quote & Support</title>
        <meta name="description" content="Contact Laxmi Biomedicals for laboratory equipment quotes, technical support, and product information. Phone: +91 98765 43210, Email: orders@laxmibiomedicals.com. Fast response guaranteed." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="inline-flex items-center space-x-2 mb-6">
              <MessageCircle className="w-4 h-4" />
              <span>Get Expert Assistance</span>
            </Badge>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Contact <span className="text-primary">Our Team</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to place an order or need expert advice? Our team is here to help you find the perfect 
              laboratory solutions for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div>
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your full name" 
                                {...field} 
                                data-testid="input-contact-name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input 
                                type="email" 
                                placeholder="Enter your email address" 
                                {...field} 
                                data-testid="input-contact-email"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number *</FormLabel>
                            <FormControl>
                              <Input 
                                type="tel" 
                                placeholder="Enter your phone number" 
                                {...field} 
                                data-testid="input-contact-phone"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="productInterest"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Product Interest</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value || ""}>
                              <FormControl>
                                <SelectTrigger data-testid="select-product-interest">
                                  <SelectValue placeholder="Select a product category" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="laboratory-chemicals">Laboratory Chemicals</SelectItem>
                                <SelectItem value="diagnostic-test-kits">Diagnostic Test Kits</SelectItem>
                                <SelectItem value="gas-analyzers">Gas Analyzers</SelectItem>
                                <SelectItem value="spectrometers">Spectrometers</SelectItem>
                                <SelectItem value="refractometers">Refractometers</SelectItem>
                                <SelectItem value="polarimeters">Digital Polarimeters</SelectItem>
                                <SelectItem value="microtomes">Microtomes</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message *</FormLabel>
                            <FormControl>
                              <Textarea 
                                rows={4}
                                placeholder="Tell us about your requirements, quantities, or any specific questions..." 
                                {...field} 
                                data-testid="textarea-contact-message"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3"
                        disabled={submitContactMutation.isPending}
                        data-testid="button-submit-contact"
                      >
                        {submitContactMutation.isPending ? (
                          "Sending..."
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message & Continue on WhatsApp
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              
              {/* Contact Details */}
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="text-primary w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Phone</h4>
                        <p className="text-muted-foreground">+91 98765 43210</p>
                        <p className="text-sm text-muted-foreground mt-1">Call for immediate assistance</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <SiWhatsapp className="text-secondary w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">WhatsApp</h4>
                        <a 
                          href="https://wa.me/919876543210" 
                          className="text-secondary hover:text-secondary/80"
                          data-testid="link-whatsapp-contact"
                        >
                          +91 98765 43210
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">Quick orders and quotes</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="text-primary w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Email</h4>
                        <a 
                          href="mailto:orders@laxmibiomedicals.com" 
                          className="text-primary hover:text-primary/80"
                          data-testid="link-email-contact"
                        >
                          orders@laxmibiomedicals.com
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">Send detailed requirements</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-secondary w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Address</h4>
                        <p className="text-muted-foreground">
                          Industrial Area, Phase 2<br />
                          Laboratory Equipment Hub<br />
                          City, State 123456
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Business Hours */}
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="text-primary w-6 h-6" />
                    <h3 className="text-xl font-semibold text-foreground">Business Hours</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="text-foreground font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="text-foreground font-medium">9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="text-foreground font-medium">Closed</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Emergency orders can be placed via WhatsApp 24/7
                  </p>
                </CardContent>
              </Card>
              
              {/* Quick Order CTA */}
              <Card className="bg-gradient-to-br from-secondary/10 to-primary/10 border-2 border-secondary/20">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Need an Immediate Quote?</h3>
                  <p className="text-muted-foreground mb-6">
                    Get instant pricing and availability information via WhatsApp
                  </p>
                  <Button
                    onClick={handleDirectWhatsApp}
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                    data-testid="button-instant-quote"
                  >
                    <SiWhatsapp className="w-5 h-5 mr-2" />
                    Get Instant Quote
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Visit Our Location</h2>
            <p className="text-muted-foreground">
              Located in the heart of the industrial area for easy access and fast dispatch
            </p>
          </div>
          
          <div className="bg-card rounded-xl p-4 border border-border">
            <div className="bg-muted/50 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Interactive Map</h3>
                <p className="text-muted-foreground">
                  Industrial Area, Phase 2<br />
                  Laboratory Equipment Hub
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
