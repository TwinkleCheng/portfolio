
	$(function(){
		/*body加上自訂Class*/
		$('body').addClass($('#custom_class_holder').attr('cch'));
		
		/*highlight主選單*/
		var href_string = location.href;
		var href_string_flag = 0;
		var menu_phone = ['mobile_shop'];
		var menu_rate = ['4g_mobile.htm', 'basic_fee.htm', 'scode.htm'];
		var menu_discount = ['discount/index.htm'];
		var menu_vas = ['vas/'];
		var menu_service = ['service_index.html', 'application_', 'service_coverage', 'payment_description', 'ssettings.htm', 'service_adjust.htm', 'consumerContactus', 'faq.htm', 'Consumer_'];
		var menu_about = ['brand.htm', 'company.htm', 'team.htm', 'team_0', 'team_1', 'shareholder.htm', 'recruit.htm', 'recruit_1', 'recruit_2'];
		if(href_string_flag == 0){
			for(var i=0; i<menu_phone.length; i++){
				if(href_string.indexOf(menu_phone[i]) != -1){
					$('.ts_mmfcf').addClass('menu_active');
					href_string_flag = 1;
				}
			}
		}
		if(href_string_flag == 0){
			for(var i=0; i<menu_rate.length; i++){
				if(href_string.indexOf(menu_rate[i]) != -1){
					$('.ts_mmffe').addClass('menu_active');
					href_string_flag = 1;
				}
			}
		}
		if(href_string_flag == 0){
			for(var i=0; i<menu_discount.length; i++){
				if(href_string.indexOf(menu_discount[i]) != -1){
					$('.ts_mmfdc').addClass('menu_active');
					href_string_flag = 1;
				}
			}
		}
		if(href_string_flag == 0){
			for(var i=0; i<menu_vas.length; i++){
				if(href_string.indexOf(menu_vas[i]) != -1){
					$('.ts_mmvas').addClass('menu_active');
					href_string_flag = 1;
				}
			}
		}
		if(href_string_flag == 0){
			for(var i=0; i<menu_service.length; i++){
				if(href_string.indexOf(menu_service[i]) != -1){
					$('.ts_mmccv').addClass('menu_active');
					href_string_flag = 1;
				}
			}
		}
		if(href_string_flag == 0){
			for(var i=0; i<menu_about.length; i++){
				if(href_string.indexOf(menu_about[i]) != -1){
					$('.ts_mmabu').addClass('menu_active');
					href_string_flag = 1;
				}
			}
		}
		
		
		/*Youtube TV*/
		if($('#ts_ytb_playlist').length){
			window.controller = new YTV('ts_ytb_playlist', {
				user: 'UCaD0ZhX0yv3IDhm-SEfCShg',
				accent: '#941c6a',
				autoplay: true
			});
		}
		
		/*頁籤功能*/
		if($('.ts_tabwidget').length > 0){
			$('.ts_tabwidget_switch li').click(function(){
				$(this).parent().find($('li.active')).removeAttr('class');
				$(this).addClass('active');
				$(this).parent().next().find($('.ts_tab')).removeClass('active');
				$(this).parent().next().find($('.ts_tab')).eq($(this).index()).addClass('active');
			});
		}
		
		/*回到最上*/
		if($('.service_adjust_sec').length || $('.ts_faq_seg').length || $('.ts_pmdt_sec').length || $('.ts_ssettings_seg').length){
			$().UItoTop({scrollSpeed:200});
		}
		
		/*優惠價格popup*/
		$('.ts_discount_price_btn').magnificPopup({type:'inline'});
		
		/*一般popup(通用的pupup)*/
		$('.ts_common_pupup_btn').magnificPopup({type:'inline'});
		
		/*主選單開合*/
		$('.ts_mainmenu_trigger').mouseenter(function(){
			ts_hideMenu();
			$(this).addClass('active');
			$(this).next().show();
		});
		$('.ts_mainmenu_li ul').mouseenter(function(){
			$(this).parents('li').find('.ts_mainmenu_trigger').addClass('active');
			$(this).show();
		});
		$('.ts_mainmenu_li ul').mouseleave(function(){
			ts_hideMenu();
		});
		$('.ts_mainmenu_trigger').mouseleave(function(){
			ts_hideMenu();
		});
		function ts_hideMenu(){
			$('.ts_mainmenu_trigger').removeClass('active');
			$('.ts_mainmenu_trigger').next().hide();
		}
		
		/*左邊選單開合*/
		$('.ts_aside_nav_layer1').click(function(){
			if(!$(this).next().is(':visible')){
				$('.ts_aside_nav_li ul').slideUp(200);
				$(this).next().slideDown(200);
			}else{
				$(this).next().slideUp(200);
			}
		});
		var ts_hashString = location.hash; //以下為預設打開選單程式
		var ts_hashEndPos;
		if(ts_hashString.indexOf('?') != -1){
			ts_hashEndPos = ts_hashString.indexOf('?'); //問號的位置
			ts_hashString = ts_hashString.slice(0,ts_hashEndPos);
		}else{
			ts_hashEndPos = ts_hashString.length; //字串的長度
			ts_hashString = ts_hashString.slice(0,ts_hashEndPos);
		}
		if(location.hash.indexOf('#') != -1){
			$('.ts_aside_nav_ul ul a[href*='+ts_hashString+']').parent().parent().show();
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
		
		/*首頁主Banner輪播*/
		if($('.ts_main_slider_wrap').length > 0){
			$('.ts_main_slider_wrap').owlCarousel({
				nav:true,
				items:1,
				loop:true,
				autoplay:true,
				autoplayTimeout:5000
			});
		}
		
		/*首頁產品Banner輪播*/
		if($('.ts_promosec_sldr_wrap').length > 0){
			$('.ts_promosec_sldr_wrap').owlCarousel({
				navRewind:false,
				nav:true,
				items:4
			});
		}
		
		/*產品主頁Banner輪播*/
		if($('.ts_phone_slider_wrap').length > 0){
			var owl = $('.ts_phone_slider_wrap');
			owl.owlCarousel({
				nav:true,
				items:1,
				loop:true,
				autoplay:true,
				autoplayTimeout:5000
			});
			//owl.trigger('next.owl.carousel');
			
		/*
			$('.ts_phone_slider_wrap').owlCarousel({
				nav:true,
				items:1,
				loop:true,
				autoplay:true,
				autoplayTimeout:5000
			});
		*/
		}
		
		/*產品特色規格切換*/
		$('.ts_pd_spec_title').click(function(){
			$('.ts_pd_spec_title').removeClass('active');
			$(this).addClass('active');
			$('.ts_pd_spec_wrap').hide();
			$(this).next().show();
		});
	});