$(document).ready(function() {
   // Slide down to Kurser - setTimeout() is used due to include HTML-loading time
    setTimeout(function() {
    	$('#kurser').on('click', function() {
    		$('html, body').animate({
    			scrollTop: $('.main-content').offset().top 
    		}, 800);
    	});
    }, 800); 
});