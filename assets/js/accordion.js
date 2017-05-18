$(document).ready(function() {
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
	}); // End of accordion function
	
	// Body background-color function
	$('.accordion').on('click', function() {
		if($(this).is('.accordion-section-webbutveckling-1')){
			$('body').toggleClass('webbutveckling-1-body-background', 1000);
			$('body').removeClass('webbutveckling-2-body-background granssnittsdesign-body-background datorteknik-1a-body-background teknik-1-body-background', 1000);
				
		} else if($(this).is('.accordion-section-webbutveckling-2')){
			$('body').toggleClass('webbutveckling-2-body-background', 1000);
			$('body').removeClass('webbutveckling-1-body-background granssnittsdesign-body-background datorteknik-1a-body-background teknik-1-body-background', 1000);
            
		} else if($(this).is('.accordion-section-granssnittsdesign')){
			$('body').toggleClass('granssnittsdesign-body-background', 1000);
			$('body').removeClass('webbutveckling-1-body-background webbutveckling-2-body-background datorteknik-1a-body-background teknik-1-body-background', 1000);
            
		} else if($(this).is('.accordion-section-datorteknik-1a')){
			$('body').toggleClass('datorteknik-1a-body-background', 1000);
			$('body').removeClass('webbutveckling-1-body-background webbutveckling-2-body-background granssnittsdesign-body-background teknik-1-body-background', 1000);
            
		} else if($(this).is('.accordion-section-teknik-1')){
			$('body').toggleClass('teknik-1-body-background', 1000);
			$('body').removeClass('webbutveckling-1-body-background webbutveckling-2-body-background granssnittsdesign-body-background datorteknik-1a-body-background', 1000);
		}
	}); // End Body background-color function 
});