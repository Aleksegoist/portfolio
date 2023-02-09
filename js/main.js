$(function () {
  const menu_btn = document.querySelector('.hamburger');
  const menu_header = document.querySelector('.menu__header');
  menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    menu_header.classList.toggle('is-active');
  });

  const mixer = mixitup('.works');
});
