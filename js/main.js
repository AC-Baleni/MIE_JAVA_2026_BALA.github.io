import { initNavbar } from "./navbar.js";
import { createRain } from "./rain.js";
import { initTyping } from "./typing.js";
import { initContactForm } from "./contact.js";

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  createRain();
  initTyping();
  initContactForm();
});
