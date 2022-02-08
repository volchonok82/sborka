// проверка подключения Swiper
if (window.Swiper) {
    //Инициализируем Swiper

    let mySlider = new Swiper('.sliderClass', {

        /* */
        // стрелки
        // в html могут быть добавлены где угодно
        navigation: {
            // можно указать свои классы, для которых уже есть css
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },


        /* */
        // Навигация
        // Буллеты, текущее положение, прогрессбар
        pagination: {
            el: '.swiper-pagination',

            // тип пагинации "bullets", "fraction", "progressbar" or "custom"
            /** 
            // Буллеты*/
            type: 'bullets',
            // если не включено, не кликабельно
            clickable: true,
            // Динамические буллеты(изменяют размер в зависимости от дальности к текущему слайду)
            dynamicBullets: true,
            // Кастомные буллеты (например для вывода номера слайда))
            // renderBullet: function (index, className) {
            //     return '<span class="' + className + '">' + (index + 1) + '</span>';
            // },


            /*
            // Фракция (текущий номер слайда из общего числа)
            type: 'fraction',
            // Кастомный вывод фракции
            renderFraction: function (currentClass, totalClass) {
                return 'Фото <span class="' + currentClass + '"></span>' +
                    ' из ' +
                    '<span class="' + totalClass + '"></span>';
            }*/


            /*
            // Прогрессбар
            type: 'progressbar',
            */
        },

        /* 
        // Скролл
        scrollbar: {
            el: '.swiper-scrollbar',
            // возможность перетаскивать скролл
            draggable: true
        },*/

        // включение/отключение
        // перетаскивания на ПК
        simulateTouch: true,
        // чувствительность свайпа(для меньшего усилия увеличить число, 0 отключит возможность перетаскивания на всех устройствах)
        touchRatio: 1,
        // Угол срабатывания свайпа/перетаскивания
        touchAngle: 45,
        // Курсор перетаскивания
        grabCursor: true,

        // перключение на слайд при клике на него
        slideToClickedSlide: true,

        /* 
        // Навигация по хешу
        hashNavigation: {
            // отслеживать состояние(навигация с помощью стрелок браузера) 
            watchState: true,
        },*/

        // управление клавиатурой
        keyboard: {
            // вкл/выкл
            enabled: true,

            // вкл/выкл только когда слайдер в пределах вьюпорта
            onlyInViewport: true,

            // вкл/выкл управление клавишами pageUp pageDown
            // pageUpDown: true,
        },

        // управление колесом мыши
        mousewheel: {
            // чувствительность колеса
            sensitivity: 1,
            // класс объекта на котором будет 
            // срабатывать прокрутка мышью 
            // (если сладеров несколько оставляем по умолчанию)
            // eventsTarget: ".swiper-container"
        },

        // автовысота (почти бесполезна)
        // autoHeight: true,

         // мультирядность(слайдер в два или более ряда)
        // grid:{
        //     rows : 2,
        //     fill: 'row',
        // },

        // количество слайдов для показа (можно указывать нецелые числа)
        // или 'auto' (включить стили в css)
        slidesPerView: 2,

        // отключение функционала
        // если слайдов меньше чем нужно
        watchOverflow: true,

        // отступ между слайдами
        spaceBetween: 30,

        // количество пролистываемых слайдов
        slidesPerGroup: 1,

        // активный слайд по центру
        // centeredSlides: true,

        // стартовый слайд
        initialSlide: 0,

       

        // Бесконечный слайдер
        // не работает со скролом, его надо отключать
        // не работает с мультирядностью (значение должно стоять не больше 1)
        loop: false,

        // колучество дублирующих сладов(такое же как значение slidesPerView)
        loopedSlides: 0,

        // свободный режим
        // перемещаем слайды без фиксированной позиции,  скролится колесом мыши
        freeMode: {
            enabled: false,
            minimumVelocity: 0.2,
            momentum: false,
        },

        /* 
        // Автопрокрутка
        autoplay:{
            // пауза между прокруткой
            delay: 1000,
            // закончить на последнем слайде
            stopOnLastSlide: true,
            // отключить после ручного переключения
            disableOnInteraction: false
        },*/

        // скорость прокрутки(по умолчанию 300)
        speed: 800,

        // вертикальный слайдер (заменить на 'vertical')
        direction: 'horizontal',

        // Эффекты переключения слайдов
        // листание
        // effect: 'slide', 

        /* 
        // Эффекты переключения слайдов
        // смена прозрачности
        effect: 'fade', 
        // дополнение к fade
        fadeEffect:{
            // параллельная смена прозрачности
            crossFade: true
        },*/

        /* 
        // Эффекты переключения слайдов
        // переворот
        effect: 'flip',
        // дополнение к flip
        flipEffect:{
            // тень
            slideShadows: true,
            // показ только активного слайда
            limitRotation: true
        },*/

        /* 
        // Эффекты переключения слайдов
        // куб
        effect: 'cube',
        // дополнение к cube
        cubeEffect:{
            // настройки тени
            slideShadows: true,
            shadow: true,
            shadowOffset: 20,
            shadowScale: 0.94
        },*/

        /* 
        // Эффекты переключения слайдов
        // эффект потока
        effect: 'coverflow',
        // дополнение к coverflow
        coverflowEffect:{
            // угол
            rotate: 20,
            // наложение
            stretch: 50,
            // тень
            slideShadows: true,
        },*/


        /* 
        // брейкпоинты (адаптив)
        // ширина экрана
        breakpoints:{
            320:{
                slidesPerView: 1,
            },
            576:{
                slidesPerView: 2,
            },
            992:{
                slidesPerView: 3,
            },
        },*/


        /* 
        // отключить предзагрузку картинок
        preloadImages: false,
        // Lazy Loading
        // (подгрузка картинок)
        lazy:{
            // подгружать на старте переключения слайда
            loadOnTransitionStart: true,
            // подгрузить предыдущую и следующую картинки
            loadPrevNext: true,
        },
        // слежка за видимыми слайдами
        watchSlidesProgress: true,
        // добавление класса видимым слайдам
        watchSlidesVisibility: true,
        */

        /* 
        // зум картинки
        zoom: {
            // максимальное увеличение
            maxRatio:5,
            // минимальное увеличение
            minRatio: 1,
        },*/


        /**/
        // Обновить свайпер (например когда он изначально скрыт)
        // при изменении элементов слайдера
        observer: true,

        // при изменении родитеьских элементов слайдера
        observeParents: true,

        // при изменении дочерних элементов слайда
        observeSlideChildren: true,

        /* */
        // доступность
        a11y: {
            // включить/выключить
            enabled: true,
            // сообщения
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
            firstSlideMessage: 'This is the first slide',
            lastSlideMessage: 'This is the last slide',
            paginationBulletMessage: 'Go to slide {{index}}',
            // notificationClass: 'swiper-notification',
            // containerMessage: '',
            // containerRoleDescriptionMessage: '',
            // itemRoleDescriptionMessage: '',
        }
    });


    // можно использовать функции
    // например для включение/отключения автопрокрутки при наведении

    /* 
    function sliderAutoplayStop(sliderName,sliderBlock){
        let sb = document.querySelector(sliderBlock);
        sb.addEventListener("mouseenter", function(e){
            sliderName.autoplay.stop();
        });
        sb.addEventListener("mouseleave",function(e){
            sliderName.autoplay.start();
        });
    }


    function sliderAutoplayStart(sliderName,sliderBlock){
        let sb = document.querySelector(sliderBlock);
        sb.addEventListener("mouseenter", function(e){
            sliderName.params.autoplay.disableOnInteraction = false;
            sliderName.params.autoplay.delay = 500;
            sliderName.autoplay.start();
        });
        sb.addEventListener("mouseleave",function(e){
            sliderName.autoplay.stop();
        });
    }

    // sliderAutoplayStop(mySlider, '.sliderClass');
    sliderAutoplayStart(mySlider, '.sliderClass');*/
}