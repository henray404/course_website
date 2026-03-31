document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const btnToggle = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (btnToggle && mobileMenu) {
    btnToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
});
