//================= 

// $('.menu__link').on('click', function(e){


//     let linkname = $(this).attr('href');
//     console.log(linkname);

//     let sectionName = $(linkname);
//     console.log(sectionName);

//     if(sectionName.length == 0){
//         // alert('нет такой секции')
//     }else{
//         e.preventDefault();
//         $('.menu__link').removeClass('_active').filter(this).addClass('_active');

//         $('html, body').animate({
//             scrollTop: sectionName.offset().top
//         },500);
//     }
// });



//  --------------------------------
// document.addEventListener('click', gotoScroll);
document.addEventListener('click', function (e) {
    console.log(e);
    let targetElement = e.target;
    console.log(targetElement);

    if (targetElement.closest('.menu__link')) {
        scrollToBlock(e, ".menu__link");
    }

    



});

function scrollToBlock(e, menuLink, activeLink = true) {
    let targetElement = e.target;

    //подсветка активного пункта меню
    if (activeLink) {
        let menuLinks = document.querySelectorAll(menuLink);
        menuLinks.forEach(menuLink => {
            menuLink.classList.remove('_active');
        });
        targetElement.classList.add('_active');
    }


    // переход по якорям
    let linkName = targetElement.getAttribute('href');
    // console.log(linkName);

    if (linkName[0] == '#' && linkName.length > 1) {
        console.log("якорь");
        e.preventDefault();
        const gotoBlockName = document.querySelector(linkName);
        if (gotoBlockName) {
            gotoBlockName.scrollIntoView({
                behavior: "smooth"
            });
        }
    }
    if (linkName[0] == '#' && linkName.length == 1) {
        e.preventDefault();
        console.log("ссылка никуда не ведет");
    }



}