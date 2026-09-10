document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');

  toggle?.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
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

  document.querySelectorAll('[data-contact-form]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const status = form.querySelector('.form-status');
      status.textContent = 'Thanks. Your message is ready for the Trancomm team.';
      form.reset();
    });
  });

  document.querySelectorAll('[data-year]').forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  const partnerFrame = document.querySelector('.product-partners-frame iframe');
  const resizePartnerFrame = () => {
    const frameDocument = partnerFrame?.contentDocument;
    if (!frameDocument) return;
    const contentHeight = frameDocument.documentElement.scrollHeight;
    frameDocument.documentElement.style.overflow = 'hidden';
    frameDocument.body.style.overflow = 'hidden';
    partnerFrame.style.height = `${contentHeight}px`;
    partnerFrame.parentElement.style.height = `${contentHeight}px`;
  };
  partnerFrame?.addEventListener('load', resizePartnerFrame);
  window.addEventListener('resize', resizePartnerFrame);
  setTimeout(resizePartnerFrame, 100);

  const logoFrame = document.querySelector('.product-logo-frame iframe');
  const resizeLogoFrame = () => {
    const frameDocument = logoFrame?.contentDocument;
    if (!frameDocument) return;
    const contentHeight = frameDocument.documentElement.scrollHeight;
    logoFrame.style.height = `${contentHeight}px`;
    logoFrame.parentElement.style.height = `${contentHeight}px`;
  };
  logoFrame?.addEventListener('load', resizeLogoFrame);
  window.addEventListener('resize', resizeLogoFrame);
  setTimeout(resizeLogoFrame, 100);
});
