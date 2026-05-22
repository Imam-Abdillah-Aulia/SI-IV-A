// Pesan selamat datang saat halaman dimuat
window.onload = function() {
    alert("Selamat datang di Portofolio Rissa!");
};
    
    // Efek hover pada gambar profil
const gambar = document.querySelector("img");

gambar.addEventListener("mouseover", function () {
    gambar.style.transform = "scale(1.1)";
    gambar.style.transition = "0.3s";
});

gambar.addEventListener("mouseout", function () {
    gambar.style.transform = "scale(1)";
});
