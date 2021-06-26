const slide = document.getElementById("testimonials");
const upArrow = document.getElementById("upArrow");
const downArrow = document.getElementById("downArrow");

let x = 0;

upArrow.addEventListener("click", function () {
  if (x > "-900") {
    x -= 300;
    slide.style.top = x + "px";
  }
});
downArrow.addEventListener("click", function () {
  if (x < 0) {
    x += 300;
    slide.style.top = x + "px";
  }
});

document.querySelector(".navbar-nav").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
