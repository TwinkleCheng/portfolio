jQuery.noConflict();

(function($){
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
				$('.ts_faqlist dt').css({'background-position':'12px 16px'});
				$('.ts_faqlist dd').slideUp(200);
				$(this).css({'background-position':'12px -105px'});
				$(this).next().slideDown(200);
			}else{
				$(this).css({'background-position':'12px 16px'});
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
		
		/*涵蓋範圍*/
		jQuery('.address-zone').gmaddress({ city: "", county: "" });
		if($('.ts_coverage_map').length){
			init();
		}
	});
})(jQuery);






/*涵蓋範圍Functions*/
var geocoder;
var googleMap;
var overlay0;
var overlay1;
var overlay2;
var overlay3;
var overlay4;
var overlay5;
var overlay6;
function init() {
	//預設位置
	//var myLatLng = new google.maps.LatLng(23.952679, 120.967653);
	var myLatLng = new google.maps.LatLng(23.552679, 120.967653);
	var myOptions = {
		zoom: 7,
		center: myLatLng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	geocoder = new google.maps.Geocoder();
	googleMap = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	google.maps.event.addListener(googleMap, 'zoom_changed', function() {
				zoomLevel = googleMap.getZoom();
				if (zoomLevel > 13) {
					googleMap.setZoom(13);
				}
			});
	switchG('34G');
}
function switchG(G) {
	if(overlay0!=null) overlay0.setMap(null);
	if(overlay1!=null) overlay1.setMap(null);
	if(overlay2!=null) overlay2.setMap(null);
	if(overlay3!=null) overlay3.setMap(null);
	if(overlay4!=null) overlay4.setMap(null);
	if(overlay5!=null) overlay5.setMap(null);
	if(overlay6!=null) overlay6.setMap(null);
	//alert('G='+G);
	if(G=="3G") {
		newOverlay("3G_TW.png","(21.618742,119.59533)","(25.499458,122.32867)",1); //updated 2014/7/16
        newOverlay("3G_PH.png","(23.106561,119.255648)","(23.840639,119.772352)",2); //updated 2014/7/16
		newOverlay("3G_KM.png","(24.322524,118.024196)","(24.593076,118.639804)",3); //updated 2014/7/16
		newOverlay("3G_MJ.png","(26.115085,119.799619)","(26.264815,120.134810)",4);  //updated 2014/7/16
		jQuery('#t_3g').show();
		jQuery('#t_4g').hide();
		jQuery('#t_3g_4g').hide();
	}else if(G=="4G"){// 4G	  
		newOverlay("4G_TW.png","(21.810091,119.166133)","(25.355509,122.219867)",1); //updated 2014/8/21 
		newOverlay("4G_PH.png","(23.420197,119.476626)","(23.765003,119.721374)",2);  //updated 2014/7/16
		newOverlay("4G_KM.png","(24.203229,118.157285)","(24.678171,118.528715)",3);  //updated 2014/8/22
		newOverlay("4G_MJ.png","(26.077196,119.881723)","(26.283604,120.046277)",4);  //insert 2014/08/26
		jQuery('#t_3g').hide();
		jQuery('#t_4g').show();
		jQuery('#t_3g_4g').hide();
	}else{//3G/4G
		newOverlay("3G+4G_TW.png","(21.752284,119.241246)","(25.427516,122.262754)",1);//updated 2014/8/21   
     	newOverlay("3G+4G_PH.png","(22.982879,119.201862)","(23.960721,119.890138)",2);//updated 2014/7/16
		newOverlay("3G+4G_KM.png","(24.1627,118.129144)","(24.7091,118.508856)",3);  //updated 2014/8/12   
		newOverlay("3G+4G_MJ.png","(26.06933,119.616251)","(26.367867,120.306349)",4);	//updated 2014/7/16  
		
		jQuery('#t_3g').hide();
		jQuery('#t_4g').hide();
		jQuery('#t_3g_4g').show();
	}
}
function newOverlay(img,sw,ne,n){

		var srcImage = './service/images/'+img;
		eval("var swBound = new google.maps.LatLng"+sw);
		//alert("swBound = new google.maps.LatLng"+sw);
		eval("var neBound = new google.maps.LatLng"+ne);
		var bounds = new google.maps.LatLngBounds(swBound, neBound);    
		eval("overlay"+n+"= new google.maps.GroundOverlay(srcImage,bounds)")
		//eval("overlay"+n+".setMap(googleMap)");
		//eval("overlay"+n+".setOpacity(0.5)");
		eval("overlay"+n+".setMap(googleMap)");
}
function searchareaClick(obj){
			if(obj.value=='請輸入要搜尋的所在地') {
				obj.value='';
			}
}
function searchareaBlur(obj){
			if(obj.value=='') {
				obj.value='請輸入要搜尋的所在地';
			}
}
function doSearch() {
	//var searcharea = document.form1.searcharea.value;
	var searcharea = jQuery('option:selected', jQuery('.city')).text() + jQuery('option:selected',jQuery('.county')).text()+ document.form1.searcharea.value;
	if (geocoder) {
		geocoder.geocode( { 'address': searcharea}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				var result=results[0];
				var viewport=result.geometry.viewport;
				var bounds=result.geometry.bounds;
			
				googleMap.setCenter(results[0].geometry.location);
				googleMap.fitBounds(viewport);

				var marker = new google.maps.Marker({
					map: googleMap,
					position: results[0].geometry.location
				});
			} else {
				//alert("查無地址，請重新輸入 ( " + status+" )");
				alert("查無地址，請重新輸入");
			}
		}
		
		);
	}
}