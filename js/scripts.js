/*!
 * Start Bootstrap - Resume v7.0.4 (https://startbootstrap.com/theme/resume)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
 */
//
// Scripts
//


window.addEventListener('DOMContentLoaded', (event) => {
  // Activate Bootstrap scrollspy on the main nav element
  const sideNav = document.body.querySelector('#sideNav');
  if (sideNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#sideNav',
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    });
  });
});

var darkSwitch = document.getElementById('switch');
window.addEventListener('load', function () {
  if (darkSwitch) {
    initTheme();
    darkSwitch.addEventListener('change', function () {
      resetTheme();
    });
  }
});
function initTheme() {
  var darkThemeSelected =
    localStorage.getItem('switch') !== null &&
    localStorage.getItem('switch') === 'dark';
  darkSwitch.checked = darkThemeSelected;
  darkThemeSelected
    ? document.body.setAttribute('data-theme', 'dark')
    : document.body.removeAttribute('data-theme');
}
function resetTheme() {
  if (darkSwitch.checked) {
    document.body.setAttribute('data-theme', 'dark');
    localStorage.setItem('switch', 'dark');
  } else {
    document.body.removeAttribute('data-theme');
    localStorage.removeItem('switch');
  }
}

/**
 * Hero type effect
 */
const typed = document.querySelector('.typed');
if (typed) {
  let typed_strings = typed.getAttribute('data-typed-items');
  typed_strings = typed_strings.split(',');
  new Typed('.typed', {
    strings: typed_strings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
  });
}
