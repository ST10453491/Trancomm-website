document.addEventListener('DOMContentLoaded', () => {
  const headerBrand = document.querySelector('.site-header .brand');
  if (!headerBrand) return;

  let lastScrollY = window.scrollY;
  let ticking = false;

  const updateLogo = () => {
    const currentScrollY = window.scrollY;
    headerBrand.classList.toggle('logo-hidden', currentScrollY > lastScrollY && currentScrollY > 80);
    if (currentScrollY < 20) headerBrand.classList.remove('logo-hidden');
    lastScrollY = currentScrollY;
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateLogo);
      ticking = true;
    }
  }, { passive: true });
});
