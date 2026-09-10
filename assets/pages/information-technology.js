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
  const headerBrand = document.querySelector('.site-header .brand');
  let lastScrollY = window.scrollY;
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    headerBrand?.classList.toggle('logo-hidden', currentScrollY > lastScrollY && currentScrollY > 80);
    if (currentScrollY < 20) headerBrand?.classList.remove('logo-hidden');
    lastScrollY = currentScrollY;
  }, { passive: true });
});
  /*
  const main = document.querySelector('main');
  if (main) {
    main.innerHTML = `
      <div class="it-page">
        <section class="it-hero page-hero"><div class="container reveal"><span class="it-eyebrow">Enterprise Productivity</span><h1>IT That Supports Better Work</h1><p class="it-subtitle">Empowering enterprises with intelligent infrastructure, seamless collaboration and frictionless digital workflows.</p><div class="it-intro"><p>Modern productivity is defined by the quality, reliability and security of the technology behind every workflow. The right technology removes friction, automates repetitive overhead and connects teams wherever they work.</p><p>Trancomm delivers end-to-end Information Technology architectures aligned with business outcomes.</p></div></div></section>
        <section class="it-section"><div class="container"><span class="it-eyebrow">Framework</span><h2 class="it-heading">Core Pillars of Better Work IT</h2><div class="it-grid it-grid-2"><article class="it-card"><span class="it-number">01</span><h3>Digital Workplace &amp; Hybrid Collaboration</h3><p>Secure access to tools, context and team communication wherever people work.</p><ul><li><strong>Unified workspaces:</strong> Cloud-enabled environments.</li><li><strong>Collaboration:</strong> VoIP, video and co-authoring.</li><li><strong>Identity:</strong> Single sign-on and adaptive MFA.</li></ul></article><article class="it-card"><span class="it-number">02</span><h3>Workflow Automation &amp; ITSM</h3><p>Replace manual approvals and slow support tickets with connected intelligence.</p><ul><li><strong>Automation:</strong> Digitised procedures.</li><li><strong>ITSM:</strong> Service desk operations aligned with ITIL.</li><li><strong>Dashboards:</strong> Legacy systems connected to analytics.</li></ul></article><article class="it-card"><span class="it-number">03</span><h3>Infrastructure &amp; Cloud</h3><p>Responsive, resilient platforms where network performance supports productive work.</p><ul><li><strong>SD-WAN:</strong> Optimized branch traffic.</li><li><strong>Hybrid cloud:</strong> Private control with scalable public cloud.</li><li><strong>Availability:</strong> Redundant architecture.</li></ul></article><article class="it-card"><span class="it-number">04</span><h3>Security &amp; Operational Resilience</h3><p>Protect assets without creating frustrating barriers for legitimate users.</p><ul><li><strong>Zero trust:</strong> Continuous verification.</li><li><strong>Endpoint protection:</strong> Proactive response.</li><li><strong>Continuity:</strong> Failover protocols.</li></ul></article></div></div></section>
        <section class="it-section it-impact-section"><div class="container"><span class="it-eyebrow">Value Proposition</span><h2 class="it-heading">The Strategic Business Impact</h2><div class="it-impact-grid"><article><span class="it-impact-mark">01</span><div><h3>Remove operational friction</h3><p>Automate repetitive tasks so teams can focus on delivery.</p></div></article><article><span class="it-impact-mark">02</span><div><h3>Work securely anywhere</h3><p>Make secure access feel natural with integrated controls.</p></div></article><article><span class="it-impact-mark">03</span><div><h3>Scale with confidence</h3><p>Build infrastructure that grows with your priorities.</p></div></article></div></div></section>
        <section class="it-section"><div class="container"><span class="it-eyebrow">Ecosystem</span><h2 class="it-heading">Strategic Technology Partners</h2><div class="it-grid it-grid-3"><article class="it-card it-partner"><strong>HUAWEI</strong><h3>Network infrastructure</h3><p>High-capacity networking for resilient enterprise environments.</p></article><article class="it-card it-partner"><strong>CISCO</strong><h3>Routing &amp; cybersecurity</h3><p>Trusted routing, switching and security for connected operations.</p></article><article class="it-card it-partner"><strong>ORBUS</strong><h3>Enterprise architecture</h3><p>Strategy and architecture tools for transformation teams.</p></article></div></div></section>
        <section class="it-section"><div class="container it-cta"><span class="it-eyebrow">Why Trancomm</span><h2>Ready to make IT work better?</h2><p>We translate complex technology environments into dependable systems that help your people do their best work.</p><a class="button" href="Contact – Trancomm.html">Plan your IT needs <span aria-hidden="true">&#8594;</span></a></div></section>
        <section class="it-partners-section" aria-label="Strategic partner logos"><span class="it-eyebrow">Alliances &amp; Certifications</span><h2>Our Strategic Partners</h2><div class="it-logo-slider"><div class="it-logo-track"><img src="3m%20logo.png" alt="3M"><img src="octopus%20logo.jpg" alt="Octopus Command and Control"><img src="hp%20logo.png" alt="HP"><img src="Huawei-logo.jpg" alt="Huawei"><img src="kodak-alaris-logo.png" alt="Kodak Alaris"><img src="molex-logo%20c.png" alt="Molex"><img src="mustek%20logo.jpg" alt="Mustek Limited"><img src="orbus%20logo.jpg" alt="Orbus Software"><img src="tarsus%20logo.jpg" alt="Tarsus Technology Group"><img src="obasa_logo.jpeg" alt="OBASA"><img src="Dell-logo.jpg" alt="Dell"><img src="cisco-logo.png" alt="Cisco"><img src="3m%20logo.png" alt="3M"><img src="octopus%20logo.jpg" alt="Octopus Command and Control"><img src="hp%20logo.png" alt="HP"><img src="Huawei-logo.jpg" alt="Huawei"><img src="kodak-alaris-logo.png" alt="Kodak Alaris"><img src="molex-logo%20c.png" alt="Molex"><img src="mustek%20logo.jpg" alt="Mustek Limited"><img src="orbus%20logo.jpg" alt="Orbus Software"><img src="tarsus%20logo.jpg" alt="Tarsus Technology Group"><img src="obasa_logo.jpeg" alt="OBASA"><img src="Dell-logo.jpg" alt="Dell"><img src="cisco-logo.png" alt="Cisco"></div></div></section>
      </div>`;
  if (main) {
    main.innerHTML = `
      <div class="it-page it-redesign">
        <section class="it-hero page-hero">
          <div class="container reveal">
            <p class="it-eyebrow">Information technology</p>
            <h1>Make every system feel simpler.</h1>
            <p class="it-subtitle">Trancomm turns complex infrastructure, workflows and security requirements into technology people can rely on.</p>
            <div class="it-hero-actions"><a class="button" href="Contact – Trancomm.html">Start a conversation <span aria-hidden="true">&#8594;</span></a><a class="button secondary" href="#capabilities">Explore capabilities</a></div>
          </div>
          <div class="it-hero-grid" aria-hidden="true"></div>
        </section>
        <section class="it-intro-section"><div class="container it-intro-layout"><div><p class="it-eyebrow">The Trancomm approach</p><h2>Technology that clears the path.</h2></div><div class="it-intro-copy"><p>Better work starts with dependable foundations. We connect people, information and infrastructure so teams can move with confidence.</p><div class="it-signal-row"><span><strong>01</strong> Remove friction</span><span><strong>02</strong> Protect progress</span><span><strong>03</strong> Scale intelligently</span></div></div></div></section>
        <section id="capabilities" class="it-section"><div class="container"><div class="it-section-head"><div><p class="it-eyebrow">Capabilities</p><h2>Built around the work.</h2></div><p>From the workplace to the cloud, each layer is designed to support the outcome, not compete with it.</p></div><div class="it-grid it-grid-2"><article class="it-card"><span class="it-number">01</span><h3>Digital workplace</h3><p>Give people secure access to the tools and context they need from wherever work happens.</p><ul><li>Cloud-enabled workspaces</li><li>VoIP, video and co-authoring</li><li>Single sign-on and adaptive MFA</li></ul></article><article class="it-card"><span class="it-number">02</span><h3>Workflow intelligence</h3><p>Replace repetitive administration and disconnected approvals with clear, measurable digital flows.</p><ul><li>Business process automation</li><li>IT service management</li><li>Connected reporting dashboards</li></ul></article><article class="it-card"><span class="it-number">03</span><h3>Infrastructure and cloud</h3><p>Build responsive platforms that stay available as users, sites and applications grow.</p><ul><li>SD-WAN and priority bandwidth</li><li>Hybrid cloud architecture</li><li>High-availability design</li></ul></article><article class="it-card"><span class="it-number">04</span><h3>Security and resilience</h3><p>Protect critical assets with controls that are strong in the background and calm in the foreground.</p><ul><li>Zero-trust architecture</li><li>Endpoint detection and response</li><li>Continuity and failover planning</li></ul></article></div></div></section>
        <section class="it-section it-impact-section"><div class="container"><div class="it-section-head"><div><p class="it-eyebrow">Business impact</p><h2>Progress you can measure.</h2></div><p>Good IT is felt in the quality of the work: faster decisions, fewer interruptions and room to grow.</p></div><div class="it-impact-grid"><article><strong>01</strong><h3>Less friction</h3><p>Automated workflows return time to the people doing the important work.</p></article><article><strong>02</strong><h3>More confidence</h3><p>Security and continuity are built into everyday operations from the start.</p></article><article><strong>03</strong><h3>Clearer scale</h3><p>Flexible infrastructure supports new priorities without unnecessary reinvention.</p></article></div></div></section>
        <section class="it-section"><div class="container"><p class="it-eyebrow">Technology ecosystem</p><h2 class="it-heading">Partners that extend the brief.</h2><div class="it-grid it-grid-3"><article class="it-card it-partner"><strong>HUAWEI</strong><h3>Network infrastructure</h3><p>Connectivity and enterprise networking for resilient environments.</p></article><article class="it-card it-partner"><strong>CISCO</strong><h3>Routing and security</h3><p>Trusted switching, routing and protection for connected operations.</p></article><article class="it-card it-partner"><strong>ORBUS</strong><h3>Enterprise architecture</h3><p>Strategy and architecture tools for transformation teams.</p></article></div></div></section>
        <section class="it-section"><div class="container it-cta"><p class="it-eyebrow">Next move</p><h2>Bring clarity to your IT.</h2><p>Tell us where the friction is. We will help you shape a practical way forward.</p><a class="button" href="Contact – Trancomm.html">Talk to Trancomm <span aria-hidden="true">&#8594;</span></a></div></section>
        <section class="it-partners-section" aria-label="Strategic partner logos"><p class="it-eyebrow">Alliances and certifications</p><h2>Our Strategic Partners</h2><div class="it-logo-slider"><div class="it-logo-track"><img src="3m%20logo.png" alt="3M"><img src="octopus%20logo.jpg" alt="Octopus Command and Control"><img src="hp%20logo.png" alt="HP"><img src="Huawei-logo.jpg" alt="Huawei"><img src="kodak-alaris-logo.png" alt="Kodak Alaris"><img src="molex-logo%20c.png" alt="Molex"><img src="mustek%20logo.jpg" alt="Mustek Limited"><img src="orbus%20logo.jpg" alt="Orbus Software"><img src="tarsus%20logo.jpg" alt="Tarsus Technology Group"><img src="obasa_logo.jpeg" alt="OBASA"><img src="Dell-logo.jpg" alt="Dell"><img src="cisco-logo.png" alt="Cisco"><img src="3m%20logo.png" alt="3M"><img src="octopus%20logo.jpg" alt="Octopus Command and Control"><img src="hp%20logo.png" alt="HP"><img src="Huawei-logo.jpg" alt="Huawei"><img src="kodak-alaris-logo.png" alt="Kodak Alaris"><img src="molex-logo%20c.png" alt="Molex"><img src="mustek%20logo.jpg" alt="Mustek Limited"><img src="orbus%20logo.jpg" alt="Orbus Software"><img src="tarsus%20logo.jpg" alt="Tarsus Technology Group"><img src="obasa_logo.jpeg" alt="OBASA"><img src="Dell-logo.jpg" alt="Dell"><img src="cisco-logo.png" alt="Cisco"></div></div></section>
      </div>`;
    const partnerSection = main.querySelector('.it-partners-section');
    partnerSection?.insertAdjacentHTML('beforebegin', '<section class="it-section it-process-section"><div class="container"><div class="it-section-head"><div><p class="it-eyebrow">Bespoke delivery</p><h2>From brief to backbone.</h2></div><p>We shape each solution around the people, systems and constraints behind the work.</p></div><div class="it-process-grid"><article><strong>01</strong><h3>Discover</h3><p>Understand the environment and define the real need.</p></article><article><strong>02</strong><h3>Shape</h3><p>Design the right combination of infrastructure and protection.</p></article><article><strong>03</strong><h3>Deliver</h3><p>Coordinate implementation, adoption and clear handover.</p></article><article><strong>04</strong><h3>Strengthen</h3><p>Review performance and prepare for what comes next.</p></article></div></div></section>');
  }

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
  const headerBrand = document.querySelector('.site-header .brand');
  let lastScrollY = window.scrollY;
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    headerBrand?.classList.toggle('logo-hidden', currentScrollY > lastScrollY && currentScrollY > 80);
    if (currentScrollY < 20) headerBrand?.classList.remove('logo-hidden');
    lastScrollY = currentScrollY;
  }, { passive: true });
});
*/
