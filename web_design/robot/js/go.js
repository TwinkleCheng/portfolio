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
	
	/* 動態漢堡選單 */
	
	$('#BOX').click(function() {
		$(this).toggleClass("active");
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

 /* 開合-NEW */

   $('.qalist').find('dd').each(function () {
        $(this).click(function () {
            var _pos = $(this).offset().top;
            $(this).toggleClass('isopen');

            if($(this).hasClass('isopen')){
                $(this).find('.box').slideDown();
                $body.animate({
                    scrollTop: _pos - headerH
                }, 600);
            }else{
                $(this).find('.box').slideUp();
            }
        })
    })

