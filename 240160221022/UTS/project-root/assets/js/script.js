// =========================
// LOADING SCREEN
// =========================
window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);

    }, 1200);

});


// =========================
// RESPONSIVE NAVBAR
// =========================
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// CLOSE MENU AFTER CLICK
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


// =========================
// DARK MODE
// =========================
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeToggle.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    } else {

        themeToggle.innerHTML =
            '<i class="fa-solid fa-moon"></i>';
    }

});


// =========================
// PORTFOLIO FILTER
// =========================
const filterButtons =
    document.querySelectorAll(".filter-buttons button");

const portfolioItems =
    document.querySelectorAll(".portfolio-item");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // ACTIVE BUTTON
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter =
            button.getAttribute("data-filter");

        portfolioItems.forEach(item => {

            item.style.transform = "scale(0)";
            item.style.opacity = "0";

            setTimeout(() => {

                if (
                    filter === "all" ||
                    item.classList.contains(filter)
                ) {

                    item.style.display = "block";

                    setTimeout(() => {
                        item.style.transform = "scale(1)";
                        item.style.opacity = "1";
                    }, 100);

                } else {

                    item.style.display = "none";
                }

            }, 300);

        });

    });

});


// =========================
// LIGHTBOX
// =========================
const lightbox =
    document.getElementById("lightbox");

const lightboxImg =
    document.getElementById("lightbox-img");

const closeBtn =
    document.querySelector(".close");

portfolioItems.forEach(item => {

    const img = item.querySelector("img");

    img.addEventListener("click", () => {

        lightbox.style.display = "flex";
        lightboxImg.src = img.src;

    });

});

// CLOSE BUTTON
closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";

});

// CLOSE WHEN CLICK OUTSIDE
lightbox.addEventListener("click", (e) => {

    if (e.target !== lightboxImg) {
        lightbox.style.display = "none";
    }

});


// =========================
// CONTACT FORM VALIDATION
// =========================
const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");

contactForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const nama =
        document.getElementById("nama").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const pesan =
        document.getElementById("pesan").value.trim();

    // VALIDASI
    if (
        nama === "" ||
        email === "" ||
        pesan === ""
    ) {

        formMessage.style.color = "red";
        formMessage.innerText =
            "Semua field wajib diisi!";

        return;
    }

    // EMAIL VALID
    const emailPattern =
        /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {

        formMessage.style.color = "red";
        formMessage.innerText =
            "Format email tidak valid!";

        return;
    }

    // SUCCESS
    formMessage.style.color = "limegreen";
    formMessage.innerText =
        "Pesan berhasil dikirim ✨";

    contactForm.reset();

});


// =========================
// SCROLL REVEAL ANIMATION
// =========================
const revealElements =
    document.querySelectorAll(
        ".section, .portfolio-item, .experience-card"
    );

window.addEventListener("scroll", revealOnScroll);

function revealOnScroll() {

    const windowHeight =
        window.innerHeight;

    revealElements.forEach(element => {

        const revealTop =
            element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            element.style.opacity = "1";
            element.style.transform =
                "translateY(0)";

        }

    });

}


// INITIAL STYLE
revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform =
        "translateY(50px)";

    element.style.transition =
        "all 0.8s ease";

});


// =========================
// NAVBAR SHADOW ON SCROLL
// =========================
window.addEventListener("scroll", () => {

    const header =
        document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.08)";

    } else {

        header.style.boxShadow = "none";
    }

});