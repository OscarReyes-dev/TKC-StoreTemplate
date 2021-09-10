
var searchIcon = document.querySelector(".search-Button");
var searchResults = document.querySelector(".search-Results-Overlay");
var closeSearch = document.querySelector("#close-Search");

searchIcon.addEventListener("click", function() {
  searchResults.classList.toggle("show-Search-Results"); 
});

closeSearch.addEventListener("click", function() {
  searchResults.classList.toggle("show-Search-Results"); 
});