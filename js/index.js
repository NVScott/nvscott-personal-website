$(window).scroll(function() {
    if ($(window).scrollTop() > 129) {
        $('#sticky-bar').css({
            'webkit-box-shadow': '0px 3px 16px 1px rgba(0,0,0,0.75)',
            '-moz-box-shadow': '0px 3px 16px 1px rgba(0,0,0,0.75)',
            'box-shadow': '0px 3px 16px 1px rgba(0,0,0,0.75)',
            'background-color': '#bcd0f0'});
        $(".nav-text").addClass('hidden');
        $(".menu-options").addClass('hidden');


    } else {
        $('#sticky-bar').css({
            'webkit-box-shadow': '',
            '-moz-box-shadow': '',
            'box-shadow': '',
            'background-color': ''});
        $(".nav-text").removeClass('hidden');
        $(".menu-options").removeClass('hidden');


    }
});