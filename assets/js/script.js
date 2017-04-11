$(document).ready(function() {
	//Included HTML-files
	var includes = $('[data-include]');
    jQuery.each(includes, function(){
      var file = '/includes/' + $(this).data('include') + '.html';
      $(this).load(file);
      console.info(file);
      
    });
    
    // Escape arrow fadeIn - fadeOut on window scroll
    $(window).scroll(function() {
    	if($(this).scrollTop() > 0){
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
    
    // Slide down to Kurser - setTimeout() is used due to include HTML-loading time
    setTimeout(function() {
    	$('#kurser').on('click', function() {
    		$('html, body').animate({
    			scrollTop: $('.main-content').offset().top 
    		}, 800);
    	});
    }, 800);
    
    // Flexslider
    $('.flexslider').flexslider({
        animation: "slide"
    });
    
    // Accordion
    function close_accordion_section() {
		jQuery('.accordion .accordion-section-title').removeClass('active');
		jQuery('.accordion .accordion-section-content').slideUp(300).removeClass('open');
	}

	jQuery('.accordion-section-title').click(function(e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if(jQuery(e.target).is('.active')) {
			close_accordion_section();
		}else {
			close_accordion_section();

			// Add active class to section title
			jQuery(this).addClass('active');
			// Open up the hidden content panel
			jQuery('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
		}

		e.preventDefault();
	});
	
	// Body background-color function
	$('.accordion').on('click', function() {
		if($(this).is('.accordion-section-webbutveckling-1')){
			$('body').toggleClass('webbutveckling-1-body-background', 1000);
			$('body').removeClass('webbutveckling-2-body-background granssnittsdesign-body-background datorteknik-1a-body-background', 1000);
				
		} else if($(this).is('.accordion-section-webbutveckling-2')){
			$('body').toggleClass('webbutveckling-2-body-background', 1000);
			$('body').removeClass('webbutveckling-1-body-background granssnittsdesign-body-background datorteknik-1a-body-background', 1000);
				
		} else if($(this).is('.accordion-section-granssnittsdesign')){
			$('body').toggleClass('granssnittsdesign-body-background', 1000);
			$('body').removeClass('webbutveckling-1-body-background webbutveckling-2-body-background datorteknik-1a-body-background', 1000);
		} else if($(this).is('.accordion-section-datorteknik-1a')){
			$('body').toggleClass('datorteknik-1a-body-background', 1000);
			$('body').removeClass('webbutveckling-1-body-background webbutveckling-2-body-background granssnittsdesign-body-background', 1000);
		}
	});
	
		// Disable zoom function on google map in contact
		// Enable the pointer events only on click
    $('#map_canvas1').addClass('scrolloff'); // set the pointer events to none on doc ready
    $('#canvas1').on('click', function () {
        $('#map_canvas1').removeClass('scrolloff'); // set the pointer events true on click
    });

    // Disable pointer events when the mouse leave the canvas area
    $("#map_canvas1").mouseleave(function () {
        $('#map_canvas1').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
    });
    
    document.getElementById('links').onclick = function (event) {
    event = event || window.event;
    var target = event.target || event.srcElement,
        link = target.src ? target.parentNode : target,
        options = {index: link, event: event},
        links = this.getElementsByTagName('a');
    blueimp.Gallery(links, options);
};
});