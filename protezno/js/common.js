$(function() {

	$('#my-menu').mmenu({

		extensions: [ 'widescreen','theme-black', 'effect-menu-slide' , 'pagedim-black','position-right' ],
		
		navbar: {
			title:'<img src="img/logo.png" alt="Протезно-ортопедическое предприятие">'
		}

	
	});


var API = $('#my-menu').data('mmenu'); 
var $icon = $('.hamburger'); 

API.bind( "open:finish", function() 
{ 
setTimeout(function() 
{ 
$icon.addClass( "is-active" ); 
}, 10); 
}); 

API.bind( "close:finish", function() 
{ 
setTimeout(function() 
{ 
$icon.removeClass( "is-active" ); 
}, 10); 
});


$('.carousel-services').on('initialized.owl.carousel',function(){
    setTimeout(function(){
    carouselServices();
    },100);
	
})
$('.carousel-services').owlCarousel({
	// loop: true,
	nav: true,
	smartSpeed: 700,
	navText: ['<i class="fa fa-angle-double-left"></i> ','<i class="fa fa-angle-double-right"></i>'],
	dots: false,
	responsiveClass: true,
	responsive: {
		0:{
			items: 1
		},
		800:{
			items: 2
		},
		1200:{
			items: 3
		}
	}
});

 $(function(){
            $('input[placeholder], textarea[placeholder]').placeholder();
        });

$('.carousel-services-content').equalHeights()

function carouselServices(){
	$('.carousel-services-item').each(function(){
		var ths = $(this),
		thsh = ths.find('.carousel-services-content').outerHeight();
		ths.find('.carousel-services-image').css('min-height', thsh);

	});
} carouselServices();

$('.carousel-services-composition .h3').each(function(){
	var ths = $(this);
	ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
});

$('section .h2').each(function(){
	var ths = $(this);
	ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>' ));
 });


 $('select').selectize({
	create: true,

 });

 $('.reviews').owlCarousel({
 	loop: true,
 	items: 1,
 	smartSpeed: 700,
 	nav: false,
 	autoHeight: true
 	});


 $(document).ready(function() {

	//E-mail Ajax Send
	$("form.callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display','flex').hide().fadeIn();
			setTimeout(function() {
				$(th).find('.success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

});

$(window).scroll(function(){
if($(this).scrollTop() > $(this).height()){
	$('.top').addClass('active');
} else{
	$('.top').removeClass('active');
}
});
$('.top').click(function(){
	$('html,body').stop().animate({scrollTop: 0}, 'slow', 'swing');
});



//Resize Window
function onResize(){
	$('.carousel-services-content').equalHeights();
}onResize();
Window.onResize = function(){
	onResize();
};




});


$(window).on('load', function(){
	$('.preloader').delay(1000).fadeOut('slow');
});

