const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const forgotButton = document.getElementById("forgot-my-password");


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "password"){
        alert("You have successfully logged in.");
        window.location = "home.html";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
});

forgotButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.location = "forgot-pass.html";
});