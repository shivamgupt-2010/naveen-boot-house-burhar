/* ==========================================================================
   Naveen Boot House - 14 Featured Active Products (Justdial Verified)
   Store Tagline: Complete Family Footwear Since 1973 | Multi-branded Store
   Store Guarantee: Deals Only in 100% Originals (NO COPIES)
   ========================================================================== */

let PRODUCTS = [];

// Active State
let currentCategory = "all";
let currentSearch = "";
let currentSort = "popular";
let selectedProduct = null;
let selectedSize = null;

// DOM Initialization
document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch('products.json');
    if (response.ok) {
      PRODUCTS = await response.json();
    }
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }
  
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
