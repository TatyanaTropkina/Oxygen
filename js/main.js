
// $(function () {
//     $(".header__content, .footer__inner").on("click", "a", function (event) {
//         event.preventDefault();
//         var id = $(this).attr('href'),
//             top = $(id).offset().top;
//         $('body,html').animate({
//             scrollTop: top
//         }, 1500);
//     });
// });

$(function(){
	$(document).ready(function () {
		let preloader = $('.preloader'),
loader = preloader.find('.preloader__wrapper');
loader.fadeOut();
 $('.logo__spinner').addClass('loaded');
 preloader.find('.container-fluid').addClass('loaded');
 
});

	$(document).ready(function() {
		$('.header__title , .header__subtitle , header__btn-scroll, spinner').addClass('loaded');
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
	$(window).scroll(function () {
		let scrollTop = $(window).scrollTop();
		if (scrollTop > 500) {
            $('.menu__btn').removeClass('active');
            $('.menu__list').removeClass('active');
        }
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


$('.about__content , .expertise__inner , .expertise__cards , .features__content , .portfolio__inner , .team__items , .pricing__cards , .subscription__btn ').addClass('animate__animated animate__fadeInUp wow');
$('.about__content , .expertise__inner , .expertise__cards , .features__content , .portfolio__inner , .team__items , .pricing__cards ').attr('data-wow-offset', '240');


	
	
	
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
	$(window).scroll(function(){
	
		if($(this).scrollTop()> $('.subscription').offset().top - 100) {
			$('.logo').addClass('anim');
			
		}
		
	});
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
	})

});
wow = new WOW(
	{
	// mobile:       false
  }
  )
  wow.init();

  document.body.addEventListener('touchstart', function(e){ e.preventDefault(); });
  document.body.addEventListener('touchmove', function(e){ e.preventDefault(); });