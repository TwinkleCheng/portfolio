$(function(){
	/*新版ohyes*/
	var ele_to_hide = '#head, .mm2_, #footer, #footer2, header, footer, .btnctr_, .ohyes';
	var ele_to_show = '.show_in_app';
	if(navigator.userAgent.match('tstar')){
		$(ele_to_hide).hide();
		$(ele_to_show).show();
	}
	
	
	
	
	/*舊版ohyes*/
	if(location.href.indexOf('ohyes') != -1){
		var ele_to_hide = '#head, .mm2_, #footer, #footer2, header, footer, .btnctr_, .ohyes';
		$(ele_to_hide).hide();
		$('a').each(function(){
			var attr_href = $(this).attr('href');
			if(typeof(attr_href) != undefined && attr_href != false) {
				var my_href = $(this).attr('href');
			}
			if(attr_href != undefined){
				if(my_href.indexOf('#') == -1 && my_href.indexOf('javascript') == -1 && my_href.indexOf('ohyes') == -1 && my_href.indexOf('google') == -1){
					if(my_href.indexOf('?') != -1){
						$(this).attr('href',my_href+'&ohyes');
					}else{
						$(this).attr('href',my_href+'#ohyes');
					}
				}
			}
		});
	}
});