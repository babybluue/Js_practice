const texts = ["webseites", "illustrations", "pancakes"];
let counter = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (counter === texts.length) {
    counter = 0;
  }
  currentText = texts[counter];
  letter = currentText.slice(0, index++);
  document.querySelector(".typing").textContent = letter;
  if (index === currentText.length) {
    counter++;
    index = 0;
  }
  setTimeout(type, 400);
})();
