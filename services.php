<?php
$page_title = "Laboratory Equipment & Products - Laxmi Biomedicals";
$meta_description = "Browse our comprehensive range of laboratory equipment including spectrometers, refractometers, gas analyzers, diagnostic test kits, microtomes, and laboratory chemicals. Quality assured with fast delivery.";
require_once 'includes/header.php';

// Load products and categories
$products = getProducts();
$categories = getCategories();

// Get selected category from URL
$selectedCategory = isset($_GET['category']) ? sanitizeInput($_GET['category']) : 'all';
$searchTerm = isset($_GET['search']) ? sanitizeInput($_GET['search']) : '';

// Filter products
$filteredProducts = $products;

if ($selectedCategory !== 'all') {
    $filteredProducts = array_filter($filteredProducts, function($product) use ($selectedCategory) {
        return strtolower($product['category']) === strtolower($selectedCategory);
    });
}

if (!empty($searchTerm)) {
    $filteredProducts = array_filter($filteredProducts, function($product) use ($searchTerm) {
        $searchLower = strtolower($searchTerm);
        return strpos(strtolower($product['name']), $searchLower) !== false ||
               strpos(strtolower($product['description']), $searchLower) !== false ||
               strpos(strtolower($product['category']), $searchLower) !== false;
    });
}
?>

<!-- Hero Section -->
<section class="hero">
    <div class="container">
        <div class="section-header">
            <div class="text-center mb-4">
                <span class="product-category"><?php echo icon('package'); ?> 500+ Premium Products</span>
            </div>
            
            <h1>Laboratory <span class="text-primary">Equipment</span> & Products</h1>
            
            <p class="section-description">
                Discover our comprehensive range of high-quality laboratory instruments, chemicals, 
                and diagnostic solutions trusted by professionals worldwide.
            </p>
            
            <!-- Search Bar -->
            <div style="max-width: 600px; margin: 2rem auto 0;">
                <form method="GET" style="position: relative;">
                    <input type="hidden" name="category" value="<?php echo htmlspecialchars($selectedCategory); ?>">
                    <input type="text" 
                           name="search" 
                           id="product-search"
                           placeholder="Search products, categories, or specifications..." 
                           value="<?php echo htmlspecialchars($searchTerm); ?>"
                           class="form-control" 
                           style="padding-left: 3rem; font-size: 1.125rem;">
                    <span style="position: absolute; left: 1rem; top: 50%; transform: translateY(-50%); color: var(--text-muted); font-size: 1.25rem;"><?php echo icon('search'); ?></span>
                </form>
            </div>
        </div>
    </div>
</section>

<!-- Products Section -->
<section class="section">
    <div class="container">
        
        <!-- Category Filter Tabs -->
        <div style="margin-bottom: 3rem;">
            <div style="display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center; margin-bottom: 2rem;">
                <button class="btn <?php echo $selectedCategory === 'all' ? 'btn-primary' : 'btn-outline'; ?> filter-btn" 
                        onclick="filterProducts('all')">
                    All
                </button>
                <?php foreach ($categories as $category): ?>
                    <button class="btn <?php echo $selectedCategory === $category['name'] ? 'btn-primary' : 'btn-outline'; ?> filter-btn" 
                            onclick="filterProducts('<?php echo htmlspecialchars($category['name']); ?>')">
                        <?php echo htmlspecialchars($category['name']); ?>
                    </button>
                <?php endforeach; ?>
            </div>
            
            <div class="text-center">
                <h2>
                    <?php 
                    if ($selectedCategory === 'all') {
                        echo 'All Products';
                    } else {
                        echo htmlspecialchars($selectedCategory);
                    }
                    ?>
                </h2>
                <p style="color: var(--text-muted);">
                    <?php 
                    if ($selectedCategory === 'all') {
                        echo 'Browse our complete catalog of ' . count($products) . ' laboratory products';
                    } else {
                        echo 'High-quality ' . strtolower($selectedCategory) . ' for professional laboratory use';
                    }
                    ?>
                </p>
            </div>
        </div>
        
        <!-- Results Count -->
        <?php if (!empty($searchTerm) || $selectedCategory !== 'all'): ?>
            <div class="text-center mb-4">
                <p style="color: var(--text-muted);">
                    Showing <?php echo count($filteredProducts); ?> of <?php echo count($products); ?> products
                    <?php if (!empty($searchTerm)): ?>
                        for "<?php echo htmlspecialchars($searchTerm); ?>"
                    <?php endif; ?>
                    <?php if ($selectedCategory !== 'all'): ?>
                        in <?php echo htmlspecialchars($selectedCategory); ?>
                    <?php endif; ?>
                </p>
            </div>
        <?php endif; ?>
        
        <!-- Products Grid -->
        <?php if (empty($filteredProducts)): ?>
            <div class="card text-center" style="padding: 3rem; margin: 2rem auto; max-width: 500px;">
                <div style="font-size: 4rem; margin-bottom: 1rem;">&#128269;</div>
                <h3>No products found</h3>
                <p style="color: var(--text-muted); margin-bottom: 2rem;">
                    Try adjusting your search terms or browse different categories
                </p>
                <button onclick="clearSearch()" class="btn btn-outline">
                    Clear Search
                </button>
            </div>
        <?php else: ?>
            <div class="product-grid">
                <?php foreach ($filteredProducts as $product): ?>
                    <div class="product-card" data-category="<?php echo htmlspecialchars($product['category']); ?>">
                        <img src="<?php echo htmlspecialchars($product['image']); ?>" 
                             alt="<?php echo htmlspecialchars($product['name']); ?>" 
                             class="product-image">
                        <div class="product-content">
                            <span class="product-category"><?php echo htmlspecialchars($product['category']); ?></span>
                            <h3 class="product-title"><?php echo htmlspecialchars($product['name']); ?></h3>
                            <p class="product-description"><?php echo htmlspecialchars($product['description']); ?></p>
                            
                            <?php if (!empty($product['features'])): ?>
                                <ul class="product-features">
                                    <?php foreach (array_slice($product['features'], 0, 3) as $feature): ?>
                                        <li><?php echo htmlspecialchars($feature); ?></li>
                                    <?php endforeach; ?>
                                </ul>
                            <?php endif; ?>
                            
                            <div class="product-footer">
                                <span class="product-price"><?php echo htmlspecialchars($product['price']); ?></span>
                                <?php if (!empty($product['specifications'])): ?>
                                    <button class="specs-btn" 
                                            onclick="showSpecs('<?php echo htmlspecialchars($product['name']); ?>', <?php echo htmlspecialchars(json_encode($product['specifications'])); ?>)">
                                        &#128203; Specs
                                    </button>
                                <?php endif; ?>
                            </div>
                            
                            <button class="btn btn-secondary" style="width: 100%;" 
                                    onclick="orderProduct('<?php echo htmlspecialchars($product['name']); ?>', '<?php echo $product['id']; ?>')">
                                &#128241; Order on WhatsApp
                            </button>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        <?php endif; ?>
    </div>
</section>

<!-- Category Highlights Section -->
<section class="section bg-light">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Product Categories</h2>
            <p class="section-description">
                Explore our specialized product categories designed for every laboratory need
            </p>
        </div>
        
        <div class="d-grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
            <?php foreach ($categories as $category): ?>
                <?php 
                $categoryProductCount = count(array_filter($products, function($p) use ($category) {
                    return $p['category'] === $category['name'];
                }));
                ?>
                <div class="card">
                    <h3><?php echo htmlspecialchars($category['name']); ?></h3>
                    <p style="color: var(--text-muted); margin-bottom: 1rem;">
                        <?php echo $categoryProductCount; ?> product<?php echo $categoryProductCount !== 1 ? 's' : ''; ?> available
                    </p>
                    <p><?php echo htmlspecialchars($category['description']); ?></p>
                    <button onclick="filterProducts('<?php echo htmlspecialchars($category['name']); ?>')" 
                            class="btn btn-outline" style="width: 100%;">
                        View <?php echo htmlspecialchars($category['name']); ?>
                    </button>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Custom JavaScript for this page -->
<script>
function showSpecs(productName, specifications) {
    const specsList = specifications.map(spec => `• ${spec}`).join('\n');
    alert(`${productName}\n\nSpecifications:\n${specsList}`);
}

function clearSearch() {
    document.getElementById('product-search').value = '';
    window.location.href = 'services.php';
}

function filterProducts(category) {
    const url = new URL(window.location);
    if (category === 'all') {
        url.searchParams.delete('category');
    } else {
        url.searchParams.set('category', category);
    }
    window.location.href = url.toString();
}

// Auto-submit search form on input
document.getElementById('product-search').addEventListener('input', function() {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
        this.form.submit();
    }, 500);
});
</script>

<?php require_once 'includes/footer.php'; ?>