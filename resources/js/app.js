// Update counter di header
function updateWishlistCount() {
  const countEl = document.getElementById('wishlist-count');
  if (countEl) {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    countEl.textContent = wishlist.length;
  }
}

// 🧩 Bersihkan data wishlist yang rusak
function cleanWishlist() {
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
  // Filter data yang valid (yang punya properti id)
  wishlist = wishlist.filter(item => item && item.id)
  localStorage.setItem('wishlist', JSON.stringify(wishlist))
}

function setupWishlistButtons() {
  const buttons = document.querySelectorAll('.btn-wishlist');
  if (buttons.length === 0) return;

  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

  // Cek awal dulu: ubah teks tombol sesuai isi wishlist
  buttons.forEach((btn) => {
    const id = btn.dataset.id;
    const exists = wishlist.some((item) => item.id === id);
    if (exists) {
      btn.textContent = 'In Wishlist';
    } else {
      btn.textContent = 'Wishlist';
    }

    // Event listener klik
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const name = btn.dataset.name;
      const description = btn.dataset.description;
      const price = btn.dataset.price;
      const imageUrl = btn.dataset.image;

      let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

      const existing = wishlist.find((item) => item.id === id);
      if (existing) {
        // Remove jika sudah ada
        wishlist = wishlist.filter((item) => item.id !== id);
        btn.textContent = 'Wishlist';
      } else {
        // Add jika belum ada
        wishlist.push({ id, name, description, price, imageUrl });
        btn.textContent = 'In Wishlist';
      }

      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      updateWishlistCount();
    });
  });
}

// Render wishlist di halaman Favorite
function renderWishlistPage() {
  const container = document.getElementById('wishlist-container');
  if (!container) return; // cuma jalan di halaman favorite

  const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

  if (wishlist.length === 0) {
    container.innerHTML = `<p class="empty-text">Your wishlist is empty.</p>`;
    updateWishlistCount();
    return;
  }

  container.innerHTML = wishlist
    .map(
      (item) => `
    <div class="service-card">
      <img src="${item.imageUrl}" alt="${item.name}">
      <h3 class="service-title">${item.name}</h3>
      <p class="service-description">${item.description}</p>
      <div class="service-price">$${item.price}</div>
      <button class="btn btn-danger btn-remove" data-id="${item.id}">Remove</button>
    </div>
  `
    )
    .join('');

  // Event remove per item
  container.querySelectorAll('.btn-remove').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
      wishlist = wishlist.filter((item) => item.id !== id);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      updateWishlistCount();
      renderWishlistPage(); // refresh tampilan
    });
  });
}

// Fungsi hapus semua wishlist
function setupClearWishlistButton() {
  const clearBtn = document.getElementById('clear-wishlist')
  if (!clearBtn) return

  clearBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to clear your wishlist?')) {
      localStorage.removeItem('wishlist')
      updateWishlistCount()
      renderWishlistPage()
    }
  })
}

// Jalankan semua saat halaman siap
document.addEventListener('DOMContentLoaded', () => {
    cleanWishlist()
    setupWishlistButtons()
    renderWishlistPage()
    setupClearWishlistButton()
    updateWishlistCount()
});