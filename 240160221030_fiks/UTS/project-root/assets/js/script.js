/**
 * Portfolio Website - Main JavaScript
 * Features: Dark/Light Mode,  Lightbox, Form Validation, AOS, Preloader
 */



// ============================================
// DOM Elements
// ============================================
const portfolioGrid = document.getElementById('portfolioGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxDesc = document.getElementById('lightboxDesc');
const closeLightbox = document.querySelector('.close-lightbox');
const themeToggle = document.getElementById('themeToggle');
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const preloader = document.getElementById('preloader');

let currentFilter = 'all';

// ============================================
// Preloader
// ============================================
window.addEventListener('load', () => {
    setTimeout(() => {
        if (preloader) {
            preloader.classList.add('fade-out');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
    }, 1000);
});



// ============================================
// Lightbox
// ============================================
function openLightbox(project) {
    lightboxImg.src = project.img;
    lightboxTitle.textContent = project.title;
    lightboxDesc.textContent = project.description;
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeLightboxModal() {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
}

closeLightbox.addEventListener('click', closeLightboxModal);
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightboxModal();
});

// ============================================
// Dark/Light Mode with LocalStorage
// ============================================
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        updateThemeIcon(true);
    } else {
        document.body.classList.remove('dark');
        updateThemeIcon(false);
    }
}

function updateThemeIcon(isDark) {
    const icon = themeToggle.querySelector('i');
    if (isDark) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcon(isDark);
});

initTheme();

// ============================================
// Form Validation with Loading Animation
// ============================================
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    const feedback = document.getElementById('formFeedback');
    
    // Validation
    if (!name || !email || !subject || !message) {
        feedback.textContent = '❌ Semua field harus diisi!';
        feedback.className = 'form-feedback error';
        return;
    }
    
    const emailRegex = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;
    if (!emailRegex.test(email)) {
        feedback.textContent = '❌ Format email tidak valid!';
        feedback.className = 'form-feedback error';
        return;
    }
    
    // Clear error
    feedback.textContent = '';
    feedback.className = 'form-feedback';
    
    // Show loading animation
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        feedback.textContent = '✅ Pesan berhasil dikirim! Terima kasih 🙌';
        feedback.className = 'form-feedback success';
        contactForm.reset();
        
        // Clear success message after 3 seconds
        setTimeout(() => {
            if (feedback) {
                feedback.textContent = '';
                feedback.className = 'form-feedback';
            }
        }, 3000);
    }, 1500);
});

// ============================================
// Smooth Scroll & Navbar Active State
// ============================================
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        
        // Close mobile menu
        navLinks.classList.remove('active');
    });
});

// ============================================
// Hamburger Menu
// ============================================
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target) && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
});

// ============================================
// Animated Progress Bars (Trigger on Scroll)
// ============================================
function animateProgressBars() {
    const progressFills = document.querySelectorAll('.progress-fill');
    progressFills.forEach(fill => {
        const width = fill.dataset.width;
        fill.style.width = width + '%';
    });
}

const aboutSection = document.getElementById('about');
let progressAnimated = false;

const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !progressAnimated) {
            animateProgressBars();
            progressAnimated = true;
            progressObserver.disconnect();
        }
    });
}, { threshold: 0.3 });

if (aboutSection) {
    progressObserver.observe(aboutSection);
}

// ============================================
// Typing Effect for Hero Section
// ============================================
const roles = ["Front-End Developer", "UI Designer", "Freelancer", "Problem Solver"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedSpan = document.getElementById("typed");

function typeEffect() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typedSpan.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedSpan.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
        return;
    }
    
    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }
    
    const speed = isDeleting ? 50 : 100;
    setTimeout(typeEffect, speed);
}

if (typedSpan) {
    typeEffect();
}

// ============================================
// Initialize AOS (Scroll Reveal)
// ============================================
AOS.init({
    duration: 800,
    once: true,
    offset: 100
});

// ============================================
// Sticky Navbar Background Change
// ============================================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = 'var(--shadow-md)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// ============================================
// Initial Render
// ============================================
renderPortfolio();