// Floating hearts animation
const heartsContainer = document.getElementById("hearts");

function createHeart() {
    const heart = document.createElement("div");

    heart.classList.add("floating-heart");

    const heartEmojis = ["💗", "💕", "💖", "💘", "💝", "❤️"];

    heart.innerHTML = heartEmojis[
        Math.floor(Math.random() * heartEmojis.length)
    ];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";
    heart.style.animationDuration = (4 + Math.random() * 5) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);
}

setInterval(createHeart, 400);


// First button
function startSurprise() {
    document.getElementById("welcomeScreen").classList.add("hidden");

    document.getElementById("surpriseScreen").classList.remove("hidden");
}


// Continue button
function nextPage() {
    const surpriseScreen = document.getElementById("surpriseScreen");

    surpriseScreen.innerHTML = `
        <div class="heart-icon">❤️</div>
        <h1>You Are Special!</h1>
        <p class="message">
            This is just the beginning of something beautiful.
            There are more surprises waiting for you!
        </p>
        <button onclick="location.reload()">
            Start Again 💗
        </button>
    `;
}
