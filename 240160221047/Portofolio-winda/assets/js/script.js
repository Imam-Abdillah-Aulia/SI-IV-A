document.addEventListener("DOMContentLoaded", () => {
    
    // 1. PRELOADER (Selesai dalam 500ms)
    const preloader = document.getElementById("preloader");
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add("opacity-0");
            setTimeout(() => preloader.remove(), 500);
        }, 500);
    }

    // 2. DARK / LIGHT MODE
    const themeToggleDesktop = document.getElementById("theme-toggle-desktop");
    const themeToggleMobile = document.getElementById("theme-toggle-mobile");
    
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    const savedTheme = localStorage.getItem('theme') || 
                       (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    applyTheme(savedTheme);

    [themeToggleDesktop, themeToggleMobile].forEach(btn => {
        if(btn) {
            btn.addEventListener("click", () => {
                const isDark = document.documentElement.classList.contains('dark');
                applyTheme(isDark ? 'light' : 'dark');
            });
        }
    });

    // 3. MOBILE MENU
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    if(menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });
    }

    // 4. PORTFOLIO FILTER
    const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("bg-indigo-500", "text-white"));
            btn.classList.add("bg-indigo-500", "text-white");

            const filterValue = btn.getAttribute("data-filter");

            portfolioItems.forEach(item => {
                if (filterValue === "all" || item.getAttribute("data-category") === filterValue) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });

    // 5. LIGHTBOX PREVIEW
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxCaption = document.getElementById("lightbox-caption");
    const lightboxClose = document.getElementById("lightbox-close");
    const viewButtons = document.querySelectorAll(".view-btn");

    viewButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const card = e.target.closest(".portfolio-item");
            const imgSource = card.querySelector("img").getAttribute("src") || card.querySelector("img").getAttribute("data-src");
            const captionText = card.querySelector("h3").innerText;

            lightboxImg.setAttribute("src", imgSource);
            lightboxCaption.innerText = captionText;
            lightbox.classList.remove("hidden");
        });
    });

    if(lightboxClose) {
        lightboxClose.addEventListener("click", () => lightbox.classList.add("hidden"));
    }

    // 6. CONTACT VALIDATION
    const form = document.getElementById("contact-form");
    if(form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            let isValid = true;

            const nameInput = document.getElementById("name");
            const emailInput = document.getElementById("email");
            const messageInput = document.getElementById("message");

            if (nameInput.value.trim().length < 3) {
                nameInput.classList.add("invalid");
                nameInput.nextElementSibling.classList.remove("hidden");
                isValid = false;
            } else {
                nameInput.classList.remove("invalid");
                nameInput.nextElementSibling.classList.add("hidden");
            }

            if (isValid) {
                alert("Pesan tervalidasi dengan sukses!");
                form.reset();
            }
        });
    }

    // 7. LAZY LOADING IMAGES
    const lazyImages = document.querySelectorAll(".lazy-img");
    if ("IntersectionObserver" in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    image.src = image.dataset.src;
                    imageObserver.unobserve(image);
                }
            });
        });
        lazyImages.forEach(image => imageObserver.observe(image));
    } else {
        lazyImages.forEach(image => image.src = image.dataset.src);
    }
});