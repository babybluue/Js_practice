const domHeight = document.body.clientHeight;
const container = document.querySelector(".container");
const line = document.querySelector(".line");
const body = document.body;

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  const percent = (scrollHeight / domHeight) * 1.2 * 100;
  line.style.width = percent + "%";
  console.log(percent);
});
