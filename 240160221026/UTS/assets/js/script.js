document.addEventListener('DOMContentLoaded', function() {
  // Loader
  const loader = document.querySelector('.loader');
  
  // Hide loader after page loads
  window.addEventListener('load', function() {
    setTimeout(function() {
      loader.classList.add('hidden');
    }, 500);
  });

  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav-list');
  
  menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    navList.classList.toggle('active');
  });

  // Close mobile menu when clicking a nav link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (navList.classList.contains('active')) {
        menuToggle.classList.remove('active');
        navList.classList.remove('active');
      }
      
      // Update active link
      navLinks.forEach(item => item.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Dark/light mode toggle
  const modeToggle = document.getElementById('mode-toggle');
  const body = document.body;
  const modeIcon = document.querySelector('.mode-icon');
  
  // Check for saved user preference
  const savedMode = localStorage.getItem('mode');
  if (savedMode) {
    body.classList.add(savedMode);
    updateModeIcon(savedMode);
  }
  
  modeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    
    const currentMode = body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
    localStorage.setItem('mode', currentMode);
    updateModeIcon(currentMode);
  });
  
  function updateModeIcon(mode) {
    modeIcon.textContent = mode === 'dark-mode' ? '☀️' : '🌙';
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll('section');
  
  window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
    
    // Header shadow on scroll
    if (window.scrollY > 50) {
      document.querySelector('.header').classList.add('scrolled');
    } else {
      document.querySelector('.header').classList.remove('scrolled');
    }
    
    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
      backToTop.classList.add('active');
    } else {
      backToTop.classList.remove('active');
    }
  });

  // Portfolio filter
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      const filterValue = this.getAttribute('data-filter');
      
      portfolioItems.forEach(item => {
        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
          }, 50);
        } else {
          item.style.opacity = '0';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // Portfolio modal
  const viewButtons = document.querySelectorAll('.portfolio-view-btn');
  const modal = document.getElementById('portfolio-modal');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalCategory = document.getElementById('modal-category');
  const modalClose = document.querySelector('.modal-close');
  
  viewButtons.forEach(button => {
    button.addEventListener('click', function() {
      const imgSrc = this.getAttribute('data-img');
      const title = this.getAttribute('data-title');
      const category = this.getAttribute('data-category');
      
      modalImg.src = imgSrc;
      modalImg.alt = title;
      modalTitle.textContent = title;
      modalCategory.textContent = category;
      
      modal.classList.add('show');
      document.body.style.overflow = 'hidden';
    });
  });
  
  modalClose.addEventListener('click', function() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
  });
  
  // Close modal when clicking outside
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.classList.remove('show');
      document.body.style.overflow = 'auto';
    }
  });

  // Contact form validation
  const contactForm = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simple validation
      const name = this.elements['name'].value.trim();
      const email = this.elements['email'].value.trim();
      const subject = this.elements['subject'].value.trim();
      const message = this.elements['message'].value.trim();
      
      if (name === '' || email === '' || subject === '' || message === '') {
        showFormMessage('error', 'Harap isi semua field!');
        return;
      }
      
      if (!validateEmail(email)) {
        showFormMessage('error', 'Email tidak valid!');
        return;
      }
      
      // Simulate form submission
      showFormMessage('success', 'Pesan terkirim! Terima kasih telah menghubungi saya.');
      this.reset();
      
      // Reset message after 5 seconds
      setTimeout(() => {
        formMessage.style.display = 'none';
      }, 5000);
    });
  }
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  
  function showFormMessage(type, text) {
    formMessage.textContent = text;
    formMessage.className = 'form-message ' + type;
    formMessage.style.display = 'block';
  }

  // Animate skill bars on scroll
  const skillBars = document.querySelectorAll('.skill-progress');
  
  function animateSkillBars() {
    skillBars.forEach(bar => {
      const percent = bar.getAttribute('data-percent');
      bar.style.width = '0%';
      
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          bar.style.width = percent + '%';
          observer.unobserve(bar);
        }
      }, { threshold: 0.5 });
      
      observer.observe(bar);
    });
  }
  
  animateSkillBars();

  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
});