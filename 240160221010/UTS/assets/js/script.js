/* ============================================================
   script.js — Portfolio Muhammad Zaky
   ============================================================ */

/* ==============================
   DATA PROYEK
============================== */
const projectData = [
  {
    image: 'assets/images/projects/upnow.png',
    bg: 'linear-gradient(135deg,#1a1a2e,#16213e)',
    cat: 'UI/UX',
    title: 'UpNow - Top Up Game Platform',
    desc: 'UI/UX desain untuk platform top up game dengan fokus pada kemudahan navigasi, visual yang clean, serta alur transaksi yang efisien dan intuitif.',
    tags: ['UI/UX', 'Prototyping'],
    link: 'https://www.figma.com/proto/0veq6FdQ1YLGcDBtQxIkUz/Untitled?node-id=24-4&starting-point-node-id=99%3A817&t=L5WaypfAeZqinitg-1'
  },
  {
    image: 'assets/images/projects/fundex.jpg',
    bg: 'linear-gradient(135deg,#0f3460,#533483)',
    cat: 'Graphic Design',
    title: 'Multiple Post - Fundex',
    desc: 'Membuat postingan instagram berupa multiple post tentang sukuk wakaf.',
    tags: ['Adobe Photoshop', 'Graphic Design'],
    link: 'https://drive.google.com/drive/folders/1d61CzM8xuw6CN-NetMYcmihLIzlJHaNL?usp=sharing'
  },
  {
    image: 'assets/images/projects/payday.jpg',
    bg: 'linear-gradient(135deg,#134e5e,#71b280)',
    cat: 'Film',
    title: 'PayDay - Short Movie',
    desc: 'Membuat sebuah film pendek yang mengangkat tema kehidupan mahasiswa.',
    tags: ['Film', 'Adobe Premiere Pro'],
    link: 'https://youtu.be/0vJdhgGRkmw?si=5_ywIRw-X4ZFDjD0'
  },
  {
    image: 'assets/images/projects/bankmuamalat.jpg',
    bg: 'linear-gradient(135deg,#2d1b69,#11998e)',
    cat: 'Iklan',
    title: 'Bank Muamalat - Kompas Growth Center',
    desc: 'Ketika saya magang di Kompas Growth Center, saya mendapatkan tugas membuat video promosi untuk Bank Muamalat.',
    tags: ['Iklan', 'Adobe Premiere Pro'],
    link: 'https://rakamin-lms.s3.ap-southeast-1.amazonaws.com/files/Task_5_video_editor__Muhammad_Zaky-ce55f736-c2fc-476a-8425-69019b224f97.mp4'
  },
  {
    image: 'assets/images/projects/darya.jpg',
    bg: 'linear-gradient(135deg,#4a1942,#c74b50)',
    cat: 'Film',
    title: 'Darya - Short Movie',
    desc: 'Selama menempuh pendidikan di SMK, saya mendapat tugas untuk membuat sebuah film pendek bertema kehidupan remaja.',
    tags: ['Film', 'Adobe Premiere Pro', 'Capcut'],
    link: 'https://youtu.be/-ZyUPAnU9Is?si=qaEHXl1VxqmPBduI'
  },
  {
    image: 'assets/images/projects/ophieun.png',
    bg: 'linear-gradient(135deg,#1f4037,#99f2c8)',
    cat: 'Graphic Design',
    title: 'Ophieun - Logo',
    desc: 'Logo OPHIEUN merepresentasikan sinergi antara pertumbuhan berkelanjutan dan semangat perubahan.',
    tags: ['Logo', 'Graphic Design', 'Adobe Photoshop'],
    link: 'https://www.figma.com/proto/YYnfRseNmX9gcIElSuWoTE/Ujikom?node-id=1-2&p=f&t=IL54f2oN6dTL8VxS-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=37%3A4'
  }
];

/* ==============================
   LOADING SCREEN
============================== */
window.addEventListener('load', function () {
  setTimeout(function () {
    document.getElementById('loader').classList.add('hidden');
  }, 1900);
});

/* ==============================
   DARK / LIGHT MODE TOGGLE
============================== */
var themeToggle = document.getElementById('themeToggle');
var themeIcon   = document.getElementById('themeIcon');
var html        = document.documentElement;

function setTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  themeIcon.className = (theme === 'dark') ? 'fas fa-moon' : 'fas fa-sun';
}

var savedTheme = localStorage.getItem('theme') || 'dark';
setTheme(savedTheme);

themeToggle.addEventListener('click', function () {
  var current = html.getAttribute('data-theme');
  setTheme(current === 'dark' ? 'light' : 'dark');
});

/* ==============================
   MOBILE HAMBURGER MENU
============================== */
var hamburger = document.getElementById('hamburger');
var navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(function (a) {
  a.addEventListener('click', function () {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

/* ==============================
   SCROLL REVEAL
============================== */
var revealEls = document.querySelectorAll('.reveal');

var revealObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(function (el) {
  revealObserver.observe(el);
});

/* ==============================
   SKILL BAR ANIMATION
============================== */
var skillFills = document.querySelectorAll('.skill-fill');

var skillObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.getAttribute('data-pct') + '%';
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

skillFills.forEach(function (bar) {
  skillObserver.observe(bar);
});

/* ==============================
   PORTFOLIO FILTER
============================== */
var filterBtns = document.querySelectorAll('.filter-btn');
var cards      = document.querySelectorAll('.project-card');

filterBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    filterBtns.forEach(function (b) { b.classList.remove('active'); });
    btn.classList.add('active');

    var filter = btn.getAttribute('data-filter');

    cards.forEach(function (card) {
      if (filter === 'all' || card.getAttribute('data-cat') === filter) {
        card.style.opacity = '0';
        card.style.display = '';
        setTimeout(function () { card.style.opacity = '1'; }, 10);
      } else {
        card.style.opacity = '0';
        setTimeout(function () { card.style.display = 'none'; }, 300);
      }
    });
  });
});

/* ==============================
   LIGHTBOX
============================== */
var lightbox  = document.getElementById('lightbox');
var lbHeader  = document.getElementById('lbHeader');
var lbCat     = document.getElementById('lbCat');
var lbTitle   = document.getElementById('lbTitle');
var lbDesc    = document.getElementById('lbDesc');
var lbTags    = document.getElementById('lbTags');
var lbClose   = document.getElementById('lbClose');

function openLightbox(id) {
  var p = projectData[id];

  /* Isi konten */
  lbHeader.style.background = p.bg;

/* Gambar proyek */
  var existing = lbHeader.querySelector('.lb-img');
  if (existing) existing.remove();
  var imgEl = document.createElement('img');
  imgEl.className = 'lb-img';
  imgEl.src = p.image;
  imgEl.alt = p.title;
  imgEl.style.cssText = 'width:100%;height:100%;object-fit:cover;position:absolute;inset:0;';
  lbHeader.style.background = p.bg;
  lbHeader.appendChild(imgEl);

  lbCat.textContent   = p.cat;
  lbTitle.textContent = p.title;
  lbDesc.textContent  = p.desc;

  lbTags.innerHTML = p.tags
    .map(function (t) { return '<span class="project-tag">' + t + '</span>'; })
    .join('');

  document.getElementById('lbLink').href = p.link;

  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

/* Buka lightbox saat kartu diklik */
cards.forEach(function (card) {
  card.addEventListener('click', function () {
    var id = parseInt(card.getAttribute('data-id'));
    openLightbox(id);
  });
});

/* Tutup lightbox */
lbClose.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', function (e) {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeLightbox();
});

/* ==============================
   FORM VALIDASI KONTAK
============================== */
var form = document.getElementById('contactForm');

function validateField(id, errorId, checkFn) {
  var el  = document.getElementById(id);
  var err = document.getElementById(errorId);
  if (!checkFn(el.value.trim())) {
    el.classList.add('error');
    err.classList.add('show');
    return false;
  } else {
    el.classList.remove('error');
    err.classList.remove('show');
    return true;
  }
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  var v1 = validateField('fname',   'err-fname',   function (v) { return v.length > 0; });
  var v2 = validateField('email',   'err-email',   function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); });
  var v3 = validateField('subject', 'err-subject', function (v) { return v.length > 0; });
  var v4 = validateField('message', 'err-message', function (v) { return v.length >= 20; });

  if (v1 && v2 && v3 && v4) {
    var btn = form.querySelector('button[type=submit]');
    btn.disabled   = true;
    btn.innerHTML  = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';

    /* Simulasi kirim */
    setTimeout(function () {
      btn.disabled  = false;
      btn.innerHTML = '<i class="fas fa-paper-plane"></i> Kirim Pesan';
      document.getElementById('formSuccess').classList.add('show');
      form.reset();
      setTimeout(function () {
        document.getElementById('formSuccess').classList.remove('show');
      }, 5000);
    }, 1800);
  }
});

/* Hapus error saat user mulai mengetik */
['fname', 'email', 'subject', 'message'].forEach(function (id) {
  var el = document.getElementById(id);
  if (!el) return;
  el.addEventListener('input', function () {
    el.classList.remove('error');
    var err = document.getElementById('err-' + id);
    if (err) err.classList.remove('show');
  });
});

/* ==============================
   LAZY LOAD GAMBAR
============================== */
var lazyImgs = document.querySelectorAll('img.lazy');

var lazyObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      var img = entry.target;
      if (img.getAttribute('data-src')) {
        img.src = img.getAttribute('data-src');
      }
      img.classList.add('loaded');
      lazyObserver.unobserve(img);
    }
  });
});

lazyImgs.forEach(function (img) {
  lazyObserver.observe(img);
});
