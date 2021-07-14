// Create the functionality to close and open the search section





// target the search icon
// taget the search results section
// on click we want to toggle a class that makes the search resluts dispa

// tageting search icon so when we push on it we toggle the #show-Search-Results
var searchIcon = document.querySelector(".search-Button");
// search results with display:none; 
var searchResults = document.querySelector(".search-Results-Overlay");
// Now i want to target the close button thats on the search overlay and make
// it toggle te class
var closeSearch = document.querySelector("#close-Search");
// target 


searchIcon.addEventListener("click", function() {
  searchResults.classList.toggle("show-Search-Results"); 

});

closeSearch.addEventListener("click", function() {
  searchResults.classList.toggle("show-Search-Results"); 
});





// var closeSearch = document.querySelector("#close-Search");
// var searchIcon = document.querySelector(".search-Button")
// var searchResults = document.querySelector(".search-Results")
// toggle the 
// searchIcon.addEventListener("click", function() {
//   document.querySelector("search-Results").css.style
// });








// toggle the 
// closeSearch.addEventListener("click", function() {
//     hamburger.classList.toggle("is-active"); 
//     This one controls the transition of the menu, it brings it in and outs
//     mobileMenu.classList.toggle("open-menu");
//   this one freezes body
//     freezeBody.classList.toggle("opened-menu");
//   });