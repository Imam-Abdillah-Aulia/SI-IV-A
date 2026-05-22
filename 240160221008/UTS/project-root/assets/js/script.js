// script.js

// LOADER

window.addEventListener('load', () => {

    document.getElementById('loader').style.display = 'none';

});

// DARK MODE

const toggle = document.getElementById('theme-toggle');

toggle.addEventListener('click', () => {

    document.body.classList.toggle('dark-mode');

    if(document.body.classList.contains('dark-mode')){

        toggle.innerHTML = '☀️';

    }else{

        toggle.innerHTML = '🌙';

    }

});

// MOBILE MENU

const menuToggle = document.querySelector('.menu-toggle');

const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {

    navLinks.classList.toggle('active');

});

// FILTER

const filterButtons = document.querySelectorAll('.filter-buttons button');

const projects = document.querySelectorAll('.project');

filterButtons.forEach(button => {

    button.addEventListener('click', () => {

        const filter = button.dataset.filter;

        projects.forEach(project => {

            if(filter === 'all'){

                project.style.display = 'block';

            }else{

                if(project.classList.contains(filter)){

                    project.style.display = 'block';

                }else{

                    project.style.display = 'none';

                }

            }

        });

    });

});

// LIGHTBOX

const lightbox = document.getElementById('lightbox');

const lightboxImg = document.getElementById('lightbox-img');

document.querySelectorAll('.project img').forEach(img => {

    img.addEventListener('click', () => {

        lightbox.style.display = 'flex';

        lightboxImg.src = img.src;

    });

});

lightbox.addEventListener('click', () => {

    lightbox.style.display = 'none';

});

// CONTACT FORM VALIDATION

document.getElementById('contactForm')
.addEventListener('submit', function(e){

    e.preventDefault();

    const name = document.getElementById('name').value;

    const email = document.getElementById('email').value;

    const message = document.getElementById('message').value;

    if(name === '' || email === '' || message === ''){

        alert('Please fill all fields');

    }else{

        alert('Message sent successfully!');

        this.reset();

    }

});

// SCROLL ANIMATION

const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = '1';

            entry.target.style.transform = 'translateY(0)';

        }

    });

},{
    threshold:0.1
});

cards.forEach(card=>{

    card.style.opacity = '0';

    card.style.transform = 'translateY(40px)';

    card.style.transition = 'all .8s ease';

    observer.observe(card);

});