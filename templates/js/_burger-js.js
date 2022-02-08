// задать хедер(по дефолту везде .header)
const headerElement = '.header';


actionBurgerMenu();
// onMenuLinkClick(headerElement);
hideHeader(headerElement, 100);

/*-------------------------- */
function actionBurgerMenu(iconBurger = '.icon-menu', bodyMenu = '.menu__body') {
    const iconMenu = document.querySelector(iconBurger);
    const menuBody = document.querySelector(bodyMenu);
    if (iconMenu && menuBody) {
        iconMenu.addEventListener("click", function (e) {
            if (iconMenu.classList.contains('_active')) {
                iconMenu.classList.remove("_active");
                menuBody.classList.remove("_active");
                iconMenu.removeAttribute('style');
                iconMenu.ariaExpanded="false";
                bodyUnLock();
            } else {
                iconMenu.classList.add("_active");
                menuBody.classList.add("_active");
                iconMenu.style.marginRight = lockPaddingValue;
                iconMenu.ariaExpanded="true";
                bodyLock();
            }
        });
    }
}


/*-------------------------- */
//   для слушателя всего документа
function onMenuLinkClick(e, fixedHeader = false, activeMenuItem = false, linkMenu = '.menu__link', iconBurger = '.icon-menu', bodyMenu = '.menu__body') {

    if (activeMenuItem && linkMenu) {
        let linksMenu = document.querySelectorAll(linkMenu);
        linksMenu.forEach(linkMenu => {
            linkMenu.classList.remove('_active');
        });
        e.target.closest(linkMenu).classList.add('_active');
    }
    onClickLink(e, fixedHeader);
    let menuIcon = document.querySelector(iconBurger);
    let menuBody = document.querySelector(bodyMenu);

    if (menuIcon.classList.contains('_active')) {
        onClickLink(e, fixedHeader);
        bodyUnLock();
        menuIcon.classList.remove('_active');
        menuBody.classList.remove('_active');
    }
}


function onClickLink(e, headerFixed = false) {
    let targetElement = e.target.closest('a');
    let linkName = targetElement.getAttribute('href');
    //   console.log(linkName);
    if (linkName[0] == '#' && linkName.length > 1) {
        //   console.log("якорь");
        e.preventDefault();
        let gotoBlockName = document.querySelector(linkName);
        if (gotoBlockName) {
            if (headerFixed) {
                let gotoBlockValue = gotoBlockName.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

                //   let gotoBlockValue = gotoBlockName.getBoundingClientRect().top + document.documentElement.scrollTop - document.querySelector('header').offsetHeight;

                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: "smooth"
                });
            } else {
                gotoBlockName.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    }
    if (linkName[0] == '#' && linkName.length == 1) {
        e.preventDefault();
        //   console.log("ссылка никуда не ведет");
    }
}

/*-------------------------- */
function hideHeader(headerElement = '.header', topOfset = 200) {
    let lastScroll = 0;
    const header = document.querySelector(headerElement);
    const defaultOfset = topOfset;
    const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
    const containHide = () => header.classList.contains('_hide');

    if (header) {
        window.addEventListener('scroll', () => {
            if (scrollPosition() > lastScroll && !containHide()) {
                //scroll down с нуля
                header.classList.add('_vis');
                
            }
            if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOfset) {
                //scroll down после определенной позиции
                header.classList.add('_hide');
            }
            if (scrollPosition() < lastScroll && containHide()) {
                //scroll up
                header.classList.remove('_hide');
            }
            if (scrollPosition() == 0) {
                header.classList.remove('_vis');
            }
            lastScroll = scrollPosition();
        });
    }
}