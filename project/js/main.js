$(document).ready(function(){var e=$(".modal"),r=$("[data-toggle=modal]"),t=$(".modal__close");r.on("click",function(){e.toggleClass("modal--visible")}),t.on("click",function(){e.toggleClass("modal--visible")})}),$(document).ready(function(){var e=$(".feedback"),r=$("[data-toggle=feedback]"),t=$(".feedback__close");r.on("click",function(){e.toggleClass("feedback--visible")}),t.on("click",function(){e.toggleClass("feedback--visible")})}),$('a[href*="#"]').on("click",function(e){$("html,body").animate({scrollTop:$($(this).attr("href")).offset().top-100},500),e.preventDefault()});var mySwiper=new Swiper(".swiper-container",{loop:!0,pagination:{el:".swiper-pagination",type:"bullets"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),next=$(".swiper-button-next"),prev=$(".swiper-button-prev"),bullets=$(".swiper-pagination");next.css("left",prev.width()+20+bullets.width()+20),bullets.css("left",prev.width()+20),(new WOW).init(),$(".modal__form").validate({errorClass:"invalid",rules:{userName:{required:!0,minlength:2},userPhone:"required",userEmail:{required:!0,email:!0},policyCheckbox:"required"},errorPlacement:function(e,r){if("checkbox"==r.attr("type"))return r.next("label").append(e);e.insertAfter($(r))},messages:{userName:{required:"Имя обязательно",minlength:"Имя не короче двух букв"},userPhone:"Телефон обязателен",userEmail:{required:"Заполните поле",email:"Введите корректный email"},policyCheckbox:"Нажмите для соглашения"},submitHandler:function(e){$.ajax({type:"POST",url:"send.php",data:$(e).serialize(),success:function(r){$(e)[0].reset(),$(".feedback").fadeIn(),feedback.toggleClass("feedback--visible")},error:function(e){console.error("Ошибка запроса"+e)}})}}),$(".control__form").validate({errorClass:"invalid",rules:{userName:{required:!0,minlength:2},userPhone:"required",policyCheckbox:"required"},errorPlacement:function(e,r){if("checkbox"==r.attr("type"))return r.next("label").append(e);e.insertAfter($(r))},messages:{userName:{required:"Имя обязательно",minlength:"Имя не короче двух букв"},userPhone:"Телефон обязателен",policyCheckbox:"Нажмите для соглашения"},submitHandler:function(e){$.ajax({type:"POST",url:"send.php",data:$(e).serialize(),success:function(r){$(e)[0].reset(),$(".feedback").fadeIn(),$(".feedback").css("display","flex")},error:function(e){console.error("Ошибка запроса"+e)}})}}),$(".footer__form").validate({errorClass:"invalid",rules:{userName:{required:!0,minlength:2},userPhone:"required",userQuestion:{required:!0},policyCheckbox:"required"},errorPlacement:function(e,r){if("checkbox"==r.attr("type"))return r.next("label").append(e);e.insertAfter($(r))},messages:{userName:{required:"Имя обязательно",minlength:"Имя не короче двух букв"},userPhone:"Телефон обязателен",userQuestion:{required:"Заполните поле"},policyCheckbox:"Нажмите для соглашения"},submitHandler:function(e){$.ajax({type:"POST",url:"send.php",data:$(e).serialize(),success:function(r){$(e)[0].reset(),$(".feedback").fadeIn(),$(".feedback").css("display","flex")},error:function(e){console.error("Ошибка запроса"+e)}})}}),$("[type=tel]").mask("+7(000)000-00-00",{placeholder:"+7(___)___-__-__"});var types=$(".types"),typesTop=types.offset().top;$(window).bind("scroll",function(){$(this).scrollTop()>typesTop&&($("#map").html('<script async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ae49485fa0dbfb794f69c708529616b63e03097c512501bf362f9b342eca14204&amp;width=100%25&amp;height=100%25&amp;lang=ru_RU&amp;scroll=false"><\/script>'),$(window).unbind("scroll"))});