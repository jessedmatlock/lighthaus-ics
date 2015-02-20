$(document).ready(function(){
	
	$('#logo').click(function(){
		$('body').append('<div id="preloader"><div id="preload-inner"><img src="img/logo.png" id=""  alt="" /><img src="img/preloader.gif" id="" alt="" /></div><!-- end div#preload-inner --></div>');
		$("html").addClass('loading');					
		
	});
	
	$(document).on('click', '#preloader', function(){
		$('#preloader').hide();
		$("html").removeClass('loading');					
	});
	
});  // end docready


jQuery(function ($) {
	$(window).load(function () {
	//	$("#preloader").fadeOut(500);
	//	$("html").removeClass('loading');					
	}); // end window load
}); // end function

// window scroll function to apply drop shadow to main nav, only after scolling 100px. To maintain design match.
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
        $(".contain-to-grid").addClass("shadow");
		$('.homepage #logo').attr('src', 'img/logo.png');
    } else {
        $(".contain-to-grid").removeClass("shadow");
		$('.homepage #logo').attr('src','img/logo-light.png');
	}
});

$('#advanced-search').click(function(){
	$(".search-controls").toggleClass('show-advanced');			
});

var articles = $("#articles");

    articles.owlCarousel({
    itemsCustom : [
	    [0, 1],
	    [450, 1],
	    [600, 2],
	    [700, 3],
	    [1000, 3],
	    [1200, 3],
	    [1400, 3],
	    [1600, 3]
    ],
    pagination : false

});
 // Custom Navigation Events
$(".article-next").click(function(){
	articles.trigger('owl.next');
})
$(".article-prev").click(function(){
	articles.trigger('owl.prev');
})

// Show/Hide for page assets
$('.see-more').on('click', function(){
	$(this).prev('.expandable').toggleClass('expanded');
});
