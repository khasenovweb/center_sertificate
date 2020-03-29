$(document).ready(function() {
    //Яндекс Карта
    ymaps.ready(init);
    var myMapAll;

    function init() {
        myMapAll = new ymaps.Map("contacts__map", {
            center: [55.763356, 49.234954],
            zoom: 10
        });
        var myPlacemark_1 = new ymaps.Placemark([55.763356, 49.234954], {
            balloonContentHeader: "Название объекта",
            balloonContentBody: "Описание объекта",
            balloonContentFooter: "",
            hintContent: "Кликните для более подробной информации"
        });
        myMapAll.geoObjects.add(myPlacemark_1);
    }
    //END Яндекс Карта

    $(".reviews__slider").owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        nav: true,
        navText: [
            '<img src="img/reviews_arrow_left.png">',
            '<img src="img/reviews_arrow_right.png" >'
        ]
    });
    jQuery(".reviews__slider__item__dots").on(
        "click",
        ".reviews__slider__item__dot",
        function(e) {
            owl.trigger("to.owl.carousel", [jQuery(this).index(), 300]);
        }
    );

    $('[data-faq-accordion-content]').slideUp();

    $('[data-faq-accordion-link]').click(function() {
        var id = $(this).attr('data-faq-accordion-link');
        $('[data-faq-accordion-content="' + id + '"]').slideToggle(200);
        $('[data-faq-accordion-link="' + id + '"] .faq__accordion__link__arrow').toggleClass('active');
    });

    $('[data-click-modal-open]').click(function() {
        var id = $(this).attr('data-click-modal-open');
        $('[data-modal="' + id + '"]').show();
    });

    $('[data-click-modal-close]').click(function() {
        $('[data-modal]').hide();
    });
});