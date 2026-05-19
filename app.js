const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Check if elements exist before adding event listeners
if (!menu || !menuLinks || !navLogo) {
  console.error('Required DOM elements not found');
}

// Display Mobile Menu
const mobileMenu = () => {
  if (menu && menuLinks) {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
  }
};

if (menu) {
  menu.addEventListener('click', mobileMenu);
}

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const servicesMenu = document.querySelector('#services-page');
  const portfolioMenu = document.querySelector('#portfolio-page');
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // Remove highlight from all menu items first
  if (homeMenu) homeMenu.classList.remove('highlight');
  if (aboutMenu) aboutMenu.classList.remove('highlight');
  if (servicesMenu) servicesMenu.classList.remove('highlight');
  if (portfolioMenu) portfolioMenu.classList.remove('highlight');

  // adds 'highlight' class to my menu items based on scroll position
  if (window.innerWidth > 960) {
    if (scrollPos < 600) {
      if (homeMenu) homeMenu.classList.add('highlight');
    } else if (scrollPos < 1400) {
      if (aboutMenu) aboutMenu.classList.add('highlight');
    } else if (scrollPos < 2345) {
      if (servicesMenu) servicesMenu.classList.add('highlight');
    } else {
      if (portfolioMenu) portfolioMenu.classList.add('highlight');
    }
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars && menu && menuLinks) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

if (menuLinks) {
  menuLinks.addEventListener('click', hideMobileMenu);
}
if (navLogo) {
  navLogo.addEventListener('click', hideMobileMenu);
}