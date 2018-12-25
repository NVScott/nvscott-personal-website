$(document).ready(function(){
    $('.slider-little').slick({
        arrows: true,
        dots: true,
        variableWidth: true,
        centerMode: true,
        infinite: true,
        centerPadding: '60px',
        slidesToShow: 3,
        focusOnSelect: true
    });
    $('.slider-little').on('afterChange', function(event, slick, currentSlide){
        $('.content').hide();
        $('.content[data-id=' + (currentSlide + 1) + ']').show();
    });
});