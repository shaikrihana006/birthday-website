function showMessage() {

    document.getElementById("message").innerHTML =
        "💖 You are an amazing person! 💖<br><br>" +
        "May your birthday be filled with happiness, " +
        "laughter and beautiful memories!love you jaanam 🎂✨";
         "🎂✨ Happy Birthday to a truly wonderful person! 💖

May your special day be filled with endless happiness, beautiful smiles, unforgettable moments, and lots of love. 🌸✨

May all your dreams slowly turn into reality, and may every new year of your life bring you more reasons to smile. 🌟

Keep shining, keep smiling, and always stay the amazing person you are. 💕🥳

Wishing you a lifetime of happiness, success, laughter, and beautiful memories.

🎉🎂 HAPPY BIRTHDAY! 🎂🎉
May your day be as special and wonderful as you are! 💖✨"

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