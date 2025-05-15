function onSend(event) {
  event.preventDefault();
  const form = document.getElementById("contact-form");
  if (!form) return;

  const name = form.elements["name"].value;
  const email = form.elements["email"].value;
  const message = form.elements["message"].value;

  alert(
    "E-mail enviado com sucesso! \n\n" +
      "Nome: " +
      name +
      "\nE-mail: " +
      email +
      "\nMensagem: " +
      message
  );
}

window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const firstInput = form.querySelector("input#name");
  if (!firstInput) return;

  firstInput.focus();
});
