$(function () {
    new WOW().init();
    /**************************************************
    |   |   |   |   Work section    |    |    |    |
    ***********************.***************************/

    $('#work').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        // other options
        gallery: {
            enabled: true
        },
    });
    $('.owl-carousel').owlCarousel({
        autoplay: true,
        autoplayHoverPause: true,
    });
    $(function () {
        $("#team-members").owlCarousel({
            items: 3,
            autoplay: true,
            smartSpeed: 700,
            loop: true,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                }
            }

        });
    });
    $(function () {
        $("#our-clients").owlCarousel({
            items: 1,
            autoplay: true,
            autoplayHoverPause: true,

        });
    });


});
