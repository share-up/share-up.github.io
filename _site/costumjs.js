$(document).ready(function() {
    var TIME_PER_WORD = 2000;
    var TIME_PER_SLIDE = 4000;
    var slides = $(".slide"),
        numPages = slides ? slides.length : 0;
    i = -1;

    function nextSlide() {
        if (i >= 0)
            $(slides[i]).removeClass('currentSlide');
        $(slides[i]).removeClass('overlay');
        $(slides[i]).removeClass('elementToFadeOutDown');
        $(slides[i]).removeClass('elementToFadeInDown');
        i = ++i % numPages;

        $(slides[i]).addClass('currentSlide');
        $(slides[i]).addClass('overlay');
        $(slides[i]).addClass('elementToFadeInDown');

        setTimeout(function() {
            $(slides[i]).removeClass('elementToFadeInDown');
            $(slides[i]).addClass('elementToFadeOutDown');
        }, TIME_PER_WORD);
        setTimeout(nextSlide, TIME_PER_SLIDE);

    }

    nextSlide();

});


$(window).resize(function() {
    if (window.innerWidth <= 1000) $('.text-header').removeClass(' display-1');
    else $('.text-header').addClass('display-1');
});

$(window).ready(function() {
    if (window.innerWidth <= 1000) $('.text-header').removeClass(' display-1');
});