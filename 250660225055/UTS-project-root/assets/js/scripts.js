// Loading animation
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");

  if (loader) {
    loader.style.display = "none";
  }
});

// Dark / Light mode toggle
const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
  themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      themeToggle.textContent = "☀️";
      localStorage.setItem("theme", "dark");
    } else {
      themeToggle.textContent = "🌙";
      localStorage.setItem("theme", "light");
    }
  });
}

// Menyimpan mode tema
window.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");

    if (themeToggle) {
      themeToggle.textContent = "☀️";
    }
  }
});

// Filter portfolio
const filterButtons = document.querySelectorAll(".filter-buttons button");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const filter = button.getAttribute("data-filter");

    filterButtons.forEach(function (btn) {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    portfolioItems.forEach(function (item) {
      if (filter === "all" || item.classList.contains(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// Lightbox preview portfolio
const projectImages = document.querySelectorAll(".portfolio-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-img");
const closeLightbox = document.querySelector(".close-lightbox");

projectImages.forEach(function (image) {
  image.addEventListener("click", function () {
    if (lightbox && lightboxImage) {
      lightbox.style.display = "flex";
      lightboxImage.src = image.src;
    }
  });
});

if (closeLightbox) {
  closeLightbox.addEventListener("click", function () {
    lightbox.style.display = "none";
  });
}

if (lightbox) {
  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
}

// Validasi form contact
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      alert("Semua field wajib diisi!");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("Format email tidak valid!");
      return;
    }

    document.getElementById("popup").style.display = "flex";
    contactForm.reset();
  });
}
const closePopup =
  document.getElementById("close-popup");

closePopup.addEventListener("click", function () {

  document.getElementById("popup").style.display = "none";

});