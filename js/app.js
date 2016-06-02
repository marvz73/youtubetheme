$(function(){

	$('.button-collapse').sideNav({
	      menuWidth: 300, // Default is 240
	      edge: 'left', // Choose the horizontal origin
	      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
	    }
	);


	//body height 100%
	if($('body').hasScrollBar())
	{
		$('html, body').css({'height': '100%'});
	}

});


(function($) {
    $.fn.hasScrollBar = function() {
        return this.get(0).scrollHeight > this.height();
    }
})(jQuery);