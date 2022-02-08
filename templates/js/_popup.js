const popupLinks = document.querySelectorAll('.popup-link');


// величина такая же как в css
const timeout = 800;

// находим все ссылки на попапы и убираем у них # и по клику на ссылку открываем попап с таким именем
if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener('click', function (e) {
      const popupName = popupLink.getAttribute('href').replace('#', '');
      const currentPopup = document.getElementById(popupName);
      popupOpen(currentPopup);
      e.preventDefault();
    });
  }
}

// находим все объекты с классом .close-popup и вешаем на клик по нему функцию закрытия 
const popupCloseIcon = document.querySelectorAll('.popup__close');
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index];
    el.addEventListener('click', function (e) {
      popupClose(el.closest('.popup'));
      e.preventDefault();
    });
  }
}

// функция открытия попапа
function popupOpen(currentPopup) {
  if (currentPopup && unlock) {
    const popupActive = document.querySelector('.popup.open');
    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    currentPopup.classList.add('open');
    currentPopup.addEventListener('click', function (e) {
      if (!e.target.closest('.popup__content')) {
        popupClose(e.target.closest('.popup'));
      }
    });
  }
}

// функция закрытия попапа
function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove("open");
    if (doUnlock) {
      bodyUnLock();
    }
  }
}


document.addEventListener('keydown', function (e) {
  
  if (e.key === 'Escape') {
    let popupActive = document.querySelector('.popup.open');
    popupClose(popupActive);
  }
 
});

(function(){
  // проверяем поддержку
  if(!Element.prototype.closest){
    // реализуем
    Element.prototype.closest = function(css){
      var node = this;
      while(node){
        if(node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }
})();
(function(){
  // проверяем поддержку
  if(!Element.prototype.matches){
    // поределяем свойство
    Element.prototype.matches = Element.prototype.matchesSelector||
      Element.prototype.webkitMatchesSelector ||
      Element.prototype.mozMatchesSelector||
      Element.prototype.msMatchesSelector;
  }
})();