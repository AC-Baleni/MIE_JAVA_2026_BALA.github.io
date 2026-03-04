/* =========================
   NAVBAR MENU TOGGLE
========================= */

const toggle = document.querySelector(".nav-menu-toggle");
const nav = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});

/* =========================
   RAIN BACKGROUND EFFECT
========================= */

const rainContainer = document.querySelector(".rain");

function createRain() {
  // Create 120 rain drops
  for (let i = 0; i < 120; i++) {
    const drop = document.createElement("div");
    drop.classList.add("drop");

    // random horizontal position
    drop.style.left = Math.random() * 100 + "vw";

    // random falling speed
    drop.style.animationDuration = Math.random() * 4 + 3.5 + "s";

    // random delay
    drop.style.animationDelay = Math.random() * 2 + "s";

    // random drop length
    drop.style.height = Math.random() * 10 + 10 + "px";

    rainContainer.appendChild(drop);
  }
}

createRain();

/* =========================
   HERO TYPING ANIMATION
========================= */

const text = "Java Developer";
const typingElement = document.getElementById("typing");

let index = 0;

function type() {
  if (typingElement && index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;

    // typing speed
    setTimeout(type, 120);
  }
}

type();

/* =========================
   EMAILJS INITIALIZATION
========================= */

// Initialize EmailJS with your public key
emailjs.init("jIGrynlMqKjMgsZqs");

/* =========================
   CONTACT FORM VALIDATION
   + EMAIL SENDING
========================= */

const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", function (e) {
    // stop page refresh
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const messageError = document.getElementById("message-error");

    const success = document.getElementById("success-message");

    const button = form.querySelector("button");

    // clear previous messages
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    success.textContent = "";

    let valid = true;

    /* ===== VALIDATION ===== */

    if (name.value.trim() === "") {
      nameError.textContent = "Please enter your name";
      valid = false;
    }

    if (email.value.trim() === "") {
      emailError.textContent = "Please enter your email";
      valid = false;
    } else if (!email.value.includes("@")) {
      emailError.textContent = "Please enter a valid email";
      valid = false;
    }

    if (message.value.trim() === "") {
      messageError.textContent = "Message cannot be empty";
      valid = false;
    }

    /* ===== IF FORM IS VALID SEND EMAIL ===== */

    if (valid) {
      button.textContent = "Sending...";
      button.disabled = true;

      emailjs
        .send("service_womawo5", "template_of4fwrf", {
          from_name: name.value,
          from_email: email.value,
          message: message.value,
        })
        .then(function () {
          success.textContent = "Message sent successfully!";
          form.reset();

          button.textContent = "Send Message";
          button.disabled = false;
        })
        .catch(function (error) {
          success.textContent = "Failed to send message.";
          console.error(error);

          button.textContent = "Send Message";
          button.disabled = false;
        });
    }
  });
}
