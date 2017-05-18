$(document).ready(function() {
    
	//Included HTML-files
	var includes = $('[data-include]');
    jQuery.each(includes, function(){
      var file = '/includes/' + $(this).data('include') + '.html';
      $(this).load(file);      
    });
    
    // jQuery tabs method
    $('#tabs').tabs();
    
    // Escape arrow fadeIn - fadeOut on window scroll
    $(window).scroll(function() {
    	if($(this).scrollTop() > 150){
    		$('.escape-arrow').fadeIn();
    	} else {
    		$('.escape-arrow').fadeOut();	
    	}
    });
    
    // Scroll to the top via escape arrow
    $('.escape-arrow').on('click', function() {
    	$('html, body').animate({
    		scrollTop: $('body').offset().top
    	}, 800);
    });
    
    // Flexslider
    $('.flexslider').flexslider({
        animation: "slide"
    });
    
    // Lightgallery video
    $('.video-gallery').lightGallery({
       videojs: true 
    });

}); //End of document ready function