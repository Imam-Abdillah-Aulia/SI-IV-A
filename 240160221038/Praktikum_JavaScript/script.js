// Fungsi membuat warna random
function generateRandomColor() {

    var randomColor =
        '#' + Math.floor(Math.random() * 16777215).toString(16);

    return randomColor;
}

// Mengubah background
function changeBackgroundColor() {

    document.body.style.backgroundColor =
        generateRandomColor();
}

// Pesan selamat datang
function showWelcomeMessage() {

    alert("Selamat datang di portofolio saya!");
}

// Saat halaman dibuka
window.onload = function () {

    changeBackgroundColor();

    showWelcomeMessage();
};