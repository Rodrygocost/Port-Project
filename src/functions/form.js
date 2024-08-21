// alerta de contato enviado

document.addEventListener("DOMContentLoaded", () => {
  const formBtn = document.getElementById("contact-form");
  formBtn.addEventListener("submit", (ev) => {
    ev.preventDefault();

    const nameInput = document.getElementById("name");
    const mailInput = document.getElementById("email");
    const textInput = document.getElementById("form-text-area");

    alert(
      `Obrigado pelo contato! ${nameInput.value}, Seu Contato foi Enviado com Sucesso!`
    );

    nameInput.value = "";
    mailInput.value = "";
    textInput.value = "";
    location.reload();
  });
});
