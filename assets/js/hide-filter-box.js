var filterBoxToggler = document.querySelector(".toggle-filters");
var filterBox = document.querySelector(".filter-box");

var x = document.getElementById("filterbox-Toggler");

filterBoxToggler.addEventListener("click", function() {
    filterBox.classList.toggle("hide-Filter--Box");




    if (x.innerHTML === "Hide Filters") {
      x.innerHTML = "Show Filters";
    } else {
      x.innerHTML = "Hide Filters";
    }

  });





  

  