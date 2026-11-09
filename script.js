const heart = document.getElementById("heart");

heart.addEventListener("click", (event) => {

    // Coordinate esatte del tocco/click
    const x = event.clientX;
    const y = event.clientY;

    // Numero di cuoricini
    for (let i = 0; i < 16; i++) {

        const particle = document.createElement("div");
        particle.className = "particle";
        particle.textContent = "🩷";

        particle.style.left = x + "px";
        particle.style.top = y + "px";

        // Direzione casuale
        const angle = Math.random() * Math.PI * 2;
        const distance = 70 + Math.random() * 100;

        particle.style.setProperty(
            "--x", Math.cos(angle) * distance + "px"
        );

        particle.style.setProperty(
            "--y", Math.sin(angle) * distance + "px"
        );

        document.body.appendChild(particle);

        setTimeout(() => particle.remove(), 1500);
    }
});
