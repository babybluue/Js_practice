const carouselImages = document.querySelectorAll(".carousel-slide img");
const carouselContent = document.querySelector(".carousel-container");
const carouselSlide = document.querySelector(".carousel-slide");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

const size = carouselImages[0].clientWidth;

let counter = 1;
carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

prevBtn.addEventListener("click", () => {
  if (counter == 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

nextBtn.addEventListener("click", () => {
  console.log("next");
  if (counter == carouselImages.length - 1) return;

  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

carouselSlide.addEventListener("transitionend", () => {
  if (carouselImages[counter].id === "firstClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    console.log("firstClone:", counter);
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (carouselImages[counter].id === "lastClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    console.log("lastClone", counter);
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
});
