// Faiza Candle House — আপনার নিজের পণ্যের তথ্য এখানে সম্পাদনা করুন।
const WHATSAPP_NUMBER = "8801323111484"; // বাংলাদেশি নম্বর: 01323111484

// image ফিল্ডে নিজের ছবির ফাইলের পথ দিন, যেমন: "images/flower-candle.jpg"
// ছবি না থাকলে ওয়েবসাইটে কোনো বাইরের ছবি দেখানো হবে না; placeholder দেখা যাবে।
const products = [
  { id: 1, name: "ফ্লাওয়ার ক্যান্ডেল", category: "flower", categoryName: "ফ্লাওয়ার", price: 40, description: "ফুলের ডিজাইনের সুন্দর ডেকোরেটিভ ক্যান্ডেল", image: "image/image1.jpg.jpeg" },
  { id: 2, name: "বাবল ক্যান্ডেল", category: "decorative", categoryName: "ডেকোরেটিভ", price: 40, description: "ঘর সাজানোর জন্য স্টাইলিশ ক্যান্ডেল", image: "image/image2.jpg.jpeg" },
  { id: 3, name: "সুগন্ধি ক্যান্ডেল", category: "scented", categoryName: "সুগন্ধি", price: 40, description: "আরামদায়ক পরিবেশের জন্য সুগন্ধি ক্যান্ডেল", image: "image/image9.jpg.jpeg" },
  { id: 4, name: "গিফট ক্যান্ডেল সেট", category: "gift", categoryName: "গিফট", price: 30, description: "প্রিয়জনকে উপহার দেওয়ার সুন্দর সেট", image: "image/image4.jpg.jpeg" },
  { id: 5, name: "হার্ট ক্যান্ডেল", category: "decorative", categoryName: "ডেকোরেটিভ", price: 40, description: "বিশেষ দিনের জন্য হার্ট-শেপ ক্যান্ডেল", image: "image/image5.jpg.jpeg" },
  { id: 6, name: "রোজ ক্যান্ডেল", category: "flower", categoryName: "ফ্লাওয়ার", price: 40, description: "গোলাপের মতো ডিজাইনের হাতে তৈরি ক্যান্ডেল", image: "image/image6.jpg.jpeg" },
  { id: 7, name: "জার ক্যান্ডেল", category: "scented", categoryName: "সুগন্ধি", price: 40, description: "জারের ভেতর সুন্দর ও ব্যবহারযোগ্য ক্যান্ডেল", image: "image/image7.jpg.jpeg" },
   {
    id: 9,
    name: "ভ্যানিলা ক্যান্ডেল",
    category: "scented",
    categoryName: "সুগন্ধি",
    price: 100,
    description: "সুন্দর ভ্যানিলা সুগন্ধির ক্যান্ডেল",
    image: "image/image9.jpg.jpeg"
  },
 {
    id: 9,
    name: "ভ্যানিলা ক্যান্ডেল",
    category: "scented",
    categoryName: "সুগন্ধি",
    price: 100,
    description: "সুন্দর ভ্যানিলা সুগন্ধির ক্যান্ডেল",
    image: "image/image9.jpg.jpeg"
  },
 {
    id: 9,
    name: "ভ্যানিলা ক্যান্ডেল",
    category: "scented",
    categoryName: "সুগন্ধি",
    price: 100,
    description: "সুন্দর ভ্যানিলা সুগন্ধির ক্যান্ডেল",
    image: "image/image9.jpg.jpeg"
  },

  { id: 8, name: "কাস্টম গিফট বক্স", category: "gift", categoryName: "গিফট", price: 70, description: "আপনার পছন্দমতো গিফট প্যাকেজের জন্য যোগাযোগ করুন", image: "image/image8.jpg.jpeg" }
];

let cart = [];
const productGrid = document.getElementById("productGrid");
const cartCount = document.getElementById("cartCount");
const cartPanelCount = document.getElementById("cartPanelCount");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const toast = document.getElementById("toast");
let toastTimer;

function formatPrice(amount) {
  return "৳" + Number(amount).toLocaleString("bn-BD");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2500);
}

function renderProducts(filter = "all") {
  const filtered = filter === "all" ? products : products.filter(product => product.category === filter);
  if (!filtered.length) {
    productGrid.innerHTML = '<p>এই ক্যাটাগরিতে এখনো কোনো পণ্য যোগ করা হয়নি।</p>';
    return;
  }

  productGrid.innerHTML = filtered.map(product => {
    const photoContent = product.image
      ? `<img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.style.display='none';this.parentElement.classList.add('image-missing');this.parentElement.insertAdjacentHTML('beforeend','<strong>ছবি পাওয়া যায়নি</strong><small>ফাইলের নাম ও Location দেখুন</small>');">`
      : `<span class="placeholder-icon">＋</span><strong>আপনার ক্যান্ডেলের ছবি</strong><small>script.js-এ image যোগ করুন</small>`;
    return `
      <article class="product-card">
        <button class="product-photo photo-placeholder product-image-button" type="button" data-view="${product.id}" aria-label="${product.name} ছবিটি বড় করে দেখুন">${photoContent}<span class="zoom-hint">ছবি বড় করে দেখুন ⤢</span></button>
        <div class="product-info">
          <span class="product-category">${product.categoryName}</span>
          <h3>${product.name}</h3>
          <p class="product-description">${product.description}</p>
          <div class="product-bottom">
            <span class="product-price">${formatPrice(product.price)}</span>
            <button class="add-cart" type="button" data-add="${product.id}">＋ কার্টে যোগ</button>
          </div>
        </div>
      </article>`;
  }).join("");
}

function addToCart(productId) {
  const product = products.find(item => item.id === productId);
  if (!product) return;
  const found = cart.find(item => item.id === productId);
  if (found) found.quantity += 1;
  else cart.push({ ...product, quantity: 1 });
  renderCart();
  showToast(`${product.name} কার্টে যোগ হয়েছে`);
}

function changeQuantity(productId, change) {
  const item = cart.find(entry => entry.id === productId);
  if (!item) return;
  item.quantity += change;
  if (item.quantity <= 0) cart = cart.filter(entry => entry.id !== productId);
  renderCart();
}

function renderCart() {
  const quantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartCount.textContent = quantity.toLocaleString("bn-BD");
  cartPanelCount.textContent = `${quantity.toLocaleString("bn-BD")}টি পণ্য`;
  cartTotal.textContent = formatPrice(total);

  if (!cart.length) {
    cartItems.innerHTML = '<p class="empty-cart">এখনো কোনো পণ্য যোগ করা হয়নি।</p>';
    return;
  }

  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div>
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-sub">${formatPrice(item.price)} × ${item.quantity.toLocaleString("bn-BD")} = ${formatPrice(item.price * item.quantity)}</div>
      </div>
      <div class="quantity-controls">
        <button type="button" aria-label="${item.name} কমান" data-change="-1" data-id="${item.id}">−</button>
        <span>${item.quantity.toLocaleString("bn-BD")}</span>
        <button type="button" aria-label="${item.name} বাড়ান" data-change="1" data-id="${item.id}">+</button>
      </div>
    </div>`).join("");
}

const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalDescription = document.getElementById("modalDescription");
const modalPrice = document.getElementById("modalPrice");
const modalAddCart = document.getElementById("modalAddCart");
const modalWhatsApp = document.getElementById("modalWhatsApp");
let modalProductId = null;

function openProductModal(productId) {
  const product = products.find(item => item.id === productId);
  if (!product || !product.image) return;
  modalProductId = product.id;
  modalImage.src = product.image;
  modalImage.alt = product.name;
  modalName.textContent = product.name;
  modalDescription.textContent = product.description;
  modalPrice.textContent = formatPrice(product.price);
  const message = `আসসালামু আলাইকুম, Faiza Candle House থেকে ${product.name} অর্ডার করতে চাই। দাম: ${formatPrice(product.price)}।`;
  modalWhatsApp.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  imageModal.hidden = false;
  document.body.classList.add("modal-open");
  document.getElementById("closeImageModal").focus();
}
function closeProductModal() {
  imageModal.hidden = true;
  document.body.classList.remove("modal-open");
}
document.getElementById("closeImageModal").addEventListener("click", closeProductModal);
imageModal.addEventListener("click", event => { if (event.target === imageModal) closeProductModal(); });
document.addEventListener("keydown", event => { if (event.key === "Escape" && !imageModal.hidden) closeProductModal(); });
modalAddCart.addEventListener("click", () => { if (modalProductId !== null) addToCart(modalProductId); closeProductModal(); });

productGrid.addEventListener("click", event => {
  const addButton = event.target.closest("[data-add]");
  if (addButton) { addToCart(Number(addButton.dataset.add)); return; }
  const viewButton = event.target.closest("[data-view]");
  if (viewButton) openProductModal(Number(viewButton.dataset.view));
});

cartItems.addEventListener("click", event => {
  const button = event.target.closest("[data-change]");
  if (button) changeQuantity(Number(button.dataset.id), Number(button.dataset.change));
});

document.getElementById("categoryFilter").addEventListener("change", event => renderProducts(event.target.value));

document.getElementById("clearCart").addEventListener("click", () => {
  cart = [];
  renderCart();
  showToast("কার্ট খালি করা হয়েছে");
});

document.getElementById("orderForm").addEventListener("submit", event => {
  event.preventDefault();

  if (!cart.length) {
    showToast("আগে শপ থেকে অন্তত একটি পণ্য কার্টে যোগ করুন।");
    document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
    return;
  }

  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();
  const address = document.getElementById("customerAddress").value.trim();
  const notes = document.getElementById("orderNotes").value.trim();

  if (!name || !phone || !address) {
    showToast("নাম, ফোন ও ঠিকানা পূরণ করুন।");
    return;
  }

  const lines = cart.map(item => `• ${item.name} × ${item.quantity} — ${formatPrice(item.price * item.quantity)}`);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const message = [
    "🌸 *Faiza Candle House — নতুন অর্ডার*",
    "",
    `👤 নাম: ${name}`,
    `📞 ফোন: ${phone}`,
    `📍 ঠিকানা: ${address}`,
    "",
    "🕯️ *অর্ডারের তালিকা:*",
    ...lines,
    "",
    `💗 মোট পণ্যমূল্য: ${formatPrice(total)}`,
    "🚚 ডেলিভারি চার্জ: ঠিকানা অনুযায়ী নিশ্চিত করতে হবে",
    notes ? `📝 অতিরিক্ত নির্দেশনা: ${notes}` : "",
    "",
    "অনুগ্রহ করে অর্ডারটি নিশ্চিত করুন।"
  ].filter(Boolean).join("\n");

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
});

document.getElementById("menuToggle").addEventListener("click", () => {
  const nav = document.getElementById("mainNav");
  const open = nav.classList.toggle("open");
  document.getElementById("menuToggle").setAttribute("aria-expanded", String(open));
});

document.querySelectorAll("#mainNav a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("mainNav").classList.remove("open");
    document.getElementById("menuToggle").setAttribute("aria-expanded", "false");
  });
});

const directWhatsApp = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("আসসালামু আলাইকুম, Faiza Candle House-এর মোমবাতি সম্পর্কে জানতে চাই।")}`;
document.getElementById("footerWhatsApp").href = directWhatsApp;
document.getElementById("floatingWhatsApp").href = directWhatsApp;
document.getElementById("year").textContent = new Date().getFullYear();

renderProducts();
renderCart();
