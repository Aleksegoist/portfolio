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

  // $(window).scroll(function () {
  //   if ($(window).scrollTop() >= 200) {
  //     $('.header__nav').addClass('fixed');
  //   } else {
  //     $('.header__nav').removeClass('fixed');
  //   }
  // });

  // const headerHeight = $('.header__nav').outerHeight();

  // $('.menu__header-item a').on('click', function (e) {
  //   e.preventDefault();

  //   const scrollAnchor = $(this).attr('href');

  //   let scrollPoint = $(scrollAnchor).offset().top - headerHeight;

  //   $('html, body').animate(
  //     {
  //       scrollTop: scrollPoint,
  //     },
  //     500
  //   );
  //   return false;
  // });

  const burger = document.querySelector('.burger');
  const headerNav = document.querySelector('.header__nav');
  const body = document.querySelector('body');

  burger.addEventListener('click', () => {
    burger.classList.toggle('burger--active');
    headerNav.classList.toggle('active');
    body.classList.toggle('lock');
  });

  window.onscroll = () => {
    if (window.pageYOffset > 200) {
      headerNav.classList.add('fixed');
    } else {
      headerNav.classList.remove('fixed');
    }
  };

  const headerHeight = headerNav.offsetHeight;

  headerNav.addEventListener('click', (event) => {
    if (event.target.classList.contains('menu__header-item')) {
      event.preventDefault();
      if (window.innerWidth <= 1200) {
        burger.classList.remove('burger--active');
        headerNav.classList.remove('active');
        body.classList.toggle('lock');
      }

      const targetId = event.target.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);

      let targetPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset;
      const targetPadding = parseFloat(
        window.getComputedStyle(targetElement).paddingTop
      );
      let sectionPadding = parseFloat(
        window.getComputedStyle(document.querySelector('.section')).paddingTop
      );
      if (window.innerWidth <= 1200) {
        sectionPadding += headerHeight / 2;
      }
      if (targetPadding < sectionPadding) {
        targetPosition -= sectionPadding;
      }

      const startPosition = window.pageYOffset;
      const distance = (targetPosition = startPosition);
      let startTime = null;
    }
  });

  document.addEventListener('click', function (e) {
    if (e.target != burger && e.target != headerNav) {
      burger.classList.remove('burger--active');
      headerNav.classList.remove('active');
      body.classList.remove('lock');
    }
  });
});
