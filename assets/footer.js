document.addEventListener('DOMContentLoaded', () => {
  const mojibakeDash = /\u00e2.{2}/g;
  document.querySelectorAll('a[href]').forEach((link) => {
    link.href = link.getAttribute('href').replace(mojibakeDash, '\u2013');
  });

  document.querySelectorAll('h1, h2, h3').forEach((heading) => {
    const cleanText = heading.textContent.replace(/^\s*\d+\.\s+/, '');
    if (cleanText !== heading.textContent) heading.textContent = cleanText;
  });
  document.querySelectorAll('.training-categories span').forEach((label) => {
    label.textContent = label.textContent.replace(/^\s*\d+\s*\/\s*/, '');
  });

  const menuToggle = document.querySelector('.menu-toggle');
  if (menuToggle) menuToggle.innerHTML = '&#9776;';

  document.querySelectorAll('.button span[aria-hidden="true"]').forEach((icon) => {
    if (icon.textContent.includes('\u00e2')) icon.innerHTML = '&#8594;';
  });

  document.querySelectorAll('.hero .eyebrow').forEach((eyebrow) => {
    if (eyebrow.textContent.includes('\u00e2')) eyebrow.innerHTML = 'Transport &#8226; Communications &#8226; Progress';
  });

  const coverSection = document.querySelector('.page-hero, .contact-stage');
  if (coverSection && !coverSection.querySelector('video')) {
    coverSection.classList.add('video-cover-section');
    const video = document.createElement('video');
    video.className = 'page-hero-video';
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.setAttribute('aria-hidden', 'true');
    video.innerHTML = '<source src="technology_background_1(720p).mp4" type="video/mp4">';
    const overlay = document.createElement('div');
    overlay.className = 'page-hero-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    coverSection.prepend(overlay);
    coverSection.prepend(video);
  }

  const footer = document.querySelector('.site-footer');
  if (!footer) return;

  footer.innerHTML = `
    <div class="footer-container">
      <div class="footer-brand">
        <a href="Trancomm – We Are Trancomm.html" class="footer-logo">
          <img src="assets/trancomm-logo.svg" alt="Trancomm">
        </a>
        <div class="social-icons" aria-label="Social links">
          <a href="#" aria-label="LinkedIn">in</a>
          <a href="#" aria-label="X">X</a>
          <a href="#" aria-label="YouTube">&#9654;</a>
          <a href="#" aria-label="Website">@</a>
        </div>
        <div class="copyright">&copy; <span data-year></span> Trancomm Communications. All rights reserved.</div>
        <div class="legal-links"><a href="#">Privacy Policy</a><a href="#">Terms and Conditions</a></div>
      </div>
      <div class="footer-column">
        <h4>Company</h4>
        <ul>
          <li><a href="About Us – Trancomm.html">About</a></li>
          <li><a href="Services – Trancomm.html">Services</a></li>
          <li><a href="Our Clients – Trancomm.html">Our Clients</a></li>
          <li><a href="Our Records – Trancomm.html">Our Records</a></li>
          <li><a href="Contact – Trancomm.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h4>Core Services</h4>
        <ul>
          <li><a href="Telecommunications – Trancomm.html">Telecommunications</a></li>
          <li><a href="Information Technology (IT) – Trancomm.html">IT Infrastructure</a></li>
          <li><a href="Bespoke Solutions – Trancomm.html">Bespoke Solutions</a></li>
          <li><a href="Consulting – Trancomm.html">Strategic Consulting</a></li>
          <li><a href="Training – Trancomm.html">Training</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h4>Industries</h4>
        <ul>
          <li><a href="Our Clients – Trancomm.html">Public Sector &amp; Government</a></li>
          <li><a href="Telecommunications – Trancomm.html">Telecommunications Operators</a></li>
          <li><a href="Contracts & Accreditation – Trancomm.html">Security &amp; Compliance</a></li>
          <li><a href="Products & Partners – Trancomm.html">Strategic Partners</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h4>Digital &amp; AI</h4>
        <ul>
          <li><a href="AI & Data Analytics – Trancomm.html">AI &amp; Data Analytics</a></li>
          <li><a href="Bespoke Solutions – Trancomm.html">Custom Solutions</a></li>
          <li><a href="Information Technology (IT) – Trancomm.html">IT Systems</a></li>
          <li><a href="Skills & Certification – Trancomm.html">Skills &amp; Certification</a></li>
        </ul>
      </div>
    </div>
  `;

  footer.querySelectorAll('[data-year]').forEach((element) => {
    element.textContent = new Date().getFullYear();
  });
});
