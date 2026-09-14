/* ==========================================================================
   Naveen Boot House - 14 Featured Active Products (Justdial Verified)
   Store Tagline: Complete Family Footwear Since 1973 | Multi-branded Store
   Store Guarantee: Deals Only in 100% Originals (NO COPIES)
   ========================================================================== */

const PRODUCTS = [
  // --- CROCS (Featured) ---
  {
    id: 1,
    title: "Crocs Swiftwater Paradise Pink/White Women Sandal [203998-6NR]",
    category: "crocs",
    categoryLabel: "Crocs Collection",
    brand: "Crocs",
    price: 2495,
    oldPrice: 2995,
    rating: 4.9,
    reviewsCount: 48,
    badge: "100% Original Crocs",
    image: "assets/crocs_pink.png",
    description: "Original Crocs Swiftwater paradise pink & white women sandal. Lightweight, water-friendly Croslite foam construction with secure heel strap.",
    sizes: [3, 3.5, 4],
    inStock: true
  },
  {
    id: 2,
    title: "Crocs Swiftwater Tropical Teal/Pearl White Women Flip [204974-31I]",
    category: "crocs",
    categoryLabel: "Crocs Collection",
    brand: "Crocs",
    price: 1995,
    oldPrice: 2495,
    rating: 4.8,
    reviewsCount: 32,
    badge: "Original Crocs",
    image: "assets/crocs_flip.png",
    description: "Crocs Swiftwater tropical teal & pearl white women flip flops. Flexible TPU upper strap with Iconic Crocs Comfort cushioning.",
    sizes: [3],
    inStock: true
  },
  {
    id: 3,
    title: "Crocs Capri V Navy/Pearl White Women Flip [202502-464]",
    category: "crocs",
    categoryLabel: "Crocs Collection",
    brand: "Crocs",
    price: 3495,
    oldPrice: 3995,
    rating: 4.9,
    reviewsCount: 53,
    badge: "Capri V Comfort",
    image: "assets/crocs_flip.png",
    description: "Premium Crocs Capri V navy blue and pearl white flip flop with real leather straps and Dual Crocs Comfort deep heel cup.",
    sizes: [5, 8],
    inStock: true
  },

  // --- NIKE SPORTS (Featured) ---
  {
    id: 7,
    title: "Nike Dark Blue Flex Control TR3 Training Shoes [AJ5911-400]",
    category: "nike",
    categoryLabel: "Nike Sports",
    brand: "Nike",
    price: 3995,
    oldPrice: 4995,
    rating: 4.9,
    reviewsCount: 67,
    badge: "Original Nike",
    image: "assets/nike_flex.png",
    description: "Authentic Nike Flex Control TR3 dark blue training shoes. Lightweight mesh upper with midfoot strap for lockdown support.",
    sizes: [7, 8, 9, 10, 11],
    inStock: true
  },
  {
    id: 8,
    title: "Nike Flex Control TR4 Synthetic Black/White Training Shoes",
    category: "nike",
    categoryLabel: "Nike Sports",
    brand: "Nike",
    price: 4495,
    oldPrice: 5495,
    rating: 4.9,
    reviewsCount: 88,
    badge: "TR4 Edition",
    image: "assets/nike_flex.png",
    description: "Nike Flex Control TR4 black and dark smoke grey training shoes. Engineered flex grooves and deep rubber traction tread.",
    sizes: [7, 8, 9, 10, 11],
    inStock: true
  },
  {
    id: 9,
    title: "Nike Synthetic Varsity Compete Trainer Black/White",
    category: "nike",
    categoryLabel: "Nike Sports",
    brand: "Nike",
    price: 3795,
    oldPrice: 4295,
    rating: 4.8,
    reviewsCount: 54,
    badge: "Original Nike",
    image: "assets/nike_flex.png",
    description: "Nike Varsity Compete Trainer with durable rubber sole, breathable mesh, and lateral webbing for weightlifting & cardio.",
    sizes: [6, 7, 8, 9, 10],
    inStock: true
  },

  // --- SKECHERS, WOODLAND & RED CHIEF LEATHER (Featured) ---
  {
    id: 10,
    title: "Skechers Go Walk Flex Athletic Sneaker",
    category: "skechers",
    categoryLabel: "Skechers",
    brand: "Skechers",
    price: 3999,
    oldPrice: 4999,
    rating: 4.9,
    reviewsCount: 84,
    badge: "100% Original Skechers",
    image: "assets/skechers_gowalk.png",
    description: "Authentic Skechers Go Walk Flex with Goga Mat cushioning and breathable mesh for daily running & walking.",
    sizes: [6, 7, 8, 9, 10, 11],
    inStock: true
  },
  {
    id: 11,
    title: "Woodland Pro-Trek Genuine Leather Boot",
    category: "woodland",
    categoryLabel: "Woodland Boots",
    brand: "Woodland",
    price: 4495,
    oldPrice: 5295,
    rating: 4.9,
    reviewsCount: 92,
    badge: "Original Woodland Leather",
    image: "assets/woodland_boot.png",
    description: "Heavy-duty original Woodland nubuck leather outdoor boot with anti-skid rubber lug sole.",
    sizes: [6, 7, 8, 9, 10],
    inStock: true
  },
  {
    id: 12,
    title: "Red Chief Genuine Rust Leather Casual Boot",
    category: "redchief",
    categoryLabel: "Red Chief Leather",
    brand: "Red Chief",
    price: 3295,
    oldPrice: 3895,
    rating: 4.8,
    reviewsCount: 76,
    badge: "Original Red Chief Leather",
    image: "assets/redchief_leather.png",
    description: "Hand-finished pure leather derby boot by Red Chief with shock-absorbing PU sole.",
    sizes: [7, 8, 9, 10, 11],
    inStock: true
  },

  // --- WOMEN & KIDS ETHNIC (Featured) ---
  {
    id: 13,
    title: "Royal Velvet Zari Handcrafted Wedding Mojari",
    category: "women",
    categoryLabel: "Women's Collection",
    brand: "Traditional Ethnic",
    price: 1599,
    oldPrice: 1999,
    rating: 4.9,
    reviewsCount: 68,
    badge: "Handmade Zari Work",
    image: "assets/ethnic_mojari.png",
    description: "Authentic Rajasthani velvet Punjabi Mojari Jutti embellished with genuine metallic Zari thread work.",
    sizes: [4, 5, 6, 7, 8],
    inStock: true
  },
  {
    id: 14,
    title: "Action School Time Black Leather Shoes",
    category: "kids",
    categoryLabel: "Kids Collection",
    brand: "Action School Time",
    price: 899,
    oldPrice: 1099,
    rating: 4.9,
    reviewsCount: 130,
    badge: "Original Action Shoes",
    image: "assets/action_school.png",
    description: "Official Action School Time black formal leather school shoes with velcro straps.",
    sizes: [1, 2, 3, 4, 5],
    inStock: true
  }
];

// Active State
let currentCategory = "all";
let currentSearch = "";
let currentSort = "popular";
let selectedProduct = null;
let selectedSize = null;

// DOM Initialization
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  setupEventListeners();
  setupScrollEffects();
});

// Render Product Grid
function renderProducts() {
  const grid = document.getElementById("product-grid");
  if (!grid) return;

  let filtered = PRODUCTS.filter(p => {
    const matchCategory = (currentCategory === "all") || (p.category === currentCategory);
    const matchSearch = p.title.toLowerCase().includes(currentSearch.toLowerCase()) || 
                        p.brand.toLowerCase().includes(currentSearch.toLowerCase()) ||
                        p.categoryLabel.toLowerCase().includes(currentSearch.toLowerCase());
    return matchCategory && matchSearch;
  });

  // Sorting
  if (currentSort === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentSort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
        <p style="font-size: 1.2rem; color: var(--text-muted); margin-bottom: 12px;">No footwear items found matching "${currentSearch}".</p>
        <button class="btn-secondary" onclick="resetFilters()">Reset Search &amp; Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <article class="product-card">
      <span class="card-badge">${p.badge}</span>
      <div class="card-image-box">
        <img src="${p.image}" alt="${p.title} - Naveen Boot House Burhar" loading="lazy" />
        <button class="quick-view-btn" onclick="openQuickView(${p.id})">Quick View</button>
      </div>
      <div class="card-details">
        <span class="product-category">${p.brand} • ${p.categoryLabel}</span>
        <h3 class="product-title">${p.title}</h3>
        <div class="product-rating">
          <span>★ ${p.rating}</span>
          <span class="rating-count">(${p.reviewsCount} verified reviews)</span>
        </div>
        <div class="price-row">
          <span class="curr-price">₹${p.price}</span>
          <span class="old-price">₹${p.oldPrice}</span>
        </div>
        <button class="btn-whatsapp-order" onclick="directWhatsAppOrder('${p.title}', ${p.price})">
          <i class="fab fa-whatsapp"></i> Order on WhatsApp
        </button>
      </div>
    </article>
  `).join('');
}

// Event Listeners
function setupEventListeners() {
  // Search Input
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value.trim();
      renderProducts();
    });
  }

  // Category Tabs
  const tabBtns = document.querySelectorAll(".tab-btn");
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-category");
      renderProducts();
    });
  });

  // Sort Select
  const sortSelect = document.getElementById("sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      renderProducts();
    });
  }

  // Contact Form
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("form-name").value;
      const phone = document.getElementById("form-phone").value;
      const msg = document.getElementById("form-message").value;

      const waMsg = `Hi Naveen Boot House Burhar! I am ${name} (${phone}). Inquiry: ${msg}`;
      const url = `https://wa.me/917000451211?text=${encodeURIComponent(waMsg)}`;
      window.open(url, '_blank');
    });
  }
}

// Reset Filters
function resetFilters() {
  currentCategory = "all";
  currentSearch = "";
  const input = document.getElementById("search-input");
  if (input) input.value = "";
  document.querySelectorAll(".tab-btn").forEach(b => {
    b.classList.toggle("active", b.getAttribute("data-category") === "all");
  });
  renderProducts();
}

// Quick View Modal
function openQuickView(id) {
  selectedProduct = PRODUCTS.find(p => p.id === id);
  if (!selectedProduct) return;

  selectedSize = selectedProduct.sizes[0];

  const modal = document.getElementById("quick-view-modal");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalBrand = document.getElementById("modal-brand");
  const modalPrice = document.getElementById("modal-price");
  const modalOldPrice = document.getElementById("modal-old-price");
  const modalDesc = document.getElementById("modal-desc");
  const sizeContainer = document.getElementById("modal-sizes");

  if (!modal) return;

  modalImg.src = selectedProduct.image;
  modalTitle.textContent = selectedProduct.title;
  modalBrand.textContent = `${selectedProduct.brand} • ${selectedProduct.categoryLabel} • 100% Original`;
  modalPrice.textContent = `₹${selectedProduct.price}`;
  modalOldPrice.textContent = `₹${selectedProduct.oldPrice}`;
  modalDesc.textContent = selectedProduct.description;

  sizeContainer.innerHTML = selectedProduct.sizes.map(size => `
    <span class="size-chip ${size === selectedSize ? 'selected' : ''}" onclick="selectSize(${size})">UK/IND ${size}</span>
  `).join('');

  modal.classList.add("active");
}

function selectSize(size) {
  selectedSize = size;
  document.querySelectorAll(".size-chip").forEach(chip => {
    chip.classList.toggle("selected", chip.textContent.includes(size.toString()));
  });
}

function closeModal() {
  const modal = document.getElementById("quick-view-modal");
  if (modal) modal.classList.remove("active");
}

function modalWhatsAppCheckout() {
  if (!selectedProduct) return;
  const msg = `Hi Naveen Boot House Burhar! I want to order 100% Original:\n- *${selectedProduct.title}*\n- Size: UK/IND ${selectedSize}\n- Price: ₹${selectedProduct.price}\nPlease confirm availability at Railway Market Burhar.`;
  const url = `https://wa.me/919425182411?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

function directWhatsAppOrder(title, price) {
  const msg = `Hi Naveen Boot House Burhar! I want to order 100% Original *${title}* for ₹${price}. Please share size options.`;
  const url = `https://wa.me/919425182411?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

// Scroll Effects
function setupScrollEffects() {
  const header = document.querySelector(".header-bar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }
  });
}
