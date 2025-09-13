/**
 * Main JavaScript for Laxmi Biomedicals website
 */

// Mobile menu functionality
function toggleMobileMenu() {
    const nav = document.querySelector('.nav');
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    
    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
        mobileBtn.innerHTML = '☰';
    } else {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.top = '100%';
        nav.style.left = '0';
        nav.style.right = '0';
        nav.style.background = 'white';
        nav.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        nav.style.padding = '1rem';
        nav.style.gap = '0.5rem';
        mobileBtn.innerHTML = '✕';
    }
}

// WhatsApp helper functions
function createWhatsAppUrl(message) {
    const phone = '919876543210'; // COMPANY_WHATSAPP from config
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phone}?text=${encodedMessage}`;
}

function orderProduct(productName, productId) {
    const message = `Hello Laxmi Biomedicals, I want to order: ${productName}. 

Name: [Your Name]
Quantity: [x]
City: [Your City]
Phone: [Your Phone]

Please contact me for pricing and availability.`;
    
    const url = createWhatsAppUrl(message);
    window.open(url, '_blank');
}

function quickInquiry() {
    const message = "Hello Laxmi Biomedicals, I need information about your laboratory equipment and products. Please send me your catalog and pricing details.";
    const url = createWhatsAppUrl(message);
    window.open(url, '_blank');
}

// Product filtering functionality
function filterProducts(category) {
    const products = document.querySelectorAll('.product-card');
    const buttons = document.querySelectorAll('.filter-btn');
    
    // Update active button
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Filter products
    products.forEach(product => {
        const productCategory = product.dataset.category;
        if (category === 'all' || productCategory === category) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
    
    // Update URL without page reload
    const url = new URL(window.location);
    if (category === 'all') {
        url.searchParams.delete('category');
    } else {
        url.searchParams.set('category', category);
    }
    history.pushState(null, '', url);
}

// Search functionality
function searchProducts() {
    const searchTerm = document.getElementById('product-search').value.toLowerCase();
    const products = document.querySelectorAll('.product-card');
    let visibleCount = 0;
    
    products.forEach(product => {
        const name = product.querySelector('.product-title').textContent.toLowerCase();
        const description = product.querySelector('.product-description').textContent.toLowerCase();
        const category = product.dataset.category.toLowerCase();
        
        if (name.includes(searchTerm) || description.includes(searchTerm) || category.includes(searchTerm)) {
            product.style.display = 'block';
            visibleCount++;
        } else {
            product.style.display = 'none';
        }
    });
    
    // Show/hide no results message
    const noResults = document.getElementById('no-results');
    if (noResults) {
        noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    }
}

// Form validation
function validateContactForm() {
    let isValid = true;
    const form = document.getElementById('contact-form');
    const fields = ['name', 'email', 'phone', 'message'];
    
    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(error => error.remove());
    document.querySelectorAll('.form-control').forEach(field => field.classList.remove('error'));
    
    fields.forEach(fieldName => {
        const field = form.querySelector(`[name="${fieldName}"]`);
        const value = field.value.trim();
        
        if (!value) {
            showFieldError(field, `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`);
            isValid = false;
        } else {
            // Specific validations
            if (fieldName === 'email' && !isValidEmail(value)) {
                showFieldError(field, 'Please enter a valid email address');
                isValid = false;
            }
            if (fieldName === 'phone' && !isValidPhone(value)) {
                showFieldError(field, 'Please enter a valid phone number');
                isValid = false;
            }
            if (fieldName === 'message' && value.length < 10) {
                showFieldError(field, 'Message must be at least 10 characters');
                isValid = false;
            }
        }
    });
    
    return isValid;
}

function showFieldError(field, message) {
    field.classList.add('error');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    field.parentNode.appendChild(errorDiv);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
    return phoneRegex.test(phone);
}

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Handle smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Initialize search if on services page
    const searchInput = document.getElementById('product-search');
    if (searchInput) {
        searchInput.addEventListener('input', searchProducts);
    }
    
    // Set active filter based on URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    if (category) {
        const button = document.querySelector(`[onclick="filterProducts('${category}')"]`);
        if (button) {
            button.click();
        }
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const nav = document.querySelector('.nav');
        const mobileBtn = document.querySelector('.mobile-menu-btn');
        const header = document.querySelector('.header');
        
        if (!header.contains(event.target) && nav.style.display === 'flex') {
            nav.style.display = 'none';
            mobileBtn.innerHTML = '☰';
        }
    });
});

// Loading animation for form submission
function showLoading(button) {
    const originalText = button.innerHTML;
    button.innerHTML = '<span class="loading">⌛</span> Sending...';
    button.disabled = true;
    
    return function() {
        button.innerHTML = originalText;
        button.disabled = false;
    };
}

// Success/Error message display
function showMessage(message, type = 'success') {
    const messageDiv = document.createElement('div');
    messageDiv.className = `${type}-message`;
    messageDiv.innerHTML = message;
    
    // Insert at top of main content
    const main = document.querySelector('.main-content');
    main.insertBefore(messageDiv, main.firstChild);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

// Copy text to clipboard (for contact info)
function copyToClipboard(text, element) {
    navigator.clipboard.writeText(text).then(() => {
        const originalText = element.textContent;
        element.textContent = 'Copied!';
        setTimeout(() => {
            element.textContent = originalText;
        }, 2000);
    });
}