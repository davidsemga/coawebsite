const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thanks for reaching out! We'll get back to you soon.");
  form.reset();
});