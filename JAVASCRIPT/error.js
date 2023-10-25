document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("emailInput");
    const passwordInput = document.getElementById("passwordInput");
    const form = document.querySelector(".form_login");

    form.addEventListener("submit", function (event) {

        if (passwordInput.value === "" || passwordInput.value.length < 6) {
            alert("Пароль повинен містити щонайменше 6 символів");
            event.preventDefault();
            return;
        }
    });
});