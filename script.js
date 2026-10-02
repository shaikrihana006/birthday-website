function showMessage() {

    document.getElementById("message").innerHTML =
        "💖 You are an amazing person! 💖<br><br>" +
        "May your birthday be filled with happiness, " +
        "laughter and beautiful memories!love you jaanam 🎂✨";

    document.getElementById("message").classList.add("show");

    // Create confetti
    for (let i = 0; i < 60; i++) {

        const confetti = document.createElement("div");

        confetti.className = "confetti";

        confetti.innerHTML = "🎊";

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.animationDuration =
            (Math.random() * 2 + 2) + "s";

        confetti.style.fontSize =
            (Math.random() * 15 + 10) + "px";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }
}