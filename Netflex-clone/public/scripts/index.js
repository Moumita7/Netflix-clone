// selecting the learn more link
const learn = document.querySelector("#learn");
// function for showing the recaptch text when learn more link is clicked by the user.
// learn more link will disappear for good once it is clicked. It will only show up when the page is refreshed.
learn.addEventListener("click", () => {
  const captcha = document.querySelector("#recaptcha-text");
  captcha.classList.remove("hidden");
  learn.classList.add("hidden");
});
