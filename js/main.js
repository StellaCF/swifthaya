function showPassword(passwordInput, passwordIcon) {
  const input = document.getElementById(passwordInput);
  const icon = document.getElementById(passwordIcon);

  icon.addEventListener("click", () => {
    if(input.type === "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }

    icon.classList.toggle("ri-eye-off-line");
  })
};

showPassword("password1", "icon1");
showPassword("password2", "icon2");