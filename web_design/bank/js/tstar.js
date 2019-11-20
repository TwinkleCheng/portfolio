$(function(){
	/*滑順地捲動到Anchor*/
	$('a[href*=#]:not([href=#])').click(function(){
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname){
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length){
				$('html,body').animate({scrollTop: target.offset().top},200);
				return false;
			}
		}
	});
	
	/*通用的lightbox*/
	if($('.common_popup').length){$('.common_popup').magnificPopup({type:'inline'});}
	$('.mfp_close').click(function(){$.magnificPopup.close();});

	/*APP推廣(手機fix在畫面底下的Banner)*/
	if(isMobile.any){
		if(cookieExistence()){
			$('.app_promo').hide();
		}else{
			$('.app_promo').show();
		}
	}
	$('.app_promo_launch').click(function(){
		createCookie();
		openApp();
		$('.app_promo').hide();
	});
	$('.app_promo_close').click(function(){
		createCookie();
		$('.app_promo').hide();
	});
});

/*APP推廣(必要的函式)*/
function cookieExistence(){
	var isAndroid = navigator.userAgent.match('Android');
	var isiOS = navigator.userAgent.match('iPad') || navigator.userAgent.match('iPhone') || navigator.userAgent.match('iPod');
	if(document.cookie.length > 0){
		c_start = document.cookie.indexOf("tstarApp=");
		if(c_start != -1 && (isAndroid || isiOS)){
			return true;
		}else{
			return false;
		}
	}
}
function createCookie(){
	var date = new Date();
	date.setTime(date.getTime() + (60 * 24 * 60 * 60 * 1000));
	expires = "; expires=" + date.toGMTString();
	document.cookie = "tstarApp=installMesg" + expires + "; path=/";
}
function openApp(){
	var isAndroid = navigator.userAgent.match('Android');
	var isiOS = navigator.userAgent.match('iPad') || navigator.userAgent.match('iPhone') || navigator.userAgent.match('iPod');
	if(isAndroid){
		document.getElementById('app_loader').src = 'tstarcs://';
		setTimeout(function(){
			window.location.replace('https://play.google.com/store/apps/details?id=com.tstartel.tstarcs');
		}, 300);
	}
	if(isiOS){
		document.location = 'TSTAPP://';
		setTimeout(function(){
			document.location = 'http://itunes.apple.com/app/id937699766';  
		}, 300);
	}
}

/*isMobile*/
!function(a){var b=/iPhone/i,c=/iPod/i,d=/iPad/i,e=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,f=/Android/i,g=/IEMobile/i,h=/(?=.*\bWindows\b)(?=.*\bARM\b)/i,i=/BlackBerry/i,j=/BB10/i,k=/Opera Mini/i,l=/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,m=new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)","i"),n=function(a,b){return a.test(b)},o=function(a){var o=a||navigator.userAgent;return this.apple={phone:n(b,o),ipod:n(c,o),tablet:n(d,o),device:n(b,o)||n(c,o)||n(d,o)},this.android={phone:n(e,o),tablet:!n(e,o)&&n(f,o),device:n(e,o)||n(f,o)},this.windows={phone:n(g,o),tablet:n(h,o),device:n(g,o)||n(h,o)},this.other={blackberry:n(i,o),blackberry10:n(j,o),opera:n(k,o),firefox:n(l,o),device:n(i,o)||n(j,o)||n(k,o)||n(l,o)},this.seven_inch=n(m,o),this.any=this.apple.device||this.android.device||this.windows.device||this.other.device||this.seven_inch,this.phone=this.apple.phone||this.android.phone||this.windows.phone,this.tablet=this.apple.tablet||this.android.tablet||this.windows.tablet,"undefined"==typeof window?this:void 0},p=function(){var a=new o;return a.Class=o,a};"undefined"!=typeof module&&module.exports&&"undefined"==typeof window?module.exports=o:"undefined"!=typeof module&&module.exports&&"undefined"!=typeof window?module.exports=p():"function"==typeof define&&define.amd?define("isMobile",[],a.isMobile=p()):a.isMobile=p()}(this);
