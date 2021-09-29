
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#header').outerHeight();

// If the user scrolls then didScroll is equal to true
$(window).scroll(function(event){
    didScroll = true;
});


setInterval(function() 
{
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
},1000);


function hasScrolled() {

    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
        $('.prod-Results-Header').removeClass('results-Header--onLoad').addClass('scrollDown');
        $('.filter-box').removeClass('filterbox-onLoad').addClass('filterbox--scrollDown');

    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
            $('.prod-Results-Header').removeClass('scrollDown').addClass('results-Header--onLoad');
            $('.filter-box').removeClass('filterbox--scrollDown').addClass('filterbox-onLoad');

        }
    }

    
    
    lastScrollTop = st;
}