(function ($) {
	"use strict";


	/*------------------------------------
			Preloader
		--------------------------------------*/

	$(window).on('load', function () {
		$('#preloader').delay(350).fadeOut('slow');
		$('body').delay(350).css({ 'overflow': 'visible' });
	});


	//tooggle - btn
	jQuery(function (dnxte_contenttoggle) {
		dnxte_contenttoggle(".dnxte-toggle-btn .dnxte-input").each(function () {
			var n = dnxte_contenttoggle(this).parents(".dnxte-content-toggle").find(".dnxte-content-toggle-back"),
				e = dnxte_contenttoggle(this).parents(".dnxte-content-toggle").find(".dnxte-content-toggle-front");
			this.checked ? (e.hide(), n.show()) : (n.hide(), e.show()), dnxte_contenttoggle(this).on("change", function () {
				this.checked ? (e.hide(), n.show()) : (n.hide(), e.show())
			})
		})
	});

	/*------------------------------------
		Mobile Menu
	--------------------------------------*/

	$('#mobile-menu-active').metisMenu();

	$('#mobile-menu-active .has-dropdown > a').on('click', function (e) {
		e.preventDefault();
	});

	$(".hamburger-menu > a").on("click", function (e) {
		e.preventDefault();
		$(".slide-bar").toggleClass("show");
		$("body").addClass("on-side");
		$('.body-overlay').addClass('active');
		$(this).addClass('active');
	});

	$(".close-mobile-menu > a").on("click", function (e) {
		e.preventDefault();
		$(".slide-bar").removeClass("show");
		$("body").removeClass("on-side");
		$('.body-overlay').removeClass('active');
		$('.hamburger-menu > a').removeClass('active');
	});

	$('.body-overlay').on('click', function () {
		$(this).removeClass('active');
		$(".slide-bar").removeClass("show");
		$("body").removeClass("on-side");
		$('.hamburger-menu > a').removeClass('active');
	});

	/* Search
		-------------------------------------------------------*/
	var $searchWrap = $('.search-wrap');
	var $navSearch = $('.nav-search');
	var $searchClose = $('#search-close');

	$('.search-trigger').on('click', function (e) {
		e.preventDefault();
		$searchWrap.animate({ opacity: 'toggle' }, 500);
		$navSearch.add($searchClose).addClass("open");
	});

	$('.search-close').on('click', function (e) {
		e.preventDefault();
		$searchWrap.animate({ opacity: 'toggle' }, 500);
		$navSearch.add($searchClose).removeClass("open");
	});

	function closeSearch() {
		$searchWrap.fadeOut(200);
		$navSearch.add($searchClose).removeClass("open");
	}

	$(document.body).on('click', function (e) {
		closeSearch();
	});

	$(".search-trigger, .main-search-input").on('click', function (e) {
		e.stopPropagation();
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




	// feedback-active
	$('.testimonial-active').owlCarousel({
		loop: true,
		margin: 30,
		items: 3,
		autoplay: true,
		autoplaySpeed: 2000,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		nav: false,
		dots: true,
		responsive: {
			0: {
				items: 1,
				margin: 0,
			},
			768: {
				items: 2,
			},
			900: {
				items: 3,
			},
		}
	});


	// feedback-active
	$('.testimonial-active2').owlCarousel({
		loop: true,
		margin: 30,
		items: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		nav: false,
		dots: true,
		responsive: {
			0: {
				items: 1,
				margin: 0,
			},
			768: {
				items: 1,
			},
			900: {
				items: 1,
			},
		}
	});


	// feature-active
	$('.feature-active, .team-active, .case-active, .blog-active').owlCarousel({
		loop: true,
		margin: 30,
		items: 3,
		autoplay: true,
		autoplaySpeed: 2000,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		nav: false,
		dots: false,
		responsive: {
			0: {
				items: 1,
				margin: 0,
			},
			768: {
				items: 2,
			},
			900: {
				items: 3,
			},
		}
	});


	// case-active2
	$('.case-active2').owlCarousel({
		loop: true,
		margin: 30,
		items: 4,
		autoplay: true,
		autoplaySpeed: 2000,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		nav: false,
		dots: false,
		responsive: {
			0: {
				items: 1,
				margin: 0,
			},
			768: {
				items: 2,
			},
			900: {
				items: 3,
			},
			1024: {
				items: 4,
			},
		}
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

	// active-class
	$('.do-box, .s-services').on('mouseenter', function () {
		$(this).addClass('active').parent().siblings().find('.do-box, .s-services').removeClass('active');
	})

	// isotop
	$('.grid').imagesLoaded(function () {
		// init Isotope
		var $grid = $('.grid').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: 0,
				gutter: 0
			}
		});
		// filter items on button click
		$('.portfolio-menu').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		});
	});

	//for menu active class
	$('.portfolio-menu button').on('click', function (event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});

	//counter
	$('.counter').counterUp({
		delay: 10,
		time: 3000
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