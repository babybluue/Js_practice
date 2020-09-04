window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  console.log(pads);
  console.log(sounds);
  //sound
  document.addEventListener("keydown", function (event) {
    const getKey = event.which;
    console.log(getKey);
    const createKeys = [68, 70, 71, 72, 74, 75]; // key codes for d f g h j k
    const getKeyIndex = createKeys.indexOf(getKey);
    console.log(getKeyIndex);
    if (createKeys.includes(getKey)) {
      sounds[getKeyIndex].currentTime = 0;
      sounds[getKeyIndex].play();
      createBubbles(getKeyIndex);
    }
  });

  pads.forEach((pad, index) => {
    pad.addEventListener("click", () => {
      pad.style.padding = "20px";
      console.log("success");
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubbles(index);
      pad.addEventListener("transitionend", () => {
        pad.style.padding = "";
      });
    });
  });

  const colors = [
    "#da9023",
    "#60e224",
    "#b185ca",
    "#2f5ec2",
    "#c0e22a",
    "#60d394",
  ];
  const visual = document.querySelector(".visual");
  //create bubble
  const createBubbles = (index) => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = "jump 1s ease";
    bubble.addEventListener("animationend", function () {
      visual.removeChild(this);
    });
  };
});
