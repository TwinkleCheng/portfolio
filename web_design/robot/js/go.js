$(function(){
	
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
	
	/* 動態漢堡選單 */
	
	$('#BOX').click(function() {
		$(this).toggleClass("active");
	});

	/*開合*/
	$('.faqlist dt').click(function(){
			if(!$(this).next().is(':visible')){
				$('.faqlist dt').css({'background-position':'30px 19px'});
				$('.faqlist dd').slideUp(200);
				$(this).css({'background-position':'30px 19px'});
				$(this).next().slideDown(200);
			}else{
				$(this).css({'background-position':'30px 19px'});
				$(this).next().slideUp(200);
			}
		});
	
	
	
});

/* 選單左到右 */
		$(document).ready(function () {
			
			$('.TOP_MENU #BOX').click(function () {
				if ($('.TOP_MENU #BOX').hasClass('navOpen')) {
						$('.TOP_MENU nav').animate({
								'left' : '-100%'
						}, 500);
						$('.TOP_MENU #BOX').removeClass();
				}else {
						$('.TOP_MENU nav').animate({
								'left' : '0px'
						}, 500);
						$('.TOP_MENU #BOX').addClass('navOpen');
				}
			});
			
		});
