// ================= SAVE THEME =================

if(localStorage.getItem("theme") === "light"){

    document.body.classList.add("light-mode");

}

// ================= LOADING SCREEN =================

window.addEventListener("load", () => {

    const loadingScreen = document.getElementById("loading-screen");

    setTimeout(() => {

        loadingScreen.style.opacity = "0";

        setTimeout(() => {
            loadingScreen.style.display = "none";
        }, 500);

    }, 1200);

});

// ================= MOBILE MENU =================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

// ================= CLOSE MENU WHEN CLICK =================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

// ================= DARK / LIGHT MODE =================

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

   document.body.classList.toggle("light-mode");

if(document.body.classList.contains("light-mode")){

    localStorage.setItem("theme","light");

}else{

    localStorage.setItem("theme","dark");

}

    const icon = themeToggle.querySelector("i");

    if(document.body.classList.contains("light-mode")){

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    }else{

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

});

// ================= CONTACT FORM VALIDATION =================

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if(name === "" || email === "" || message === ""){

        alert("Please fill all fields!");

        return;

    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!email.match(emailPattern)){

        alert("Invalid email!");

        return;

    }

    alert("Message successfully sent!");

    contactForm.reset();

});

// ================= PORTFOLIO FILTER =================

const filterButtons = document.querySelectorAll(".portfolio-filter button");
const portfolioCards = document.querySelectorAll(".portfolio-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // remove active
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // add active
        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        portfolioCards.forEach(card => {

            if(filter === "all"){

                card.style.display = "block";

            }else{

                if(card.classList.contains(filter)){

                    card.style.display = "block";

                }else{

                    card.style.display = "none";

                }

            }

        });

    });

});

// ================= SCROLL HEADER EFFECT =================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){

        header.style.background = "rgba(0,0,0,0.8)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";

    }else{

        header.style.background = "rgba(0,0,0,0.4)";
        header.style.boxShadow = "none";

    }

});

// ================= ACTIVE NAVIGATION =================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if(link.getAttribute("href") === `#${current}`){

            link.classList.add("active-link");

        }

    });

});

// ================= SCROLL REVEAL ANIMATION =================

const revealElements = document.querySelectorAll(
    ".service-card, .portfolio-card, .skill-card, .hero-content, .section-title"
);

function revealOnScroll(){

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if(revealTop < windowHeight - revealPoint){

            element.classList.add("show-reveal");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// ================= TYPING EFFECT =================

const heroText = document.querySelector(".hero-small-text");

const words = [
    "Frontend Developer",
    "UI/UX Designer",
    "Creative Coder",
    "Modern Web Designer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect(){

    const currentWord = words[wordIndex];

    if(isDeleting){

        heroText.innerHTML = currentWord.substring(0, charIndex--);

    }else{

        heroText.innerHTML = currentWord.substring(0, charIndex++);

    }

    if(!isDeleting && charIndex === currentWord.length){

        isDeleting = true;

        setTimeout(typeEffect, 1200);

        return;

    }

    if(isDeleting && charIndex === 0){

        isDeleting = false;

        wordIndex++;

        if(wordIndex >= words.length){

            wordIndex = 0;

        }

    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);

}

typeEffect();

// ================= CURSOR GLOW EFFECT =================

const cursorGlow = document.createElement("div");

cursorGlow.classList.add("cursor-glow");

document.body.appendChild(cursorGlow);

document.addEventListener("mousemove", (e) => {

    cursorGlow.style.left = e.pageX + "px";
    cursorGlow.style.top = e.pageY + "px";

});

// ================= PARALLAX EFFECT =================

window.addEventListener("mousemove", (e) => {

    const glow1 = document.querySelector(".glow1");
    const glow2 = document.querySelector(".glow2");

    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    glow1.style.transform = `translate(${x * 40}px, ${y * 40}px)`;
    glow2.style.transform = `translate(-${x * 40}px, -${y * 40}px)`;

});

// ================= AUTO YEAR FOOTER =================

const footer = document.querySelector("footer p");

const currentYear = new Date().getFullYear();

footer.innerHTML = `© ${currentYear} Fauzan Portfolio | All Rights Reserved`;