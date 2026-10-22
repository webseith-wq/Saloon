/* ============================================
   Biguli Glamour Salon — Shared JavaScript
   ============================================ */

(function () {
  'use strict';

  /* ---------- 1. SMOOTH SCROLL FOR ANCHOR LINKS ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ---------- 2. BOOKING BUTTON SIMULATION ---------- */
  function showBookingAlert() {
    alert(
      '📅 Thank you for your interest!\n\n' +
      'Please call +256 700 123 456 or visit us at:\n' +
      'Main Street, Biguli Town, Uganda\n\n' +
      'We can\'t wait to see you! ✨'
    );
  }

  // All links that point to #book
  document.querySelectorAll('a[href*="#book"]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      showBookingAlert();
    });
  });

  // Dedicated booking button on contact page
  const bookingBtn = document.getElementById('bookingBtn');
  if (bookingBtn) {
    bookingBtn.addEventListener('click', function (e) {
      e.preventDefault();
      showBookingAlert();
    });
  }

  /* ---------- 3. ACTIVE NAVIGATION HIGHLIGHT ---------- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav ul li a').forEach(function (link) {
    const linkPage = link.getAttribute('href').split('#')[0];
    if (linkPage === currentPage) {
      link.classList.add('active');
    } else if (!link.classList.contains('btn-outline')) {
      link.classList.remove('active');
    }
  });

  /* ---------- 4. GALLERY LIGHTBOX (NEW WINDOW) ---------- */
  document.querySelectorAll('.gallery-item').forEach(function (item) {
    item.addEventListener('click', function () {
      const img = this.querySelector('img');
      if (img) {
        window.open(img.src, '_blank', 'width=900,height=700');
      }
    });
  });

  /* ---------- 5. CONSOLE WELCOME ---------- */
  console.log(
    '%c✨ Biguli Glamour Salon ✨\n%cWhere Biguli gets beautiful.\n📍 Main Street, Biguli Town\n📞 +256 700 123 456',
    'color: #b76e79; font-size: 1.2rem; font-weight: bold;',
    'color: #6b5e5a; font-size: 0.9rem;'
  );

})();