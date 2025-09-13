<?php
$page_title = "About Us - Laxmi Biomedicals | Laboratory Equipment Specialists";
$meta_description = "Learn about Laxmi Biomedicals' 15+ years of experience in providing high-quality laboratory equipment, chemicals, and diagnostic solutions. Trusted by 1000+ customers nationwide.";
require_once 'includes/header.php';
?>

<!-- Hero Section -->
<section class="hero">
    <div class="container">
        <div class="section-header">
            <div class="text-center mb-4">
                <span class="product-category"><?php echo icon('trophy'); ?> 15+ Years of Excellence</span>
            </div>
            
            <h1>About <span class="text-primary">Laxmi Biomedicals</span></h1>
            
            <p class="section-description">
                Your trusted partner in laboratory excellence, providing high-quality equipment and chemicals 
                to advance scientific research and diagnostics.
            </p>
            
            <div class="stats">
                <div class="stat">
                    <div class="stat-number">1000+</div>
                    <div class="stat-label">Satisfied Customers</div>
                </div>
                <div class="stat">
                    <div class="stat-number">15+</div>
                    <div class="stat-label">Years Experience</div>
                </div>
                <div class="stat">
                    <div class="stat-number">500+</div>
                    <div class="stat-label">Products Available</div>
                </div>
                <div class="stat">
                    <div class="stat-number">24hr</div>
                    <div class="stat-label">Fast Delivery</div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Company Story Section -->
<section class="section">
    <div class="container">
        <div class="d-grid" style="grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center;">
            <div>
                <h2>Our Story</h2>
                <p>
                    Founded with a vision to bridge the gap between cutting-edge laboratory technology and accessibility, 
                    Laxmi Biomedicals has been at the forefront of the laboratory equipment industry for over 15 years.
                </p>
                <p>
                    What started as a small distribution business has grown into a comprehensive laboratory solutions provider, 
                    serving research institutions, hospitals, diagnostic centers, and educational facilities across the nation.
                </p>
                <p>
                    Our commitment to quality, innovation, and customer satisfaction has made us the preferred choice for 
                    laboratory professionals who demand excellence in their scientific endeavors.
                </p>
                
                <div style="margin-top: 2rem;">
                    <div style="display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1rem;">
                        <?php echo icon('check', 'text-secondary'); ?>
                        <div>
                            <h4 style="margin-bottom: 0.5rem;">Quality Assurance</h4>
                            <p style="margin: 0; color: var(--text-muted);">Every product undergoes rigorous quality checks before delivery</p>
                        </div>
                    </div>
                    <div style="display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1rem;">
                        <?php echo icon('check', 'text-secondary'); ?>
                        <div>
                            <h4 style="margin-bottom: 0.5rem;">Expert Support</h4>
                            <p style="margin: 0; color: var(--text-muted);">Technical consultation and after-sales support from experienced professionals</p>
                        </div>
                    </div>
                    <div style="display: flex; align-items: flex-start; gap: 1rem;">
                        <?php echo icon('check', 'text-secondary'); ?>
                        <div>
                            <h4 style="margin-bottom: 0.5rem;">Nationwide Network</h4>
                            <p style="margin: 0; color: var(--text-muted);">Extensive distribution network ensuring timely delivery across India</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div>
                <img src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600" 
                     alt="Laboratory professionals working with advanced equipment" 
                     style="width: 100%; border-radius: 1rem; box-shadow: var(--shadow-xl);">
            </div>
        </div>
    </div>
</section>

<!-- Mission & Vision Section -->
<section class="section bg-light">
    <div class="container">
        <div class="d-grid" style="grid-template-columns: 1fr 1fr; gap: 2rem;">
            <div class="card">
                <div class="card-icon"><?php echo icon('lightbulb', 'card-icon-svg'); ?></div>
                <h3>Our Mission</h3>
                <p>
                    To empower scientific research and healthcare diagnostics by providing reliable access to high-quality 
                    laboratory equipment and chemicals. We strive to be the bridge between innovation and implementation, 
                    ensuring that every laboratory has the tools they need to make breakthrough discoveries and provide 
                    accurate diagnoses.
                </p>
            </div>
            
            <div class="card">
                <div class="card-icon"><?php echo icon('star', 'card-icon-svg'); ?></div>
                <h3>Our Vision</h3>
                <p>
                    To become the most trusted and comprehensive laboratory solutions provider in India, known for our 
                    commitment to quality, innovation, and customer success. We envision a future where every scientific 
                    institution has seamless access to world-class laboratory equipment and expert support.
                </p>
            </div>
        </div>
    </div>
</section>

<!-- Core Values Section -->
<section class="section">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Our Core Values</h2>
            <p class="section-description">
                The principles that guide everything we do at Laxmi Biomedicals
            </p>
        </div>
        
        <div class="product-grid">
            <div class="card text-center">
                <div class="card-icon"><?php echo icon('lightbulb', 'card-icon-svg'); ?></div>
                <h3>Precision</h3>
                <p>We provide precise, high-quality laboratory equipment that meets the exact needs of scientific research and diagnostics.</p>
            </div>
            
            <div class="card text-center">
                <div class="card-icon"><?php echo icon('heart', 'card-icon-svg'); ?></div>
                <h3>Care</h3>
                <p>We care about our customers' success and provide personalized support to ensure the best outcomes for their projects.</p>
            </div>
            
            <div class="card text-center">
                <div class="card-icon"><?php echo icon('bolt', 'card-icon-svg'); ?></div>
                <h3>Innovation</h3>
                <p>We stay at the forefront of laboratory technology, offering the latest innovations in scientific instrumentation.</p>
            </div>
            
            <div class="card text-center">
                <div class="card-icon">&#128737;</div>
                <h3>Reliability</h3>
                <p>Our customers trust us for consistent quality, timely delivery, and dependable service across all interactions.</p>
            </div>
        </div>
    </div>
</section>

<!-- Why Choose Us Section -->
<section class="section bg-light">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Why Choose Laxmi Biomedicals?</h2>
            <p class="section-description">
                Experience the difference that comes with working with laboratory equipment specialists
            </p>
        </div>
        
        <div class="d-grid" style="grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center;">
            <div>
                <div style="margin-bottom: 2rem;">
                    <div style="display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1.5rem;">
                        <div style="width: 3rem; height: 3rem; background: rgba(14, 165, 233, 0.1); border-radius: 0.75rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                            <span style="color: var(--primary-color); font-size: 1.5rem;">&#128336;</span>
                        </div>
                        <div>
                            <h4>Fast Delivery</h4>
                            <p style="color: var(--text-muted); margin: 0;">
                                Same-day dispatch for most products with delivery within 24-48 hours across major cities. 
                                Emergency orders handled with priority shipping.
                            </p>
                        </div>
                    </div>
                    
                    <div style="display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1.5rem;">
                        <div style="width: 3rem; height: 3rem; background: rgba(132, 204, 22, 0.1); border-radius: 0.75rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                            <span style="color: var(--secondary-color); font-size: 1.5rem;">&#128737;</span>
                        </div>
                        <div>
                            <h4>Quality Guaranteed</h4>
                            <p style="color: var(--text-muted); margin: 0;">
                                All products come with manufacturer warranties and our quality assurance. We stand behind 
                                every product we sell with comprehensive support.
                            </p>
                        </div>
                    </div>
                    
                    <div style="display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1.5rem;">
                        <div style="width: 3rem; height: 3rem; background: rgba(14, 165, 233, 0.1); border-radius: 0.75rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                            <span style="color: var(--primary-color); font-size: 1.5rem;">&#128101;</span>
                        </div>
                        <div>
                            <h4>Expert Team</h4>
                            <p style="color: var(--text-muted); margin: 0;">
                                Our team consists of experienced professionals with deep knowledge of laboratory requirements 
                                and technical specifications.
                            </p>
                        </div>
                    </div>
                    
                    <div style="display: flex; align-items: flex-start; gap: 1rem;">
                        <div style="width: 3rem; height: 3rem; background: rgba(132, 204, 22, 0.1); border-radius: 0.75rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                            <span style="color: var(--secondary-color); font-size: 1.5rem;">🌍</span>
                        </div>
                        <div>
                            <h4>Nationwide Reach</h4>
                            <p style="color: var(--text-muted); margin: 0;">
                                Serving laboratories across India with established distribution networks and local support 
                                in major metropolitan areas.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div>
                <img src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=500" 
                     alt="Modern laboratory with advanced equipment" 
                     style="width: 100%; border-radius: 1rem; box-shadow: var(--shadow-xl);">
            </div>
        </div>
    </div>
</section>

<!-- Contact CTA Section -->
<section class="section">
    <div class="container text-center">
        <h2>Ready to Partner with Us?</h2>
        <p style="font-size: 1.25rem; color: var(--text-muted); margin-bottom: 2rem;">
            Join thousands of satisfied customers who trust Laxmi Biomedicals for their laboratory equipment needs.
        </p>
        
        <div class="cta-buttons">
            <?php
            $contactMessage = "Hello Laxmi Biomedicals, I would like to know more about your company and services. Please contact me.";
            $contactUrl = createWhatsAppUrl($contactMessage);
            ?>
            <a href="<?php echo $contactUrl; ?>" target="_blank" class="btn btn-secondary">
                &#128241; Contact on WhatsApp
            </a>
            <a href="contact.php" class="btn btn-outline">
                Get Detailed Quote
            </a>
        </div>
    </div>
</section>

<?php require_once 'includes/footer.php'; ?>