document.addEventListener('DOMContentLoaded', () => {
  const openMenuBtn = document.getElementById('openMenuBtn');
  const closeMenuBtn = document.getElementById('closeMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuLinks = document.querySelectorAll('.mobile-menu-links a');

  const openMenu = () => {
    mobileMenu.classList.add('active');
    document.body.classList.add('no-scroll');
    document.documentElement.classList.add('no-scroll');
    openMenuBtn.classList.add('hidden');
  };

  const closeMenu = () => {
    mobileMenu.classList.remove('active');
    document.body.classList.remove('no-scroll');
    document.documentElement.classList.remove('no-scroll');
    openMenuBtn.classList.remove('hidden');
  };

  openMenuBtn.addEventListener('click', openMenu);
  closeMenuBtn.addEventListener('click', closeMenu);

  menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', event => {
    if (mobileMenu.classList.contains('active')) {
      const isClickInsideMenu = mobileMenu.contains(event.target);
      const isClickOnOpenBtn = openMenuBtn.contains(event.target);

      if (!isClickInsideMenu && !isClickOnOpenBtn) {
        closeMenu();
      }
    }
  });
});
