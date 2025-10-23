function getGuestId() {
  let guestId = localStorage.getItem('guest_id');
  if (!guestId) {
    guestId = 'guest-' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('guest_id', guestId);
  }
  return guestId;
}

function updateWishlistCount(count) {
  const countEl = document.getElementById('wishlist-count');
  if (countEl && count !== undefined) {
    countEl.textContent = count;
  }
}

async function toggleWishlist(serviceId, currentStatus) {
  const guestId = getGuestId();
  
  const response = await fetch('/api/wishlist/toggle', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'), 
    },
    body: JSON.stringify({
      guest_id: guestId,
      service_id: serviceId,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    return data; 
  } else {
    console.error('Failed to toggle wishlist:', response.statusText);
    return null;
  }
}

function setupWishlistButtons() {
  const buttons = document.querySelectorAll('.btn-wishlist');
  if (buttons.length === 0) return;

  buttons.forEach((btn) => {
    const serviceId = btn.dataset.id;

    btn.addEventListener('click', async () => {
      const data = await toggleWishlist(serviceId);

      if (data) {
        if (data.status === 'added') {
          btn.textContent = 'In Wishlist';
        } else {
          btn.textContent = 'Wishlist';
        }
        updateWishlistCount(data.total);
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
    getGuestId();
    setupWishlistButtons();
});
