/* ============================================================
   script.js — Aldi Restu Fauzi
   ============================================================ */

/* ==============================
   DARK / LIGHT MODE
============================== */
var themeToggle = document.getElementById('themeToggle');
var themeIcon   = document.getElementById('themeIcon');
var html        = document.documentElement;

function setTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  themeIcon.className = (theme === 'dark') ? 'fas fa-sun' : 'fas fa-moon';
}

setTheme(localStorage.getItem('theme') || 'light');

themeToggle.addEventListener('click', function () {
  setTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});

/* ==============================
   HAMBURGER MENU
============================== */
var hamburger = document.getElementById('hamburger');
var navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(function (a) {
  a.addEventListener('click', function () {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

/* ==============================
   SCROLL REVEAL
============================== */
var revealEls = document.querySelectorAll('.reveal');

new IntersectionObserver(function (entries) {
  entries.forEach(function (e) {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 }).observe
  ? (function () {
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      }, { threshold: 0.1 });
      revealEls.forEach(function (el) { obs.observe(el); });
    })()
  : revealEls.forEach(function (el) { el.classList.add('visible'); });

/* ==============================
   SKILL BAR ANIMASI
============================== */
/* ==============================
   RESPONSIVE FIX
============================== */
/* ==============================
   MOBILE  FIX
============================== */
var skillObs = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) {
    if (e.isIntersecting) {
      e.target.style.width = e.target.getAttribute('data-pct') + '%';
      skillObs.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-fill').forEach(function (bar) {
  skillObs.observe(bar);
});

/* ==============================
   LAZY LOAD GAMBAR
============================== */
var lazyObs = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) {
    if (e.isIntersecting) {
      var img = e.target;
      if (img.getAttribute('data-src')) img.src = img.getAttribute('data-src');
      img.classList.add('loaded');
      lazyObs.unobserve(img);
    }
  });
});

document.querySelectorAll('img.lazy').forEach(function (img) {
  lazyObs.observe(img);
});