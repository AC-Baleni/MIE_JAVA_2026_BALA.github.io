/* =========================
   HERO TYPING ANIMATION
========================= */

export function initTyping() {
  const text = "Java Developer";
  const typingElement = document.getElementById("typing");

  if (!typingElement) return;

  let index = 0;

  function type() {
    if (index < text.length) {
      typingElement.textContent += text.charAt(index);
      index++;

      setTimeout(type, 80);
    }
  }

  type();
}
