/**
 * Created by Костя on 30.03.2017.
 */

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        margin:0,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1280:{
                items:7
            }
        }
    });

    $('.owl-item').css('width','128');

    $('.owl-nav').css('display','block');

    $('.program__item--img').click(function () {
        $(this).prev().parent().find('.program__item--time,.program__item--img,.program-wrap-desc').fadeOut();
        $(this).prev().parent().find('.program__item--iframe').slideDown('slow');
    });

    $('.program__item--iframe i').click(function () {
        $(this).parent().fadeOut();
        $(this).parent().parent().find('.program__item--time,.program__item--img,.program-wrap-desc').slideDown('slow');
    });

    $('.program__item--title').click(function () {
        $(this).parent().parent().parent().find('.program__item--time,.program__item--img,.program-wrap-desc').fadeOut();
        $(this).parent().parent().parent().find('.program__item--iframe').slideDown('slow');
    });

    $(".link").click(function() {

            // Отображаем скрытый блок
            $(".block").fadeIn(); // fadeIn - плавное появление
            return false; // не производить переход по ссылке
        },
        function() {
            // Скрываем блок
            $(".block").fadeOut(); // fadeOut - плавное исчезновение
            return false; // не производить переход по ссылке
        }); // end of toggle()


    $('.header__bottom--item').hover(function () {
        $(this).find($('i .svg path')).attr('fill','#ffffff');
    },function () {
        $(this).find($('i .svg path')).attr('fill','#727272');
    });

    $('.owl-prev,.owl-next').html("<i></i>");

});