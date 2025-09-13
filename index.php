<?php
$page_title = "Laxmi Biomedicals - Laboratory Equipment Wholesaler & Distributor";
$meta_description = "Laxmi Biomedicals provides the best range of laboratory chemicals, diagnostic test kits, gas analyzers, spectrometers, refractometers & digital polarimeters with effective & timely delivery.";
require_once 'includes/header.php';

// Load products for featured display
$products = getProducts();
$categories = getCategories();
$featuredProducts = array_slice($products, 0, 3);

// Group products by category for category cards
$productsByCategory = [];
foreach ($products as $product) {
    if (!isset($productsByCategory[$product['category']])) {
        $productsByCategory[$product['category']] = [];
    }
    $productsByCategory[$product['category']][] = $product;
}
?>

<!-- Hero Section -->
<section class="hero">
    <div class="container">
        <div class="section-header">
            <div class="text-center mb-4">
                <span class="product-category"><?php echo icon('trophy'); ?> Trusted Laboratory Equipment Supplier</span>
            </div>
            
            <h1>Professional <span class="text-primary">Laboratory Equipment</span> & Chemicals</h1>
            
            <p class="section-description">
                Laxmi Biomedicals provides the best range of laboratory chemicals, diagnostic test kits, 
                gas analyzers, spectrometers, refractometers & digital polarimeters with effective & timely delivery.
            </p>
            
            <div class="cta-buttons">
                <?php
                $orderMessage = "Hello Laxmi Biomedicals, I want to place an order. Please send me your product catalog.";
                $orderUrl = createWhatsAppUrl($orderMessage);
                ?>
                <a href="<?php echo $orderUrl; ?>" target="_blank" class="btn btn-primary">
                    <?php echo icon('whatsapp'); ?> Order on WhatsApp
                </a>
                <a href="services.php" class="btn btn-outline">
                    <?php echo icon('package'); ?> View Products
                </a>
            </div>
            
            <div class="stats">
                <div class="stat">
                    <div class="stat-number">500+</div>
                    <div class="stat-label">Products</div>
                </div>
                <div class="stat">
                    <div class="stat-number">24hr</div>
                    <div class="stat-label">Fast Delivery</div>
                </div>
                <div class="stat">
                    <div class="stat-number">15+</div>
                    <div class="stat-label">Years Experience</div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Product Categories Section -->
<section class="section bg-light">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Our Product Categories</h2>
            <p class="section-description">
                Comprehensive range of high-quality laboratory equipment and chemicals for all your research and diagnostic needs
            </p>
        </div>
        
        <div class="product-grid">
            <?php foreach ($categories as $category): ?>
                <?php 
                $categoryProducts = isset($productsByCategory[$category['name']]) ? $productsByCategory[$category['name']] : [];
                $sampleProduct = !empty($categoryProducts) ? $categoryProducts[0] : null;
                ?>
                <div class="card">
                    <div class="card-icon">
                        <?php
                        // Icon mapping
                        $icons = [
                            'Laboratory Chemicals' => 'chemicals',
                            'Diagnostic Test Kits' => 'package',
                            'Gas Analyzers' => 'gear',
                            'Spectrometers' => 'computer',
                            'Refractometers' => 'search',
                            'Digital Polarimeters' => 'lightbulb',
                            'Microtomes' => 'scissors'
                        ];
                        $iconName = isset($icons[$category['name']]) ? $icons[$category['name']] : 'gear';
                        echo icon($iconName, 'card-icon-svg');
                        ?>
                    </div>
                    <h3 class="card-title"><?php echo htmlspecialchars($category['name']); ?></h3>
                    <p class="card-description"><?php echo htmlspecialchars($category['description']); ?></p>
                    
                    <?php if ($sampleProduct): ?>
                        <ul class="product-features">
                            <?php foreach (array_slice($sampleProduct['features'], 0, 3) as $feature): ?>
                                <li><?php echo htmlspecialchars($feature); ?></li>
                            <?php endforeach; ?>
                        </ul>
                    <?php endif; ?>
                    
                    <a href="services.php?category=<?php echo urlencode($category['name']); ?>" class="btn btn-outline">
                        View <?php echo htmlspecialchars($category['name']); ?>
                    </a>
                </div>
            <?php endforeach; ?>
            
            <!-- View All Products Card -->
            <div class="card" style="background: linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, rgba(132, 204, 22, 0.1) 100%); border: 2px solid rgba(14, 165, 233, 0.2);">
                <div class="card-icon"><?php echo icon('folder', 'card-icon-svg'); ?></div>
                <h3 class="card-title">View All Products</h3>
                <p class="card-description">Browse our complete catalog of laboratory equipment and chemicals</p>
                <ul class="product-features">
                    <li>500+ Products</li>
                    <li>Detailed Specifications</li>
                    <li>Instant Quotes</li>
                </ul>
                <a href="services.php" class="btn btn-primary">
                    Browse Catalog
                </a>
            </div>
        </div>
    </div>
</section>

<!-- Featured Products Section -->
<section class="section">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Featured Laboratory Equipment</h2>
            <p class="section-description">
                Professional-grade instruments trusted by laboratories worldwide
            </p>
        </div>
        
        <div class="product-grid">
            <?php foreach ($featuredProducts as $product): ?>
                <div class="product-card">
                    <img src="<?php echo htmlspecialchars($product['image']); ?>" 
                         alt="<?php echo htmlspecialchars($product['name']); ?>" 
                         class="product-image">
                    <div class="product-content">
                        <span class="product-category"><?php echo htmlspecialchars($product['category']); ?></span>
                        <h3 class="product-title"><?php echo htmlspecialchars($product['name']); ?></h3>
                        <p class="product-description"><?php echo htmlspecialchars($product['description']); ?></p>
                        
                        <div class="product-footer">
                            <span class="product-price"><?php echo htmlspecialchars($product['price']); ?></span>
                            <button class="specs-btn" onclick="alert('Specifications: <?php echo htmlspecialchars(implode(', ', $product['specifications'])); ?>')">
                                View Specs
                            </button>
                        </div>
                        
                        <button class="btn btn-primary" style="width: 100%;" 
                                onclick="orderProduct('<?php echo htmlspecialchars($product['name']); ?>', '<?php echo $product['id']; ?>')">
                            <?php echo icon('whatsapp'); ?> Order Now
                        </button>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- About Section -->
<section class="section bg-light">
    <div class="container">
        <div class="d-grid" style="grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center;">
            <div>
                <h2>About Laxmi Biomedicals</h2>
                <p>
                    With over 15 years of experience in the laboratory equipment industry, Laxmi Biomedicals has 
                    established itself as a trusted wholesaler and distributor of high-quality laboratory instruments and chemicals.
                </p>
                <p>
                    We specialize in providing comprehensive solutions for research laboratories, diagnostic centers, 
                    educational institutions, and industrial facilities across the region.
                </p>
                
                <ul class="product-features" style="margin-bottom: 2rem;">
                    <li>Quality assured products from trusted manufacturers</li>
                    <li>Fast delivery within 24-48 hours</li>
                    <li>Competitive wholesale pricing</li>
                    <li>Expert technical support and consultation</li>
                </ul>
                
                <a href="about.php" class="btn btn-outline">
                    Learn more about our company →
                </a>
            </div>
            
            <div>
                <img src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=500" 
                     alt="Laboratory technician working with professional equipment" 
                     style="width: 100%; border-radius: 1rem; box-shadow: var(--shadow-xl);">
                     
                <div class="card" style="margin-top: -3rem; margin-left: 2rem; margin-right: 2rem; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px);">
                    <h4 style="margin-bottom: 0.5rem;">Trusted by 1000+ Laboratories</h4>
                    <p style="margin: 0; font-size: 0.9rem; color: var(--text-muted);">
                        Serving research facilities, hospitals, and educational institutions nationwide
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Contact Section -->
<section class="section">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Get in Touch</h2>
            <p class="section-description">
                Ready to place an order or need more information? Contact us today for fast quotes and expert assistance.
            </p>
        </div>
        
        <div class="d-grid" style="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem;">
            <div class="card text-center">
                <div class="card-icon"><?php echo icon('phone', 'card-icon-svg'); ?></div>
                <h3>Phone</h3>
                <p><?php echo COMPANY_PHONE; ?></p>
                <p style="font-size: 0.9rem; color: var(--text-muted); margin: 0;">Call for immediate assistance</p>
            </div>
            
            <div class="card text-center">
                <div class="card-icon"><?php echo icon('whatsapp', 'card-icon-svg'); ?></div>
                <h3>WhatsApp</h3>
                <a href="https://wa.me/<?php echo COMPANY_WHATSAPP; ?>" target="_blank" class="text-secondary">
                    <?php echo COMPANY_PHONE; ?>
                </a>
                <p style="font-size: 0.9rem; color: var(--text-muted); margin: 0;">Quick orders and quotes</p>
            </div>
            
            <div class="card text-center">
                <div class="card-icon"><?php echo icon('email', 'card-icon-svg'); ?></div>
                <h3>Email</h3>
                <a href="mailto:<?php echo COMPANY_EMAIL; ?>" class="text-primary">
                    <?php echo COMPANY_EMAIL; ?>
                </a>
                <p style="font-size: 0.9rem; color: var(--text-muted); margin: 0;">Send detailed requirements</p>
            </div>
        </div>
        
        <div class="text-center" style="margin-top: 3rem;">
            <a href="contact.php" class="btn btn-secondary">
                Contact Us Today →
            </a>
        </div>
    </div>
</section>

<?php require_once 'includes/footer.php'; ?>