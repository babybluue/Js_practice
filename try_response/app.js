const navLinks = document.querySelector(".nav-links");
const hamburger = document.querySelector(".hamburger");

navLinks.addEventListener("animationend", () => {
  window.innerWidth > 800
    ? (hamburger.style.display = "none")
    : (hamburger.style.display = "block");
});

hamburger.addEventListener("click", () => {
  console.log("click");

  navLinks.classList.toggle("showup");
});
