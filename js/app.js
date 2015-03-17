

function initialize() {
  var myLatlng = new google.maps.LatLng(40.752023, -73.990243);
  var mapOptions = {
    zoom: 14,
    center: myLatlng
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'ICS'
  });
}



(function($) {
	
	if($('#map-canvas').length){
		google.maps.event.addDomListener(window, 'load', initialize);		
	}
	// init Foundation
	$(document).foundation();

	// demo of overlay -- click Logo to see it
	$('#logo').click(function(){
		$('body').append('<div id="preloader"><div id="preload-inner"><img src="img/logo.png" id=""  alt="" /><img src="img/preloader.gif" id="" alt="" /></div><!-- end div#preload-inner --></div>');
		$("html").addClass('loading');					
	});
	
	$(document).on('click', '#preloader', function(){
		$('#preloader').hide();
		$("html").removeClass('loading');					
	});
	
})(jQuery);

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