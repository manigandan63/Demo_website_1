$(document).ready(function() {
    $('.tab-content').hide();
    $('#Italy').show();
    $('.denstination-wrapper ul li').click(function() {
        $('.tab-content').hide();
        $('li').removeClass('active');
        $(this).addClass('active');
        var x = $(this).children().attr('href');
        $(x).show();
    });


    $(".up-arrow-sec").click(function() {
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 700);
    });

    $('.owl-carousel').owlCarousel({
        stagePadding: 300,
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        items: 1,
    });



    var myVideo = $("#bgvid");
    myVideo.pause();

    function playPause() {
        if (myVideo.play) {

            myVideo.pause();
        } else {

            myVideo.play();
        }
    }




    $('.myHTMLvideo').click(function() {
        this.paused ? this.play() : this.pause();
    });






    $('.menu-wrapper').click(function() {
        $('.icon-bar').toggleClass('icon-close');
    });




    // $('i.fa.fa-pause').hide();

    $('.video-image').click(function() {

        $('.video-image i').toggleClass('active');



    });



});