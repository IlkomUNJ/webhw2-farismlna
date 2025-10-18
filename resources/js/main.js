// Anda mungkin ingin menempatkan fungsi ini di file JS terpisah, misalnya: main.js

// 1. Fungsi untuk mendapatkan atau membuat Guest ID
function getGuestId() {
  let guestId = localStorage.getItem('guest_id');
  if (!guestId) {
    // Generate simple UUID (bisa pakai library, atau simple random string)
    guestId = 'guest-' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('guest_id', guestId);
  }
  return guestId;
}

// 2. Fungsi untuk update jumlah di header
function updateWishlistCount(count) {
  const countEl = document.getElementById('wishlist-count');
  if (countEl && count !== undefined) {
    countEl.textContent = count;
  }
}

// 3. Fungsi utama toggle menggunakan AJAX
async function toggleWishlist(serviceId, currentStatus) {
  const guestId = getGuestId();
  
  const response = await fetch('/api/wishlist/toggle', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'), // Pastikan Anda punya CSRF token di <head>
    },
    body: JSON.stringify({
      guest_id: guestId,
      service_id: serviceId,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    return data; // {status: 'added'/'removed', total: X}
  } else {
    console.error('Failed to toggle wishlist:', response.statusText);
    return null;
  }
}

// 4. Setup Tombol di halaman Services
function setupWishlistButtons() {
  const buttons = document.querySelectorAll('.btn-wishlist');
  if (buttons.length === 0) return;

  buttons.forEach((btn) => {
    const serviceId = btn.dataset.id;
    
    // ⚠️ Tambahkan class loading, disable, dll. di sini jika Anda mau

    btn.addEventListener('click', async () => {
      const data = await toggleWishlist(serviceId);

      if (data) {
        // Update teks tombol
        if (data.status === 'added') {
          btn.textContent = 'In Wishlist';
        } else {
          btn.textContent = 'Wishlist';
        }
        // Update counter di header
        updateWishlistCount(data.total);
      }
    });
  });
}

// 5. Jalankan saat halaman siap
document.addEventListener('DOMContentLoaded', () => {
    getGuestId(); // Pastikan ID ada
    setupWishlistButtons();
    // ⚠️ Tambahkan fungsi untuk inisialisasi status tombol saat load, 
    //    ini memerlukan endpoint API baru untuk GET status dan total count!
});