// LOADER

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.display = "none";

});


// DARK MODE

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

});


// PORTFOLIO FILTER

const filterButtons = document.querySelectorAll(".filter-buttons button");

const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        document
            .querySelector(".filter-buttons .active")
            .classList.remove("active");

        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        portfolioItems.forEach(item => {

            if (
                filter === "all" ||
                item.classList.contains(filter)
            ) {

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        });

    });

});


// LIGHTBOX

const lightbox = document.getElementById("lightbox");

const lightboxImg = lightbox.querySelector("img");

portfolioItems.forEach(item => {

    item.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImg.src =
            item.querySelector("img").src;

    });

});

lightbox.addEventListener("click", () => {

    lightbox.style.display = "none";

});


// FORM VALIDATION

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const message =
        document.getElementById("message").value;

    if (
        name === "" ||
        email === "" ||
        message === ""
    ) {

        alert("Please fill all fields!");

    } else {

        alert("Message sent successfully!");

        contactForm.reset();

    }

});