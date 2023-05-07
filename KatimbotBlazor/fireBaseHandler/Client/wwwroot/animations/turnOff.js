(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AkGDnQgQgIgCgOQgCgPAOgMQAKgLARgEQAQgEAQAEIByhtQgeglAHgqQAFghAagZQgNgIgBgOQAAgNAMgMQANgMAVgDQAVgEAPAIQAQAJACAOQABAPgMAMQgKAKgOAEQgPAEgOgCQgZAYgDAeQgDAeATAcIDpjcIgkgSIBvgnIgTBVIgkgSIikCbQAhAOA2gSQAtgOArghIgbgNIAzgxIBGAkIgzAwIgXgMQgtAkg2ASQhEAVgrgTIi6CwQAKAJgBAMQAAAMgLAKQgNANgVADIgLABQgOAAgMgGg");
	this.shape.setTransform(198.3815,59.6567,0.8263,0.8263);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D5BAFF").s().p("Ao9MsQgsggg7gBQDolfCfj7ICej4QA6hcAthDQDplZEplFQAmgQAlANQAmANAcAlQAbAmADAuQknEZjVFCQg6BVg/BtQh1DOgXAmQjDFIjaE2QgQg9g0glg");
	this.shape_1.setTransform(67.8,241.0285);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BAA3DF").s().p("AA+BjQg2gMgsgmQgtgmgagnQgagoANgQQAUgYA0AIQAzAJAsAkQArAjAUAlQAUAkgGAdQgEAVgcAAQgNAAgRgEg");
	this.shape_2.setTransform(126.8789,156.2004);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D5BAFF").s().p("AAMDDQgfg8g4gpQhQg6hdADQAbhBAlg3QA+hdBahFQAWgKAZgDQAogFAmAOQA0ASAqAvQApAwARA+QAMArgXAoQgeA3goA3Qg5BLhGA+QgHgegSghg");
	this.shape_3.setTransform(135.3792,144.4735,0.8263,0.8263);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BAA3DF").s().p("AhbCIQg8g4gPhQQgQhPAmg4QAmg4BGAAQBEAAA8A4QA8A4APBPQAQBQgmA4QgmA4hGAAQhEAAg8g4g");
	this.shape_4.setTransform(143.036,137.4022,0.8263,0.8263);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BAA3DF").s().p("AnGAlIhPnbIQrFqIAAIDg");
	this.shape_5.setTransform(143.8951,136.7411,0.8263,0.8263);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C9B0F1").s().p("AjEiwIGJiiIAAJaImJBLg");
	this.shape_6.setTransform(204.3005,144.9838,0.8263,0.8263);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D5BAFF").s().p("AypGrIgXkNIPluyIWcHIIu6PDImDCeg");
	this.shape_7.setTransform(198.3922,65.2007,0.8263,0.8263);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BAA3DF").s().p("AnZCyIOzu+IAAJpIuzOwg");
	this.shape_8.setTransform(259.7479,102.2414,0.8263,0.8263);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0.1,0,298.9,332), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A6A6A6").s().p("As+ASIGymxITLGFImyG6g");
	this.shape.setTransform(68.7124,34.3964,0.8263,0.8263);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#89898A").s().p("AjYgjIGxm8IAAIQImxGvg");
	this.shape_1.setTransform(119.4497,71.7883,0.8263,0.8263);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0.1,0,137.3,111.5), null);


// stage content:
(lib.turnOff = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [74];
	// timeline functions:
	this.frame_74 = function() {
		var self = this;
		self.stop();
		setTimeout(again,2000);
		function again(){
			self.gotoAndPlay(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(74).call(this.frame_74).wait(1));

	// Symbol_2
	this.instance = new lib.Symbol2();
	this.instance.setTransform(206.9,262.65,1,1,0,0,0,149.5,166);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:206.85},0).wait(8).to({x:205.3,y:264.95},0).wait(1).to({x:203.75,y:267.2},0).wait(1).to({x:202.25,y:269.45},0).wait(1).to({x:200.7,y:271.75},0).wait(1).to({x:199.15,y:274},0).wait(1).to({x:197.6,y:276.3},0).wait(1).to({x:196.05,y:278.55},0).wait(1).to({x:194.5,y:280.8},0).wait(1).to({x:192.95,y:283.1},0).wait(1).to({x:191.4,y:285.35},0).wait(1).to({x:189.9,y:287.65},0).wait(1).to({x:184.15,y:295.55},0).wait(1).to({x:178.45,y:303.45},0).wait(1).to({x:172.7,y:311.35},0).wait(1).to({x:167,y:319.25},0).wait(1).to({x:161.3,y:327.15},0).wait(1).to({x:155.55,y:335.05},0).wait(1).to({x:149.85,y:342.95},0).wait(1).to({x:144.15,y:350.85},0).wait(1).to({x:138.45,y:358.75},0).wait(1).to({x:132.75,y:366.65},0).wait(1).to({x:127,y:374.55},0).wait(1).to({x:121.3,y:382.45},0).wait(1).to({x:115.55,y:390.35},0).wait(1).to({x:109.85,y:398.25},0).wait(1).to({x:104.15,y:406.15},0).wait(1).to({x:98.4,y:414.05},0).wait(1).to({x:92.7,y:421.95},0).wait(1).to({x:87,y:429.85},0).wait(1).to({x:81.25,y:437.75},0).wait(1).to({x:75.55,y:445.65},0).wait(1).to({x:69.8,y:453.55},0).wait(1).to({x:64.1,y:461.45},0).wait(1).to({x:58.4,y:469.35},0).wait(1).to({x:52.65,y:477.25},0).wait(1).to({x:46.95,y:485.15},0).wait(1).to({x:41.2,y:493.05},0).wait(1).to({x:35.5,y:500.95},0).wait(1).to({x:29.8,y:508.85},0).wait(1).to({x:24.05,y:516.75},0).wait(1).to({x:18.35,y:524.65},0).wait(1).to({x:12.65,y:532.55},0).wait(1).to({x:6.9,y:540.45},0).wait(1).to({x:1.2,y:548.35},0).wait(1).to({x:-4.55,y:556.25},0).wait(1).to({x:-10.25,y:564.15},0).wait(1).to({x:-15.95,y:572.05},0).wait(1).to({x:-21.7,y:579.95},0).wait(1).to({x:-27.4,y:587.85},0).wait(1).to({x:-33.15,y:595.75},0).wait(17));

	// Symbol_1
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(284.8,161.05,1,1,0,0,0,68.7,55.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({x:279.05,y:168.95},0).wait(1).to({x:273.35,y:176.85},0).wait(1).to({x:267.6,y:184.75},0).wait(1).to({x:261.9,y:192.65},0).wait(1).to({x:256.2,y:200.55},0).wait(1).to({x:250.45,y:208.45},0).wait(1).to({x:244.75,y:216.35},0).wait(1).to({x:239,y:224.25},0).wait(1).to({x:233.3,y:232.15},0).wait(1).to({x:227.6,y:240.05},0).wait(1).to({x:221.85,y:247.95},0).wait(1).to({x:216.15,y:255.85},0).wait(1).to({x:210.45,y:263.75},0).wait(1).to({x:204.7,y:271.65},0).wait(1).to({x:199,y:279.55},0).wait(1).to({x:193.25,y:287.45},0).wait(1).to({x:187.55,y:295.35},0).wait(1).to({x:181.85,y:303.25},0).wait(1).to({x:176.1,y:311.15},0).wait(1).to({x:170.4,y:319.05},0).wait(1).to({x:164.65,y:326.95},0).wait(1).to({x:158.95,y:334.85},0).wait(1).to({x:153.25,y:342.75},0).wait(1).to({x:147.5,y:350.65},0).wait(1).to({x:141.8,y:358.55},0).wait(1).to({x:136.1,y:366.45},0).wait(1).to({x:130.35,y:374.35},0).wait(1).to({x:124.65,y:382.25},0).wait(1).to({x:118.9,y:390.15},0).wait(1).to({x:113.2,y:398.05},0).wait(1).to({x:107.5,y:405.95},0).wait(1).to({x:101.75,y:413.85},0).wait(1).to({x:96.05,y:421.75},0).wait(1).to({x:90.3,y:429.65},0).wait(1).to({x:84.6,y:437.55},0).wait(1).to({x:78.9,y:445.45},0).wait(1).to({x:73.15,y:453.35},0).wait(1).to({x:67.5,y:461.25},0).wait(1).to({x:61.75,y:469.15},0).wait(17));

	// Layer_7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373434").s().p("AgJgkIATgZIAABqIgTASg");
	this.shape.setTransform(341.986,146.5433,0.8263,0.8263);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AC9CCB").s().p("AnOhXIAAhkIOdETIAABkg");
	this.shape_1.setTransform(303.0049,136.2351,0.8263,0.8263);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2F2D2D").s().p("AnYh8IAVgaIObETIgTAag");
	this.shape_2.setTransform(303.7899,131.05,0.8263,0.8263);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F0CB7F").s().p("Egj4gGMIAAgpMBHxgItIAAfEg");
	this.shape_3.setTransform(410.1323,116.1765,0.8263,0.8263);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#89898A").s().p("Aosh2IhAhSITZGCIhoAPg");
	this.shape_4.setTransform(303.8105,120.9484,0.8263,0.8263);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#89898A").s().p("Apsi5IA7gQIQ2FAIBoBSg");
	this.shape_5.setTransform(303.8105,163.6479,0.8263,0.8263);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#453F3F").s().p("AoYA6IAAmzIQxFAIAAGzg");
	this.shape_6.setTransform(302.1579,142.3085,0.8263,0.8263);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C5C5C5").s().p("ApsBIIAAoTITZGDIAAITg");
	this.shape_7.setTransform(303.8105,142.3291,0.8263,0.8263);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#373434").s().p("AgJgkIATgaIAABrIgTASg");
	this.shape_8.setTransform(484.483,190.317,0.8263,0.8263);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#89898A").s().p("Aosh2IhAhSITZGCIhoAPg");
	this.shape_9.setTransform(447.0512,165.6517,0.8263,0.8263);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#89898A").s().p("Apsi5IA7gPIQ2FAIBoBRg");
	this.shape_10.setTransform(447.0512,208.3512,0.8263,0.8263);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#AC9CCB").s().p("AnOhXIAAhkIOdETIAABkg");
	this.shape_11.setTransform(445.5019,180.0088,0.8263,0.8263);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2F2D2D").s().p("AnYh8IAUgaIOcETIgTAag");
	this.shape_12.setTransform(446.2869,174.8031,0.8263,0.8263);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#453F3F").s().p("AoYA6IAAmzIQxFAIAAGzg");
	this.shape_13.setTransform(445.3986,187.0531,0.8263,0.8263);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C5C5C5").s().p("ApsBIIAAoTITZGDIAAITg");
	this.shape_14.setTransform(447.0512,187.0325,0.8263,0.8263);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D6B571").s().p("Egj4gEmIAAseMBHxAVsIAAMeg");
	this.shape_15.setTransform(410.0532,173.7289,0.8263,0.8263);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(75));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(117.4,234,482.6,527.8);
// library properties:
lib.properties = {
	id: 'E7B87D62FFFB764DB3C2A05E5AC9ED82',
	width: 600,
	height: 400,
	fps: 30,
	color: "#CCFF00",
	opacity: 0.00,
	manifest: [],
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
an.compositions['E7B87D62FFFB764DB3C2A05E5AC9ED82'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;