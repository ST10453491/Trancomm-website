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

  const pillarsFrame = document.querySelector('.pillars-frame iframe');
  const resizePillarsFrame = () => {
    const frameDocument = pillarsFrame?.contentDocument;
    if (!frameDocument) return;
    const contentHeight = frameDocument.documentElement.scrollHeight;
    pillarsFrame.parentElement.style.height = `${contentHeight}px`;
  };
  pillarsFrame?.addEventListener('load', resizePillarsFrame);
  window.addEventListener('resize', resizePillarsFrame);
  setTimeout(resizePillarsFrame, 100);
});
