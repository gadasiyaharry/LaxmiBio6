<?php
/**
 * Helper functions for Laxmi Biomedicals website
 */

/**
 * Load products from JSON file
 */
function getProducts() {
    $json = file_get_contents(__DIR__ . '/../products.json');
    $data = json_decode($json, true);
    return $data['products'] ?? [];
}

/**
 * Get products by category
 */
function getProductsByCategory($category) {
    $products = getProducts();
    if ($category === 'all') {
        return $products;
    }
    return array_filter($products, function($product) use ($category) {
        return strtolower($product['category']) === strtolower($category);
    });
}

/**
 * Get unique categories
 */
function getCategories() {
    $json = file_get_contents(__DIR__ . '/../products.json');
    $data = json_decode($json, true);
    return $data['categories'] ?? [];
}

/**
 * Create WhatsApp URL with encoded message
 */
function createWhatsAppUrl($message) {
    $phone = COMPANY_WHATSAPP;
    $encodedMessage = urlencode($message);
    return "https://wa.me/{$phone}?text={$encodedMessage}";
}

/**
 * Create product order message for WhatsApp
 */
function createProductOrderMessage($productName, $customerName = '', $quantity = '', $city = '', $phone = '') {
    $customerName = $customerName ?: '[Your Name]';
    $quantity = $quantity ?: '[x]';
    $city = $city ?: '[Your City]';
    $phone = $phone ?: '[Your Phone]';
    
    return "Hello Laxmi Biomedicals, I want to order: {$productName}. 

Name: {$customerName}
Quantity: {$quantity}
City: {$city}
Phone: {$phone}

Please contact me for pricing and availability.";
}

/**
 * Create contact form message for WhatsApp
 */
function createContactFormMessage($formData) {
    $productInterest = isset($formData['product_interest']) ? $formData['product_interest'] : 'General Inquiry';
    
    return "Hello Laxmi Biomedicals,

I am interested in your products. Here are my details:

Name: {$formData['name']}
Email: {$formData['email']}
Phone: {$formData['phone']}
Product Interest: {$productInterest}
Message: {$formData['message']}

Please contact me for further discussion.";
}

/**
 * Sanitize input data
 */
function sanitizeInput($data) {
    return htmlspecialchars(strip_tags(trim($data)));
}

/**
 * Validate email address
 */
function isValidEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

/**
 * Validate phone number (basic validation)
 */
function isValidPhone($phone) {
    return preg_match('/^[\+]?[0-9\s\-\(\)]{10,}$/', $phone);
}

/**
 * Send email using PHP mail() function
 * For production, consider using PHPMailer or similar library
 */
function sendEmail($to, $subject, $message, $headers = '') {
    if (empty($headers)) {
        $headers = "From: " . SMTP_FROM_NAME . " <" . SMTP_FROM_EMAIL . ">\r\n";
        $headers .= "Reply-To: " . SMTP_FROM_EMAIL . "\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    }
    
    return mail($to, $subject, $message, $headers);
}

/**
 * Generate meta description for SEO
 */
function generateMetaDescription($page = 'home', $productName = '') {
    switch ($page) {
        case 'about':
            return "Learn about Laxmi Biomedicals' 15+ years of experience in providing high-quality laboratory equipment, chemicals, and diagnostic solutions. Trusted by 1000+ customers nationwide.";
        case 'services':
            return "Browse our comprehensive range of laboratory equipment including spectrometers, refractometers, gas analyzers, diagnostic test kits, microtomes, and laboratory chemicals. Quality assured with fast delivery.";
        case 'contact':
            return "Contact Laxmi Biomedicals for laboratory equipment quotes, technical support, and product information. Phone: " . COMPANY_PHONE . ", Email: " . COMPANY_EMAIL . ". Fast response guaranteed.";
        case 'product':
            return "Get detailed information about {$productName} from Laxmi Biomedicals. High-quality laboratory equipment with competitive pricing and fast delivery.";
        default:
            return SITE_DESCRIPTION;
    }
}

/**
 * Generate page title for SEO
 */
function generatePageTitle($page = 'home', $productName = '') {
    $siteName = SITE_NAME;
    switch ($page) {
        case 'about':
            return "About Us - {$siteName} | Laboratory Equipment Specialists";
        case 'services':
            return "Laboratory Equipment & Products - {$siteName}";
        case 'contact':
            return "Contact Us - {$siteName} | Get Quote & Support";
        case 'product':
            return "{$productName} - {$siteName}";
        default:
            return "{$siteName} - Laboratory Equipment Wholesaler & Distributor";
    }
}

/**
 * Get SVG icon by name
 * @param string $iconName - Name of the icon
 * @param string $class - Additional CSS classes
 * @param int $size - Icon size (default: 24)
 * @return string SVG icon HTML
 */
function getIcon($iconName, $class = '', $size = 24) {
    // Whitelist of allowed icons for security
    $iconMap = [
        'whatsapp' => 'whatsapp.svg',
        'trophy' => 'trophy.svg', 
        'package' => 'package.svg',
        'phone' => 'phone.svg',
        'email' => 'email.svg',
        'location' => 'location.svg',
        'search' => 'search.svg',
        'clock' => 'clock.svg',
        'check' => 'check.svg',
        'chemicals' => 'chemicals.svg',
        'computer' => 'computer.svg',
        'spectrometers' => 'computer.svg',
        'scissors' => 'scissors.svg',
        'microtomes' => 'scissors.svg',
        'gear' => 'gear.svg',
        'folder' => 'folder.svg',
        'lightbulb' => 'lightbulb.svg',
        'star' => 'star.svg',
        'heart' => 'heart.svg',
        'bolt' => 'bolt.svg',
        'innovation' => 'bolt.svg',
        'wrench' => 'wrench.svg',
        'users' => 'users.svg',
        'globe' => 'globe.svg',
        'chat' => 'chat.svg',
        'menu' => 'menu.svg',
        'close' => 'close.svg',
        'facebook' => 'facebook.svg',
        'linkedin' => 'linkedin.svg',
        'arrow-left' => 'arrow-left.svg'
    ];
    
    // Validate icon name against whitelist
    if (!isset($iconMap[$iconName])) {
        return '<span class="icon-placeholder" aria-hidden="true">?</span>';
    }
    
    $iconFile = $iconMap[$iconName];
    $iconPath = __DIR__ . '/../assets/icons/' . $iconFile;
    
    // Check if file exists
    if (!file_exists($iconPath)) {
        return '<span class="icon-placeholder" aria-hidden="true">?</span>';
    }
    
    // Read and process SVG content
    $svgContent = file_get_contents($iconPath);
    
    // Parse existing SVG attributes to avoid duplicates
    if (preg_match('/<svg\b([^>]*)>/', $svgContent, $matches)) {
        $existingAttrs = $matches[1];
        
        // Extract existing class attribute if present
        $existingClasses = [];
        if (preg_match('/class=["\']([^"\']*)["\']/', $existingAttrs, $classMatches)) {
            $existingClasses = array_filter(explode(' ', $classMatches[1]));
        }
        
        // Build merged classes: always include 'icon', plus any additional classes
        $classes = array_merge(['icon'], $existingClasses);
        if (!empty($class)) {
            $classes = array_merge($classes, explode(' ', $class));
        }
        $classes = array_unique($classes);
        
        // Remove existing attributes we're going to replace
        $cleanAttrs = preg_replace('/\b(?:class|width|height|aria-hidden)=["\'][^"\']*["\']/', '', $existingAttrs);
        $cleanAttrs = trim(preg_replace('/\s+/', ' ', $cleanAttrs));
        
        // Build new attribute string
        $newAttrs = [];
        if (!empty($cleanAttrs)) {
            $newAttrs[] = $cleanAttrs;
        }
        $newAttrs[] = 'class="' . htmlspecialchars(implode(' ', $classes)) . '"';
        $newAttrs[] = 'width="' . (int)$size . '"';
        $newAttrs[] = 'height="' . (int)$size . '"';
        $newAttrs[] = 'aria-hidden="true"';
        
        // Replace the SVG opening tag
        $svgContent = preg_replace(
            '/<svg\b[^>]*>/',
            '<svg ' . implode(' ', $newAttrs) . '>',
            $svgContent
        );
    }
    
    return $svgContent;
}

/**
 * Get inline icon for simple usage
 * @param string $iconName - Name of the icon  
 * @param string $class - Additional CSS classes
 * @return string Inline SVG icon
 */
function icon($iconName, $class = 'icon') {
    return getIcon($iconName, $class, 24);
}
?>