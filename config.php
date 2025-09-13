<?php
/**
 * Configuration file for Laxmi Biomedicals website
 * Update these settings according to your hosting environment
 */

// Website Configuration
define('SITE_URL', 'https://laxmibiomedicals.com/');
define('SITE_NAME', 'Laxmi Biomedicals');
define('SITE_DESCRIPTION', 'Laxmi Biomedicals provides the best range of laboratory chemicals, diagnostic test kits, gas analyzers, spectrometers, refractometers & digital polarimeters with effective & timely delivery.');

// Contact Information
define('COMPANY_PHONE', '+91 96671 52373');
define('COMPANY_WHATSAPP', '919667152373'); // Without + or spaces
define('COMPANY_EMAIL', 'orders@laxmibiomedicals.com');
define('COMPANY_ADDRESS', 'Ganesh nagar, Near RTO office<br>Bharatpur (Rajasthan) - 321001');

// SMTP Configuration for contact form (update with your SMTP settings)
define('SMTP_HOST', 'smtp.gmail.com');
define('SMTP_PORT', 587);
define('SMTP_USERNAME', 'your-email@gmail.com');
define('SMTP_PASSWORD', 'your-password');
define('SMTP_FROM_EMAIL', 'noreply@laxmibiomedicals.com');
define('SMTP_FROM_NAME', 'Laxmi Biomedicals');

// Google Maps API Key (optional - for map embed)
define('GOOGLE_MAPS_API_KEY', '');

// Error reporting (set to 0 in production)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Start session for form handling
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}
?>