(function ($) {
	"use strict";


	/*------------------------------------
			Preloader
		--------------------------------------*/

	$(window).on('load', function () {
		$('#preloader').delay(350).fadeOut('slow');
		$('body').delay(350).css({ 'overflow': 'visible' });
	});





	//hide and show sticky menu

	var prevScrollpos = window.pageYOffset;
	window.onscroll = function () {
		var currentScrollPos = window.pageYOffset;
		if (prevScrollpos > currentScrollPos) {
			document.getElementById("hideshow-sticky-menu").style.top = "0";
		} else {
			document.getElementById("hideshow-sticky-menu").style.top = "-200px";
		}
		prevScrollpos = currentScrollPos;
	}

	//sticky-menu
	// $(window).on('scroll', function () {
	// 	var scroll = $(window).scrollTop();
	// 	if (scroll < 200) {
	// 		$(".main-header-area").removeClass("sticky");
	// 	} else {
	// 		$(".main-header-area").addClass("sticky");
	// 	}
	// });


	$(document).ready(function () {
		// Swiper: Slider
		new Swiper('.swiper-container', {
			autoPlay: true,
			loop: true,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
				bulletActiveClass: 'active'
			},
			slidesPerView: 1,
			paginationClickable: true,
			spaceBetween: 0,
			breakpoints: {
				1920: {
					slidesPerView: 1,
					spaceBetween: 0
				},
				1028: {
					slidesPerView: 1,
					spaceBetween: 0
				},
				480: {
					slidesPerView: 1,
					spaceBetween: 0
				}
			}
		});
	});





	/*---------- 06.Set Background Image ----------*/
	if ($('[data-bg-src]').length > 0) {
		$('[data-bg-src]').each(function () {
			var src = $(this).attr('data-bg-src');
			$(this).css({
				'background-image': 'url(' + src + ')'
			});
		});
	};



	// -------------------- Remove Placeholder When Focus Or Click
	$("input,textarea").each(function () {
		$(this).data('holder', $(this).attr('placeholder'));
		$(this).on('focusin', function () {
			$(this).attr('placeholder', '');
		});
		$(this).on('focusout', function () {
			$(this).attr('placeholder', $(this).data('holder'));
		});
	});


	/* magnificPopup img view */
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	/* magnificPopup video view */
	$('.popup-video').magnificPopup({
		type: 'iframe'
	});





	// scrollToTop
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 1000, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 300, // Animation in speed (ms)
		animationOutSpeed: 300, // Animation out speed (ms)
		scrollText: '<i class="fas fa-chevron-double-up"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});


	// wow animation - start
	// --------------------------------------------------
	function wowAnimation() {
		new WOW({
			offset: 100,
			mobile: true
		}).init()
	}
	wowAnimation();





	//nice-select
	$(document).ready(function () {
		$('select').niceSelect();
	});


})(jQuery);