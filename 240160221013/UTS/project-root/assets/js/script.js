document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       1. LOADING ANIMATION
    ========================== */
    const loader = document.getElementById("page-loader");
    window.addEventListener("load", () => {
        setTimeout(() => {
            loader.classList.add("hide-loader");
        }, 800);
    });


    /* ==========================
       2. RESPONSIVE NAV MENU
    ========================== */
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });

    // auto close nav on click
    document.querySelectorAll(".nav a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            menuToggle.classList.remove("active");
        });
    });


    /* ==========================
       3. DARK / LIGHT MODE
    ========================== */
    const themeToggle = document.getElementById("theme-toggle");

    function setTheme(theme) {
        document.body.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
        themeToggle.textContent = theme === "light" ? "🌞" : "🌙";
    }

    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);

    themeToggle.addEventListener("click", () => {
        const currentTheme = document.body.getAttribute("data-theme");
        setTheme(currentTheme === "dark" ? "light" : "dark");
    });


    /* ==========================
       4. PORTFOLIO FILTER
    ========================== */
    const filterBtns = document.querySelectorAll(".filter-btn");
    const projects = document.querySelectorAll(".project-card");

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filter = btn.dataset.filter;

            projects.forEach(project => {
                const category = project.dataset.category;

                if (filter === "all" || filter === category) {
                    project.style.display = "block";
                } else {
                    project.style.display = "none";
                }
            });
        });
    });


    /* ==========================
       5. LIGHTBOX PREVIEW
    ========================== */
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeLightbox = document.getElementById("close-lightbox");

    document.querySelectorAll(".btn-lightbox").forEach(btn => {
        btn.addEventListener("click", () => {
            const imgSrc = btn.dataset.img;
            lightboxImg.src = imgSrc;
            lightbox.classList.add("show");
        });
    });

    closeLightbox.addEventListener("click", () => {
        lightbox.classList.remove("show");
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove("show");
        }
    });


    /* ==========================
       6. CONTACT FORM VALIDATION
    ========================== */
    const form = document.getElementById("contact-form");
    const successMsg = document.getElementById("form-success");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");

        let isValid = true;

        function showError(input, msg) {
            const error = input.parentElement.querySelector(".error-msg");
            error.textContent = msg;
            isValid = false;
        }

        function clearError(input) {
            const error = input.parentElement.querySelector(".error-msg");
            error.textContent = "";
        }

        if (name.value.trim() === "") {
            showError(name, "Nama wajib diisi!");
        } else {
            clearError(name);
        }

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.value.match(emailPattern)) {
            showError(email, "Email tidak valid!");
        } else {
            clearError(email);
        }

        if (message.value.trim().length < 10) {
            showError(message, "Pesan minimal 10 karakter!");
        } else {
            clearError(message);
        }

        if (isValid) {
            successMsg.textContent = "Pesan berhasil dikirim! (Simulasi)";
            form.reset();

            setTimeout(() => {
                successMsg.textContent = "";
            }, 3000);
        }
    });

});