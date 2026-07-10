// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Project Filter
const filterButtons = document.querySelectorAll(".filter-btn");
const projectBoxes = document.querySelectorAll(".project-box");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    document.querySelector(".filter-btn.active")?.classList.remove("active");
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");
    projectBoxes.forEach(box => {
      box.style.display = filter === "all" || box.classList.contains(filter) ? "block" : "none";
    });
  });
});

// Theme Toggle
const toggleTheme = document.getElementById("toggle-theme");
toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});

// Form Submit with Loader
const form = document.getElementById("contactForm");
const loader = document.getElementById("loader");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  loader.style.display = "flex";

  setTimeout(() => {
    loader.style.display = "none";
    alert("Message sent successfully!");
    form.reset();
  }, 1500);
});

const modal = document.getElementById("lightboxModal");
const modalImg = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll(".project-box img").forEach(img => {
  img.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modalImg.src = img.src;
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});