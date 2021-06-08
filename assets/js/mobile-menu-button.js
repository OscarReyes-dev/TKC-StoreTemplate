var hamburger = document.querySelector(".hamburger");
var freezeBody = document.getElementsByTagName("BODY")[0];
var overLay = document.querySelector(".overlayClosed");
var mobileMenu = document.querySelector(".sidebar-navigation");


hamburger.addEventListener("click", function() {
  // this controls the ham menu transition from 3 bars to X
  hamburger.classList.toggle("is-active");
  // This one controls the transition of the menu, it brings it in and outs
  mobileMenu.classList.toggle("open-menu");
// this one freezes body
  freezeBody.classList.toggle("opened-menu");
});



var activeHamburgerMenu = document.querySelector("#close-menu");

activeHamburgerMenu.addEventListener("click", function(){
  // activeHamburgerMenu.classList.toggle("open-menu")
  hamburger.classList.toggle("is-active");
  // This one controls the transition of the menu, it brings it in and outs
  mobileMenu.classList.toggle("open-menu");
  freezeBody.classList.toggle("opened-menu");
});