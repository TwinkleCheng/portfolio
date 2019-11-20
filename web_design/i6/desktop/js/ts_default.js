$(function(){
	/*頁籤功能*/
	if($('.ts_tabwidget').length > 0){
		$('.ts_tabwidget_switch li').click(function(){
			$(this).parent().find($('li.active')).removeAttr('class');
			$(this).addClass('active');
			$(this).parent().next().find($('.ts_tab')).removeClass('active');
			$(this).parent().next().find($('.ts_tab')).eq($(this).index()).addClass('active');
		});
	}
	var tab_checker = location.href;
	var iphone_tabs = ['tab01','tab02','tab03','tab04','tab05','tab06'];
	for(var i=0; i<iphone_tabs.length; i++){
		if(tab_checker.indexOf(iphone_tabs[i]) != -1){
			$('.ts_tabwidget_switch li:nth-child('+(i+1)+')').trigger('click');
		}
	}
	
	/*服務設定介紹跳到anchor*/
	$('.ts_ssetings_select, .ts_faq_select').change(function(){
		location.href=$(this).val(); //如果這個失效要來改這個，因為預設打開選單的location.hash先被用掉了
	});
	
	/*FAQ開合*/
	$('.ts_faqlist dt').click(function(){
		if(!$(this).next().is(':visible')){
			$('.ts_faqlist dt').css({'background-position':'12px 12px'});
			$('.ts_faqlist dd').slideUp(200);
			$(this).css({'background-position':'12px -107px'});
			$(this).next().slideDown(200);
		}else{
			$(this).css({'background-position':'12px 12px'});
			$(this).next().slideUp(200);
		}
	});
});