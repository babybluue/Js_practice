const section = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");
section.forEach((section) => {
  section.addEventListener("mouseenter", function () {
    const id = this.getAttribute("id");
    const navLink = document.querySelector(`a[href='#${id}']`);
    navLinks.forEach((navlink) => {
      navlink.classList.remove("active");
    });
    navLink.classList.add("active");
  });
});
