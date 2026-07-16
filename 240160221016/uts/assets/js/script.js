document.addEventListener('DOMContentLoaded', () => {
  /* ==========================================================================
     1. LOADING ANIMATION
     ========================================================================== */
  const loader = document.getElementById('loading-overlay');
  
  // Fade out loader on window load
  window.addEventListener('load', () => {
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500);
    }
  });

  // Fallback loader removal if window load is slow/fails
  setTimeout(() => {
    if (loader && loader.style.display !== 'none') {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500);
    }
  }, 3000);

  /* ==========================================================================
     2. DARK/LIGHT THEME MANAGER
     ========================================================================== */
  const themeToggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  // Icons for toggle btn (SVG paths or shapes)
  const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
  const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;

  // Initialize theme from LocalStorage
  const savedTheme = localStorage.getItem('theme') || 'dark'; // Dark theme as premium default
  if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    if (themeToggleBtn) themeToggleBtn.innerHTML = sunIcon;
  } else {
    body.classList.remove('dark-theme');
    if (themeToggleBtn) themeToggleBtn.innerHTML = moonIcon;
  }

  // Toggle theme action
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      body.classList.toggle('dark-theme');
      const isDark = body.classList.contains('dark-theme');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      themeToggleBtn.innerHTML = isDark ? sunIcon : moonIcon;
      
      // Trigger toast message
      showToast(`Switched to ${isDark ? 'Dark' : 'Light'} Mode`, 'success');
    });
  }

  /* ==========================================================================
     3. MOBILE NAVIGATION MENU
     ========================================================================== */
  const hamburger = document.getElementById('hamburger-menu');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-item a');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('mobile-active');
    });

    // Close menu when a link is clicked
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('mobile-active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('mobile-active');
      }
    });
  }

  /* ==========================================================================
     4. SCROLL SPY (Navbar Active Section Tracker)
     ========================================================================== */
  const sections = document.querySelectorAll('section');
  const menuItems = document.querySelectorAll('.nav-item');

  function scrollSpy() {
    let currentSectionId = '';
    const scrollPosition = window.scrollY + 100; // 100px offset

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    menuItems.forEach(item => {
      item.classList.remove('active');
      const link = item.querySelector('a');
      if (link && link.getAttribute('href') === `#${currentSectionId}`) {
        item.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', scrollSpy);

  /* ==========================================================================
     5. SKILLS PROGRESS BARS ANIMATION (IntersectionObserver)
     ========================================================================== */
  const skillsSection = document.getElementById('about');
  const progressBars = document.querySelectorAll('.skill-progress-bar');

  const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        progressBars.forEach(bar => {
          const targetProgress = bar.getAttribute('data-progress');
          bar.style.width = `${targetProgress}%`;
        });
        // Disconnect after animation completes
        skillsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  if (skillsSection) {
    skillsObserver.observe(skillsSection);
  }

  /* ==========================================================================
     6. PORTFOLIO GALLERY FILTERS
     ========================================================================== */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioCards = document.querySelectorAll('.portfolio-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active from all buttons
      filterButtons.forEach(b => b.classList.remove('active'));
      // Add active to current button
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      portfolioCards.forEach(card => {
        card.style.transition = 'transform 0.4s ease, opacity 0.4s ease';
        
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
          card.classList.remove('hidden');
          // Brief timeout to trigger entrance scale
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.8)';
          // Add hidden class after fadeout finishes
          setTimeout(() => {
            card.classList.add('hidden');
          }, 300);
        }
      });
    });
  });

  /* ==========================================================================
     7. PORTFOLIO LIGHTBOX PREVIEW
     ========================================================================== */
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = lightbox ? lightbox.querySelector('.lightbox-img') : null;
  const lightboxTitle = lightbox ? lightbox.querySelector('.lightbox-title') : null;
  const lightboxDesc = lightbox ? lightbox.querySelector('.lightbox-desc') : null;
  const lightboxClose = lightbox ? lightbox.querySelector('.lightbox-close-btn') : null;
  const openLightboxBtns = document.querySelectorAll('.open-lightbox');

  if (lightbox && lightboxImg) {
    openLightboxBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const card = btn.closest('.portfolio-card');
        const img = card.querySelector('.portfolio-img-wrapper img');
        const title = card.querySelector('.portfolio-card-title').textContent;
        const desc = card.querySelector('.portfolio-card-desc').textContent;

        lightboxImg.src = img.src;
        lightboxTitle.textContent = title;
        lightboxDesc.textContent = desc;

        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Lock scrolling
      });
    });

    // Close Lightbox functions
    const closeLightbox = () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = 'auto'; // Unlock scrolling
    };

    if (lightboxClose) {
      lightboxClose.addEventListener('click', closeLightbox);
    }

    // Close on backdrop click
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    // Close on Escape key press
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });
  }

  /* ==========================================================================
     8. CONTACT FORM VALIDATION
     ========================================================================== */
  const contactForm = document.getElementById('contact-form');
  const nameInput = document.getElementById('form-name');
  const emailInput = document.getElementById('form-email');
  const messageInput = document.getElementById('form-message');

  const setError = (element, message) => {
    const parent = element.parentElement;
    parent.classList.add('error');
    parent.classList.remove('success');
    const errorDisplay = parent.querySelector('.form-error-msg');
    if (errorDisplay) {
      errorDisplay.textContent = message;
    }
  };

  const setSuccess = (element) => {
    const parent = element.parentElement;
    parent.classList.add('success');
    parent.classList.remove('error');
  };

  const validateName = () => {
    const value = nameInput.value.trim();
    if (value === '') {
      setError(nameInput, 'Nama tidak boleh kosong');
      return false;
    } else if (value.length < 3) {
      setError(nameInput, 'Nama harus minimal 3 karakter');
      return false;
    } else {
      setSuccess(nameInput);
      return true;
    }
  };

  const validateEmail = () => {
    const value = emailInput.value.trim();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (value === '') {
      setError(emailInput, 'Email tidak boleh kosong');
      return false;
    } else if (!emailPattern.test(value)) {
      setError(emailInput, 'Format email tidak valid');
      return false;
    } else {
      setSuccess(emailInput);
      return true;
    }
  };

  const validateMessage = () => {
    const value = messageInput.value.trim();
    if (value === '') {
      setError(messageInput, 'Pesan tidak boleh kosong');
      return false;
    } else if (value.length < 10) {
      setError(messageInput, 'Pesan harus minimal 10 karakter');
      return false;
    } else {
      setSuccess(messageInput);
      return true;
    }
  };

  // Real-time Validation Listeners
  if (nameInput) nameInput.addEventListener('input', validateName);
  if (emailInput) emailInput.addEventListener('input', validateEmail);
  if (messageInput) messageInput.addEventListener('input', validateMessage);

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const isNameValid = validateName();
      const isEmailValid = validateEmail();
      const isMessageValid = validateMessage();

      if (isNameValid && isEmailValid && isMessageValid) {
        // Mock Form Submission Success
        showToast('Pesan Anda berhasil terkirim!', 'success');
        
        // Reset the form
        contactForm.reset();
        
        // Clear classes
        [nameInput, emailInput, messageInput].forEach(input => {
          const parent = input.parentElement;
          parent.classList.remove('success');
          parent.classList.remove('error');
        });
      } else {
        showToast('Mohon periksa kembali formulir Anda', 'error');
      }
    });
  }

  /* ==========================================================================
     9. TOAST NOTIFICATION CREATOR
     ========================================================================== */
  function showToast(message, type = 'success') {
    // Create toast container if not exists
    let toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.className = 'toast-container';
      document.body.appendChild(toastContainer);
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let icon = '';
    if (type === 'success') {
      icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
    } else {
      icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;
    }

    toast.innerHTML = `${icon} <span>${message}</span>`;
    toastContainer.appendChild(toast);

    // Auto-remove toast
    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 4000);
  }

  /* ==========================================================================
     10. REVEAL-ON-SCROLL ANIMATION (General IntersectionObserver)
     ========================================================================== */
  const revealElements = document.querySelectorAll('.reveal-element');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => revealObserver.observe(el));
});
