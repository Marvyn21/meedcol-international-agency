window.onscroll = function() { stickNav() };
var mainNav = document.querySelector("#mainNav");
var about = document.querySelector("#about");
var sticky = about.offsetTop - mainNav.offsetHeight;


function stickNav() {
    if (window.pageYOffset > sticky) {
        mainNav.classList.add("navbar-fixed-top");
    } else {
        mainNav.classList.remove("navbar-fixed-top");
    }
}


/** Start Change the active nav link according to the section **/
var sections = $('.section'),
    nav = $('#mainNav'),
    nav_height = nav.outerHeight();
$(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop();
    sections.each(function() {
        var top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight();
        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('.nav-link').removeClass('active');
            $(this).addClass('active');
            nav.find('.nav-link[href="#' + $(this).attr('id') + '"]').addClass('active');
        }
    });
});






// Add some animation once we clik on the link: scroll up slowly :) .
// animate scroll 
nav.find('a.nav-link').on('click', function() {
    animateScroll($(this));
});
$('body').find('a.scroll').on('click', function() {
    animateScroll($(this));
});


function animateScroll(element) {
    var $el = element,
        id = $el.attr('href');

    $('html, body').animate({
        scrollTop: $(id).offset().top //- nav_height
    }, 500);
    return false;
}

/************************* Genral animations **************************/
// add fade in fwd animation for each section once the link is clicked
nav.find('a.nav-link').on('click', function() {
    linkid = $(this).text().toLowerCase();
    sections.each(function() {
        if ($(this).attr('id') == linkid) {
            animation($('#' + linkid), 'fade-in-fwd');
        }
    });
});




var animationEvent = 'webkitAnimationEnd oanimationend msAnimationEnd animationend';
// fade in fwd animation
function animation(element, className) {
    element.addClass(className);
    element.one(animationEvent, function(event) {
        element.removeClass(className)
    });
}

// Add the animation to icon circle in every click 
// service_container = $('#services .container');
fa_circle = $('#services i.fa-circle');
$('a.nav-link[href="#services"]').on('click', function() {
    animation(fa_circle, 'swirl-in-fwd');
});

$('#about a.btn').on('click', function() {
    animation(fa_circle, 'swirl-in-fwd');
});