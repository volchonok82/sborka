const form = document.getElementById('form');
// нормальная отправка формы
// form.addEventListener('submit', formSend);

// имитация оправки формы
form.addEventListener('submit', sendFormFake);


async function formSend(event) {
    event.preventDefault();
    let error = formValidate(form);
    let formData = new FormData(form);
    if (formImage) {
        formData.append('image', formImage.files[0]);
    }


    if (error === 0) {
        form.classList.add('_sending');

        const response = await fetch('sendmail.php', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            let result = await response.json();
            //код показывающий что данные отправлены
            alert(result.message);
            console.log(result.message);
            if (formPreview) {
                formPreview.innerHTML = '';
            }
            form.reset();
            form.classList.remove('_sending');
        } else {
            alert('Ошибка');
            form.classList.remove('_sending');
        }
    } else {
        // код для обработки неправильного заполнения формы
        alert('Проверьте красные поля');
    }
}



function sendFormFake(e){
    e.preventDefault();
    let error = formValidate(form);
    if (error === 0) {
        form.classList.add('_sending');
        setTimeout(()=>{
            console.log('sending ok!');
            popupOpen(document.querySelector('.form-ok'));
            form.classList.remove('_sending');
            form.reset();
        },2000);
    } else {
        // код для обработки неправильного заполнения формы
        // alert('Проверьте красные поля');
        popupOpen(document.querySelector('.form-error'));
    }
}

// простая валидация формы
function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');
    // console.log(formReq);

    for (let index = 0; index < formReq.length; index++) {
        const input = formReq[index];
        // console.log(input);
        formRemoveError(input);

        if (input.classList.contains('_email')) {
            if (emailTest(input)) {
                formAddError(input);
                error++;
            }
        } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
            formAddError(input);
            error++;
        } else {
            if (input.value === '') {
                formAddError(input);
                error++;
            }
        }
    }
    return error;
}


function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
}

function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
}

// Функция теста email
function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

// превью загружаемой фотографии
const formImage = document.getElementById('formImage');
const formPreview = document.getElementById('formPreview');
if (formImage && formPreview) {
    formImage.addEventListener('change', () => {
        uploadFile(formImage.files[0]);
    });
}


function uploadFile(file) {
    //проверяем тип файла
    if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
        alert('Разрешены только изображения!');
        formImage.value = '';
        return;
    }
    //проверяем размер файла
    if (file.size > 2 * 1024 * 1024) {
        alert('Файл должен быть менее 2мб.');
        return;
    }

    let reader = new FileReader();
    reader.onload = function (e) {
        formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
    };
    reader.onerror = function (e) {
        alert('Ошибка');
    };
    reader.readAsDataURL(file);
}