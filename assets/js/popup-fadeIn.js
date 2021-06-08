$(document).ready(function() {
    if(localStorage.getItem('popState') != 'shown'){
        $('.center-Popup').delay(9000).fadeIn();
        $('.center-Popup').delay(9000).fadeIn();
        localStorage.setItem('popState','shown')
    }

    $('#close-Popup, .center-Popup').click(function() // You are clicking the close button
    {
        $('.center-Popup').fadeOut(); // Now the pop up is hidden.
        $('.overlayNowOpened').fadeOut();
    });

});