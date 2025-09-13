<?php
require_once __DIR__ . '/../config.php';
require_once __DIR__ . '/functions.php';

// Get current page for navigation
$current_page = basename($_SERVER['PHP_SELF'], '.php');
$page_title = isset($page_title) ? $page_title : generatePageTitle($current_page);
$meta_description = isset($meta_description) ? $meta_description : generateMetaDescription($current_page);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo htmlspecialchars($page_title); ?></title>
    
    <!-- SEO Meta Tags -->
    <meta name="description" content="<?php echo htmlspecialchars($meta_description); ?>">
    <meta name="keywords" content="laboratory equipment, diagnostic test kits, gas analyzers, spectrometers, refractometers, digital polarimeters, microtomes, laboratory chemicals, Laxmi Biomedicals">
    <meta name="author" content="Laxmi Biomedicals">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="<?php echo SITE_URL . $_SERVER['REQUEST_URI']; ?>">
    
    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="<?php echo htmlspecialchars($page_title); ?>">
    <meta property="og:description" content="<?php echo htmlspecialchars($meta_description); ?>">
    <meta property="og:type" content="website">
    <meta property="og:url" content="<?php echo SITE_URL . $_SERVER['REQUEST_URI']; ?>">
    <meta property="og:site_name" content="<?php echo SITE_NAME; ?>">
    <meta property="og:image" content="<?php echo SITE_URL; ?>/assets/images/logo-og.jpg">
    
    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="<?php echo htmlspecialchars($page_title); ?>">
    <meta name="twitter:description" content="<?php echo htmlspecialchars($meta_description); ?>">
    <meta name="twitter:image" content="<?php echo SITE_URL; ?>/assets/images/logo-og.jpg">
    
    <!-- Favicon -->
    <link rel="icon" type="image/png" href="assets/images/favicon.png">
    <link rel="apple-touch-icon" href="assets/images/logo.png">
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- CSS -->
    <link rel="stylesheet" href="assets/css/style.css">
    
    <!-- JSON-LD Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "<?php echo SITE_NAME; ?>",
      "description": "<?php echo SITE_DESCRIPTION; ?>",
      "url": "<?php echo SITE_URL; ?>",
      "logo": "<?php echo SITE_URL; ?>/assets/images/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "<?php echo COMPANY_PHONE; ?>",
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
        "https://wa.me/<?php echo COMPANY_WHATSAPP; ?>"
      ]
    }
    </script>
    
    <?php if (isset($additional_head_content)) echo $additional_head_content; ?>
</head>
<body>
    <header class="header">
        <div class="container">
            <div class="header-content">
                <a href="index.php" class="logo">
                    <img src="assets/images/logo.png" alt="<?php echo SITE_NAME; ?>" style="height: 60px; width: auto;">
                    <div class="logo-text" style="margin-left: 0.5rem;">
                        <h1><?php echo SITE_NAME; ?></h1>
                        <p class="logo-tagline">Laboratory Equipment Specialists</p>
                    </div>
                </a>
                
                <nav class="nav">
                    <a href="index.php" class="nav-link <?php echo $current_page === 'index' ? 'active' : ''; ?>">Home</a>
                    <a href="about.php" class="nav-link <?php echo $current_page === 'about' ? 'active' : ''; ?>">About</a>
                    <a href="services.php" class="nav-link <?php echo $current_page === 'services' ? 'active' : ''; ?>">Products</a>
                    <a href="contact.php" class="nav-link <?php echo $current_page === 'contact' ? 'active' : ''; ?>">Contact</a>
                </nav>
                
                <div class="header-actions">
                    <?php
                    $whatsapp_message = "Hello Laxmi Biomedicals, I need information about your laboratory equipment and products. Please send me your catalog and pricing details.";
                    $whatsapp_url = createWhatsAppUrl($whatsapp_message);
                    ?>
                    <a href="<?php echo $whatsapp_url; ?>" target="_blank" class="whatsapp-btn">
                        <span>📱</span>
                        <span>WhatsApp</span>
                    </a>
                    <button class="mobile-menu-btn" onclick="toggleMobileMenu()">☰</button>
                </div>
            </div>
        </div>
    </header>
    
    <main class="main-content">