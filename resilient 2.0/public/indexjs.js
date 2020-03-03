$(document).ready(function () {
    $(".mera_exp").hover(function () {
        $(".meraclass").html("Explore what and how we do the things.");
        $(".meraclass").toggle();
    });

    $(".mera_gallery").hover(function () {
        $(".meraclass").html("Happy people, Happy faces ahead.");
        $(".meraclass").toggle();
    });

    $(".mera_contact").hover(function () {
        $(".meraclass").html("Don't be a stranger, know us !");
        $(".meraclass").toggle();
    });



});






$(document).ready(function () {
    $(".expleft .road").hover(function () {
        $(".expcenter").html(
            "<div><img src='assets/webp/road.webp' class='bandimages'> <br>Road safety is very important.<center> <a href='roadsafety.html'> <button type='button' class='btn btn-outline-light' class='buttonposition'>Go There!</button> </a></center></div>"
        );
        $(".expcenter").show();
    });

    $(".expleft .school").hover(function () {
        $(".expcenter").html(
            "<div><img src='assets/webp/schoolsafety2.webp' class='bandimages'> <br>School safety is very important.<center><a href='school.html'><button type='button' class='btn btn-outline-light' class='buttonposition'>Go There!</button> </a></center></div>"
        );
        $(".expcenter").show();

    });

    $(".expleft .sec").hover(function () {
        $(".expcenter").html(
            "<div><img src='assets/webp/safe2.webp' class='bandimages'> <br> Safety is very important.<center><a href='safety.html'><button type='button' class='btn btn-outline-light' class='buttonposition'>Go There!</button> </a></center></div>"
        );
        $(".expcenter").show();
    });



    $(".expleft .crime").hover(function () {
        $(".expcenter").html(
            "<div><img src='assets/webp/cyber2.webp' class='bandimages'> <br> Safety is very important.<center><a href='security.html'><button type='button' class='btn btn-outline-light' class='buttonposition'>Go There!</button> </a></center></div>"
        );
        $(".expcenter").show();
    });




    $(".expright .disaster").hover(function () {
        $(".expcenter").html(
            "<div><img src='assets/webp/disaster2.webp' class='bandimages'> <br> Safety is very important.<center> <a href='disastermanagement.html'><button type='button' class='btn btn-outline-light' class='buttonposition'>Go There!</button> </a></center></div>"
        );
        $(".expcenter").show();
    });
    $(".expright .risk").hover(function () {
        $(".expcenter").html(
            "<div><img src='assets/webp/risk2.webp' class='bandimages'> <br> Safety is very important.<center><a href='risk.html'><button type='button' class='btn btn-outline-light' class='buttonposition'>Go There!</button> </a></center></div>"
        );
        $(".expcenter").show();
    });
    $(".expright .crowd").hover(function () {
        $(".expcenter").html(
            "<div><img src='assets/webp/crowd2.webp' class='bandimages'> <br> Safety is very important.<center> <a href='crowd.html'><button type='button' class='btn btn-outline-light' class='buttonposition'>Go There!</button> </a></center></div>"
        );
        $(".expcenter").show();
    });

    $(".expright .prevent").hover(function () {
        $(".expcenter").html(
            "<div><img src='assets/webp/crime2.webp' class='bandimages'> <br> Safety is very important.<center><a href='crime.html'><button type='button' class='btn btn-outline-light' class='buttonposition'>Go There!</button> </a></center></div>"
        );
        $(".expcenter").show();
    });

});


$(".lazy-video a").click(function (e) {
    e.preventDefault();
    $(this).attr('id', 'player');
    var vidURL = $(this).attr('href');
    var imgURL = $(this).find('img').attr('src');
    var newVideo = '<div class="video-wrapper"><iframe src="' + vidURL +
        '" frameborder="0"></iframe></div>';

    resetLazyVideo();

    $(this)
        .parent()
        .addClass('active')
        .append(newVideo);
})

function resetLazyVideo() {
    $('div.lazy-video.active').each(function (i) {
        $(this)
            .removeClass('active')
            .find('div.video-wrapper').remove();
    })
}







/*------------------------counter-----------------------------*/
/*$.fn.jQuerySimpleCounter = function( options ) {
    var settings = $.extend({
        start:  0,
        end:    100,
        easing: 'swing',
        duration: 400,
        complete: '',
    }, options );

    var thisElement = $(this);

    $({count: settings.start}).animate({count: settings.end}, {
        duration: settings.duration,
        easing: settings.easing,
        step: function() {
            var mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
        },
        complete: settings.complete
    });
};*/

$.fn.jQuerySimpleCounter = function( options ) {
    var settings = $.extend({
        start:  0,
        end:    100,
        easing: 'swing',
        duration: 400,
        complete: '',
    }, options );
    var thisElement = $(this);

    jQuery(window).scroll(startCounter);
    function startCounter() {
        var hT = jQuery('.counter').offset().top,
            hH = jQuery('.counter').outerHeight(),
            wH = jQuery(window).height();
        if (jQuery(window).scrollTop() > hT+hH-wH) {
            jQuery(window).off("scroll", startCounter);
            jQuery('.number').each(function () {

    $({count: settings.start}).animate({count: settings.end}, {
        duration: settings.duration,
        easing: settings.easing,
        step: function() {
            var mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
        },
        complete: settings.complete
    });
});
}
}
};

$('#number1').jQuerySimpleCounter({end: 20550,duration: 2000});
$('#number2').jQuerySimpleCounter({end: 40900,duration: 2000});
$('#number3').jQuerySimpleCounter({end: 12480,duration: 2100});
$('#number4').jQuerySimpleCounter({end: 15,duration: 2300});



  /* AUTHOR LINK */
 $('.about-me-img').hover(function(){
        $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
    }, function(){
        $('.authorWindowWrapper').stop().fadeOut('fast').find('p').removeClass('trans');
    });






















    /*#e9ecef*/