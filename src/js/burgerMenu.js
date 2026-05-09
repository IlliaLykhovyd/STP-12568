const menu = document.querySelector('.mobile-menu-overlay');
const burger = document.querySelector('#openMenuBtn');
const burgerBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('#closeMenuBtn');

burgerBtn.addEventListener('click', () => {
  menu.classList.add('active');
  burger.classList.add('hidden');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('active');
  burger.classList.remove('hidden');
});
