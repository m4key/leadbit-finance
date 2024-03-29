let options = {
  buttonOpen: '.hamburger__button',
  buttonClose: '.popup__close',
  background: '.popup',
  menu: '.popup__content',
  socialLinks: 'header__social-link',
  wrapper: '.wrapper'
}

let menu = (function(options) {
  let button = document.querySelector(options.buttonOpen);
  let modalMenu = document.querySelector(options.menu);
  let closeButton = document.querySelector(options.buttonClose);
  let body = document.querySelector('body');
  let wrapper = document.querySelector(options.wrapper);
  let bg = document.querySelector(options.background);
  let links = document.getElementById(options.socialLinks);
  console.log(links)

  let _openMenu = function(e) {
    bg.style.display = 'block';
    modalMenu.style.transform = 'translateX(0)';
    body.classList.add('body--active-modal');
    wrapper.classList.add('wrapper--active-modal');
  }

  let _closeMenu = function(e) {
    bg.style.display = 'none';
    modalMenu.style.transform = 'translateX(100%)';
    body.classList.remove('body--active-modal');
    wrapper.classList.remove('wrapper--active-modal');
  }

  let addListeners = function() {
    button.addEventListener('click', _openMenu);
    closeButton.addEventListener('click', _closeMenu);
    modalMenu.addEventListener('click', function(e) {
      target = e.target;
      link = 'socials__link';  
      if (
        target.className == 'main-menu__link' || isAnyParentHasClass(target,link)
        
      ) {
        _closeMenu();
      }
    })
  }

  function isAnyParentHasClass(element, className) {
    const parent = element.parentNode;
    if (parent && parent.classList) {
      return parent.classList.contains(className) ?
        true : isAnyParentHasClass(parent, className);
    }
    return false;
  }

  document.addEventListener('keydown', function(e) {
    if (e.keyCode == 27) {
      _closeMenu();
    }
  })

  return {
    toggleMenu: addListeners
  }
})(options)

menu.toggleMenu()