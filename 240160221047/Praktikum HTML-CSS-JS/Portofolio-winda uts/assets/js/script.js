document.addEventListener("DOMContentLoaded", () => {
    
    const loader = document.getElementById("loader");
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
        }, 300); 
    }


const toggleBtn = document.querySelector('.fa-moon') ? document.querySelector('.fa-moon').parentElement : null;

if (toggleBtn) {
    toggleBtn.addEventListener('click', (e) => {
        e.preventDefault(); 
        document.body.classList.toggle('dark-theme');
        
        const icon = toggleBtn.querySelector('i');
        if (icon) {
            if (document.body.classList.contains('dark-theme')) {
                icon.className = 'fas fa-sun';
            } else {
                icon.className = 'fas fa-moon';
            }
        }
    });
}

    const savedTheme = localStorage.getItem('theme') || 
                       (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    applyTheme(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            const isDark = document.documentElement.classList.contains('dark');
            applyTheme(isDark ? 'light' : 'dark');
        });
    }

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

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxCaption = document.getElementById("lightbox-caption");
    const lightboxClose = document.getElementById("lightbox-close");
    const viewButtons = document.querySelectorAll(".view-btn");

    viewButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const card = e.target.closest(".portfolio-item");
            const imgElement = card.querySelector("img");
            const imgSource = imgElement.getAttribute("src") || imgElement.getAttribute("data-src");
            const captionText = card.querySelector("h3").innerText;

            lightboxImg.setAttribute("src", imgSource);
            lightboxCaption.innerText = captionText;
            lightbox.classList.remove("hidden");
        });
    });

    if (lightboxClose) {
        lightboxClose.addEventListener("click", () => lightbox.classList.add("hidden"));
    }
    if (lightbox) {
        lightbox.addEventListener("click", (e) => {
            if(e.target === lightbox) lightbox.classList.add("hidden");
        });
    }

    const form = document.getElementById("contact-form");
    if (form) {
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

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value.trim())) {
                emailInput.classList.add("invalid");
                emailInput.nextElementSibling.classList.remove("hidden");
                isValid = false;
            } else {
                emailInput.classList.remove("invalid");
                emailInput.nextElementSibling.classList.add("hidden");
            }

            if (messageInput.value.trim().length < 10) {
                messageInput.classList.add("invalid");
                messageInput.nextElementSibling.classList.remove("hidden");
                isValid = false;
            } else {
                messageInput.classList.remove("invalid");
                messageInput.nextElementSibling.classList.add("hidden");
            }

            if (isValid) {
                alert("Pesan Terkirim! Terima kasih telah menghubungi saya.");
                form.reset();
            }
        });
    }

    const lazyImages = document.querySelectorAll(".lazy-img");
    if ("IntersectionObserver" in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    image.src = image.dataset.src;
                    image.classList.remove("lazy-img");
                    imageObserver.unobserve(image);
                }
            });
        });
        lazyImages.forEach(image => imageObserver.observe(image));
    } else {
        lazyImages.forEach(image => image.src = image.dataset.src);
    }
});