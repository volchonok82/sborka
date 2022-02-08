    // смотри в templates/html/_btn-up.html

    /*  -------------------------------------------------------*/
    /*  Функция для прокрутки с контролем скорости
    /*  -------------------------------------------------------*/
    function scrollToTop(to, duration = 700) {
        const
            element = document.scrollingElement || document.documentElement,
            start = element.scrollTop,
            change = to - start,
            startDate = +new Date(),
            // t = current time
            // b = start value
            // c = change in value
            // d = duration
            easeInOutQuad = function (t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            },
            animateScroll = function () {
                const currentDate = +new Date();
                const currentTime = currentDate - startDate;
                element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
                if (currentTime < duration) {
                    requestAnimationFrame(animateScroll);
                } else {
                    element.scrollTop = to;
                }
            };
        animateScroll();
    }
    /*  -------------------------------------------------------*/
    /*  находим кнопку и задаем верхний отступ при котором она будет появляться */
    /*  -------------------------------------------------------*/
    let btnUp = document.querySelector('._btn-up');
    // showBtnUp();

    function showBtnUp(topOfset = 300) {
        // let top = document.documentElement.scrollTop;
        let top = window.pageYOffset;
        if (top > topOfset) {
            btnUp.classList.add('_active');
        } else {
            btnUp.classList.remove('_active');
        }
    }
    window.addEventListener('scroll', function () {
        // по дефолту отступ при котором появляется кнопка 300px, если надо другой указать в скобках
        showBtnUp();
        // console.log(top.scrollY);
    });

    /** вешаем обработчик на клик по кнопке 
        document.addEventListener('DOMContentLoaded', function () {
            // При клике прокручиваем на самый верх
            btnUp.onclick = function (click) {
                click.preventDefault();
                // Вызываем функцию, первый аргумент - отступ, второй - скорость скролла, чем больше значение, тем медленнее скорость прокрутки
                scrollToTop(0, 400);
            };
        });*/

    btnUp.addEventListener('click', function () {
        // Вызываем функцию, первый аргумент - отступ, второй - скорость скролла, чем больше значение, тем медленнее скорость прокрутки
        scrollTo(0, 400);
    });