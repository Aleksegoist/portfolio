$(function () {
  // const mixer = mixitup('.works');

  const burger = document.querySelector('.burger');
  const headerNav = document.querySelector('.header__nav');

  burger.addEventListener('click', () => {
    burger.classList.toggle('burger--active');
    headerNav.classList.toggle('active');
  });
});
