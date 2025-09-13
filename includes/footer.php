    </main>
    
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <div class="logo">
                        <img src="assets/images/logo.png" alt="<?php echo SITE_NAME; ?>" style="height: 50px; width: auto;">
                        <div class="logo-text" style="margin-left: 0.5rem;">
                            <h4><?php echo SITE_NAME; ?></h4>
                            <p>Laboratory Equipment Specialists</p>
                        </div>
                    </div>
                    <p>Trusted supplier of high-quality laboratory equipment and chemicals with fast, reliable delivery.</p>
                    <div class="social-links">
                        <a href="#" class="social-link" title="Facebook"><?php echo icon('facebook'); ?></a>
                        <a href="#" class="social-link" title="LinkedIn"><?php echo icon('linkedin'); ?></a>
                        <a href="https://wa.me/<?php echo COMPANY_WHATSAPP; ?>" class="social-link" title="WhatsApp" target="_blank"><?php echo icon('whatsapp'); ?></a>
                    </div>
                </div>
                
                <div class="footer-section">
                    <h4>Products</h4>
                    <p><a href="services.php?category=Laboratory+Chemicals">Laboratory Chemicals</a></p>
                    <p><a href="services.php?category=Diagnostic+Test+Kits">Diagnostic Test Kits</a></p>
                    <p><a href="services.php?category=Gas+Analyzers">Gas Analyzers</a></p>
                    <p><a href="services.php?category=Spectrometers">Spectrometers</a></p>
                    <p><a href="services.php?category=Refractometers">Refractometers</a></p>
                </div>
                
                <div class="footer-section">
                    <h4>Quick Links</h4>
                    <p><a href="index.php">Home</a></p>
                    <p><a href="about.php">About Us</a></p>
                    <p><a href="services.php">Products</a></p>
                    <p><a href="contact.php">Contact</a></p>
                </div>
                
                <div class="footer-section">
                    <h4>Contact Info</h4>
                    <p><strong><?php echo icon('phone'); ?></strong> <?php echo COMPANY_PHONE; ?></p>
                    <p><strong><?php echo icon('email'); ?></strong> <?php echo COMPANY_EMAIL; ?></p>
                    <p><strong><?php echo icon('location'); ?></strong> <?php echo COMPANY_ADDRESS; ?></p>
                    <p><strong><?php echo icon('clock'); ?></strong> Mon-Fri: 9AM-6PM<br>Saturday: 9AM-2PM</p>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; <?php echo date('Y'); ?> <?php echo SITE_NAME; ?>. All rights reserved.</p>
            </div>
        </div>
    </footer>
    
    <!-- JavaScript -->
    <script src="assets/js/main.js"></script>
</body>
</html>