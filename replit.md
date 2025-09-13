# Overview

This is a PHP-based corporate website for Laxmi Biomedicals, a laboratory equipment wholesaler and distributor. The website serves as a professional showcase for their product catalog including laboratory chemicals, diagnostic test kits, gas analyzers, spectrometers, refractometers, digital polarimeters, and microtomes. The site features a modern, professional design with comprehensive product listings, company information, and integrated WhatsApp ordering functionality for seamless customer engagement.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## PHP Website Architecture
The website is built using pure PHP with modern web standards:

- **Template System**: PHP includes for header, footer, and reusable functions
- **Styling**: Custom CSS with professional medical/lab equipment design using company brand colors
- **Data Storage**: JSON-based product catalog with PHP file operations
- **Form Processing**: Server-side PHP form validation and processing
- **SEO**: Complete meta tags, structured data, and search engine optimization

## Contact Information
- **Phone**: +91 96671 52373
- **WhatsApp**: 919667152373
- **Email**: orders@laxmibiomedicals.com
- **Address**: Ganesh nagar, Near RTO office, Bharatpur (Rajasthan) - 321001

# File Structure

## Core PHP Files
- **index.php**: Homepage with hero section and product categories
- **about.php**: Company information and story
- **services.php**: Product catalog with filtering and search
- **contact.php**: Contact form with WhatsApp integration
- **config.php**: Configuration settings and constants

## Templates and Functions
- **includes/header.php**: Header template with navigation and SEO tags
- **includes/footer.php**: Footer template with company links
- **includes/functions.php**: Helper functions for WhatsApp, validation, and utilities

## Assets and Data
- **assets/css/style.css**: Professional styling with brand colors
- **assets/js/main.js**: JavaScript for interactive features
- **assets/images/**: Company logo and favicon
- **products.json**: Product catalog database

## SEO and Configuration
- **sitemap.xml**: Search engine sitemap
- **robots.txt**: Search engine crawling instructions
- **.htaccess**: Server configuration and security

# External Dependencies

## Design and Branding
- **Company Logo**: Official Laxmi Biomedicals logo used throughout
- **Color Scheme**: Professional medical blue (#0ea5e9) and green (#84cc16) from company branding
- **Google Fonts**: Inter font family for professional typography
- **Responsive Design**: Mobile-first responsive layout

## Communication Services
- **WhatsApp Integration**: Direct messaging with pre-filled product order templates
- **Contact Forms**: PHP-based form processing with validation
- **Email Integration**: SMTP configuration for form notifications

## SEO and Marketing
- **Meta Tags**: Complete meta tags for all pages
- **Open Graph**: Social media sharing optimization
- **JSON-LD**: Structured data for search engines
- **Sitemap**: XML sitemap for search engine indexing

# Hosting Requirements

## Server Requirements
- PHP 7.4 or higher
- Web server (Apache/Nginx)
- Write permissions for data directory
- HTTPS support recommended

## Deployment Ready
- All files optimized for standard PHP hosting
- No database required (uses JSON storage)
- Compatible with shared hosting platforms like Hostinger
- Security headers and .htaccess configuration included