
$(function(){
	
	/*到各區域*/
    $("a.PAGE_SCROLL").bind("click", function(event) {
        var $anchor = $(this);
        $("html, body").stop().animate({
            scrollTop: $($anchor.attr("href")).offset().top
        },1500, "easeInOutCubic");
        event.preventDefault();
    });	
	




	/*MENU開啟*/
	$('#BOX').click(function() {
	$(this).toggleClass('active');
	$('.menu').toggleClass('active');
});

	/*MENU展開*/
	$(document).ready(function(){
		$("#BOX").click(function(){
			$(".menu").slideToggle("fast");
		});			
	});
	
	
 	/*按連結 MENU關閉*/
	  $('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		  if (target.length) {

			//close hamburger menu after link click on mobile
			if($(this).closest("ul").hasClass("menu_a") && $(window).width() < 991){
			  $(".menu_a.menu").slideUp("display");
			}
			return false;
		  }
		}
	   });
	
	/*按連結 MENU關閉後回復成三*/
	$('a[data-js="item-menu"]').click(function() {
    $('#BOX').removeClass('active');
    $('.menu').removeClass('active');
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
	
	
	

});