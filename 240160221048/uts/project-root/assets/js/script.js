// Loader

window.addEventListener('load', () => {
    document.getElementById('loader').style.display = 'none';
});

// Reveal Animation

const revealElements = document.querySelectorAll('[data-reveal]');

function revealOnScroll(){

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            el.classList.add('active');
        }

    });

}

window.addEventListener('scroll', revealOnScroll);

revealOnScroll();

// Dark Mode

const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', () => {

    document.body.classList.toggle('light-mode');

});

// Mobile Menu

const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// Portfolio Filter

const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {

    button.addEventListener('click', () => {

        document
        .querySelector('.filter-btn.active')
        .classList.remove('active');

        button.classList.add('active');

        const filter = button.dataset.filter;

        portfolioItems.forEach(item => {

            if(filter === 'all' || item.classList.contains(filter)){
                item.style.display = 'block';
            }else{
                item.style.display = 'none';
            }

        });

    });

});

// Lightbox

const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const images = document.querySelectorAll('.portfolio-item img');
const closeBtn = document.querySelector('.close');

images.forEach(img => {

    img.addEventListener('click', () => {

        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;

    });

});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Contact Form Validation

const form = document.querySelector('.contact-form');

form.addEventListener('submit', (e) => {

    e.preventDefault();

    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if(email === '' || message === ''){
        alert('Please fill all fields!');
        return;
    }

    if(!email.includes('@')){
        alert('Invalid email!');
        return;
    }

    alert('Message Sent Successfully!');
    form.reset();

});