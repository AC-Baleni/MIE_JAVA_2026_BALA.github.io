/* =========================
   RAIN BACKGROUND EFFECT
========================= */

export function createRain() {
  const rainContainer = document.querySelector(".rain");
  if (!rainContainer) return;

  for (let i = 0; i < 120; i++) {
    const drop = document.createElement("div");
    drop.classList.add("drop");

    drop.style.left = Math.random() * 100 + "vw";
    drop.style.animationDuration = Math.random() * 4 + 3.5 + "s";
    drop.style.animationDelay = Math.random() * 2 + "s";
    drop.style.height = Math.random() * 10 + 10 + "px";

    rainContainer.appendChild(drop);
  }
}
