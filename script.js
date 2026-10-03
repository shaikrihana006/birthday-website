function showMessage() {

    document.getElementById("message").innerHTML =
        "💖 You are an amazing person! 💖<br><br>" +
        "🎂✨ Happy Birthday to a truly wonderful person! 💖<br><br>" +

        "May your special day be filled with endless happiness, " +
        "beautiful smiles, unforgettable moments, and lots of love. 🌸✨<br><br>" +

        "May all your dreams slowly turn into reality, " +
        "and may every new year of your life bring you more reasons to smile. 🌟<br><br>" +

        "Keep shining, keep smiling, and always stay the amazing person you are. 💕🥳<br><br>" +

        "Wishing you a lifetime of happiness, success, laughter, " +
        "and beautiful memories. 🎉<br><br>" +

        "Love you jaanam! 💖✨<br><br>" +

        "🎉🎂 HAPPY BIRTHDAY! 🎂🎉<br>" +
        "May your day be as special and wonderful as you are! 💖✨";

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