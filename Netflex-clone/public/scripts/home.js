const faq = document.querySelectorAll(".ques-container");
for (let q of faq) {
  q.addEventListener("click", (e) => {
    q.childNodes[3].classList.toggle("show");
  });
}
