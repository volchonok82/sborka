//  получаем элемент где будет наш слайдер
let sliderNoUi = document.querySelector('.nouislider');

// создаем новый слайдер
noUiSlider.create(sliderNoUi, {
    // orientation: 'vertical',

    //подсказки значений над ползунками 
    // tooltips: true,

    // окрашивающаяся линия внутри значений
    connect: true,
    
    // начальные значения
    start: [1000, 8000],
    step: 500,
    // крайние значения слайдера
    range: {
        'min': 0,
        'max': 10000
    },

    // крайнее значение слайдера за которое нельзя заходить
    // padding: 500,

    /*// линейки внизу слайдера
    
    pips: {
        mode: 'values',
        values: [50, 100, 150],
        density: 4
    },*/

    // форматироание значений, по умолчанию float с двумя нулями
    format: {
        //заменим на integer
        to: function (value) {
            return parseInt(value) + '₽';
        },
        // Получает строку, должен возвращать число.
        from: function (value) {
            return Number(value.replace('₽', ''));
        }
    }

});

// выводим значения ползунков в инпуты
sliderNoUi.noUiSlider.on('update', function () {
    let valOne = document.querySelector('.value1');
    let valTwo = document.querySelector('.value2');
    let values = sliderNoUi.noUiSlider.get();
    let val1 = values[0];
    let val2 = values[1];
    valOne.value = val1;
    valTwo.value = val2;
});

 // передаем введеные пользователем значения в слайдер
 var inputFormatOne = document.querySelector('.value1');
 var inputFormatTwo = document.querySelector('.value2');
 
 inputFormatOne.addEventListener('change', function () {
     sliderNoUi.noUiSlider.set([inputFormatOne.value, null]);
 });
 
 inputFormatTwo.addEventListener('change', function () {
     sliderNoUi.noUiSlider.set([null, inputFormatTwo.value]);
 });