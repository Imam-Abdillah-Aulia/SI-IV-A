// DARK MODE
const toggle = document.getElementById("toggleDark");

toggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        toggle.innerText = "Light Mode";
    } else {
        toggle.innerText = "Dark Mode";
    }
});

// FILTER PORTFOLIO
const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-item");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const filter = button.getAttribute("data-filter");

        projects.forEach(project => {

            if (
                project.getAttribute("data-category") === filter ||
                filter === "all"
            ) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }
        });
    });
});

// CONTACT FORM VALIDATION
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Semua form harus diisi!");
    } else {
        alert("Pesan berhasil dikirim!");
        contactForm.reset();
    }
});

// LIGHTBOX
const previewButtons = document.querySelectorAll(".preview-btn");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.querySelector(".close-lightbox");

previewButtons.forEach(button => {

    button.addEventListener("click", function () {

        const imgSrc = this.parentElement.parentElement.querySelector("img").src;

        lightbox.style.display = "block";
        lightboxImg.src = imgSrc;
    });
});

closeLightbox.addEventListener("click", function () {
    lightbox.style.display = "none";
});