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