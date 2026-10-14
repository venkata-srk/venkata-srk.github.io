import './style.css';
import { renderHome } from './sections/home.js';
import { renderAbout } from './sections/about.js';
import { renderProjects, renderProjectDetail } from './sections/projects.js';
import { renderCritiques, renderCritiqueArticle } from './sections/critiques.js';
import { renderContact } from './sections/contact.js';
import { goatCounterEvent, initAnalytics } from './analytics.js';

// --- SPA Router ---
const routes = {
  home: renderHome,
  about: renderAbout,
  projects: renderProjects,
  critiques: renderCritiques,
  contact: renderContact,
};

const app = document.getElementById('app');

const BASE_PATH = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');

function prefixInternalLinks() {
  if (!BASE_PATH) return;

  document.querySelectorAll('a[href^="/"]').forEach(link => {
    const href = link.getAttribute('href');
    if (href.startsWith('//') || href === BASE_PATH || href.startsWith(`${BASE_PATH}/`)) return;
    link.setAttribute('href', `${BASE_PATH}${href}`);
  });
}

function getRelativePath() {
  let path = window.location.pathname;
  if (BASE_PATH && path.startsWith(BASE_PATH)) {
    path = path.slice(BASE_PATH.length);
  }
  return path.replace(/^\/+|\/+$/g, '') || 'home';
}

function getRoute() {
  // If someone enters via hash, convert it to path
  if (window.location.hash) {
    const hashRoute = window.location.hash.slice(1).replace(/^\/+/, '');
    if (hashRoute) {
      const fullUrl = (BASE_PATH || '') + '/' + hashRoute;
      window.history.replaceState(null, null, fullUrl);
    }
  }

  const path = getRelativePath();

  if (path === 'blog' || path.startsWith('blog/')) {
    window.history.replaceState(null, '', (BASE_PATH || '') + '/');
    return { page: 'home' };
  }
  if (path.startsWith('projects/')) {
    return { page: 'project-detail', articleId: path.split('/')[1] };
  }
  // Handle critique article routes: critiques/critique-1
  if (path.startsWith('critiques/')) {
    return { page: 'critique-article', articleId: path.split('/')[1] };
  }
  return { page: path };
}

export function pushRoute(targetPath) {
  const cleanPath = targetPath.replace(/^\/+/, '');
  const fullUrl = (BASE_PATH || '') + '/' + (cleanPath === 'home' ? '' : cleanPath);
  if (window.location.pathname !== fullUrl) {
    window.history.pushState({}, '', fullUrl);
    navigate();
  }
}

let isInitialLoad = true;

function navigate() {
  const { page, articleId } = getRoute();
  goatCounterEvent(window.location.pathname + window.location.search);

  if (isInitialLoad) {
    // Initial load: bypass inline styles so CSS entrance animation can play
    app.style.opacity = '';
    app.style.transform = '';
    
    if (page === 'project-detail' && articleId) {
      renderProjectDetail(app, articleId);
    } else if (page === 'critique-article' && articleId) {
      renderCritiqueArticle(app, articleId);
    } else if (routes[page]) {
      routes[page](app);
    } else {
      routes.home(app);
    }
    prefixInternalLinks();
    updateActiveNav(page === 'project-detail' ? 'projects' : (page === 'critique-article' ? 'critiques' : page));
    setupScrollAnimations();
    isInitialLoad = false;
    return;
  }

  // Fade out for subsequent navigation
  app.style.opacity = '0';
  app.style.transform = 'translateY(12px)';

  setTimeout(() => {
    if (page === 'project-detail' && articleId) {
      renderProjectDetail(app, articleId);
    } else if (page === 'critique-article' && articleId) {
      renderCritiqueArticle(app, articleId);
    } else if (routes[page]) {
      routes[page](app);
    } else {
      routes.home(app);
    }
    prefixInternalLinks();

    // Fade in
    requestAnimationFrame(() => {
      app.style.opacity = '1';
      app.style.transform = 'translateY(0)';
    });

    // Update active nav link
    updateActiveNav(page === 'project-detail' ? 'projects' : (page === 'critique-article' ? 'critiques' : page));

    // Setup scroll animations
    setupScrollAnimations();

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, 200);
}

function updateActiveNav(page) {
  document.querySelectorAll('.nav-link').forEach(link => {
    const isActive = link.dataset.nav === page;
    link.classList.toggle('active', isActive);
    if (isActive) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
}

// Global click handler for internal SPA links
document.addEventListener('click', (e) => {
  const link = e.target.closest('a');
  if (!link) return;

  const href = link.getAttribute('href');
  if (!href) return;

  // Ignore external links, mailto, tel, target="_blank"
  if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || link.target === '_blank') {
    return;
  }

  e.preventDefault();
  const routePath = BASE_PATH && href.startsWith(`${BASE_PATH}/`) ? href.slice(BASE_PATH.length) : href;
  const cleanRoute = routePath.replace(/^[\/#]+/, '');
  pushRoute(cleanRoute || 'home');
});

// --- Theme Manager ---
function initTheme() {
  document.documentElement.dataset.theme = 'dark';
}


// --- Font Manager ---
function initFont() {
  if (document.querySelector('.font-choosers-container')?.hidden) return;

  const headingFontChooser = document.getElementById('heading-font-chooser');
  const bodyFontChooser = document.getElementById('body-font-chooser');
  
  const storedHeadingFont = localStorage.getItem('portfolio-font-heading');
  const storedBodyFont = localStorage.getItem('portfolio-font-body');
  
  // Heading Font
  if (storedHeadingFont) {
    document.documentElement.style.setProperty('--font-family', storedHeadingFont);
    if (headingFontChooser) headingFontChooser.value = storedHeadingFont;
  }

  if (headingFontChooser) {
    headingFontChooser.addEventListener('change', (e) => {
      const selectedFont = e.target.value;
      document.documentElement.style.setProperty('--font-family', selectedFont);
      localStorage.setItem('portfolio-font-heading', selectedFont);
    });
  }

  // Body Font
  if (storedBodyFont) {
    document.documentElement.style.setProperty('--font-family-body', storedBodyFont);
    if (bodyFontChooser) bodyFontChooser.value = storedBodyFont;
  }

  if (bodyFontChooser) {
    bodyFontChooser.addEventListener('change', (e) => {
      const selectedFont = e.target.value;
      document.documentElement.style.setProperty('--font-family-body', selectedFont);
      localStorage.setItem('portfolio-font-body', selectedFont);
    });
  }
}

// --- Mobile Nav ---
function initMobileNav() {
  const hamburger = document.getElementById('nav-hamburger');
  const navLinks = document.getElementById('nav-links');
  const overlay = document.getElementById('nav-overlay');

  function closeMenu() {
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Open menu');
    navLinks.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.contains('open');
    if (isOpen) {
      closeMenu();
    } else {
      hamburger.classList.add('active');
      hamburger.setAttribute('aria-expanded', 'true');
      hamburger.setAttribute('aria-label', 'Close menu');
      navLinks.classList.add('open');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });

  overlay.addEventListener('click', closeMenu);

  // Close on nav link click
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

// --- Nav Scroll Effect ---
function initNavScroll() {
  const nav = document.getElementById('main-nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

// --- Scroll Animations ---
function setupScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  });

  elements.forEach(el => observer.observe(el));
}

// --- Page Transition Styles ---
app.style.transition = 'opacity 0.2s ease, transform 0.2s ease';

// --- Init ---
function init() {
  // Footer year
  document.getElementById('footer-year').textContent = new Date().getFullYear();

  // Theme (forced dark)
  initTheme();
  initFont();

  // Mobile nav
  initMobileNav();

  // Nav scroll
  initNavScroll();

  // Route
  initAnalytics();
  window.addEventListener('popstate', navigate);
  prefixInternalLinks();
  navigate();
}

init();
