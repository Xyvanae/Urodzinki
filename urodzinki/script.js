// dane zamiast PHP
const name = "Dla Najlepszej Koleżanki ❤️";
const message = "Wszystkiego najlepszego! Dziękuję za wszystko 💖";

// ustaw tekst
document.getElementById("name").innerText = name;
document.getElementById("message").innerText = message;

// data (jak w PHP)
const today = new Date();
const date = today.toLocaleDateString("pl-PL");
document.getElementById("date").innerText = "Data: " + date;

// serduszka
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 10) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);