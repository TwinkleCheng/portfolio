// VA LIBS
var VA = VA || {
  jq: null,
  
  isWl: false,
  
  setup: {
    // indicate the setup has shopping cart element
    cart: false,
    // indicate the setup has lead gen element
    leadgen: false,
    // indicate locale to use
    locale: "en-US",
    // indiciate the setup has marketing module (mkt)
    mkt: false,
    // indicate the predefined to load.
    predefined: [],
    // indicate the setup has receipt element
    receipt: false,
    
    // white label setup
    whiteLabel: {
      id: null,
      offerId: null,
      domain: null,
      leadAPIKey: null
    },
    
    // resubmitMode - either create new record or update existing one from session
    resubmitMode: 'new'
  },
  
  trace: function(s) {
    try { console.log(s) } catch (e) { 
      if(window.location.search.indexOf("vatest=true") >= 0){  alert(s);  }
    };
  },
  
  qs: (function(a) {
    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i) {
      var p=a[i].split('=');
      if (p.length != 2) continue;
      // need the escape function inside decode to handle UTF-8:
      // source: http://stackoverflow.com/questions/619323/decodeuricomponent-vs-unescape-what-is-wrong-with-unescape
      try {
        b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
      } catch(err){
        b[p[0]] = decodeURIComponent(escape(p[1].replace(/\+/g, " ")));
      }
    }
    return b;
  })(window.location.search.substr(1).split('&')),
  
  // source: http://stackoverflow.com/a/26716182
  evalScriptFromNode: function(elem) {
    var scripts = elem.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; i++) {
        if (scripts[i].src != "") {
            var tag = document.createElement("script");
            tag.src = scripts[i].src;
            document.getElementsByTagName("head")[0].appendChild(tag);
        }
        else {
            eval(scripts[i].innerHTML);
        }
    }
  },
  
  // source: http://stackoverflow.com/questions/2592092/executing-script-elements-inserted-with-innerhtml
  execScriptFromNode: function(body_el){
    // Finds and executes scripts in a newly added element's body.
    // Needed since innerHTML does not run scripts.
    //
    // Argument body_el is an element in the dom.

    function nodeName(elem, name) {
      return elem.nodeName && elem.nodeName.toUpperCase() ===
                name.toUpperCase();
    };

    function evalScript(elem) {
      var data = (elem.text || elem.textContent || elem.innerHTML || "" ),
          head = document.getElementsByTagName("head")[0] ||
                    document.documentElement,
          script = document.createElement("script");

      script.type = "text/javascript";
      try {
        // doesn't work on ie...
        script.appendChild(document.createTextNode(data));      
      } catch(e) {
        // IE has funky script nodes
        script.text = data;
      }

      head.insertBefore(script, head.firstChild);
      head.removeChild(script);
    };

    // main section of function
    var scripts = [],
        script,
        children_nodes = body_el.childNodes,
        child,
        i;

    for (i = 0; children_nodes[i]; i++) {
      child = children_nodes[i];
      if (nodeName(child, "script" ) &&
        (!child.type || child.type.toLowerCase() === "text/javascript")) {
            scripts.push(child);
        }
    }

    for (i = 0; scripts[i]; i++) {
      script = scripts[i];
      if (script.parentNode) {script.parentNode.removeChild(script);}
      evalScript(scripts[i]);
    }
  },
  
  getJSONP: function(url, success){
    var ud = '_' + +new Date;
    var script = document.createElement('script');
    var head = document.getElementsByTagName('head')[0] || document.documentElement;

    window[ud] = function(data) {
      head.removeChild(script);
      success && success(data);
    };

    script.src = url.replace('callback=?', 'callback=' + ud);
    head.appendChild(script);
  },
  
  mergeRecursive: function(obj1, obj2) {
    for (var p in obj2) {
      try {
        // Property in destination object set; update its value.
        if ( obj2[p].constructor==Object ) {
          obj1[p] = MergeRecursive(obj1[p], obj2[p]);

        } else {
          obj1[p] = obj2[p];

        }

      } catch(e) {
        // Property in destination object not set; create it and set its value.
        obj1[p] = obj2[p];

      }
    }

    return obj1;
  },
  
  createCookie: function(name, value, expires, path, domain) {
    var cookie = name + "=" + escape(value) + ";";
    if (expires) {
      // If it's a date
      if(expires instanceof Date) {
        // If it isn't a valid date
        if (isNaN(expires.getTime()))
         expires = new Date();
      }
      else
        expires = new Date(new Date().getTime() + parseInt(expires) * 1000 * 60 * 60 * 24);
      cookie += "expires=" + expires.toGMTString() + ";";
    }

    if (path)
      cookie += "path=" + path + ";";
    if (domain)
      cookie += "domain=" + domain + ";";

    document.cookie = cookie;
  },
  
  // source: http://stackoverflow.com/questions/10730362/get-cookie-by-name
  getCookie: function(name){
    match = document.cookie.match(new RegExp(name + '=([^;]+)'));
    if (match) return match[1];
  },
  
  deleteCookie: function(name, path, domain) {
    // If the cookie exists
    if (VA.getCookie(name))
      VA.createCookie(name, "", -1, path, domain);
  },
  
  
  compareVersions: function(installed, required) {
    var a = installed.split('.');
    var b = required.split('.');

    for (var i = 0; i < a.length; ++i) {
        a[i] = Number(a[i]);
    }
    for (var i = 0; i < b.length; ++i) {
        b[i] = Number(b[i]);
    }
    if (a.length == 2) {
        a[2] = 0;
    }

    if (a[0] > b[0]) return true;
    if (a[0] < b[0]) return false;

    if (a[1] > b[1]) return true;
    if (a[1] < b[1]) return false;

    if (a[2] > b[2]) return true;
    if (a[2] < b[2]) return false;

    return true;
  },
  
  
  isBlank: function(arg) {
    return (typeof(arg) === 'undefined' || arg === null || arg === "");
  },
  
  isPresent: function(arg) {
    return !(VA.isBlank(arg));
  },
  
  isFunction: function(param) {
	  return (param !== 'undefined' && typeof(param) === 'function')
  },
  
  isIncluded: function(src){
    var scripts = document.getElementsByTagName("script");
    for(var i = 0; i < scripts.length; i++) 
      if(scripts[i].getAttribute('src') == src) return true;
    return false;
  },
  
  paramOrCookie: function(key) {    
    var str = VA.qs[key] || VA.getCookie(key) || '';
    return str;
  },
  
  events: {
    onAfterDataLoad: function(lead){},  // triggered when loading data is finished. 'lead' contains the loaded lead's data.
    onAfterFormSuccess: function(data){}, // triggered when form submit is returned as success. 'data' is the complete data returned.
    onBeforeFormSubmit: function(form){}  // triggered just before form submit.
  },
  
  domain: (function() {
    var b = "vbtrax.com";
    if(document.location.hostname.match(/local./) != null) {
      b = 'local.vbtrax.com';
    }
    return b;
  })(),
  
  protocol: (function() {
    return ('https:' == document.location.protocol ? 'https://' : 'http://')
  })(),
  
  loadCSS: function(url){
    // adding the css tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    for (var i = 0; i < url.length; i++) {
      var script = document.createElement('link');
      script.rel = 'stylesheet';
      script.href = url[i];

      // fire the loading
      head.appendChild(script);
    }
  },
  
  loadScript: function(options) {
    options.owner_document = options.owner_document || document;
    options.chain = options.chain || [options.src];
    // before shifting, if chain is empty, no need to proceed.
    // execute callback right away.
    if (options.chain.length == 0) {
      options.callback && options.callback();
      return;
    }
    
    var src = options.chain.shift();
        
    if(!VA.isIncluded(src)){
      var script_tag = options.owner_document.createElement('script');
      script_tag.setAttribute('type', 'text/javascript');
      script_tag.setAttribute('src', src);
      
      
      // if chain has no more item, set the original callback
      if (options.chain.length == 0) {
      
        script_tag.onload = function() {
          script_tag.onreadystatechange = null;
          options.callback && options.callback();
        };
        script_tag.onreadystatechange = function() {
          if (script_tag.readyState == 'loaded' || script_tag.readyState == 'complete') {
            script_tag.onload = null;
            options.callback && options.callback();
          }
        };
      // if chain still has more URLs to load, continue load script and pass
      // all callback until next load. (recursive)
      } else {
        script_tag.onload = function() {
          script_tag.onreadystatechange = null;
          VA.loadScript(options);
        };
        script_tag.onreadystatechange = function() {
          if (script_tag.readyState == 'loaded' || script_tag.readyState == 'complete') {
            script_tag.onload = null;
            VA.loadScript(options);
          }
        };
      }
      
      options.owner_document.getElementsByTagName('head')[0].appendChild(script_tag);
      
    } else {
    
      if (options.chain.length == 0) { 
        options.callback && options.callback(); 
      } else {
        VA.loadScript(options);
      }
      
    }
  },
  
  
  /* MKT MODULE */
  
  mkt: {
  
    domain: function(){
      return (VA.setup.whiteLabel.domain || VA.domain);
    },
    
    initialize: function(options){
            
      var _vbtraxSiteId = VA.setup.whiteLabel.siteId;
      var _vbtraxWlId = VA.setup.whiteLabel.id;
      var _vbtraxSegments = [];
      var _vbtraxParser = window.location;
      
      _vbtraxSegments.push(VA.protocol); _vbtraxSegments.push(VA.mkt.domain());
      _vbtraxSegments.push("/track/imp/mkt_site/" + _vbtraxWlId + "/" + _vbtraxSiteId + "?");
      _vbtraxSegments.push("vtm_host=" + encodeURIComponent(_vbtraxParser.hostname));
      _vbtraxSegments.push("&vtm_page=" + encodeURIComponent(_vbtraxParser.pathname));
      _vbtraxSegments.push("&ref=" + encodeURIComponent(document.referrer));
      
      _vbtraxSegments.push("&vtm_channel=" + encodeURIComponent(VA.paramOrCookie('vtm_channel')));
      _vbtraxSegments.push("&vtm_campaign=" + encodeURIComponent(VA.paramOrCookie('vtm_campaign')));
      _vbtraxSegments.push("&server_subid=" + encodeURIComponent(VA.paramOrCookie('vtm_stat_id')));
      _vbtraxSegments.push("&subid_1=" + encodeURIComponent(VA.paramOrCookie('subid_1')));
      _vbtraxSegments.push("&subid_2=" + encodeURIComponent(VA.paramOrCookie('subid_2')));
      _vbtraxSegments.push("&subid_3=" + encodeURIComponent(VA.paramOrCookie('subid_3')));
      _vbtraxSegments.push("&subid_4=" + encodeURIComponent(VA.paramOrCookie('subid_4')));
      _vbtraxSegments.push("&subid_5=" + encodeURIComponent(VA.paramOrCookie('subid_5')));
      _vbtraxSegments.push("&gaid=" + encodeURIComponent(VA.paramOrCookie('gaid')));

      
      if(options.conversion == true) {
        _vbtraxSegments.push("&conversions=true");
        if (typeof options.conversionData != 'undefined') {
          if(options.conversionData.step != null){ _vbtraxSegments.push("&step=" + encodeURIComponent(options.conversionData.step)); }
          if(options.conversionData.orderTotal != null){ _vbtraxSegments.push("&order_total=" + encodeURIComponent(options.conversionData.orderTotal)); }
          if(options.conversionData.order != null){ _vbtraxSegments.push("&order=" + encodeURIComponent(options.conversionData.order)); }
          if(options.conversionData.revenue != null){ _vbtraxSegments.push("&revenue=" + encodeURIComponent(options.conversionData.revenue)); }
        }
      }
      
      _vbtraxSegments.push("&callback=?");
      
      if(VA.isPresent(VA.paramOrCookie('server_subid')) || VA.isPresent(VA.paramOrCookie('vtm_stat_id'))) {
      
        VA.getJSONP(_vbtraxSegments.join(""), function(data){
          // cookie bust
          if(!VA.isBlank(data.cookie_bust)){
            var arrayLength = data.cookie_bust.length;
            for (var i = 0; i < arrayLength; i++) {
              VA.deleteCookie(data.cookie_bust[i], '/', '.' + data.cookie.domain);
            }
          }
          
          var cookieSimilar = function(cname, cvalue){
            return (VA.isPresent(VA.getCookie(cname)) && VA.getCookie(cname) == cvalue);
          }
          
          
          // marketing cookies
          if (!cookieSimilar("vtm_host", data.cookie.vtm_host)) { VA.createCookie("vtm_host", data.cookie.vtm_host, 90, '/', '.' + data.cookie.domain); }
          if (!cookieSimilar("vtm_page", data.cookie.vtm_page)) { VA.createCookie("vtm_page", data.cookie.vtm_page, 90, '/', '.' + data.cookie.domain); }
          if (!cookieSimilar("vtm_channel", data.cookie.vtm_channel)) { VA.createCookie("vtm_channel", data.cookie.vtm_channel, 90, '/', '.' + data.cookie.domain); }
          if (!cookieSimilar("vtm_campaign", data.cookie.vtm_campaign)) {  VA.createCookie("vtm_campaign", data.cookie.vtm_campaign, 90, '/', '.' + data.cookie.domain); }
          if (!cookieSimilar("subid_1", data.cookie.subid_1)) { VA.createCookie("subid_1", data.cookie.subid_1, 90, '/', '.' + data.cookie.domain); }
          if (!cookieSimilar("subid_2", data.cookie.subid_2)) { VA.createCookie("subid_2", data.cookie.subid_2, 90, '/', '.' + data.cookie.domain); }
          if (!cookieSimilar("subid_3", data.cookie.subid_3)) { VA.createCookie("subid_3", data.cookie.subid_3, 90, '/', '.' + data.cookie.domain); }
          if (!cookieSimilar("subid_4", data.cookie.subid_4)) { VA.createCookie("subid_4", data.cookie.subid_4, 90, '/', '.' + data.cookie.domain); }
          if (!cookieSimilar("subid_5", data.cookie.subid_5)) { VA.createCookie("subid_5", data.cookie.subid_5, 90, '/', '.' + data.cookie.domain); }
          
          if (!cookieSimilar("vtm_stat_id", data.cookie.stat_id)) { VA.createCookie("vtm_stat_id", data.cookie.stat_id, 90, '/', '.' + data.cookie.domain); }
      
          // piggy-backed pixels
          if (typeof(data.pixel) != 'undefined') {
            var elem = document.createElement('ins');
            elem.id = "vbtrax-px" + "-" + _vbtraxWlId + "-" + _vbtraxSiteId;
            elem.innerHTML = data.pixel;
            document.body.appendChild(elem);
            //VA.execScriptFromNode(elem);
            VA.evalScriptFromNode(elem);
          }
      
        });
      }
      
    }// End Initialize
  },
  
  
  skinFunction: function(args){
    if (VA.jq == null && typeof(jQuery) != 'undefined') { VA.jq = jQuery; }
  
    if(VA.setup.leadgen || VA.setup.cart) {
      var basicChain = [];
      if(typeof(VAD) == 'undefined')
        basicChain.push("//" + VA.domain + "/javascripts/dictionaries/va-" + VA.setup.locale + ".js");
    
      VA.loadScript({
        chain: basicChain, 
        callback: function(){
                
          var additionalJS = [];
          var additionalCSS = [];
        
          // load necessary files for given setup
          if(VA.setup.leadgen) {
            additionalCSS.push("//" + VA.domain + "/plugins/jquery.alerts-1.1/jquery.alerts.css");
            if(typeof(VA.center) == 'undefined'){ additionalJS.push("//" + VA.domain + "/javascripts/va.common.js"); }
            additionalJS.push("//code.jquery.com/jquery-migrate-1.2.1.min.js");
            additionalJS.push("//" + VA.domain + "/plugins/easyXDM-2.4.17.1/easyXDM.min.js");
            additionalJS.push("//" + VA.domain + "/plugins/jquery-validation-1.9.0/jquery.validate.all.min.js");
            additionalJS.push("//" + VA.domain + "/plugins/jquery.alerts-1.1/jquery.alerts.js");
            additionalJS.push("//" + VA.domain + "/javascripts/va.xdm.js");
            additionalJS.push("//ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject_src.js");
            additionalJS.push("//" + VA.domain + "/plugins/fingerprintjs2/fingerprint2.js");
            additionalJS.push("//" + VA.domain + "/javascripts/va.leadgen.js");
          }
          if(VA.setup.cart) {
            if(typeof(VA.center) == 'undefined'){ additionalJS.push("//" + VA.domain + "/javascripts/va.common.js"); }
            additionalJS.push("//" + VA.domain + "/javascripts/va.cart.js");
          }
          for (var i = 0; i < VA.setup.predefined.length; i++){
            additionalJS.push("//" + VA.domain + "/javascripts/va.predefined/" + VA.setup.predefined[i] + ".js");
          }
        
          VA.loadCSS(additionalCSS);
          VA.loadScript({ chain: additionalJS, callback: function(){
            if (VA.setup.cart) { VA.cart.initialize(); }
            else if (VA.setup.leadgen) { VA.leadgen.initialize(); }
          }});
        }
      });
    }
  },
  
  remoteLoad: function(options){
    VA.setup.locale = options.locale || "en-US";
    VA.setup.predefined = options.predefined || [];
    VA.setup.leadgen = options.leadgen || false;
    VA.setup.cart = options.cart || false;
    VA.setup.receipt = options.receipt || false;
    VA.setup.mkt = options.mkt || false;
    VA.setup.whiteLabel = options.whiteLabel || { id: null, offerId: null, domain: null, siteId: "" };
    VA.isWl = (VA.setup.whiteLabel.id != null)
    VA.events.onAfterDataLoad     = options.events && options.events.onAfterDataLoad;
    VA.events.onAfterFormSuccess  = options.events && options.events.onAfterFormSuccess;
    VA.setup.resubmitMode = options.resubmitMode || 'new';

    if(VA.setup.leadgen === true){
      if(typeof(jQuery) === 'undefined' || !VA.compareVersions(jQuery.fn.jquery, "1.7.1")) {
        VA.trace("VA: Using VA jQuery.");
        VA.loadScript({
            src: "//cdnjs.cloudflare.com/ajax/libs/jquery/1.7.1/jquery.min.js",
          });
      } else {
        VA.trace("VA: Using Client jQuery.");
      }
      VA.skinFunction();
    }
    if(VA.setup.mkt === true){
      VA.trace("VA: mkt is active.");
      VA.mkt.initialize(options); 
    }

  }
}