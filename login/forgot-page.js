const emailForm = document.getElementById("email-form");
const emailButton = document.getElementById("email-form-submit");

emailButton.addEventListener("click", (e) => {
    e.preventDefault();
    const email = emailForm.email.value;
    alert("We have sent a recovery email to " + email);
    window.location = "login-index.html";
});