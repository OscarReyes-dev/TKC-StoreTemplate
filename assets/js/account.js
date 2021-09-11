// TWO TOGGLERS ICON AND CLOSE BUTTON
var accountIcon = document.querySelector(".account-Icon")
var accountIconMobile = document.querySelector(".account-Icon--Mobile")
var closeButton = document.querySelector("#close-Login--Popup")
var freezeBody = document.getElementsByTagName("BODY")[0];
var popup = document.querySelector(".center-Popup")
var overlay = document.querySelector(".overlayNowOpened")


// One function for the accoount icon
accountIcon.addEventListener("click", function(){
  popup.classList.toggle("popup-Hidden");
  overlay.classList.toggle("overlayClosed")
  freezeBody.classList.toggle("opened-menu");
});

accountIconMobile.addEventListener("click", function(){
  popup.classList.toggle("popup-Hidden");
  overlay.classList.toggle("overlayClosed")
  freezeBody.classList.toggle("opened-menu");
});

// One function for the close button
closeButton.addEventListener("click", function(){
  popup.classList.toggle("popup-Hidden");
  overlay.classList.toggle("overlayClosed")
  freezeBody.classList.toggle("opened-menu");
});