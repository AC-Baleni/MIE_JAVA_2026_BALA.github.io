/* =========================
   CONTACT FORM VALIDATION
   AND EMAIL SENDING
========================= */

export function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  emailjs.init("YOUR_PUBLIC_KEY");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const messageError = document.getElementById("message-error");

    const success = document.getElementById("success-message");
    const button = form.querySelector("button");

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    success.textContent = "";

    let valid = true;

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

    if (valid) {
      button.textContent = "Sending...";
      button.disabled = true;

      emailjs
        .send("service_id", "template_id", {
          from_name: name.value,
          from_email: email.value,
          message: message.value,
        })
        .then(() => {
          success.textContent = "Message sent successfully!";
          form.reset();

          button.textContent = "Send Message";
          button.disabled = false;
        })
        .catch((error) => {
          success.textContent = "Failed to send message.";
          console.error(error);

          button.textContent = "Send Message";
          button.disabled = false;
        });
    }
  });
}
