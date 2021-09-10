var hamburger = document.querySelector(".header-Menu--Btn");
var freezeBody = document.getElementsByTagName("BODY")[0];
var overLay = document.querySelector(".overlayClosed");
var mobileMenu = document.querySelector(".sidebar-navigation");

hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("is-active");
  mobileMenu.classList.toggle("open-menu");
  freezeBody.classList.toggle("opened-menu");
});