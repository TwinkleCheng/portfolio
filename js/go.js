$(function(){
	/*loading*/
		var opts = {
  lines: 11, // The number of lines to draw
  length: 4, // The length of each line
  width: 2, // The line thickness
  radius: 7, // The radius of the inner circle
  corners: 1, // Corner roundness (0..1)
  rotate: 0, // The rotation offset
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#000', // #rgb or #rrggbb or array of colors
  speed: 1, // Rounds per second
  trail: 60, // Afterglow percentage
  shadow: false, // Whether to render a shadow
  hwaccel: false, // Whether to use hardware acceleration
  className: 'spinner', // The CSS class to assign to the spinner
  zIndex: 2e9, // The z-index (defaults to 2000000000)
  top: '50%', // Top position relative to parent
  left: '50%' // Left position relative to parent
};
	var target = document.getElementById('foo');
	var spinner = new Spinner(opts).spin(target);
	

	/*到各區域*/
    $('a.PAGE_SCROLL').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        },1500, 'easeInOutCubic');
        event.preventDefault();
    });


	/*回到最上面按鈕隱藏*/

    //scroll top
    var offset = 130;
    var duration = 900;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('#GOTOP').fadeIn(duration);
        } else {
            jQuery('#GOTOP').fadeOut(duration);
        }
    });
    
    jQuery('#GOTOP').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    });




	/*MENU展開*/
	$(document).ready(function(){
	$(".MENU_ICON").click(function(){
		$(".MENU").slideToggle("fast");
	  });
	});

});