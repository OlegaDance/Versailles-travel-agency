var passwordInput = document.getElementById("passwordInput");
var showPasswordToggle = document.getElementById("showPassword");

showPasswordToggle.addEventListener("click", function() {
    if (passwordInput.type === "password") {
        passwordInput.type = "text"; // Показати пароль
        showPasswordToggle.innerHTML = '<img src="../ICONS/eye-off.svg" alt="Приховано">'; // Замінити на своє зображення
    } else {
        passwordInput.type = "password"; // Приховувати пароль
        showPasswordToggle.innerHTML = '<img src="../ICONS/eye_on.png" alt="Показано">'; // Замінити на своє зображення
    }
});
var repeatPasswordInput = document.getElementById("repeatPasswordInput");
var showRepeatPasswordToggle = document.getElementById("showRepeatPassword");

showRepeatPasswordToggle.addEventListener("click", function() {
    if (repeatPasswordInput.type === "password") {
        repeatPasswordInput.type = "text"; // Показати пароль
        showRepeatPasswordToggle.innerHTML = '<img src="../ICONS/eye-off.svg" alt="Приховано">'; // Замінити на своє зображення
    } else {
        repeatPasswordInput.type = "password"; // Приховувати пароль
        showRepeatPasswordToggle.innerHTML = '<img src="../ICONS/eye_on.png" alt="Показано">'; // Замінити на своє зображення
    }
});