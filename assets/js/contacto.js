const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

if (contactForm && formFeedback) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const destination = String(formData.get("destination") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!contactForm.checkValidity()) {
      formFeedback.textContent = "Por favor completa todos los campos obligatorios correctamente.";
      formFeedback.className = "status-panel error";
      return;
    }

    if (message.length < 15) {
      formFeedback.textContent = "El mensaje debe contener al menos 15 caracteres.";
      formFeedback.className = "status-panel error";
      return;
    }

    formFeedback.textContent = `Gracias ${name}. Tu solicitud para viajar a ${destination} fue registrada. Te escribiremos a ${email}.`;
    formFeedback.className = "status-panel success";

    contactForm.reset();
  });
}
