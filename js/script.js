//Navber menu toggle
const toggle = document.querySelector(".nav-menu-toggle");
const nav = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});

const rainContainer = document.querySelector(".rain");

function createRain() {
  for (let i = 0; i < 120; i++) {
    const drop = document.createElement("div");
    drop.classList.add("drop");

    // random horizontal position
    drop.style.left = Math.random() * 100 + "vw";

    // random speed
    drop.style.animationDuration = Math.random() * 4 + 3.5 + "s";

    // random delay
    drop.style.animationDelay = Math.random() * 2 + "s";

    // random size
    drop.style.height = Math.random() * 10 + 10 + "px";

    rainContainer.appendChild(drop);
  }
}

createRain();
