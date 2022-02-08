// lock body
const documentBody = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');
let unlock = true;
let timeout = 10;


function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('._body-wrapper').offsetWidth + 'px';
  
    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = lockPaddingValue;
      }
    }
    documentBody.style.paddingRight = lockPaddingValue;
    documentBody.classList.add('_lock');
  
    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, timeout);
  }
  
  function bodyUnLock() {
    setTimeout(function () {
      if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
          const el = lockPadding[index];
          el.style.paddingRight = '0px';
        }
      }
      documentBody.style.paddingRight = '0px';
      documentBody.classList.remove('_lock');
    }, 0);
  
    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, timeout);
  }