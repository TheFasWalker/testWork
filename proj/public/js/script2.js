
// ловушка фокуса(таба)
// находим блок в котором ловим фокус по id
// при вызове функции вместо modal пишем путь до нужного объекта внутри которого будем табаться
function tabableElements(modal) {
    var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
    var focusableElements = modal.querySelectorAll(focusableElementsString);
    focusableElements = Array.prototype.slice.call(focusableElements);
    var firstTabStop = focusableElements[0];
    var lastTabStop = focusableElements[focusableElements.length-1];
    focusableElements[0].focus();
    modal.addEventListener('keydown', function (e) {
        if (e.keyCode === 9) {
            if (e.shiftKey) {
                if (document.activeElement === firstTabStop) {
                    e.preventDefault();
                    lastTabStop.focus();
                }
            } else {
                if (document.activeElement === lastTabStop) {
                    e.preventDefault();
                    firstTabStop.focus();
                }
            }
        }
    })
};

//==============================
//закрытие блока при клике мимо
$(document).click(function (e) {
    if ($(e.target).closest('.product-description__links').length) {
        // клик внутри элемента
        return;
    } else {
        // клик снаружи элемента
        // тут функция закрытия элемента
    }
//
//==============================
//

$(document).keydown(function(eventObject){
	if( eventObject.which == 27 ){
		do_function();
	};
});
// ==========================
// вычисляем ширину полосы прокрутки(вертикальной)
var div = document.createElement('div');
div.style.overflowY = 'scroll';
div.style.width = '50px';
div.style.height = '50px';
document.body.append(div);
var scrollWidth = div.offsetWidth - div.clientWidth;
div.remove();

// проверка браузера на safari
if (navigator.userAgent.toLowerCase().match(/(ipad|iphone)/))
{
    alert('this is safari');
} else {
    alert('this not safari')
    }
    // проверка на сафари(проверяет и моб версию)
function safari(){
        if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
            $('.container').addClass('safari');
        }
    };
    safari();

// прописывается в коде страницы. регулирует  размер шрифта в заданных рамках
// в зависимости от наполнения блока
//  библиотека fitty
<script>
window.addEventListener('resize', event =>{
    if(window.screen.width > 375){
        fitty('#one-project__name-title',{
            minSize: 24,
            maxSize: 92,
            // multiLine:false
        });
    }
})
if(window.screen.width > 375){
    fitty('#one-project__name-title',{
        minSize: 16,
        maxSize: 92,
        // multiLine:false
    });
}
    </script>

// при клике на элемент year (которых много) считывается содержимое текстового блока ему присваивается  активный класс
// так же находится скрытый элемент у которого есть класс кодержащий в себе содержимое  блока year и он отображается. остальные такие блоки скрываются
//
$('.year').on('click', function () {
    var textName = $(this).text();
    $('.year').removeClass('year_active');
    $(this).addClass('year_active');
    $('.historical-info__container').css('display', 'none');
    $('.year' + textName).css('display', 'flex');
});

//======================================================================================
// карты
//=======================================================================================
// у устанавливаемой карты  метка заменена на html block  со своими стилями
// не до конца разобрался со стилизацией и адекватным отображением
//  div для карты находится по id="map_canvas"
ymaps.ready(function () {
    var iconLayouttt = ymaps.templateLayoutFactory.createClass('<div class="map__icon"><img class="map__logo" src="public/images/icons/header-logo.svg" alt="logo"></div>');
    var myMap = new ymaps.Map('map_canvas', {
                    // Центр карты
                    center: [59.966988, 30.466880],
                    // Коэффициент масштабирования
                    zoom: 11,
                    // Тип карты
                    type: 'yandex#map'
                }
            );
    myMap.controls.add(new ymaps.control.ZoomControl());
    myMap.setZoom(11, { duration: 1000 });

    var polygonPlacemark = new ymaps.Placemark(
        [59.966988, 30.466880],
        { hitContent: 'PorsaPro' },
        {
            iconLayout: iconLayouttt,
            iconShape: {
                type: 'Polygon',
                coordinates: [
                    // Описание внешнего контура полигона в виде массива координат.
                    [[-28, -76], [28, -76], [28, -20], [12, -20], [0, -4], [-12, -20], [-28, -20]]
                    // , ... Описание внутренних контуров - пустых областей внутри внешнего.
                ]
            }
        }
    );
    myMap.geoObjects.add(polygonPlacemark);
})

//у установленной карты  метка заменена на изображение
// путь к файлу изображения лучше вставлять  путём от корня сайта
//  div для карты находится по id="map_canvas"
ymaps.ready(function () {
    var myMap = new ymaps.Map('map_canvas', {
            // Центр карты
            center: [59.966988, 30.466880],
            // Коэффициент масштабирования
            zoom: 0,
            // Тип карты
            type: 'yandex#map'
        }
    );
    myMap.controls.add(new ymaps.control.ZoomControl());
    myMap.setZoom(11, {duration: 1000});

    myPlacemark = new ymaps.Placemark([59.966988, 30.466880], {
        hintContent: 'PorsaPro',
        balloonContent: 'ул. Электропультовцев, д.7, лит.А'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: '../../public/images/icons/mapIcon.svg',
        // Размеры метки.
        iconImageSize: [181, 57],
        // Смещение левого верхнего угла иконки относительно
        iconImageOffset: [-90,-50 ],
        iconContentOffset:[0, 0]
    });
    myMap.geoObjects.add(myPlacemark);
});

// замер ширины экрана на момент загрузки и после изменения ширины
    {
        var windowWidthChanged;
        function windowWidth() {
            windowWidthChanged = $(window).innerWidth()
        }
        $(window).on('resize', function () {
            windowWidth();
        })
        var windowWidthNow = $(window).width()
    }


// swiper slider 2 слайдера связаны друг с другом
// в однои из слайдеров булеты пагинации в виде "01 текст"
// берутся все  тайтлы из слайдера. Кладутся в массив  solutionName
// далее вставляются в сам html код
var solutionName = []
$('.slider2__title')
	.each(function (i) {
		solutionName.push($(this).text())
	});

let myImageSwiper = new Swiper('.slider1', {
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},
	pagination: {
		el: ".swiper__image-pagination",
		clickable: true,
		renderBullet: function (index, className) {
			return (
				'<span class="' + className +' image__paganation">' +"0" +(index + 1) +'<span class="swiper__bullet-span"></span> ' +solutionName[index ] +"</span>"
			);
		}
	},
});
let myTextSwiper = new Swiper('.slider2', {
	navigation: {
		nextEl:'.slider-button-prev',
		prevEl:'.slider-button-next'
	},
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},
	pagination: {
		el: '.swiper-paganation',
		clickable: true ,
	}
});
        myTextSwiper.controller.control = myImageSwiper;

    // Сдвиг элементов  пагинации(в данном случае текстовый блок)
    // сначала находим из, делаем массив и по активному элементу находим его индекс.
    // индекс умножаем на 190 и сдвигаем блок в сторону на нужное количество пикселей, что бы аутивный элемент был крайним
    function paganationShiftFoward() {

            const index = [...document.querySelectorAll('.image__paganation')]
                .findIndex(element => element.className.includes('swiper-pagination-bullet-active'));
            $('.swiper__image-pagination').removeAttr('style');
            $('.swiper__image-pagination').css('transform', 'translateX(-' + index*190 + 'px)');
        }
        myImageSwiper.on('slideChange', function () {
            paganationShiftFoward();
        })


    // валидация формы
    // доп классы
    // _req класс для элементов обязательных к заполнению
    // _error класс добавляющийся к элементу и его родителю при ошибке
    // _email класс для проверки поля с email
    //
    //

    const form = document.getElementById('form');     // находим форму по id
    form.addeventListener('submit', formSend);          // вешаем слушатель кнопки отправка

    async function formSend(e) {
        e.preventDefaulf();

        let error = formValidate(form); //запускаем функцию  всплывания ошибок

        if (error === 0) {

        } else {
            alert('эзаполните все поля');
        }
    }
    // пишем функцию для всплывающих ошибок при заполнении формы
    // класс _req дежурный класс который вешается на все формы -обязательные к заполнению(вешается на сам input)
    function formValidate(form) {
        let error = 0;                                      // изначальное количество ошибок
        let formReq = document.querySelectorAll('._req');   // создаем массив элементов обязательных к заполнению
        // создаем цикл к обработке элементов  массива
        for (let index = 0; index < formReq.length; index++){
            const input = formReq[index];
            formRemoveError(input);
                // проверка email
            if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else if (input.getAttribute("type") === "checkbox" && input.checked === false) { // находим чекбокс . в случае если он не нажат - выкидываем ошибку
                formAddError(input);
                error++;
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
            return error;
        }
    }
    // функция добавления оповещения об ошибке
    // в классе _error псевдо элемент(в css)
    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
    // .проверка  email
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }



// есть набор кнопок с классом .partners__button
//есть набор  блоков  с классом .info__block
// количество блоков и кнопок одинаковое
//при клике на 1ю кнопку скрываются все блоки и появляется только первый
//  и так по всем кнопкам-блокам
$('.partners__button').on('click', function () {
    var ckickedIndex = ($('.partners__button')).index(this)
    $('.partners__button').removeClass('partners__button_active');
    $('.info__block').hide()
    $(this).addClass('partners__button_active');
    $('.info__block').eq(ckickedIndex).show()
});
//валидация формы email+имя+ телефон
// в случае ошибки добавляется span.eror
//в случае  отсутствия галочки добавляется span с классом span.error.checkboxError
//сначала вешаем маску на input с телефоном при помощи inputmask.min.js
$(document).ready(function () {
    if ($('#popup__tel').length) telMask("popup__tel");
});
$('.download-catalog__form').submit(function (e) {
        e.preventDefault();
        var name = $('.download-catalog__name');
        var tel = $('.download-catalog__tel');
        var nameVal = name.val();
        var telVal = tel.val();
        $(".download-catalog__error").remove();
        $('.download-catalog__unchecked-error').remove()
        if (nameVal < 1) {
            name.after('<span class="download-catalog__error">Поле не может быть пустым</span>')
        }
        if (telVal < 1) {
            tel.after('<span class="download-catalog__error">Поле не может быть пустым</span>')
        }
        else {
            phone = telVal.replace('_', '');
            if (phone.length < 18) {
                tel.after('<span class="download-catalog__error">Некорректный номер телефона</span>')
            }

        }
        if (!($('.download-catalog__checkbox-check').prop('checked'))) {
            $('.agreement__inner-lable-popup').after('<span class="download-catalog__error download-catalog__error-checkbox">Необходимо Ваше согласие на обработку персональных данных</span>')
        }
        if (!($('.download-catalog__checkbox:checked').length > 0)) {
            $('.checkbox__last').after('<span class="download-catalog__unchecked-error"> Выберите хотя бы один тип каталога </span>')
        }
});



// вариант валидации формы ввода email от Андрея
    function isValidEmailAddress(emailAddress) {
        var pattern = new RegExp(/^(('[\w-\s]+')|([\w-]+(?:\.[\w-]+)*)|('[\w-\s]+')([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return pattern.test(emailAddress);
    }


// Кастомный select для формы
// по классу custom__select находятся все блоки на странице(внутри них рабочая область)
// по нажатию кнопки select__button появляется список элементов для выбора => списку select__items(невидимому ранее) задается класс select__items_show(для видисости)
// по нажатию на элемент выпадающего списка  select__items текстовое значение  переносится в текстовое значение  select__button span
// по нажатию на элемент выпадающего списка  select__items значение data-value переносится в скрытый input для отправки в виде формы

document.querySelectorAll('.custom__select').forEach(function (selectWrapper) {
    const dropDownButton = selectWrapper.querySelector('.select__button'); // сама кнопка управляющаяя выпадающим меню
    const dropDownButtonText = selectWrapper.querySelector('.select__button span'); // текст в самой кнопке который будет заменяться
    const dropDownList = selectWrapper.querySelector('.select__items'); // блок выпадающего меню которому будет даваться класс select__items_show(для видимости)
    const dropDownListItems = dropDownList.querySelectorAll('.select__item'); // элементы выпадабщего меню с нужными дата атрибутами.
    const dropDownInputHidden = selectWrapper.querySelector('.select__input') // элемент input в который будет записываться  data из .select__item при клике
    // клик по кнопке
    dropDownButton.addEventListener('click', function () {
        event.preventDefault();
        dropDownList.classList.toggle('select__items_show');
        this.classList.toggle('adults__select_active')
    });
    // выбор нужного значения из выпадающего списка
    dropDownListItems.forEach(function (listItem) {
        listItem.addEventListener('click', function (e) {
            e.stopPropagation();
            dropDownButtonText.innerText = this.innerText;
            dropDownInputHidden.value = this.dataset.value;
            dropDownList.classList.remove('select__items_show')
            dropDownButton.classList.remove('adults__select_active');
        })
    });
    // клик снаружи закрывает  выпадашку
    document.addEventListener('click', function (e) {
        if (e.target !== dropDownButton) {
            dropDownList.classList.remove('select__items_show');
            dropDownButton.classList.remove('adults__select_active');
        }
    });
})
/*
проверка на наличие определенного блока в области видимости пользователя .
Если блок  .side-bar__buttons пропадает из области видимости  ,
то элементу .sluck-block_mobile добавляется свойство display fles
*/
$(window).on('scroll', () => {
    var blockPosition = $('.side-bar__buttons').offset().top,
        windowScrollPosition = $(window).scrollTop();
    if( blockPosition < windowScrollPosition ) {
        $('.sluck-block_mobile').css('display','flex');
    } else {
        $('.sluck-block_mobile').removeAttr('style');
    }
});

// плавная прокрутка до якоря
// якорь - id нужного элемента.
// сам переход идёт от ссылки в которой в href указан #element-id
    $('.product-description__link').on('click', function () {
        let href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, {
            duration: 300,   // по умолчанию «400»
            easing: "linear" // по умолчанию «swing»
        });
        return false;
    });
/*
функция таймер для блокировки элемента на определенное время
при запуске вставляет  див после определённого элемента. внутри этого дива идет счётчик времени.
по истечении времени  сам див со сётчиком удаляется. начальные данные для отсчёта указываются в самом встраиваемом диве со счётчиком
 */
function timer() {
    $('.confirmation-code__code').after(`
    <div class="confirmation-code__timer">
        <span> отправить код повторно через
            <span class="confirmation-code__min">1 </span>:
            <span class="confirmation-code__sec">3</span>
        </span>
    </div>`);
    let minutes = $('.confirmation-code__min');
    let seconds= $('.confirmation-code__sec');
    timeCount(minutes,seconds);
};
function timeCount(minutes,seconds) {
    setTimeout(function () {
        if (((minutes.text() > 0) && (seconds.text() > 0)) || ((minutes.text() == 0) && (seconds.text() > 0)))  {
            let newSeconds = seconds.text() - 1;
            seconds.text(newSeconds);
            timeCount(minutes, seconds);
        } else if ((minutes.text() > 0) && (seconds.text() == 0)) {
            let newMinutes = minutes.text() - 1;
            minutes.text(newMinutes);
            seconds.text(59);
            timeCount(minutes,seconds );
        } else{
            $('.confirmation-code__timer').remove();
            $('.confirmation-code__submit').css('display', 'block');
        }
    }, 1000);
}
//=============================================================================================================