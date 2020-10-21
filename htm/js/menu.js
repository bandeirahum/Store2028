function handleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const submenuTrigger = document.querySelector('.active-submenu');
    const backTrigger = document.querySelector('.submenu__list__item--back');
    const menu = document.getElementById('menu');
    const submenu = document.getElementById('submenu');
  
    hamburger.addEventListener('click', handleHamburger)
    
    function handleHamburger() {
      if (hamburger.classList.contains('is-active')) {
        hamburger.classList.remove('is-active');
        menu.classList.remove('is-active');
        submenu.classList.remove('is-active');
      } else {
        hamburger.classList.add('is-active');
        menu.classList.add('is-active');
      }
  
      submenuTrigger.addEventListener('click', handleSubmenu);
  
      function handleSubmenu() {
        if (submenu.classList.contains('is-active')) {
          submenu.classList.remove('is-active');
        } else {
          submenu.classList.add('is-active');
        }
  
        backTrigger.addEventListener('click', handleSubmenu);
      }
    }
  }
