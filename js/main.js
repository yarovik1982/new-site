$(function(){

 $('.tabs__link').on('click',function(e){
 	e.preventDefault();

 	$('.tabs__link').removeClass('tabs-link--active');
 	$('.tabs__content').removeClass('tabs-content--active');

 	$(this).addClass('tabs-link--active');
 	$($(this).attr('href')).addClass('tabs-content--active');
 });


	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerHeight();
	scrollPos = $(window).scrollTop();

	$(window).on("scroll load resize",function(){
		scrollPos = $(this).scrollTop();

		if(scrollPos > introH){
			header.addClass("fixed");
		}else{
			header.removeClass("fixed");
		}
	});


	$("[data-scroll]").on("click", function(event){
		event.preventDefault();

		elementId = $(this).data('scroll');
		elementOffset = $(elementId).offset().top;

		menu.removeClass("show");


		$("html,body").animate({
			scrollTop: elementOffset - 30
		},800);
	});


	let menu = $("#menu");
	let navToggle = $("#navToggle");
	let burgerItem = $('.burger__item');

	navToggle.on("click", function(event){
		event.preventDefault();
		menu.toggleClass("show");
		burgerItem.toggleClass('active');
	});

	 	$(".content").magnificPopup({
		delegate: "a",
		type: "image",
		gallery:{
			enabled: true
		},
			zoom: {
			enabled: true,
			duration: 800 // don't foget to change the duration also in CSS
		}
			
	});


});



