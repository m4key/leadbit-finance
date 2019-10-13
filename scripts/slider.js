$(document).ready(function(){
	$('.slider__content-list').slick({
		centerMode: true,
		centerPadding: '10px',  
		slidesToShow: 3,
		prevArrow: $('.slider__button-prev'),
		nextArrow: $('.slider__button-next'),
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					centerMode: false,
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 768,
				settings: {
					centerMode: false,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 360,
				settings: {
					centerMode: false,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
});