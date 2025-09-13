<?php
$page_title = "Contact Us - Laxmi Biomedicals | Get Quote & Support";
$meta_description = "Contact Laxmi Biomedicals for laboratory equipment quotes, technical support, and product information. Phone: " . COMPANY_PHONE . ", Email: " . COMPANY_EMAIL . ". Fast response guaranteed.";

// Handle form submission
$formSubmitted = false;
$formErrors = [];
$formSuccess = false;
$whatsappRedirect = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $formSubmitted = true;
    
    // Collect and sanitize form data
    $formData = [
        'name' => sanitizeInput($_POST['name'] ?? ''),
        'email' => sanitizeInput($_POST['email'] ?? ''),
        'phone' => sanitizeInput($_POST['phone'] ?? ''),
        'product_interest' => sanitizeInput($_POST['product_interest'] ?? ''),
        'message' => sanitizeInput($_POST['message'] ?? '')
    ];
    
    // Validate form data
    if (empty($formData['name'])) {
        $formErrors['name'] = 'Name is required';
    } elseif (strlen($formData['name']) < 2) {
        $formErrors['name'] = 'Name must be at least 2 characters';
    }
    
    if (empty($formData['email'])) {
        $formErrors['email'] = 'Email is required';
    } elseif (!isValidEmail($formData['email'])) {
        $formErrors['email'] = 'Please enter a valid email address';
    }
    
    if (empty($formData['phone'])) {
        $formErrors['phone'] = 'Phone number is required';
    } elseif (!isValidPhone($formData['phone'])) {
        $formErrors['phone'] = 'Please enter a valid phone number';
    }
    
    if (empty($formData['message'])) {
        $formErrors['message'] = 'Message is required';
    } elseif (strlen($formData['message']) < 10) {
        $formErrors['message'] = 'Message must be at least 10 characters';
    }
    
    // If no errors, process the form
    if (empty($formErrors)) {
        // Save to file (simple storage for demo)
        $contactsFile = __DIR__ . '/data/contacts.json';
        if (!file_exists(dirname($contactsFile))) {
            mkdir(dirname($contactsFile), 0755, true);
        }
        
        $contacts = [];
        if (file_exists($contactsFile)) {
            $contacts = json_decode(file_get_contents($contactsFile), true) ?: [];
        }
        
        $newContact = array_merge($formData, [
            'id' => uniqid(),
            'submitted_at' => date('Y-m-d H:i:s'),
            'ip_address' => $_SERVER['REMOTE_ADDR'] ?? 'unknown'
        ]);
        
        $contacts[] = $newContact;
        file_put_contents($contactsFile, json_encode($contacts, JSON_PRETTY_PRINT));
        
        // Send email notification (if SMTP is configured)
        $emailSubject = "New Contact Form Submission - " . SITE_NAME;
        $emailMessage = "
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> {$formData['name']}</p>
        <p><strong>Email:</strong> {$formData['email']}</p>
        <p><strong>Phone:</strong> {$formData['phone']}</p>
        <p><strong>Product Interest:</strong> {$formData['product_interest']}</p>
        <p><strong>Message:</strong></p>
        <p>{$formData['message']}</p>
        <p><strong>Submitted at:</strong> " . date('Y-m-d H:i:s') . "</p>
        ";
        
        // Attempt to send email (will only work if SMTP is properly configured)
        @sendEmail(COMPANY_EMAIL, $emailSubject, $emailMessage);
        
        // Create WhatsApp message and redirect URL
        $whatsappMessage = createContactFormMessage($formData);
        $whatsappRedirect = createWhatsAppUrl($whatsappMessage);
        
        $formSuccess = true;
    }
}

require_once 'includes/header.php';
?>

<?php if ($formSuccess): ?>
    <!-- Success Message Page -->
    <section class="section" style="min-height: 80vh; display: flex; align-items: center;">
        <div class="container text-center">
            <div style="width: 4rem; height: 4rem; background: var(--secondary-color); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 2rem; color: white; font-size: 2rem;">
                ✓
            </div>
            <h1>Message Sent Successfully!</h1>
            <p style="font-size: 1.25rem; color: var(--text-muted); margin-bottom: 2rem;">
                Thank you for contacting us. We're redirecting you to WhatsApp to continue the conversation.
            </p>
            <a href="<?php echo htmlspecialchars($whatsappRedirect); ?>" 
               target="_blank" 
               class="btn btn-secondary">
                &#128241; Continue on WhatsApp
            </a>
            <p style="margin-top: 2rem;">
                <a href="contact.php" style="color: var(--primary-color);">← Send another message</a>
            </p>
        </div>
    </section>
    
    <script>
        // Auto-redirect to WhatsApp after 3 seconds
        setTimeout(function() {
            window.open('<?php echo htmlspecialchars($whatsappRedirect); ?>', '_blank');
        }, 3000);
    </script>

<?php else: ?>
    <!-- Contact Form Page -->
    
    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <div class="section-header">
                <div class="text-center mb-4">
                    <span class="product-category">&#128172; Get Expert Assistance</span>
                </div>
                
                <h1>Contact <span class="text-primary">Our Team</span></h1>
                
                <p class="section-description">
                    Ready to place an order or need expert advice? Our team is here to help you find the perfect 
                    laboratory solutions for your needs.
                </p>
            </div>
        </div>
    </section>

    <!-- Contact Form & Info Section -->
    <section class="section">
        <div class="container">
            <div class="d-grid" style="grid-template-columns: 1fr 1fr; gap: 3rem;">
                
                <!-- Contact Form -->
                <div>
                    <div class="card">
                        <h2 style="margin-bottom: 2rem;">Send us a Message</h2>
                        
                        <form method="POST" id="contact-form">
                            <div class="form-group">
                                <label for="name" class="form-label">Full Name *</label>
                                <input type="text" 
                                       id="name" 
                                       name="name" 
                                       class="form-control <?php echo isset($formErrors['name']) ? 'error' : ''; ?>"
                                       value="<?php echo htmlspecialchars($formData['name'] ?? ''); ?>"
                                       placeholder="Enter your full name">
                                <?php if (isset($formErrors['name'])): ?>
                                    <div class="error-message"><?php echo $formErrors['name']; ?></div>
                                <?php endif; ?>
                            </div>
                            
                            <div class="form-group">
                                <label for="email" class="form-label">Email Address *</label>
                                <input type="email" 
                                       id="email" 
                                       name="email" 
                                       class="form-control <?php echo isset($formErrors['email']) ? 'error' : ''; ?>"
                                       value="<?php echo htmlspecialchars($formData['email'] ?? ''); ?>"
                                       placeholder="Enter your email address">
                                <?php if (isset($formErrors['email'])): ?>
                                    <div class="error-message"><?php echo $formErrors['email']; ?></div>
                                <?php endif; ?>
                            </div>
                            
                            <div class="form-group">
                                <label for="phone" class="form-label">Phone Number *</label>
                                <input type="tel" 
                                       id="phone" 
                                       name="phone" 
                                       class="form-control <?php echo isset($formErrors['phone']) ? 'error' : ''; ?>"
                                       value="<?php echo htmlspecialchars($formData['phone'] ?? ''); ?>"
                                       placeholder="Enter your phone number">
                                <?php if (isset($formErrors['phone'])): ?>
                                    <div class="error-message"><?php echo $formErrors['phone']; ?></div>
                                <?php endif; ?>
                            </div>
                            
                            <div class="form-group">
                                <label for="product_interest" class="form-label">Product Interest</label>
                                <select id="product_interest" name="product_interest" class="form-control">
                                    <option value="">Select a product category</option>
                                    <option value="Laboratory Chemicals" <?php echo ($formData['product_interest'] ?? '') === 'Laboratory Chemicals' ? 'selected' : ''; ?>>Laboratory Chemicals</option>
                                    <option value="Diagnostic Test Kits" <?php echo ($formData['product_interest'] ?? '') === 'Diagnostic Test Kits' ? 'selected' : ''; ?>>Diagnostic Test Kits</option>
                                    <option value="Gas Analyzers" <?php echo ($formData['product_interest'] ?? '') === 'Gas Analyzers' ? 'selected' : ''; ?>>Gas Analyzers</option>
                                    <option value="Spectrometers" <?php echo ($formData['product_interest'] ?? '') === 'Spectrometers' ? 'selected' : ''; ?>>Spectrometers</option>
                                    <option value="Refractometers" <?php echo ($formData['product_interest'] ?? '') === 'Refractometers' ? 'selected' : ''; ?>>Refractometers</option>
                                    <option value="Digital Polarimeters" <?php echo ($formData['product_interest'] ?? '') === 'Digital Polarimeters' ? 'selected' : ''; ?>>Digital Polarimeters</option>
                                    <option value="Microtomes" <?php echo ($formData['product_interest'] ?? '') === 'Microtomes' ? 'selected' : ''; ?>>Microtomes</option>
                                    <option value="Other" <?php echo ($formData['product_interest'] ?? '') === 'Other' ? 'selected' : ''; ?>>Other</option>
                                </select>
                            </div>
                            
                            <div class="form-group">
                                <label for="message" class="form-label">Message *</label>
                                <textarea id="message" 
                                          name="message" 
                                          rows="4"
                                          class="form-control <?php echo isset($formErrors['message']) ? 'error' : ''; ?>"
                                          placeholder="Tell us about your requirements, quantities, or any specific questions..."><?php echo htmlspecialchars($formData['message'] ?? ''); ?></textarea>
                                <?php if (isset($formErrors['message'])): ?>
                                    <div class="error-message"><?php echo $formErrors['message']; ?></div>
                                <?php endif; ?>
                            </div>
                            
                            <button type="submit" class="btn btn-primary" style="width: 100%; padding: 1rem;">
                                &#128231; Send Message & Continue on WhatsApp
                            </button>
                        </form>
                    </div>
                </div>
                
                <!-- Contact Information -->
                <div>
                    
                    <!-- Contact Details -->
                    <div class="card" style="margin-bottom: 2rem;">
                        <h3 style="margin-bottom: 2rem;">Contact Information</h3>
                        
                        <div style="margin-bottom: 1.5rem;">
                            <div style="display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1.5rem;">
                                <div style="width: 3rem; height: 3rem; background: rgba(14, 165, 233, 0.1); border-radius: 0.75rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                                    <span style="color: var(--primary-color); font-size: 1.5rem;">&#128222;</span>
                                </div>
                                <div>
                                    <h4>Phone</h4>
                                    <p style="margin: 0; color: var(--text-muted);"><?php echo COMPANY_PHONE; ?></p>
                                    <p style="margin: 0; font-size: 0.9rem; color: var(--text-muted);">Call for immediate assistance</p>
                                </div>
                            </div>
                            
                            <div style="display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1.5rem;">
                                <div style="width: 3rem; height: 3rem; background: rgba(132, 204, 22, 0.1); border-radius: 0.75rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                                    <span style="color: var(--secondary-color); font-size: 1.5rem;">&#128241;</span>
                                </div>
                                <div>
                                    <h4>WhatsApp</h4>
                                    <a href="https://wa.me/<?php echo COMPANY_WHATSAPP; ?>" 
                                       target="_blank" 
                                       style="color: var(--secondary-color);">
                                        <?php echo COMPANY_PHONE; ?>
                                    </a>
                                    <p style="margin: 0; font-size: 0.9rem; color: var(--text-muted);">Quick orders and quotes</p>
                                </div>
                            </div>
                            
                            <div style="display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1.5rem;">
                                <div style="width: 3rem; height: 3rem; background: rgba(14, 165, 233, 0.1); border-radius: 0.75rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                                    <span style="color: var(--primary-color); font-size: 1.5rem;">&#128231;</span>
                                </div>
                                <div>
                                    <h4>Email</h4>
                                    <a href="mailto:<?php echo COMPANY_EMAIL; ?>" 
                                       style="color: var(--primary-color);">
                                        <?php echo COMPANY_EMAIL; ?>
                                    </a>
                                    <p style="margin: 0; font-size: 0.9rem; color: var(--text-muted);">Send detailed requirements</p>
                                </div>
                            </div>
                            
                            <div style="display: flex; align-items: flex-start; gap: 1rem;">
                                <div style="width: 3rem; height: 3rem; background: rgba(132, 204, 22, 0.1); border-radius: 0.75rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                                    <span style="color: var(--secondary-color); font-size: 1.5rem;">&#128205;</span>
                                </div>
                                <div>
                                    <h4>Address</h4>
                                    <p style="margin: 0; color: var(--text-muted);">
                                        <?php echo COMPANY_ADDRESS; ?>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Business Hours -->
                    <div class="card" style="margin-bottom: 2rem;">
                        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                            <span style="color: var(--primary-color); font-size: 1.5rem;">&#128336;</span>
                            <h3 style="margin: 0;">Business Hours</h3>
                        </div>
                        <div style="margin-bottom: 1rem;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                                <span style="color: var(--text-muted);">Monday - Friday</span>
                                <span style="font-weight: 500;">9:00 AM - 6:00 PM</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                                <span style="color: var(--text-muted);">Saturday</span>
                                <span style="font-weight: 500;">9:00 AM - 2:00 PM</span>
                            </div>
                            <div style="display: flex; justify-content: space-between;">
                                <span style="color: var(--text-muted);">Sunday</span>
                                <span style="font-weight: 500;">Closed</span>
                            </div>
                        </div>
                        <p style="margin: 0; font-size: 0.9rem; color: var(--text-muted);">
                            Emergency orders can be placed via WhatsApp 24/7
                        </p>
                    </div>
                    
                    <!-- Quick Order CTA -->
                    <div class="card" style="background: linear-gradient(135deg, rgba(132, 204, 22, 0.1) 0%, rgba(14, 165, 233, 0.1) 100%); border: 2px solid rgba(132, 204, 22, 0.2);">
                        <h3>Need an Immediate Quote?</h3>
                        <p style="color: var(--text-muted); margin-bottom: 1.5rem;">
                            Get instant pricing and availability information via WhatsApp
                        </p>
                        <?php
                        $quickMessage = "Hello Laxmi Biomedicals, I need an immediate quote for laboratory equipment. Please contact me as soon as possible.";
                        $quickUrl = createWhatsAppUrl($quickMessage);
                        ?>
                        <a href="<?php echo $quickUrl; ?>" 
                           target="_blank" 
                           class="btn btn-secondary" 
                           style="width: 100%;">
                            &#128241; Get Instant Quote
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Map Section -->
    <section class="section bg-light">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Visit Our Location</h2>
                <p class="section-description">
                    Located in the heart of the industrial area for easy access and fast dispatch
                </p>
            </div>
            
            <div class="card">
                <div style="background: var(--hover-color); border-radius: 0.75rem; height: 400px; display: flex; align-items: center; justify-content: center;">
                    <div class="text-center">
                        <div style="font-size: 3rem; margin-bottom: 1rem;">&#128205;</div>
                        <h3>Interactive Map</h3>
                        <p style="color: var(--text-muted); margin: 0;">
                            <?php echo COMPANY_ADDRESS; ?>
                        </p>
                        <p style="margin-top: 1rem; font-size: 0.9rem; color: var(--text-muted);">
                            <em>Google Maps integration available with API key configuration</em>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
<?php endif; ?>

<script>
// Form validation on submit
document.getElementById('contact-form')?.addEventListener('submit', function(e) {
    if (!validateContactForm()) {
        e.preventDefault();
    }
});
</script>

<?php require_once 'includes/footer.php'; ?>