
/* Fade in Fade out slides */
$(document).ready(function() {
    var TIME_PER_WORD = 2000;
    var TIME_PER_SLIDE = 4000;
    var slides = $(".slide"),
        numPages = slides ? slides.length : 0;
    var partnerSlides = $(".slide-partners"),
        numPartners = partnerSlides ? partnerSlides.length : 0;
    x = -1;
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

        $(partnerSlides[x]).removeClass('currentSlide');
        $(partnerSlides[x]).removeClass('overlay');
        $(partnerSlides[x]).removeClass('elementToFadeOutDown');
        $(partnerSlides[x]).removeClass('elementToFadeInDown');
        x = ++x % numPartners;

        $(partnerSlides[x]).addClass('currentSlide');
        $(partnerSlides[x]).addClass('overlay');
        $(partnerSlides[x]).addClass('elementToFadeInDown');


        setTimeout(function() {
            $(slides[i]).removeClass('elementToFadeInDown');
            $(slides[i]).addClass('elementToFadeOutDown');
            $(partnerSlides[x]).removeClass('elementToFadeInDown');
            $(partnerSlides[x]).addClass('elementToFadeOutDown');
        }, TIME_PER_WORD);
        setTimeout(nextSlide, TIME_PER_SLIDE);

    }

    nextSlide();

});

/* Fade in Fade out slides */


$(window).resize(function() {
    if (window.innerWidth <= 1000) $('.text-header').removeClass(' display-1');
    else $('.text-header').addClass('display-1');
});

$(window).ready(function() {
    if (window.innerWidth <= 1000) $('.text-header').removeClass(' display-1');
});

$(window).on("load", function() {
    /* setTimeout(loaderFade, 100); */
    loaderFade()
    function loaderFade() {
        $('.loader-wrapper').fadeOut("slow");
    }
});

$(document).ready(function() {
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

/* Partners */

/* Partners */
