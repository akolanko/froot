$(document).ready( function() {

//NAV MENU

	$("#about-link").click(function() {
		$(".section").hide();
		$("#about").slideDown();
	});

	$("#lids-link").click(function() {
		$(".section").hide();
		$("#lids").slideDown();
	});

	$("#teas-link").click(function() {
		$(".section").hide();
		$("#teas").slideDown();
	});

	$("#contact-link").click(function() {
		$(".section").hide();
		$("#contact").slideDown();
	});

//SILDESHOW

	var currentImageIndex = 0;
	var numImages = $('.slider-img').length;

	var sliderfn = function(){
		$(".slider-img").eq(currentImageIndex).fadeOut(800);
		$(".circle").eq(currentImageIndex).animate({opacity: 0.3}, 800);

		currentImageIndex = (currentImageIndex + 1) % numImages;

		$('.slider-img').eq(currentImageIndex).fadeIn(800);
		$(".circle").eq(currentImageIndex).animate({opacity: 0.7}, 800);

	};

	var timer = setInterval(sliderfn, 5000);
});