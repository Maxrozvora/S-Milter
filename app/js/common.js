$(function() {

	$('#my-menu').mmenu({
		extensions: ['widescreen', 'theme-black', 'effect-menu-slide', 'pagedim-black'],
		navbar: {
			title: '<img src="img/logo-1.svg" alt="Салон красоты">'
		},
		offCanvas: {
			position: 'right'
		}
	});	
	var api = $('#my-menu').data('mmenu');
	api.bind('opened', function() {
		$('.hamburger').addClass('is-active');
	}).bind('closed', function() {
		$('.hamburger').removeClass('is-active');
	});
	$('.carousel-services').on('initialized.owl.carousel', function() {
		setTimeout(function() {
			carouselService();
		});
		
	});
	$('.carousel-services').owlCarousel({
		loop:true,
		nav: true,
		smartSpeed: 700,
		navText: ['<i class="fa fa-angle-double-left" ></i>', '<i class="fa fa-angle-double-right" ></i>'],
		responsiveClass: true,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
			1100: {
				items: 3
			}
		}
	});

	

	function carouselService() {
		$('.carousel-services__item').each(function() {
			var ths = $(this);
			var thsh = ths.find('.carousel-services__content').outerHeight();
			ths.find('.carousel-services__image').css('min-height', thsh);
		});
	}carouselService();

	$('.carousel-services__composition .carousel-services__header').each(function() {
		var ths = $(this);
	ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
	});
	$('section .h2').each(function() {
		var ths = $(this);
	ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
	});
	//Resize window
	function onResize() {
		$('.carousel-services__content').equalHeights();
	}
	onResize();
	window.onresize = function() {onResize();};
	
});
