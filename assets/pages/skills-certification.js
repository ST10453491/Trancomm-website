document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  toggle?.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
  document.querySelectorAll('.nav-menu').forEach((menu) => {
    menu.addEventListener('toggle', () => {
      if (menu.open) document.querySelectorAll('.nav-menu').forEach((other) => {
        if (other !== menu) other.open = false;
      });
    });
  });
  const currentPage = window.location.pathname.split('/').pop() || 'Trancomm - We Are Trancomm.html';
  document.querySelectorAll('.nav-links a').forEach((link) => {
    if (link.getAttribute('href') === currentPage) link.classList.add('active');
  });
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
  document.querySelectorAll('[data-year]').forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  const detailFrame = document.querySelector('.skills-detail-section iframe');
  const resizeDetailFrame = () => {
    const frameDocument = detailFrame?.contentDocument;
    if (!frameDocument) return;
    const contentHeight = frameDocument.documentElement.scrollHeight;
    frameDocument.documentElement.style.overflow = 'hidden';
    frameDocument.body.style.overflow = 'hidden';
    detailFrame.style.height = `${contentHeight}px`;
    detailFrame.parentElement.style.height = `${contentHeight}px`;
  };
  detailFrame?.addEventListener('load', resizeDetailFrame);
  window.addEventListener('resize', resizeDetailFrame);
  setTimeout(resizeDetailFrame, 100);
  const headerBrand = document.querySelector('.site-header .brand');
  let lastScrollY = window.scrollY;
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    headerBrand?.classList.toggle('logo-hidden', currentScrollY > lastScrollY && currentScrollY > 80);
    if (currentScrollY < 20) headerBrand?.classList.remove('logo-hidden');
    lastScrollY = currentScrollY;
  }, { passive: true });
});
