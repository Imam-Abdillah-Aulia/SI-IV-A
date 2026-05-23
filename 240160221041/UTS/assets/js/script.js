window.addEventListener('load', () => {
    document.body.style.opacity = "1";
});

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    // Ganti icon saat diklik
    const icon = themeToggle.querySelector('i');
    if (body.classList.contains('dark-theme')) {
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
    }
});

// Fungsi Filter Portfolio
function filterSelection(category) {
    const cards = document.querySelectorAll('.project-card');
    const buttons = document.querySelectorAll('.btn');

    // Update active button
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText.toLowerCase().includes(category)) {
            btn.classList.add('active');
        }
    });

    cards.forEach(card => {
        if (category === 'all') {
            card.style.display = 'block';
        } else {
            if (card.classList.contains(category)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });
}

// Validasi Form Contact
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah halaman refresh
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Logika Validasi Sederhana
    if (name && email && message) {
        alert(`Halo ${name}, pesan kamu telah terkirim! (Ini simulasi validasi sukses)`);
        contactForm.reset(); // Kosongkan form kembali
    } else {
        alert("Mohon isi semua bidang yang tersedia.");
    }
});