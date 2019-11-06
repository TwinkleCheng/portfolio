
$(function(){
	

	/*到各區域-new*/
	  // Scroll smoothly
  $('[data-smooth-scroll]').on('click', function(e) {
    var targetEl = $($(this).attr('href'))

    // Make sure the target is on this page
    if (targetEl.length < 1) return

    $('body, html').animate({scrollTop: targetEl.offset().top}, 1500)

    e.preventDefault()
  })


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


