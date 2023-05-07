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


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#373434").s().p("AgJgkIATgZIAABqIgTASg");
	this.shape.setTransform(121.7383,112.5454,0.8263,0.8263);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AC9CCB").s().p("AnOhXIAAhkIOdETIAABkg");
	this.shape_1.setTransform(82.7564,102.237,0.8263,0.8263);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2F2D2D").s().p("AnYh8IAVgaIObETIgTAag");
	this.shape_2.setTransform(83.5414,97.0518,0.8263,0.8263);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F0CB7F").s().p("A9plHIAAgiMA7TgHMIAAZrg");
	this.shape_3.setTransform(189.9,82.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#89898A").s().p("Aosh2IhAhSITZGCIhoAPg");
	this.shape_4.setTransform(83.5621,86.95,0.8263,0.8263);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#89898A").s().p("Apsi5IA7gQIQ2FAIBoBSg");
	this.shape_5.setTransform(83.5621,129.6503,0.8263,0.8263);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#453F3F").s().p("AoYA6IAAmzIQxFAIAAGzg");
	this.shape_6.setTransform(81.9094,108.3105,0.8263,0.8263);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C5C5C5").s().p("ApsBIIAAoTITZGDIAAITg");
	this.shape_7.setTransform(83.5621,108.3311,0.8263,0.8263);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#373434").s().p("AgJgkIATgaIAABrIgTASg");
	this.shape_8.setTransform(264.2379,156.3199,0.8263,0.8263);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#89898A").s().p("Aosh2IhAhSITZGCIhoAPg");
	this.shape_9.setTransform(226.8054,131.6541,0.8263,0.8263);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#89898A").s().p("Apsi5IA7gPIQ2FAIBoBRg");
	this.shape_10.setTransform(226.8054,174.3545,0.8263,0.8263);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#AC9CCB").s().p("AnOhXIAAhkIOdETIAABkg");
	this.shape_11.setTransform(225.2561,146.0115,0.8263,0.8263);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2F2D2D").s().p("AnYh8IAUgaIOcETIgTAag");
	this.shape_12.setTransform(226.0411,140.8057,0.8263,0.8263);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#453F3F").s().p("AoYA6IAAmzIQxFAIAAGzg");
	this.shape_13.setTransform(225.1528,153.056,0.8263,0.8263);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C5C5C5").s().p("ApsBIIAAoTITZGDIAAITg");
	this.shape_14.setTransform(226.8054,153.0353,0.8263,0.8263);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D6B571").s().p("A9pjzIAAqUMA7TAR8IAAKTg");
	this.shape_15.setTransform(189.8,139.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,379.7,230.1), null);


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
	this.shape_2.graphics.f("#BAA3DF").s().p("ABLB4QhBgPg2guQg3gtgegwQgggxAQgTQAYgdA/AKQA+AKA1AsQA0ArAZAtQAXAsgHAjQgGAZgiAAQgOAAgVgFg");
	this.shape_2.setTransform(126.8809,156.2088,0.8263,0.8263);

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
(lib.turnOn = function(mode,startPosition,loop,reversed) {
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

	// Layer_4
	this.instance = new lib.Symbol2();
	this.instance.setTransform(-9.95,607.2,1,1,0,0,0,149.5,166);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-3,y:596.15},0).wait(1).to({x:3.95,y:585.1},0).wait(1).to({x:10.85,y:574.1},0).wait(1).to({x:17.8,y:563.05},0).wait(1).to({x:24.75,y:552},0).wait(1).to({x:31.65,y:541},0).wait(1).to({x:38.6,y:529.95},0).wait(1).to({x:45.5,y:518.9},0).wait(1).to({x:52.45,y:507.9},0).wait(1).to({x:59.4,y:496.85},0).wait(1).to({x:66.3,y:485.8},0).wait(1).to({x:73.25,y:474.8},0).wait(1).to({x:80.2,y:463.75},0).wait(1).to({x:87.1,y:452.7},0).wait(1).to({x:94.05,y:441.7},0).wait(1).to({x:100.95,y:430.65},0).wait(1).to({x:107.9,y:419.6},0).wait(1).to({x:114.85,y:408.6},0).wait(1).to({x:121.75,y:397.55},0).wait(1).to({x:128.7,y:386.5},0).wait(1).to({x:135.65,y:375.5},0).wait(1).to({x:142.55,y:364.45},0).wait(1).to({x:149.5,y:353.4},0).wait(1).to({x:156.35,y:342.4},0).wait(1).to({x:163.3,y:331.35},0).wait(1).to({x:170.25,y:320.3},0).wait(1).to({x:177.15,y:309.3},0).wait(1).to({x:184.1,y:298.25},0).wait(1).to({x:191.05,y:287.25},0).wait(1).to({x:192.1,y:285.6},0).wait(1).to({x:193.15,y:283.95},0).wait(1).to({x:194.2,y:282.3},0).wait(1).to({x:195.25,y:280.65},0).wait(1).to({x:196.3,y:279.05},0).wait(1).to({x:197.35,y:277.4},0).wait(1).to({x:198.4,y:275.75},0).wait(1).to({x:199.5,y:274.1},0).wait(1).to({x:200.55,y:272.45},0).wait(1).to({x:201.6,y:270.85},0).wait(1).to({x:202.65,y:269.2},0).wait(1).to({x:203.7,y:267.55},0).wait(1).to({x:204.75,y:265.9},0).wait(1).to({x:205.8,y:264.25},0).wait(1).to({x:206.9,y:262.65},0).wait(31));

	// Layer_3
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(83.8,478,1,1,0,0,0,68.7,55.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:90.7,y:467.05},0).wait(1).to({x:97.65,y:456.1},0).wait(1).to({x:104.55,y:445.2},0).wait(1).to({x:111.5,y:434.25},0).wait(1).to({x:118.45,y:423.35},0).wait(1).to({x:125.35,y:412.4},0).wait(1).to({x:132.3,y:401.45},0).wait(1).to({x:139.2,y:390.55},0).wait(1).to({x:146.15,y:379.6},0).wait(1).to({x:153.1,y:368.7},0).wait(1).to({x:160,y:357.75},0).wait(1).to({x:166.95,y:346.8},0).wait(1).to({x:173.9,y:335.9},0).wait(1).to({x:180.8,y:324.95},0).wait(1).to({x:187.75,y:314.05},0).wait(1).to({x:194.65,y:303.1},0).wait(1).to({x:201.6,y:292.2},0).wait(1).to({x:208.55,y:281.25},0).wait(1).to({x:215.45,y:270.3},0).wait(1).to({x:222.4,y:259.4},0).wait(1).to({x:229.35,y:248.45},0).wait(1).to({x:236.25,y:237.55},0).wait(1).to({x:243.2,y:226.6},0).wait(1).to({x:250.1,y:215.65},0).wait(1).to({x:257.05,y:204.75},0).wait(1).to({x:264,y:193.8},0).wait(1).to({x:270.9,y:182.9},0).wait(1).to({x:277.85,y:171.95},0).wait(1).to({x:284.8,y:161.05},0).wait(46));

	// Layer_1
	this.instance_2 = new lib.Symbol3();
	this.instance_2.setTransform(410.05,149,1,1,0,0,0,189.8,115);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(75));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(140.6,234,459.4,539.2);
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