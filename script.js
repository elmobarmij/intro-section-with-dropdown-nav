"use strict";

const openMenu = document.querySelector(".header__burger--btn");
const closeMenu = document.querySelector(".header__close--btn");

document.querySelector(".features").addEventListener("click", function () {
  document.querySelector(".dropdown-features").classList.toggle("active");
  document.querySelector(".dropdown-features").classList.toggle("expanded");
});
document.querySelector(".company").addEventListener("click", function () {
  document.querySelector(".dropdown-company").classList.toggle("active");
  document.querySelector(".dropdown-company").classList.toggle("expanded");
});

openMenu.addEventListener("click", function () {
  closeMenu.style.display = "block";
  openMenu.style.display = "none";
  document.querySelector(".header").classList.add("active");
  document.querySelector(".header__nav").style.display = "block";
});

closeMenu.addEventListener("click", function () {
  openMenu.style.display = "block";
  closeMenu.style.display = "none";
  document.querySelector(".header").classList.remove("active");
  document.querySelector(".header__nav").style.display = "none";
});
