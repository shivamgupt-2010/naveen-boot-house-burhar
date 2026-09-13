/* ==========================================================================
   Naveen Boot House - Justdial Verified Product Catalog & Application Logic
   ========================================================================== */

const PRODUCTS = [
  // --- CROCS (12 Listings) ---
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
    badge: "Justdial Listed",
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
    title: "Crocs Swiftwater Black/White Women Flip [204974-066]",
    category: "crocs",
    categoryLabel: "Crocs Collection",
    brand: "Crocs",
    price: 1995,
    oldPrice: 2495,
    rating: 4.8,
    reviewsCount: 29,
    badge: "Original Crocs",
    image: "assets/crocs_flip.png",
    description: "Classic Crocs Swiftwater black and white flip flop for women. Quick-drying, lightweight, and contoured footbed.",
    sizes: [4, 9],
    inStock: true
  },
  {
    id: 4,
    title: "Crocs Swiftwater Tropical Teal/Light Grey Women Sandal [203998-3O2]",
    category: "crocs",
    categoryLabel: "Crocs Collection",
    brand: "Crocs",
    price: 2495,
    oldPrice: 2995,
    rating: 4.9,
    reviewsCount: 41,
    badge: "Best Seller",
    image: "assets/crocs_pink.png",
    description: "Tropical teal & light grey Crocs Swiftwater sandal for women. Soft flexible straps and siped outsoles for wet traction.",
    sizes: [4, 5, 6, 7],
    inStock: true
  },
  {
    id: 5,
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
  {
    id: 6,
    title: "Crocs Capri Shimmer Xband Oyster/Cobblestone Women Sandal [204908-1C4]",
    category: "crocs",
    categoryLabel: "Crocs Collection",
    brand: "Crocs",
    price: 3495,
    oldPrice: 3995,
    rating: 4.8,
    reviewsCount: 24,
    badge: "Shimmer Edition",
    image: "assets/crocs_pink.png",
    description: "Crocs Capri Shimmer cross-band sandal in oyster & cobblestone finish with shimmer straps and soft microfiber lining.",
    sizes: [4],
    inStock: true
  },
  {
    id: 7,
    title: "Crocs Capri Shimmer Xband Black Women Sandal [204908-060]",
    category: "crocs",
    categoryLabel: "Crocs Collection",
    brand: "Crocs",
    price: 3495,
    oldPrice: 3995,
    rating: 4.9,
    reviewsCount: 37,
    badge: "Shimmer Edition",
    image: "assets/crocs_pink.png",
    description: "Sleek black Crocs Capri Shimmer Xband women sandal. Dual Crocs Comfort with soft massage pods on footbed.",
    sizes: [3],
    inStock: true
  },

  // --- BATA FLOATERS (16 Listings) ---
  {
    id: 8,
    title: "Bata Weinbrenner Brown Floaters for Men (F861494200)",
    category: "bata",
    categoryLabel: "Bata Floaters",
    brand: "Bata Weinbrenner",
    price: 1260,
    oldPrice: 1300,
    rating: 4.8,
    reviewsCount: 65,
    badge: "Weinbrenner Leather",
    image: "assets/bata_floaters.png",
    description: "Heavy-duty Bata Weinbrenner brown outdoor floaters for men with synthetic leather upper and high-grip rubber sole.",
    sizes: [6, 7, 8, 9, 10],
    inStock: true
  },
  {
    id: 9,
    title: "Bata Power Grey Floaters for Men (F861517600)",
    category: "bata",
    categoryLabel: "Bata Floaters",
    brand: "Bata Power",
    price: 775,
    oldPrice: 799,
    rating: 4.7,
    reviewsCount: 82,
    badge: "Bata Power",
    image: "assets/bata_floaters.png",
    description: "Bata Power grey floaters for men engineered with lightweight EVA midsole and velcro adjustment straps.",
    sizes: [6, 7, 8, 9, 10],
    inStock: true
  },
  {
    id: 10,
    title: "Bata Power Blue Floaters for Men (F861983600)",
    category: "bata",
    categoryLabel: "Bata Floaters",
    brand: "Bata Power",
    price: 875,
    oldPrice: 899,
    rating: 4.8,
    reviewsCount: 74,
    badge: "Bata Power",
    image: "assets/bata_floaters.png",
    description: "Bata Power sporty navy blue floaters with quick-dry synthetic webbing and padded ankle support.",
    sizes: [7, 8, 9, 10],
    inStock: true
  },
  {
    id: 11,
    title: "Bata Power Brown Floaters for Men (F861420900)",
    category: "bata",
    categoryLabel: "Bata Floaters",
    brand: "Bata Power",
    price: 959,
    oldPrice: 999,
    rating: 4.8,
    reviewsCount: 91,
    badge: "Bata Power",
    image: "assets/bata_floaters.png",
    description: "Rugged Bata Power brown floaters for men with shock-absorption heel cushioning and anti-slip tread pattern.",
    sizes: [6, 7, 8, 9, 10],
    inStock: true
  },
  {
    id: 12,
    title: "Bata Brown Floaters for Men (Pr-1468941)",
    category: "bata",
    categoryLabel: "Bata Floaters",
    brand: "Bata",
    price: 395,
    oldPrice: 450,
    rating: 4.6,
    reviewsCount: 112,
    badge: "Super Saver",
    image: "assets/bata_floaters.png",
    description: "Budget-friendly durable Bata brown floaters for daily home and local town wear in Burhar.",
    sizes: [6, 7, 8, 9],
    inStock: true
  },
  {
    id: 13,
    title: "Bata Power Black Floaters for Men",
    category: "bata",
    categoryLabel: "Bata Floaters",
    brand: "Bata Power",
    price: 785,
    oldPrice: 799,
    rating: 4.7,
    reviewsCount: 58,
    badge: "Bata Power",
    image: "assets/bata_floaters.png",
    description: "All-black Bata Power floaters for active men. Water-resistant synthetic material with heavy-duty soles.",
    sizes: [6, 7, 8, 9, 10],
    inStock: true
  },

  // --- NIKE SPORTS SHOES (11 Listings) ---
  {
    id: 14,
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
    id: 15,
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
    id: 16,
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
  {
    id: 17,
    title: "Nike Unisex Kid's Jr Obra 2 Club FG Football Shoes [AH7314-080]",
    category: "nike",
    categoryLabel: "Nike Sports",
    brand: "Nike Football",
    price: 3295,
    oldPrice: 3895,
    rating: 4.9,
    reviewsCount: 42,
    badge: "Football Cleats",
    image: "assets/nike_flex.png",
    description: "Official Nike Jr Obra 2 Club FG Firm-Ground football cleats for kids. Synthetic leather upper with molded studs for pitch speed.",
    sizes: [3.5, 4, 5, 5.5],
    inStock: true
  },
  {
    id: 18,
    title: "Nike Varsity Compete Trainer Pure Platinum/Signal Blue",
    category: "nike",
    categoryLabel: "Nike Sports",
    brand: "Nike",
    price: 4295,
    oldPrice: 4995,
    rating: 4.8,
    reviewsCount: 36,
    badge: "Platinum Series",
    image: "assets/nike_flex.png",
    description: "Ultra-lightweight 249g Nike Varsity Compete trainer in platinum and signal blue colorway.",
    sizes: [7, 8, 9, 10],
    inStock: true
  },
  {
    id: 19,
    title: "Nike Women's Lace-Up Low-Top Basketball Shoes [AQ1778]",
    category: "nike",
    categoryLabel: "Nike Sports",
    brand: "Nike Women",
    price: 4595,
    oldPrice: 5295,
    rating: 4.9,
    reviewsCount: 29,
    badge: "Women's Hoops",
    image: "assets/nike_flex.png",
    description: "Nike low-top basketball shoes for women with rubber cupsole traction and impact-cushioned Phylon foam midsole.",
    sizes: [5, 6, 7, 8],
    inStock: true
  },

  // --- BRANDED LEATHER & SNEAKERS (Skechers, Woodland, Red Chief) ---
  {
    id: 20,
    title: "Skechers Go Walk Flex Athletic Sneaker",
    category: "skechers",
    categoryLabel: "Skechers",
    brand: "Skechers",
    price: 3999,
    oldPrice: 4999,
    rating: 4.9,
    reviewsCount: 84,
    badge: "Skechers Original",
    image: "assets/skechers_gowalk.png",
    description: "Authentic Skechers Go Walk Flex with Goga Mat cushioning and breathable mesh for daily running & walking.",
    sizes: [6, 7, 8, 9, 10, 11],
    inStock: true
  },
  {
    id: 21,
    title: "Woodland Pro-Trek Genuine Leather Boot",
    category: "woodland",
    categoryLabel: "Woodland Boots",
    brand: "Woodland",
    price: 4495,
    oldPrice: 5295,
    rating: 4.9,
    reviewsCount: 92,
    badge: "Woodland Original",
    image: "assets/woodland_boot.png",
    description: "Heavy-duty original Woodland nubuck leather outdoor boot with anti-skid rubber lug sole.",
    sizes: [6, 7, 8, 9, 10],
    inStock: true
  },
  {
    id: 22,
    title: "Red Chief Genuine Rust Leather Casual Boot",
    category: "redchief",
    categoryLabel: "Red Chief Leather",
    brand: "Red Chief",
    price: 3295,
    oldPrice: 3895,
    rating: 4.8,
    reviewsCount: 76,
    badge: "Red Chief Leather",
    image: "assets/redchief_leather.png",
    description: "Hand-finished pure leather derby boot by Red Chief with shock-absorbing PU sole.",
    sizes: [7, 8, 9, 10, 11],
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
        <p style="font-size: 1.2rem; color: var(--text-muted); margin-bottom: 12px;">No Justdial verified footwear items found matching "${currentSearch}".</p>
        <button class="btn-secondary" onclick="resetFilters()">Reset Search &amp; Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <article class="product-card">
      <span class="card-badge">${p.badge}</span>
      <div class="card-image-box">
        <img src="${p.image}" alt="${p.title} - Naveen Boot House Burhar Justdial" loading="lazy" />
        <button class="quick-view-btn" onclick="openQuickView(${p.id})">Quick View</button>
      </div>
      <div class="card-details">
        <span class="product-category">${p.brand} • ${p.categoryLabel}</span>
        <h3 class="product-title">${p.title}</h3>
        <div class="product-rating">
          <span>★ ${p.rating}</span>
          <span class="rating-count">(${p.reviewsCount} Justdial reviews)</span>
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
      const url = `https://wa.me/919425182411?text=${encodeURIComponent(waMsg)}`;
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
  modalBrand.textContent = `${selectedProduct.brand} • ${selectedProduct.categoryLabel} • Justdial Verified`;
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
  const msg = `Hi Naveen Boot House Burhar! I want to order from your Justdial Catalog:\n- *${selectedProduct.title}*\n- Size: UK/IND ${selectedSize}\n- Price: ₹${selectedProduct.price}\nPlease confirm availability at Railway Market Burhar.`;
  const url = `https://wa.me/919425182411?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

function directWhatsAppOrder(title, price) {
  const msg = `Hi Naveen Boot House Burhar! I want to order Justdial listed item: *${title}* for ₹${price}. Please share available sizes.`;
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
