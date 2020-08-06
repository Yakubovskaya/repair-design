/* document.addEventListener("DOMContentLoaded", function(event) { 
    const modal = document.querySelector('.modal');
    const modalBtn = document.querySelectorAll('[data-toggle=modal]');
    const closeBtn = document.querySelector('.modal__close');
    const switchModal = () => {
        modal.classList.toggle('modal--visible');
    }
    modalBtn.forEach(element => {
        element.addEventListener('click', switchModal);
    });

    closeBtn.addEventListener('click', switchModal);
  });
  */

$(document).ready(function () {
    var modal = $('.modal'),
        modalBtn = $('[data-toggle=modal]'),
        closeBtn = $('.modal__close');

    modalBtn.on('click', function () {
        modal.toggleClass('modal--visible')
    });
    closeBtn.on('click', function () {
        modal.toggleClass('modal--visible')
    });

    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    var next = $('.swiper-button-next');
    var prev = $('.swiper-button-prev');
    var bullets = $('.swiper-pagination');

    next.css('left', prev.width() + 20 + bullets.width() + 20);
    bullets.css('left', prev.width() + 20);

    new WOW().init();

    //Валидация формы
    $('.modal__form').validate({
        errorElement: "div",
        errorClass: "invalid",
        rules: {
            // строчное правило
            userName: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            userPhone: "required",
            // правило-объект
            userEmail: {
                required: true,
                email: true
            },
            modalPolicyCheckbox: "required"
        }, //сообщения
        messages: {
            userName: {
                required: "Имя обязательно",
                minlength: "Имя не короче 2 букв",
                maxlength: "Имя не больше 15 букв"
            },
            userPhone: "Телефон обязателен",
            userEmail: {
                required: "Обязательно укажите email",
                email: "Введите в формате: name@domain.com"
            },
            modalPolicyCheckbox: "Требуется согласие на обработку данных"
        },
        submitHandler: function(form) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form).serialize(),
                success: function (response) {
                   console.log('Ajax сработал. Ответ сервера: ' + response);
                   alert('Заявка отправлена. Мы свяжемся с Вами в течение 10 минут');
                   $(form)[0].reset();
                   modal.toggleClass('modal--visible');
                }
            });
        }
    });
    
    $('.control__form').validate({
        errorElement: "div",
        errorClass: "invalid",
        rules: {
            // строчное правило
            userName: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            userPhone: "required",
            controlPolicyCheckbox: "required"
            // правило-объект
        }, //сообщения
        messages: {
            userName: {
                required: "Имя обязательно",
                minlength: "Имя не короче 2 букв",
                maxlength: "Имя не больше 15 букв"
            },
            userPhone: "Телефон обязателен",
            controlPolicyCheckbox: "Требуется согласие на обработку данных"
        },
        submitHandler: function(form) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form).serialize(),
                success: function (response) {
                    console.log('Ajax сработал. Ответ сервера: ' + response);
                    alert('Заявка отправлена. Мы свяжемся с Вами в течение 10 минут');
                    $(form)[0].reset();
                }
            });
        }
    });

    $('.footer__form').validate({
        errorElement: "div",
        errorClass: "invalid",
        rules: {
            // строчное правило
            userName: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            userPhone: "required",
            userQuestion: "required",
            footerPolicyCheckbox: "required"
            // правило-объект
        }, //сообщения
        messages: {
            userName: {
                required: "Имя обязательно",
                minlength: "Имя не короче 2 букв",
                maxlength: "Имя не больше 15 букв"
            },
            userPhone: "Телефон обязателен",
            userQuestion: "Заполните поле",
            footerPolicyCheckbox: "Требуется согласие на обработку данных"
        },
        submitHandler: function(form) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form).serialize(),
                success: function (response) {
                    console.log('Ajax сработал. Ответ сервера: ' + response);
                    alert('Заявка отправлена. Мы свяжемся с Вами в течение 10 минут');
                    $(form)[0].reset();
                }
            });
        }
    });
    
    //маска для номера телефона

    $('[type=tel]').mask('+7(000)000-00-00', { placeholder: "+7(___)___-__-__" });

 
});




$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        if ($('.up-button').is(':hidden')) {
            $('.up-button').css({ opacity: 1 }).fadeIn('slow');
        }
    } else { $('.up-button').stop(true, false).fadeOut('fast'); }
});
$('.up-button').click(function () {
    $('html, body').stop().animate({ scrollTop: 0 }, 2000);
});
