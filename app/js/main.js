function testWebP(e){var A=new Image;A.onload=A.onerror=function(){e(2==A.height)},A.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"}testWebP(function(e){1==e?document.querySelector("body").classList.add("webp"):document.querySelector("body").classList.add("no-webp")});
document.body.addEventListener('touchstart', function(e){ e.preventDefault(); });
document.body.addEventListener('touchmove', function(e){ e.preventDefault(); });

$(function(){

	$(document).ready(function(){
		$("#header ,  #footer").on("click","a", function (event) {
			event.preventDefault();
			let id  = $(this).attr('href'),
				top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 1500);
		});
	});
$(document).ready(function () {
	
if($(window).width() > 770) {
	let preloader = $('.preloader'),
	loader = preloader.find('.preloader__wrapper');
	loader.fadeOut();
	$('.logo__spinner').addClass('loaded');

} else {
	$('.preloader__wrapper').removeClass(this);
	$('.logo__spinner').css('top', '26px');
	$('.logo__img-circle').css('animation' , 'none')
}

});

	$(window).scroll(function () {
		let scrollTop = $(window).scrollTop();
		if (scrollTop > 500) {
            $('.menu__btn').removeClass('active');
            $('.menu__list').removeClass('active');
        }
    });
	$(window).scroll(function(){
		if($(this).scrollTop()> $('.subscription__btn').offset().top - 200) {
			$('.logo').addClass('anim');	
		}
	});
});
$(function(){
	$('.gallery-slider').slick({
		prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-prev.svg" alt=""></button>',
		nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-next.svg" alt=""></button>',
		autoplay: true,
		autoplaySpeed: 4000,
		fade: true,
		dots: true,
		responsive: [
			           {
			               breakpoint: 651,
			               settings: {
			                   arrows: false
			               }
			   },
			 ]
	});
	var mixer = mixitup('.portfolio__inner', {
		load: {
			filter: '.design'
		},
		animation: {
			effectsIn: 'fade translateY(0) translateX(0)',
			effectsOut: 'fade translateY(0) translateX(0)',
			effects: 'fade translateY(0) translateY(0)',
			duration: 500
		}
		
	});
});
$(function(){
	$(document).ready(function() {
		$('.header__title').addClass('animate__animated animate__fadeInDown');
		$('.header__subtitle').addClass('animate__animated animate__fadeInDown animate__delay-1s');
		$('.header__btn-scroll').addClass('animate__animated animate__fadeInUp animate__delay-1s')

	});
	$('.portfolio__items-more').hide();

	$('.portfolio__btn').on('click', function(){
		$('.portfolio__items-more').hide();
		$('.portfolio__btn-more').show();

	});
	$('.portfolio__btn-more').on('click', function(){
		$('.portfolio__items-more').show();

		$(this).hide()
	});
	$('.menu__btn').on('click', function(){
		$('.menu__list').toggleClass('active')
		$(this).toggleClass('active');
	});
	$('.menu__list-link').on('click', function(){
		$('.menu__btn').removeClass('active');
		$('.menu__list').removeClass('active');
	});
	$('body').click(function(event) {
		$target = $(event.target);
		if (!$target.closest($('.menu__btn , .menu__list')).length){
		  $(".menu__btn , .menu__list").removeClass('active');
					  return false;
		}
	  });
	
		$('.about__title , .expertise__title , .portfolio__title , .team__title , .pricing__title , .subscription__title').addClass('animate__animated animate__fadeInLeft wow');
		$('about__title , .expertise__title , .portfolio__title , .team__title , .pricing__title , .subscription__title').attr('data-wow-offset', '200');
		
		$('.about__content , .expertise__inner , .expertise__cards , .features__content , .portfolio__inner , .team__items , .pricing__cards ').addClass('animate__animated animate__fadeInUp wow');
		$('.about__content , .expertise__inner , .expertise__cards , .features__content , .portfolio__inner , .team__items , .pricing__cards ').attr('data-wow-offset', '240');
	
	 
});

$(function(){

	let video = document.getElementById('presentation-video');
	let videoBtn = document.getElementById('presentation-video-btn');
	$('.presentation__video , .presentation__video-btn').on('click', function(){
		if (video.paused) {
			video.play();
			videoBtn.innerHTML = '<img class="presentation__video-icon presentation__video-pause" src="images/pause.svg" alt="pause">';
		  } else {
			video.pause();
			videoBtn.innerHTML = '<img class="presentation__video-icon presentation__video-play" src="images/play.svg" alt="play">';
		  } 
	});
	let videoWrapper = $('.presentation__video-wrapper');
	$(videoWrapper).mouseover(function(){
		$('.presentation__video-pause').css('opacity', '1');

	});
	$(videoWrapper).mouseleave(function(){
		$('.presentation__video-pause').css('opacity', '0');
	});
});

$(function () {
	$(document).ready(function () {
		new WOW().init();
	});
});