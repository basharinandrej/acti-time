import '../src/css/main.scss'
import '../src/img/sprite.svg'
import '../src/img/vector.png'
import $ from "jquery"
import "slick-carousel"



$('.main-slider').slick({
    arrows: false,
    dots: true,
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 2,
    responsive: [
        {
          breakpoint: 1151,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: false
          }
        },
        {
          breakpoint: 993,
          settings: {
            variableWidth: true,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            variableWidth: true,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
});


$('.burger--js').click( function(e) {
    e.preventDefault();
    $('.header__main-btn').addClass('translateX-50').css('left', '50%').css('bottom', '20px').css('top', 'auto');
    $('.header__main-menu').addClass('translateX');
    $(this).hide();
    $('.close-icon--js').show();
    $('body').addClass('hidden')
})

$('.close-icon--js').click( function() {
  $(this).hide();
  $('.burger--js').show();
  $('.header__main-btn').removeClass('translateX-50').css('left', '0%');
  $('.header__main-menu').removeClass('translateX');
  $('body').removeClass('hidden')
})




/* Дропдаун высоты */
var acc = document.getElementsByClassName('dropdown-btn');
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function (e) {
        e.preventDefault();
        this.classList.toggle("active");
        var id = $(this).attr('data-dropdown');

        var panel = document.querySelector('#' + id);
        panel.classList.toggle("active");
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }
}
/* Дропдаун высоты конец*/
