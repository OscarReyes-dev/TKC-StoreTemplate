var filterBoxToggler = document.querySelector(".form-check-input");
var filterBox = document.querySelector(".filter-box");

filterBoxToggler.addEventListener("click", function() {
    filterBox.classList.toggle("hide-Filter--Box");
  });