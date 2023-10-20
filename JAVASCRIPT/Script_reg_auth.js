// Перевірка, чи користувач зареєстрований і має нікнейм
if (userIsLoggedIn) {
    // Видаляємо елемент "Реєстрація"
    var registrationLink = document.getElementById("registrationLink");
    registrationLink.style.display = "none";
    
    // Замінюємо "Увійти" на нікнейм користувача
    var loginLink = document.getElementById("loginLink");
    loginLink.innerHTML = "Нікнейм користувача";
}
/*Важливо відзначити, що вам потрібно буде визначити, 
як саме ви будете визначати, чи користувач 
зареєстрований (зазвичай це відбувається за допомогою сесій або токенів авторизації) 
і як ви будете отримувати нікнейм користувача.
*/