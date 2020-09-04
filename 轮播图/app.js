const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const pictures = document.querySelectorAll(".slider img");
const slider = document.querySelector(".slider");
const circle = document.querySelectorAll("ul li");

const size = pictures[0].clientWidth;
let counter = 1;
let current = 0;
slider.style.transform = "translateX(" + -counter * size + "px)";
circle[current].classList.add("on");
//? 向前
leftBtn.addEventListener("click", () => {
  if (counter <= 0) {
    // circle[pictures.length - 2].classList.remove("on");
    console.log(counter);
    return;
  }
  slider.style.transition = "transform 0.4s ease-in-out";
  counter--;
  circle[counter - 1].classList.add("on");
  circle[counter].classList.remove("on");
  slider.style.transform = "translateX(" + -counter * size + "px)";
});
//?向右
rightBtn.addEventListener("click", () => {
  if (counter >= pictures.length - 1) {
    console.log(counter);
    // circle[0].classList.remove("on");
    return;
  }
  slider.style.transition = "transform 0.4s ease-in-out";
  counter++;
  circle[counter - 1].classList.add("on");
  circle[counter - 2].classList.remove("on");
  slider.style.transform = "translateX(" + -counter * size + "px)";
});

//?过渡监听,在当前是最后或最开始的图片的时候转换
slider.addEventListener("transitionend", () => {
  if (pictures[counter].id === "lastOne") {
    slider.style.transition = "none";
    counter = pictures.length - 2;
    slider.style.transform = "translateX(" + -counter * size + "px)";
  }
  if (pictures[counter].id === "firstOne") {
    slider.style.transition = "none";
    counter = 1;
    slider.style.transform = "translateX(" + -counter * size + "px)";
  }
});

for (let x = 0; x < circle.length; x++) {
  circle[x].addEventListener("click", () => {
    circle[counter - 1].classList.remove("on");
    counter = x;
    slider.style.transform = "translateX(" + -counter * size + "px)";
    circle[x].classList.add("on");
    console.log("click", x);
  });
}
