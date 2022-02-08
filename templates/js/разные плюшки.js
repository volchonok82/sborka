// ====================================================
// вставка текущей даты или времени в HTML
// ====================================================
// получаем элемент куда будем выводить дату или время
let timeToHtml = document.querySelector(".entry-time");
let dateToHtml = document.querySelector(".entry-date");

// функция получения текущего времени
function getCurrentTimeString() {
    return new Date().toTimeString().replace(/ .*/, '');
}

// получение текущей даты
dateToHtml.innerHTML = 'Tекущая дата: ' + new Date().toLocaleDateString();

// обновление текущего времени каждую секунду
setInterval(function () {
    timeToHtml.innerHTML = 'Текущее время: ' + getCurrentTimeString();
}, 1000);





// ====================================================
// ПОИСК ПО КАТЕГОРИЯМ НА ЧЕКБОКСАХ
// ====================================================
// получаем элемент при клике на который открываем элемент с категориями
$('.search__label').on('click', function () {
    $('.categories').toggle(300);
    console.log('click');
});

// получаем все чекбоксы в категориях
let categoriesCheckboxes = $('.categories__checkbox input:checkbox');

categoriesCheckboxes.on('change', function () {
    let length = $('.categories__checkbox input[type=checkbox]:checked').length;

    if (length > 0) {
        $('.empty').removeClass('_active');
        $('.selected').addClass('_active').text("Выбрано: " + length);
    } else {
        $('.empty').addClass('_active');
        $('.selected').removeClass('_active');
    }
});