$('.slider').slick({
    // повторение по умолчанию true
    infinite: false,
    
    // автовоиспроизведение
    autoplay: true,
    autoplaySpeed: 2000,
    // паузы
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,

    // если стрелки не нужны
    arrows:false,
    // кастомные стрелки
    // prevArrow: document.querySelector('.стрелка-назад'),
    // nextArrow: document.querySelector('.стрелка-вперед'),

    // если нужны точки
    dots: true,

    // адаптивная высота
    adaptiveHeight: true,

    // количество слайдов для показа
    slidesToShow: 3,
    // количество слайдов прокручиваемых за раз
    slidesToScroll: 3,

    // скорость пролистывания по умолчанию 300
    speed: 300,

    // стартовый слайд
    initialSlide: 0,

    // отключить перетаскивание
    // draggable: false,
    // swipe: false,

    // ожидание конца анимации
    waitForAnimate: false,

    // выделяем централный слайд
    // centerMode: true,

    // количество строк в слайдере
    rows: 2,
    // и количество слайдов в строке
    slidesPerRow: 2,

    // плавное изменение одного слайда
    fade: true,

    // если два слайдера то их можно связять задав каждому 
    asNavFor: ".имя другого слайдера",

    // различные параметры на разных брейкпонтах
    responsive:[{
        breakpoint: 768,
        settingd:{
            speed: 100,
        }
    }],

    // можем переместить срелки и точки в любой див
    appendArrows: $('.newdiv'),
    appendDots: $('.newdiv'),

    
  });


