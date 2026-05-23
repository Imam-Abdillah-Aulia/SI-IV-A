// 1. Fungsi untuk menghasilkan kode warna acak (Hex Color)
function generateRandomColor() {
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}

// 2. Fungsi untuk mengubah warna latar belakang body
function changeBackgroundColor() {
    document.body.style.backgroundColor = generateRandomColor();
}

// 3. Fungsi untuk menampilkan pesan sambutan
function showWelcomeMessage() {
    alert("Selamat datang di portofolio saya! Saya adalah seorang pengembang web yang penuh semangat.");
}

// 4. Jalankan semua fungsi saat halaman selesai dimuat (Window Onload)
window.onload = function() {
    changeBackgroundColor(); // Ubah warna bg
    showWelcomeMessage();    // Munculin pesan alert
};