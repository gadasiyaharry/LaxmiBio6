# Laxmi Biomedicals - PHP Website Setup Instructions

## Overview
This is a complete PHP-based website for Laxmi Biomedicals laboratory equipment wholesaler and distributor. The website includes professional design, WhatsApp integration, contact forms, and SEO optimization.

## File Structure
```
php/
├── index.php              # Homepage
├── about.php               # About Us page
├── services.php            # Products/Services page
├── contact.php             # Contact page with form processing
├── config.php              # Configuration settings
├── products.json           # Product data
├── includes/
│   ├── header.php          # Header template
│   ├── footer.php          # Footer template
│   └── functions.php       # Helper functions
├── assets/
│   ├── css/
│   │   └── style.css       # Main stylesheet
│   └── js/
│       └── main.js         # JavaScript functionality
├── data/                   # Directory for storing form submissions (auto-created)
└── README.txt              # This file
```

## Requirements
- PHP 7.4 or higher
- Web server (Apache, Nginx, or similar)
- Write permissions for data/ directory (for contact form submissions)

## Installation Steps

### 1. Upload Files
Upload all files to your web hosting public_html directory or subdirectory.

### 2. Configure Settings
Edit `config.php` to update the following settings:

#### Website Configuration
- SITE_URL: Your website URL (e.g., 'https://laxmibiomedicals.com')
- SITE_NAME: Company name
- SITE_DESCRIPTION: Company description for SEO

#### Contact Information
- COMPANY_PHONE: Display phone number (e.g., '+91 98765 43210')
- COMPANY_WHATSAPP: WhatsApp number without + or spaces (e.g., '919876543210')
- COMPANY_EMAIL: Business email address
- COMPANY_ADDRESS: Business address (HTML allowed for line breaks)

#### Email Configuration (Optional)
For contact form email notifications, configure:
- SMTP_HOST: Your SMTP server
- SMTP_PORT: SMTP port (usually 587 for TLS)
- SMTP_USERNAME: SMTP username
- SMTP_PASSWORD: SMTP password
- SMTP_FROM_EMAIL: From email address
- SMTP_FROM_NAME: From name

### 3. Set Permissions
Ensure the web server can create the data/ directory:
```bash
chmod 755 php/
```

### 4. Configure Products (Optional)
Edit `products.json` to add, remove, or modify products:
- Each product should have: id, name, category, description, specifications, price, image, features
- Categories are automatically generated from products
- Images can be URLs or local paths

### 5. Customize Colors (Optional)
The website uses colors extracted from the Laxmi Biomedicals logo:
- Primary: #0ea5e9 (Teal blue)
- Secondary: #84cc16 (Green)

To change colors, edit the CSS variables in `assets/css/style.css`:
```css
:root {
  --primary-color: #0ea5e9;
  --secondary-color: #84cc16;
  /* ... other variables ... */
}
```

## Features

### WhatsApp Integration
- Order buttons for each product
- Pre-filled messages with product details
- Contact form redirects to WhatsApp
- Customizable message templates in functions.php

### Contact Form
- Server-side validation
- Stores submissions in JSON format in data/ directory
- Optional email notifications
- WhatsApp redirect after submission

### SEO Optimization
- Meta tags for all pages
- Open Graph tags for social media
- JSON-LD structured data
- Canonical URLs
- Sitemap-ready structure

### Product Management
- JSON-based product storage
- Category filtering
- Search functionality
- Image optimization ready

### Responsive Design
- Mobile-first approach
- Professional medical/lab equipment aesthetic
- Accessible color contrast
- Fast loading with optimized assets

## Customization

### Adding New Products
1. Edit `products.json`
2. Add product object with required fields
3. Update category count in categories section

### Modifying Pages
- Edit PHP files directly
- Use includes/functions.php for shared functionality
- Maintain consistent design with existing CSS classes

### Email Setup
For production use, consider using PHPMailer or similar library for more robust email handling.

### Google Maps Integration
To add interactive map:
1. Get Google Maps API key
2. Add key to GOOGLE_MAPS_API_KEY in config.php
3. Replace map placeholder in contact.php with actual Google Maps embed

## Security Considerations

### Input Sanitization
All user inputs are sanitized using htmlspecialchars() and strip_tags().

### File Permissions
- PHP files: 644
- Directories: 755
- Config files: 600 (recommended)

### Production Deployment
1. Set error_reporting(0) and display_errors = Off in config.php
2. Use HTTPS for all pages
3. Implement proper backup strategy for data/ directory
4. Consider using database instead of JSON files for larger datasets

### Spam Protection
For production use, consider adding:
- CAPTCHA to contact form
- Rate limiting for form submissions
- Honeypot fields

## Testing Checklist

### Functionality
- [ ] All pages load without errors
- [ ] Contact form submits successfully
- [ ] WhatsApp links open with correct messages
- [ ] Product filtering works correctly
- [ ] Search functionality works
- [ ] Mobile responsive design

### SEO
- [ ] Meta tags present on all pages
- [ ] Structured data validates (use Google Rich Results test)
- [ ] Images have alt tags
- [ ] Links work correctly

### WhatsApp Integration
- [ ] Order buttons create proper WhatsApp messages
- [ ] Phone number format is correct (country code without +)
- [ ] Messages are properly URL encoded
- [ ] Test on both mobile and desktop

## Maintenance

### Regular Updates
- Review and update product information
- Check contact form submissions in data/ directory
- Monitor website performance
- Update company information as needed

### Backup
- Backup entire php/ directory
- Special attention to data/ directory for form submissions
- Consider automated backup solutions

## Support

For technical support or customization needs:
1. Check error logs for PHP errors
2. Validate HTML and CSS
3. Test JavaScript functionality in browser console
4. Ensure proper file permissions

## Version History
- v1.0: Initial PHP website with complete functionality
- Features: Homepage, About, Services, Contact, WhatsApp integration, SEO optimization