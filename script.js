// Small site interactions: mobile navigation, active links, and back-to-top.

const navToggle = document.querySelector("[data-nav-toggle]");
const navMenu = document.querySelector("[data-nav-menu]");
const navLinks = document.querySelectorAll(".nav-menu a");
const sections = document.querySelectorAll("main section[id]");
const backToTop = document.querySelector("[data-back-to-top]");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function loadTwitterWidgets() {
  if (window.twttr && window.twttr.widgets) {
    window.twttr.widgets.load();
  }
}

function closeMobileMenu() {
  if (!navMenu || !navToggle) return;
  navMenu.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
}

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

const activeLinkObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  {
    rootMargin: "-35% 0px -55% 0px",
    threshold: 0,
  }
);

sections.forEach((section) => activeLinkObserver.observe(section));

if (!prefersReducedMotion) {
  const motionTargets = document.querySelectorAll(
    "section > h2, section > p, .entry, .quote, .quick-links, .tweet-box, .contact-list"
  );

  const motionObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.08,
    }
  );

  motionTargets.forEach((target, index) => {
    target.classList.add("motion-item");
    target.style.transitionDelay = `${Math.min(index % 5, 4) * 45}ms`;
    motionObserver.observe(target);
  });
}

function updateBackToTop() {
  if (!backToTop) return;
  backToTop.classList.toggle("visible", window.scrollY > 600);
}

window.addEventListener("scroll", updateBackToTop, { passive: true });
window.addEventListener("load", loadTwitterWidgets);

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
