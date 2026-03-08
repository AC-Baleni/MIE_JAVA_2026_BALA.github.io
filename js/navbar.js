/* =========================
   NAVBAR MENU TOGGLE
========================= */

export function initNavbar() {
  const toggle = document.querySelector(".nav-menu-toggle");
  const nav = document.querySelector(".nav-links");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  });
}
