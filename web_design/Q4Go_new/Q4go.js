(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Q4go_atlas_", frames: [[950,560,43,31],[950,475,68,30],[950,371,63,53],[995,553,27,26],[987,507,33,44],[551,485,265,75],[411,573,35,38],[517,554,29,47],[297,554,112,156],[1000,446,21,18],[950,426,48,47],[950,507,35,51],[1002,60,20,18],[1002,120,20,17],[1002,40,20,18],[1002,20,20,18],[1000,426,21,18],[1002,100,19,18],[1002,80,19,18],[1002,0,20,18],[297,371,252,181],[0,371,295,182],[411,554,104,17],[0,555,86,20],[0,0,1000,277],[0,279,1000,90],[838,371,110,200],[551,371,285,112]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib._00 = function() {
	this.spriteSheet = ss["Q4go_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._01horse = function() {
	this.spriteSheet = ss["Q4go_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._02 = function() {
	this.spriteSheet = ss["Q4go_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._03 = function() {
	this.spriteSheet = ss["Q4go_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._04 = function() {
	this.spriteSheet = ss["Q4go_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._06 = function() {
	this.spriteSheet = ss["Q4go_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._07 = function() {
	this.spriteSheet = ss["Q4go_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._08 = function() {
	this.spriteSheet = ss["Q4go_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib._09 = function() {
	this.spriteSheet = ss["Q4go_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib._1 = function() {
	this.spriteSheet = ss["Q4go_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib._10 = function() {
	this.spriteSheet = ss["Q4go_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib._18 = function() {
	this.spriteSheet = ss["Q4go_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["Q4go_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["Q4go_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["Q4go_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib._5 = function() {
	this.spriteSheet = ss["Q4go_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib._6 = function() {
	this.spriteSheet = ss["Q4go_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib._7 = function() {
	this.spriteSheet = ss["Q4go_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib._8 = function() {
	this.spriteSheet = ss["Q4go_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib._9 = function() {
	this.spriteSheet = ss["Q4go_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.back_l = function() {
	this.spriteSheet = ss["Q4go_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.back_r = function() {
	this.spriteSheet = ss["Q4go_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.green = function() {
	this.spriteSheet = ss["Q4go_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.holiday = function() {
	this.spriteSheet = ss["Q4go_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.line_t = function() {
	this.spriteSheet = ss["Q4go_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.m = function() {
	this.spriteSheet = ss["Q4go_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.p = function() {
	this.spriteSheet = ss["Q4go_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.shadow = function() {
	this.spriteSheet = ss["Q4go_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.補間動畫10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AxZCHIAAkNMAizAAAIAAENg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.4,-13.5,222.9,27);


(lib.補間動畫9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AxZCHIAAkNMAizAAAIAAENg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.4,-13.5,222.9,27);


(lib.元件20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("ApIDcIAAm3ISRAAIAAG3g");
	this.shape.setTransform(58.5,22);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,117,44);


(lib.元件19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.holiday();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,86,20);


(lib.元件18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._18();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35,51);


(lib.元件17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.p();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110,200);


(lib.元件16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.shadow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,285,112);


(lib.元件15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._10();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48,47);


(lib.元件14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._09();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112,156);


(lib.元件13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._08();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29,47);


(lib.元件12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._03();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27,26);


(lib.元件11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._04();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33,44);


(lib.元件10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._02();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63,53);


(lib.元件9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._07();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35,38);


(lib.元件8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._01horse();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68,30);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._00();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43,31);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib._06();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,265,75);


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.green();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104,17);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.m();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1000,90);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.back_l();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,252,181);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.back_r();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,295,182);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.line_t();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1000,277);


(lib.元件22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件18("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-3.7,42.5,1,1,0,0,0,17.5,25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},20).wait(28).to({regX:17.4,regY:25.6,scaleX:4.55,scaleY:4.55,rotation:-60},0).to({regX:17.5,regY:25.5,scaleX:0.88,scaleY:0.88,rotation:0,alpha:1},4).to({scaleX:1,scaleY:1},1).wait(42).to({startPosition:0},0).to({x:-5.7,y:45.5},1,cjs.Ease.get(1)).to({x:-2.7,y:41.5},1,cjs.Ease.get(-1)).to({x:-4.7,y:43.5},1,cjs.Ease.get(1)).to({x:-3.7,y:42.5},1,cjs.Ease.get(-1)).wait(401));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.2,17,35,51);


(lib.元件21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件15("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(24,47,1,1,0,0,0,24,47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({startPosition:0},0).to({y:45},3,cjs.Ease.get(-1)).to({y:48},2,cjs.Ease.get(1)).to({y:47},1).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48,47);


// stage content:
(lib.Q4go = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_235 = function() {
		stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(235).call(this.frame_235).wait(1));

	// 圖層 2
	this.instance = new lib.元件20();
	this.instance.parent = this;
	this.instance.setTransform(892.5,24,1,1,0,0,0,58.5,22);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(179).to({_off:false},0).wait(57));

	// 圖層 3
	this.instance_1 = new lib.元件19("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(894.3,29.4,1,1,0,0,0,43,10);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(160).to({_off:false},0).to({alpha:1},19).wait(57));

	// 圖層 4
	this.instance_2 = new lib.元件15("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(564,54.9,1,0.298,0,0,0,24,47);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.元件21("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(557,5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},104).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3,p:{mode:"single",startPosition:0}}]},1).to({state:[{t:this.instance_3,p:{mode:"independent",startPosition:undefined}}]},128).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(104).to({_off:false},0).to({scaleY:1,x:585,y:49.9,alpha:1},2,cjs.Ease.get(-1)).to({_off:true,regX:0,regY:0,x:557,y:5.9,mode:"single"},1,cjs.Ease.get(1)).wait(129));

	// 圖層 5
	this.instance_4 = new lib.元件14("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(566.3,175,1,0.135,0,0,0,56,156);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(100).to({_off:false},0).to({scaleY:1,y:167,alpha:1},2,cjs.Ease.get(-1)).to({y:172},1,cjs.Ease.get(1)).wait(133));

	// 圖層 6
	this.instance_5 = new lib.元件13("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(616.3,179.9,1,0.34,0,0,0,14.5,47);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(95).to({_off:false},0).to({scaleY:1,x:629.3,y:169.9,alpha:1},3,cjs.Ease.get(-1)).to({x:627.3,y:172.9},1,cjs.Ease.get(1)).wait(137));

	// 圖層 7
	this.instance_6 = new lib.元件9("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(529.3,164.4,1,0.553,0,0,0,17.5,38);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(66).to({_off:false},0).to({scaleY:1,x:514.3,y:147.4,alpha:1},4,cjs.Ease.get(-1)).to({x:519.3,y:151.4},1,cjs.Ease.get(1)).wait(165));

	// 圖層 8
	this.instance_7 = new lib.元件22();
	this.instance_7.parent = this;
	this.instance_7.setTransform(496.3,181,1,1,0,0,0,-3.7,42.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(235).to({_off:false},0).wait(1));

	// 圖層 9
	this.instance_8 = new lib.元件18("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(496.3,181,4.545,4.545,-60,0,0,17.4,25.6);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(155).to({_off:false},0).to({regX:17.5,regY:25.5,scaleX:0.88,scaleY:0.88,rotation:0,alpha:1},4).to({scaleX:1,scaleY:1},1).wait(76));

	// 圖層 10
	this.instance_9 = new lib.元件6("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(497.3,178.9,0.183,0.183,0,0,0,132.5,37.5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(49).to({_off:false},0).to({scaleX:1.43,scaleY:1.43,y:181.9,alpha:1},3,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:178.9},1,cjs.Ease.get(1)).wait(183));

	// 圖層 11
	this.instance_10 = new lib._1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(390,221);

	this.instance_11 = new lib._2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(419,221);

	this.instance_12 = new lib._3();
	this.instance_12.parent = this;
	this.instance_12.setTransform(447,221);

	this.instance_13 = new lib._4();
	this.instance_13.parent = this;
	this.instance_13.setTransform(475,221);

	this.instance_14 = new lib._5();
	this.instance_14.parent = this;
	this.instance_14.setTransform(504,221);

	this.instance_15 = new lib._6();
	this.instance_15.parent = this;
	this.instance_15.setTransform(532,221);

	this.instance_16 = new lib._7();
	this.instance_16.parent = this;
	this.instance_16.setTransform(561,221);

	this.instance_17 = new lib._8();
	this.instance_17.parent = this;
	this.instance_17.setTransform(589,221);

	this.instance_18 = new lib._9();
	this.instance_18.parent = this;
	this.instance_18.setTransform(617,221);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},110).to({state:[{t:this.instance_10},{t:this.instance_11}]},2).to({state:[{t:this.instance_10},{t:this.instance_11},{t:this.instance_12}]},2).to({state:[{t:this.instance_10},{t:this.instance_11},{t:this.instance_12},{t:this.instance_13}]},2).to({state:[{t:this.instance_10},{t:this.instance_11},{t:this.instance_12},{t:this.instance_13},{t:this.instance_14}]},2).to({state:[{t:this.instance_10},{t:this.instance_11},{t:this.instance_12},{t:this.instance_13},{t:this.instance_14},{t:this.instance_15}]},2).to({state:[{t:this.instance_10},{t:this.instance_11},{t:this.instance_12},{t:this.instance_13},{t:this.instance_14},{t:this.instance_15},{t:this.instance_16}]},2).to({state:[{t:this.instance_10},{t:this.instance_11},{t:this.instance_12},{t:this.instance_13},{t:this.instance_14},{t:this.instance_15},{t:this.instance_16},{t:this.instance_17}]},2).to({state:[{t:this.instance_10},{t:this.instance_11},{t:this.instance_12},{t:this.instance_13},{t:this.instance_14},{t:this.instance_15},{t:this.instance_16},{t:this.instance_17},{t:this.instance_18}]},2).wait(110));

	// 圖層 12
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E4007E").s().p("AhhBhQgogoAAg5QAAg4AogpQApgoA4AAQA5AAApAoQAoApAAA4QAAA5goAoQgpApg5AAQg4AAgpgpg");
	this.shape.setTransform(400.3,230.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E4007E").s().p("AhhBhQgogoAAg5QAAg4AogpQApgoA4AAQA5AAApAoQAoApAAA4QAAA5goAoQgpApg5AAQg4AAgpgpg");
	this.shape_1.setTransform(400.3,230.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E4007E").s().p("AhhBhQgogoAAg5QAAg4AogpQApgoA4AAQA5AAApAoQAoApAAA4QAAA5goAoQgpApg5AAQg4AAgpgpg");
	this.shape_2.setTransform(400.3,230.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E4007E").s().p("AhhBhQgogoAAg5QAAg4AogpQApgoA4AAQA5AAApAoQAoApAAA4QAAA5goAoQgpApg5AAQg4AAgpgpg");
	this.shape_3.setTransform(400.3,230.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E4007E").s().p("AhhBhQgogoAAg5QAAg4AogpQApgoA4AAQA5AAApAoQAoApAAA4QAAA5goAoQgpApg5AAQg4AAgpgpg");
	this.shape_4.setTransform(400.3,230.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E4007E").s().p("AhhBhQgogoAAg5QAAg4AogpQApgoA4AAQA5AAApAoQAoApAAA4QAAA5goAoQgpApg5AAQg4AAgpgpg");
	this.shape_5.setTransform(400.3,230.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E4007E").s().p("AhhBhQgogoAAg5QAAg4AogpQApgoA4AAQA5AAApAoQAoApAAA4QAAA5goAoQgpApg5AAQg4AAgpgpg");
	this.shape_6.setTransform(400.3,230.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E4007E").s().p("AhhBhQgogoAAg5QAAg4AogpQApgoA4AAQA5AAApAoQAoApAAA4QAAA5goAoQgpApg5AAQg4AAgpgpg");
	this.shape_7.setTransform(400.3,230.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E4007E").s().p("AhhBhQgogoAAg5QAAg4AogpQApgoA4AAQA5AAApAoQAoApAAA4QAAA5goAoQgpApg5AAQg4AAgpgpg");
	this.shape_8.setTransform(400.3,230.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape,p:{x:400.3}}]},110).to({state:[{t:this.shape_1,p:{x:400.3}},{t:this.shape,p:{x:428.7}}]},2).to({state:[{t:this.shape_2,p:{x:400.3}},{t:this.shape_1,p:{x:428.7}},{t:this.shape,p:{x:457}}]},2).to({state:[{t:this.shape_3,p:{x:400.3}},{t:this.shape_2,p:{x:428.7}},{t:this.shape_1,p:{x:457}},{t:this.shape,p:{x:485.4}}]},2).to({state:[{t:this.shape_4,p:{x:400.3}},{t:this.shape_3,p:{x:428.7}},{t:this.shape_2,p:{x:457}},{t:this.shape_1,p:{x:485.4}},{t:this.shape,p:{x:513.7}}]},2).to({state:[{t:this.shape_5,p:{x:400.3}},{t:this.shape_4,p:{x:428.7}},{t:this.shape_3,p:{x:457}},{t:this.shape_2,p:{x:485.4}},{t:this.shape_1,p:{x:513.7}},{t:this.shape,p:{x:542.1}}]},2).to({state:[{t:this.shape_6,p:{x:400.3}},{t:this.shape_5,p:{x:428.7}},{t:this.shape_4,p:{x:457}},{t:this.shape_3,p:{x:485.4}},{t:this.shape_2,p:{x:513.7}},{t:this.shape_1,p:{x:542.1}},{t:this.shape,p:{x:570.4}}]},2).to({state:[{t:this.shape_7,p:{x:400.3}},{t:this.shape_6,p:{x:428.7}},{t:this.shape_5,p:{x:457}},{t:this.shape_4,p:{x:485.4}},{t:this.shape_3,p:{x:513.7}},{t:this.shape_2,p:{x:542.1}},{t:this.shape_1,p:{x:570.4}},{t:this.shape,p:{x:598.8}}]},2).to({state:[{t:this.shape_8},{t:this.shape_7,p:{x:428.7}},{t:this.shape_6,p:{x:457}},{t:this.shape_5,p:{x:485.4}},{t:this.shape_4,p:{x:513.7}},{t:this.shape_3,p:{x:542.1}},{t:this.shape_2,p:{x:570.4}},{t:this.shape_1,p:{x:598.8}},{t:this.shape,p:{x:627.2}}]},2).wait(110));

	// 圖層 13
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(11,1,1).p("ACKAAQAAA5goAoQgpApg5AAQg4AAgpgpQgogoAAg5QAAg4AogpQApgpA4ABQA5gBApApQAoApAAA4g");
	this.shape_9.setTransform(400.3,230.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhhBhQgogoAAg5QAAg4AogpQApgpA4ABQA5gBApApQAoApAAA4QAAA5goAoQgpApg5AAQg4AAgpgpg");
	this.shape_10.setTransform(400.3,230.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(11,1,1).p("ACKAAQAAA5goAoQgpApg5AAQg4AAgpgpQgogoAAg5QAAg4AogpQApgpA4ABQA5gBApApQAoApAAA4g");
	this.shape_11.setTransform(400.3,230.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhhBhQgogoAAg5QAAg4AogpQApgpA4ABQA5gBApApQAoApAAA4QAAA5goAoQgpApg5AAQg4AAgpgpg");
	this.shape_12.setTransform(400.3,230.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(11,1,1).p("ACKAAQAAA5goAoQgpApg5AAQg4AAgpgpQgogoAAg5QAAg4AogpQApgpA4ABQA5gBApApQAoApAAA4g");
	this.shape_13.setTransform(400.3,230.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhhBhQgogoAAg5QAAg4AogpQApgpA4ABQA5gBApApQAoApAAA4QAAA5goAoQgpApg5AAQg4AAgpgpg");
	this.shape_14.setTransform(400.3,230.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(11,1,1).p("ACKAAQAAA5goAoQgpApg5AAQg4AAgpgpQgogoAAg5QAAg4AogpQApgpA4ABQA5gBApApQAoApAAA4g");
	this.shape_15.setTransform(400.3,230.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhhBhQgogoAAg5QAAg4AogpQApgpA4ABQA5gBApApQAoApAAA4QAAA5goAoQgpApg5AAQg4AAgpgpg");
	this.shape_16.setTransform(400.3,230.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(11,1,1).p("ACKAAQAAA5goAoQgpApg5AAQg4AAgpgpQgogoAAg5QAAg4AogpQApgpA4ABQA5gBApApQAoApAAA4g");
	this.shape_17.setTransform(400.3,230.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhhBhQgogoAAg5QAAg4AogpQApgpA4ABQA5gBApApQAoApAAA4QAAA5goAoQgpApg5AAQg4AAgpgpg");
	this.shape_18.setTransform(400.3,230.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(11,1,1).p("ACKAAQAAA5goAoQgpApg5AAQg4AAgpgpQgogoAAg5QAAg4AogpQApgpA4ABQA5gBApApQAoApAAA4g");
	this.shape_19.setTransform(400.3,230.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhhBhQgogoAAg5QAAg4AogpQApgpA4ABQA5gBApApQAoApAAA4QAAA5goAoQgpApg5AAQg4AAgpgpg");
	this.shape_20.setTransform(400.3,230.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(11,1,1).p("ACKAAQAAA5goAoQgpApg5AAQg4AAgpgpQgogoAAg5QAAg4AogpQApgpA4ABQA5gBApApQAoApAAA4g");
	this.shape_21.setTransform(400.3,230.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhhBhQgogoAAg5QAAg4AogpQApgpA4ABQA5gBApApQAoApAAA4QAAA5goAoQgpApg5AAQg4AAgpgpg");
	this.shape_22.setTransform(400.3,230.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(11,1,1).p("ACKAAQAAA5goAoQgpApg5AAQg4AAgpgpQgogoAAg5QAAg4AogpQApgpA4ABQA5gBApApQAoApAAA4g");
	this.shape_23.setTransform(400.3,230.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhhBhQgogoAAg5QAAg4AogpQApgpA4ABQA5gBApApQAoApAAA4QAAA5goAoQgpApg5AAQg4AAgpgpg");
	this.shape_24.setTransform(400.3,230.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(11,1,1).p("ACKAAQAAA5goAoQgpApg5AAQg4AAgpgpQgogoAAg5QAAg4AogpQApgpA4ABQA5gBApApQAoApAAA4g");
	this.shape_25.setTransform(400.3,230.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhhBhQgogoAAg5QAAg4AogpQApgpA4ABQA5gBApApQAoApAAA4QAAA5goAoQgpApg5AAQg4AAgpgpg");
	this.shape_26.setTransform(400.3,230.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10,p:{x:400.3}},{t:this.shape_9,p:{x:400.3}}]},110).to({state:[{t:this.shape_12,p:{x:400.3}},{t:this.shape_11,p:{x:400.3}},{t:this.shape_10,p:{x:428.7}},{t:this.shape_9,p:{x:428.7}}]},2).to({state:[{t:this.shape_14,p:{x:400.3}},{t:this.shape_13,p:{x:400.3}},{t:this.shape_12,p:{x:428.7}},{t:this.shape_11,p:{x:428.7}},{t:this.shape_10,p:{x:457}},{t:this.shape_9,p:{x:457}}]},2).to({state:[{t:this.shape_16,p:{x:400.3}},{t:this.shape_15,p:{x:400.3}},{t:this.shape_14,p:{x:428.7}},{t:this.shape_13,p:{x:428.7}},{t:this.shape_12,p:{x:457}},{t:this.shape_11,p:{x:457}},{t:this.shape_10,p:{x:485.4}},{t:this.shape_9,p:{x:485.4}}]},2).to({state:[{t:this.shape_18,p:{x:400.3}},{t:this.shape_17,p:{x:400.3}},{t:this.shape_16,p:{x:428.7}},{t:this.shape_15,p:{x:428.7}},{t:this.shape_14,p:{x:457}},{t:this.shape_13,p:{x:457}},{t:this.shape_12,p:{x:485.4}},{t:this.shape_11,p:{x:485.4}},{t:this.shape_10,p:{x:513.7}},{t:this.shape_9,p:{x:513.7}}]},2).to({state:[{t:this.shape_20,p:{x:400.3}},{t:this.shape_19,p:{x:400.3}},{t:this.shape_18,p:{x:428.7}},{t:this.shape_17,p:{x:428.7}},{t:this.shape_16,p:{x:457}},{t:this.shape_15,p:{x:457}},{t:this.shape_14,p:{x:485.4}},{t:this.shape_13,p:{x:485.4}},{t:this.shape_12,p:{x:513.7}},{t:this.shape_11,p:{x:513.7}},{t:this.shape_10,p:{x:542.1}},{t:this.shape_9,p:{x:542.1}}]},2).to({state:[{t:this.shape_22,p:{x:400.3}},{t:this.shape_21,p:{x:400.3}},{t:this.shape_20,p:{x:428.7}},{t:this.shape_19,p:{x:428.7}},{t:this.shape_18,p:{x:457}},{t:this.shape_17,p:{x:457}},{t:this.shape_16,p:{x:485.4}},{t:this.shape_15,p:{x:485.4}},{t:this.shape_14,p:{x:513.7}},{t:this.shape_13,p:{x:513.7}},{t:this.shape_12,p:{x:542.1}},{t:this.shape_11,p:{x:542.1}},{t:this.shape_10,p:{x:570.4}},{t:this.shape_9,p:{x:570.4}}]},2).to({state:[{t:this.shape_24,p:{x:400.3}},{t:this.shape_23,p:{x:400.3}},{t:this.shape_22,p:{x:428.7}},{t:this.shape_21,p:{x:428.7}},{t:this.shape_20,p:{x:457}},{t:this.shape_19,p:{x:457}},{t:this.shape_18,p:{x:485.4}},{t:this.shape_17,p:{x:485.4}},{t:this.shape_16,p:{x:513.7}},{t:this.shape_15,p:{x:513.7}},{t:this.shape_14,p:{x:542.1}},{t:this.shape_13,p:{x:542.1}},{t:this.shape_12,p:{x:570.4}},{t:this.shape_11,p:{x:570.4}},{t:this.shape_10,p:{x:598.8}},{t:this.shape_9,p:{x:598.8}}]},2).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24,p:{x:428.7}},{t:this.shape_23,p:{x:428.7}},{t:this.shape_22,p:{x:457}},{t:this.shape_21,p:{x:457}},{t:this.shape_20,p:{x:485.4}},{t:this.shape_19,p:{x:485.4}},{t:this.shape_18,p:{x:513.7}},{t:this.shape_17,p:{x:513.7}},{t:this.shape_16,p:{x:542.1}},{t:this.shape_15,p:{x:542.1}},{t:this.shape_14,p:{x:570.4}},{t:this.shape_13,p:{x:570.4}},{t:this.shape_12,p:{x:598.8}},{t:this.shape_11,p:{x:598.8}},{t:this.shape_10,p:{x:627.3}},{t:this.shape_9,p:{x:627.3}}]},2).wait(110));

	// 圖層 14
	this.instance_19 = new lib.補間動畫9("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(505.5,216);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.instance_20 = new lib.補間動畫10("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(505.5,216);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_19}]},126).to({state:[{t:this.instance_20}]},12).wait(98));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(126).to({_off:false},0).to({_off:true,alpha:1},12).wait(98));

	// 圖層 15
	this.instance_21 = new lib.元件11("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(478.3,110.4,1,0.397,0,0,0,18.4,36.5);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(80).to({_off:false},0).to({scaleY:1,x:471.4,y:93.9,alpha:1},3,cjs.Ease.get(-0.96)).to({x:476.4,y:95.9},1,cjs.Ease.get(1)).wait(152));

	// 圖層 16
	this.instance_22 = new lib.元件12("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(479,143.4,0.423,0.423,0,0,0,13.5,26);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.instance_23 = new lib._03();
	this.instance_23.parent = this;
	this.instance_23.setTransform(458,115);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_22}]},90).to({state:[{t:this.instance_22}]},5).to({state:[{t:this.instance_23}]},1).wait(140));
	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(90).to({_off:false},0).to({scaleX:1,scaleY:1,x:469,y:138.4,alpha:1},5,cjs.Ease.get(1)).to({_off:true,regX:0,regY:0,x:458,y:115},1,cjs.Ease.get(-1)).wait(140));

	// 圖層 17
	this.instance_24 = new lib.元件10("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(500,22,1,0.906,0,0,0,31.5,53);
	this.instance_24.alpha = 0;
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(74).to({_off:false},0).to({scaleY:0.51,x:469.4,y:152.9,alpha:1},2,cjs.Ease.get(1)).to({scaleY:1,x:476.4,y:148.9},2,cjs.Ease.get(-1)).wait(158));

	// 圖層 18
	this.instance_25 = new lib.元件7("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(422.4,131.9,1,0.349,0,0,0,21.5,31.1);
	this.instance_25.alpha = 0;
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(60).to({_off:false},0).to({regY:31,scaleY:1,y:124.9,alpha:1},3,cjs.Ease.get(-1)).to({y:127.9},1,cjs.Ease.get(1)).wait(172));

	// 圖層 19
	this.instance_26 = new lib.元件8("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(413.4,146,1,0.367,0,0,0,34,30);
	this.instance_26.alpha = 0;
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(55).to({_off:false},0).to({scaleY:1,y:142,alpha:1},3,cjs.Ease.get(-1)).to({y:144},1,cjs.Ease.get(1)).wait(177));

	// 圖層 20
	this.instance_27 = new lib.元件16("synched",0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(507.9,262.5,1,1,0,0,0,142.5,121.5);
	this.instance_27.alpha = 0;
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(126).to({_off:false},0).to({alpha:1},13).wait(97));

	// 圖層 21
	this.instance_28 = new lib.元件17("synched",0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(312.4,-47.1,1,1,0,0,0,55,100);
	this.instance_28.alpha = 0;
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(151).to({_off:false},0).to({y:180,alpha:1},2,cjs.Ease.get(1)).to({y:170},1,cjs.Ease.get(-1)).wait(82));

	// 圖層 22
	this.instance_29 = new lib.元件5("synched",0);
	this.instance_29.parent = this;
	this.instance_29.setTransform(186.4,268.5,1,1,0,0,0,52,8.5);
	this.instance_29.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).to({alpha:1},6).wait(230));

	// 圖層 23
	this.instance_30 = new lib.元件4("synched",0);
	this.instance_30.parent = this;
	this.instance_30.setTransform(500,277,1,0.433,0,0,0,500,90);
	this.instance_30.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).to({scaleY:1.45,y:284.1,alpha:1},5,cjs.Ease.get(-1)).to({scaleY:1,y:277},1,cjs.Ease.get(1)).wait(230));

	// 圖層 24
	this.instance_31 = new lib.元件1("synched",0);
	this.instance_31.parent = this;
	this.instance_31.setTransform(500,138.5,1,1,0,0,0,500,138.5);
	this.instance_31.alpha = 0;
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(6).to({_off:false},0).to({alpha:1},5).wait(225));

	// 圖層 25
	this.instance_32 = new lib.元件2("synched",0);
	this.instance_32.parent = this;
	this.instance_32.setTransform(852.5,169,1,1,0,0,0,147.5,91);
	this.instance_32.alpha = 0;
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(6).to({_off:false},0).to({alpha:1},19).wait(211));

	// 圖層 26
	this.instance_33 = new lib.元件3("synched",0);
	this.instance_33.parent = this;
	this.instance_33.setTransform(125,159.5,1,1,0,0,0,126,90.5);
	this.instance_33.alpha = 0;
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(22).to({_off:false},0).to({alpha:1},14).wait(200));

	// 圖層 27
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E3017F").s().p("EhOHAVpMAAAgrRMCcPAAAMAAAArRg");
	this.shape_27.setTransform(500,138.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(236));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(500,138.5,1000,277);
// library properties:
lib.properties = {
	id: '2A0CB045CE07ED48A2B08D2655FD35ED',
	width: 1000,
	height: 277,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Q4go_atlas_.png", id:"Q4go_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['2A0CB045CE07ED48A2B08D2655FD35ED'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;