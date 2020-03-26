$(document).ready(function (){
var modal = $('.modal'),
modalBtn = $('[data-toggle=modal]'),
closeBtn = $('.modal__close');
modalBtn.on('click', function () {
  modal.toggleClass('modal--visible');
});
closeBtn.on('click', function () {
  modal.toggleClass('modal--visible');
});
});

$(document).ready(function (){
var feedback = $('.feedback'),
feedbackBtn = $('[data-toggle=feedback]'),
closeBtn = $('.feedback__close');
feedbackBtn.on('click', function () {
  feedback.toggleClass('feedback--visible');
});
closeBtn.on('click', function () {
  feedback.toggleClass('feedback--visible');
});
});

//Smooth Scrolling Using Navigation Menu
$('a[href*="#"]').on('click', function(e){
  $('html,body').animate({
    scrollTop: $($(this).attr('href')).offset().top - 100
  },500);
  e.preventDefault();
});

// scroll down
/*$(function(){
  $(window).scroll(function(){
    if($(window).scrollTop() > 100) {
      $('#scroll_top').show();
    } else {
      $('#scroll_top').hide();
    }
  });

  $('#scroll_top').click(function(){
    $('html, body').animate({scrollTop: 0}, 600);
    return false;
  });
});*/

// swiper slide
var mySwiper = new Swiper ('.swiper-container', {
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

next.css('left', prev.width() + 20 + bullets.width() + 20)
bullets.css('left', prev.width() + 20)

new WOW().init();

// validation
$('.modal__form').validate({
  errorClass: "invalid",
  rules: {
    // simple rule, converted to {required:true}
    userName: {
      required: true,
      minlength: 2
    },
    userPhone: "required",
    // compound rule
    userEmail: {
      required: true,
      email: true
    },
    policyCheckbox: "required",
  },
  errorPlacement: function(error, element) {
    if (element.attr("type") == "checkbox") {
      return element.next('label').append(error);
      }
    error.insertAfter($(element));
      },
  messages: {
    userName: {
      required: "Имя обязательно",
      minlength: "Имя не короче двух букв"
    },
    userPhone: "Телефон обязателен",
    userEmail: {
      required: "Заполните поле",
      email: "Введите корректный email",
    },
    policyCheckbox: "Нажмите для соглашения",
  },
  submitHandler: function(form) {
    $.ajax({
      type: "POST",
      url: "send.php",
      data: $(form).serialize(),
      success: function(response) {
        $(form)[0].reset();
        $('.feedback').fadeIn();
        $('.feedback').css('display', 'flex');
        $('.modal--visible').fadeOut();
      },
      error: function(response) {
        console.error('Ошибка запроса' + response);
      }
    });
  }
});

$('.control__form').validate({
  errorClass: "invalid",
  rules: {
    // simple rule, converted to {required:true}
    userName: {
      required: true,
      minlength: 2
    },
    userPhone: "required",
    // compound rule
    policyCheckbox: "required",
  },
  errorPlacement: function(error, element) {
    if (element.attr("type") == "checkbox") {
      return element.next('label').append(error);
      }
    error.insertAfter($(element));
      },
  messages: {
    userName: {
      required: "Имя обязательно",
      minlength: "Имя не короче двух букв"
    },
    userPhone: "Телефон обязателен",
    policyCheckbox: "Нажмите для соглашения",
  },
  submitHandler: function(form) {
    $.ajax({
      type: "POST",
      url: "send.php",
      data: $(form).serialize(),
      success: function(response) {
        $(form)[0].reset();
        $('.feedback').fadeIn();
        $('.feedback').css('display', 'flex');
      },
      error: function(response) {
        console.error('Ошибка запроса' + response);
      }
    });
  }
});

$('.footer__form').validate({
  errorClass: "invalid",
  rules: {
    // simple rule, converted to {required:true}
    userName: {
      required: true,
      minlength: 2
    },
    userPhone: "required",
    // compound rule
    userQuestion: {
      required: true,
    },
    policyCheckbox: "required",
  },
  errorPlacement: function(error, element) {
    if (element.attr("type") == "checkbox") {
      return element.next('label').append(error);
      }
    error.insertAfter($(element));
      },
  messages: {
    userName: {
      required: "Имя обязательно",
      minlength: "Имя не короче двух букв"
    },
    userPhone: "Телефон обязателен",
    userQuestion: {
      required: "Заполните поле",
    },
    policyCheckbox: "Нажмите для соглашения",
  },
  submitHandler: function(form) {
    $.ajax({
      type: "POST",
      url: "send.php",
      data: $(form).serialize(),
      success: function(response) {
        $(form)[0].reset();
        $('.feedback').fadeIn();
        $('.feedback').css('display', 'flex');
      },
      error: function(response) {
        console.error('Ошибка запроса' + response);
      }
    });
  }
});

  // mask phone
  $('[type=tel]').mask('+7(000)000-00-00', {placeholder: "+7(___)___-__-__"});

  // optimization map
  var design = $('.design');
  var designTop = design.offset().top;
  $(window).bind('scroll', function() {
    var windowTop = $(this).scrollTop();
    if (windowTop > designTop) {
      $('#map').html('<script async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ae49485fa0dbfb794f69c708529616b63e03097c512501bf362f9b342eca14204&amp;width=100%25&amp;height=100%25&amp;lang=ru_RU&amp;scroll=false"></script>');
      $(window).unbind('scroll')
    };
  });