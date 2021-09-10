$(document).ready(function() {
    if(localStorage.getItem('popState') != 'shown'){
        $('.center-Popup').delay(9000).fadeIn();
        localStorage.setItem('popState','shown')
    }

    $('#close-Popup, .center-Popup').click(function(){
        $('.center-Popup').fadeOut(); 
        $('.overlayNowOpened').fadeOut();
    });
});