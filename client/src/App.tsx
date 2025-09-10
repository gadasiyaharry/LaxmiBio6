import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Helmet } from "react-helmet";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Helmet>
          <title>Laxmi Biomedicals - Laboratory Equipment Wholesaler & Distributor</title>
          <meta name="description" content="Laxmi Biomedicals provides the best range of laboratory chemicals, diagnostic test kits, gas analyzers, spectrometers, refractometers & digital polarimeters with effective & timely delivery." />
          <meta name="keywords" content="laboratory equipment, diagnostic test kits, gas analyzers, spectrometers, refractometers, digital polarimeters, microtomes, laboratory chemicals" />
          <link rel="canonical" href="https://laxmibiomedicals.com" />
          
          {/* Open Graph */}
          <meta property="og:title" content="Laxmi Biomedicals - Laboratory Equipment Wholesaler" />
          <meta property="og:description" content="Professional laboratory equipment and chemicals with effective & timely delivery" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://laxmibiomedicals.com" />
          
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Laxmi Biomedicals - Laboratory Equipment Wholesaler" />
          <meta name="twitter:description" content="Professional laboratory equipment and chemicals with effective & timely delivery" />
          
          {/* Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        </Helmet>
        
        <Toaster />
        <Router />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Laxmi Biomedicals",
            "description": "Laxmi Biomedicals provides the best range of laboratory chemicals, diagnostic test kits, gas analyzers, spectrometers, refractometers & digital polarimeters with effective & timely delivery.",
            "url": "https://laxmibiomedicals.com",
            "logo": "https://laxmibiomedicals.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-98765-43210",
              "contactType": "sales",
              "areaServed": "IN",
              "availableLanguage": "English"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Industrial Area, Phase 2",
              "addressLocality": "Laboratory Equipment Hub",
              "addressCountry": "IN"
            },
            "sameAs": [
              "https://wa.me/919876543210"
            ]
          })}
        </script>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
