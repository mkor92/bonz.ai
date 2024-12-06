console.log("Hello, world!");
const hamMenu = document.querySelector(".header__ham-menu");

const showMenu = document.querySelector(".header__menu-links");
const toggleHamMenuLine1 = document.querySelector(".line1");
const toggleHamMenuLine2 = document.querySelector(".line2");
const toggleHamMenuLine3 = document.querySelector(".line3");
hamMenu.addEventListener("click", () => {
  showMenu.classList.toggle("active");
  toggleHamMenuLine1.classList.toggle("active");
  toggleHamMenuLine2.classList.toggle("active");
  toggleHamMenuLine3.classList.toggle("active");
});
