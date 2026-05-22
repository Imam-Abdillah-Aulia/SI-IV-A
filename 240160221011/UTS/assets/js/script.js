
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeToggle.innerText = isDark ? '☀️' : '🌙';
});


const projects = [
    { name: "E-Commerce App", category: "web", img: "https://via.placeholder.com/300x200" },
    { name: "Logo Branding", category: "design", img: "https://via.placeholder.com/300x200" },
    { name: "Portfolio Website", category: "web", img: "https://via.placeholder.com/300x200" },
    { name: "Mobile UI Kit", category: "mobile", img: "https://via.placeholder.com/300x200" },
    { name: "Social Media Post", category: "design", img: "https://via.placeholder.com/300x200" },
    { name: "Dashboard Admin", category: "web", img: "https://via.placeholder.com/300x200" },
];

function renderProjects(filter = 'all') {
    const grid = document.getElementById('project-grid');
    grid.innerHTML = ""; 
    
    const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);
    
    filtered.forEach(p => {
        grid.innerHTML += `
            <div class="project-card">
                <img src="${p.img}" alt="${p.name}">
                <h3>${p.name}</h3>
                <p>Category: ${p.category}</p>
            </div>
        `;
    });
}


document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        renderProjects(e.target.dataset.filter);
    });
});


renderProjects();


function validateForm(event) {
    event.preventDefault();
    const nama = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;

    if (nama === "" || email === "") {
        alert("Waduh! Nama dan Email jangan dikosongin ya, Faatin.");
        return false;
    }
    alert("Pesan terkirim! Mantap.");
    return true;
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


window.addEventListener('load', () => {
    const loader = document.createElement('div');
    loader.id = 'loader';
    loader.innerHTML = '<div class="spinner"></div>';
    document.body.appendChild(loader);

   
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 500);
    }, 1000);
});


if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
}