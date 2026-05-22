const colors = [
    ["#ffecd2", "#fcb69f"],
    ["#a1c4fd", "#c2e9fb"],
    ["#d4fc79", "#96e6a1"],
    ["#fbc2eb", "#a6c1ee"],
    ["#84fab0", "#8fd3f4"]
];

function changeBackgroundColor() {

    const random =
        colors[Math.floor(Math.random() * colors.length)];

    document.body.style.background =
        `linear-gradient(135deg, ${random[0]}, ${random[1]})`;
}

function showWelcomeMessage() {

    setTimeout(() => {

        alert(
            "Selamat datang di website portofolio Della Kartika!"
        );

    }, 500);
}

window.onload = function () {

    changeBackgroundColor();

    showWelcomeMessage();
};