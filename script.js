const cookieImg = document.getElementById("cookieImg");
const signUpBtn = document.getElementById("signUpBtn");

signUpBtn.addEventListener("click", () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const response = grecaptcha.getResponse();

  // Проверка длины имени и пароля
  if(username.length < 4 || password.length < 4) {
    alert("Name and password must be at least 4 characters long!");
    return;
  }

  // Проверка галочки капчи
  if(response.length === 0) {
    alert("Please agree that you're not a robot!");
    return;
  }

  // Показать печенье
  cookieImg.style.display = "block";
  cookieImg.classList.add("jump");
  setTimeout(() => cookieImg.classList.remove("jump"), 200);
});

// Прыжок печенья при клике
cookieImg.addEventListener("click", () => {
  cookieImg.classList.add("jump");
  setTimeout(() => cookieImg.classList.remove("jump"), 200);
});