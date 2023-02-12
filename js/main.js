$(function () {
  const mixer = mixitup('.works');

  $('.menu__header a').on('click', function (e) {
    //отменяем стандартную обработку нажатия по ссылке
    e.preventDefault();
    //забираем идентификатор блока с атрибута href
    var id = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() >= 200) {
      $('.header__nav').addClass('sticky');
    } else {
      $('.header__nav').removeClass('sticky');
    }
  });

  const headerHeight = $('.header__nav').outerHeight();

  $('.menu__header-item a').on('click', function (e) {
    e.preventDefault();

    const scrollAnchor = $(this).attr('href');

    let scrollPoint = $(scrollAnchor).offset().top - headerHeight;

    $('html, body').animate(
      {
        scrollTop: scrollPoint,
      },
      500
    );
    return false;
  });

  const burger = document.querySelector('.burger');
  const headerNav = document.querySelector('.header__nav');

  burger.addEventListener('click', () => {
    burger.classList.toggle('burger--active');
    headerNav.classList.toggle('active');
  });
});
