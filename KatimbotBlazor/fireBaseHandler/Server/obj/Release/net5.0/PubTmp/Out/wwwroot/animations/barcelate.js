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


(lib.Tween10 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2F2D2D").s().p("AgNCOQgFgFgBgJIAAkAQABgHAFgGQAGgGAHAAQAIAAAGAGQAFAGABAHIAAEAQgBAJgFAFQgGAGgIAAQgHAAgGgGg");
	this.shape.setTransform(0.44,-13.8806,1.477,1.477);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373434").s().p("AgpAtQgSgRgBgYQgCgYARgUQARgTAZgBIADAAQAYAAASAQQASARABAYQACAZgRASQgQATgaACIgEAAQgXAAgSgQg");
	this.shape_1.setTransform(0.4031,4.9137,1.477,1.477);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2F2D2D").s().p("AgqAxQgUgSgCgbQgCgaASgUQASgUAbgCQAagBAUASQAUARACAbQABAagRAUQgSAUgbACIgEAAQgYAAgSgQg");
	this.shape_2.setTransform(0.4709,5.8061,1.477,1.477);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#453F3F").s().p("ABXC2QgmgPgqgCQgugBgrAPQgFACgFgDQgFgDAAgGQgDhWAFhWQAFhSAJhFQACgNANgEQAmgLAkABQAfABAeAJQAPAEACAQQAIBHADBIQAEBVgDBiQgBAEgDACIgFABIgCAAg");
	this.shape_3.setTransform(-0.1655,8.5507,1.477,1.477);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.8,-35.7,29.3,71.2);


(lib.Tween8 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2F2D2D").s().p("AAYCFQgHgEgDgIIhDjkQgDgJAEgHQAEgIAIgDQAIgCAIAEQAIAEADAIIBEDlQACAIgEAIQgEAHgJADIgGABQgFAAgFgDg");
	this.shape.setTransform(-7.3974,-13.158,1.477,1.477);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373434").s().p("AgZArQgRgKgGgUQgGgSALgTQALgTAUgFIADgBQASgEASAKQARALAFATQAGAUgLASQgKASgUAGIgDABIgLABQgNAAgMgIg");
	this.shape_1.setTransform(-2.545,2.4796,1.477,1.477);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2F2D2D").s().p("AgaAvQgTgLgGgWQgGgUALgUQALgTAVgGQAVgGAUALQATAMAGAVQAGAVgLASQgLAUgWAGQgIACgGAAQgNAAgNgHg");
	this.shape_2.setTransform(-2.3019,3.1994,1.477,1.477);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#453F3F").s().p("AgoCxQgIgCgDgHQgMgigahwQgShKgJhSQgBgIAIgFQARgNAlgJQAegIAfABQAJABADAHQAeBAAYBIQAkBvAJAnQACAHgGAGQgGAGgIgBQgmgDgbAHQgfAIgcAZQgGAEgGAAIgDAAg");
	this.shape_3.setTransform(-0.2429,6.8699,1.477,1.477);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.5,-33.2,34.6,66.2);


(lib.Tween6 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#AE9CE6").s().p("AkyEqQgfAAgWgWQgXgXAAggIAAm5QAAgfAXgXQAWgXAfAAIJkAAQAfAAAXAXQAXAXAAAfIAAG5QAAAggXAXQgXAWgfAAg");
	this.shape.setTransform(-15.05,121.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8D4B1").s().p("AgjASQgCgGAjgRIAlgTQACAHgBADIgFAFIgdAOQgVALgOAJg");
	this.shape_1.setTransform(94.22,-38.6613,1.4769,1.4769);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DEA27B").s().p("AgkAQQgCgFAkgSQAdgPAKgDQABAJgIAGQgHAFgVAKQgUALgOAKg");
	this.shape_2.setTransform(93.9915,-38.6244,1.4769,1.4769);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DEA27B").s().p("AgMAMQgKgKgBgRQATAWAKgCQAJgCgCgVQALAUAAAFQAAAIgPADIgGABQgIAAgHgHg");
	this.shape_3.setTransform(-50.1649,-44.0358,1.4769,1.4769);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DEA27B").s().p("AgNANQgLgLgCgHQgCgLAHgSQAPAeAMAMQAMAOAJgLQACAYgLAAQgKAAgVgWg");
	this.shape_4.setTransform(-24.9787,-53.753,1.4769,1.4769);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DEA27B").s().p("AAAAdQgYgGAAgPIALgmQADAlAIAJQAJALARgkQADAXgIAKQgFAHgIAAIgGgCg");
	this.shape_5.setTransform(9.0641,-58.2658,1.4769,1.4769);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DEA27B").s().p("AAXgZIgDAVQgKAXggAHQApgmAEgNg");
	this.shape_6.setTransform(-84.2263,-76.0641,1.4769,1.4769);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DEA27B").s().p("AgXARQgSgBAigQIAmgRIgRARQgSASgSAAIgBgBg");
	this.shape_7.setTransform(-71.999,-55.3096,1.4769,1.4769);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DEA27B").s().p("AAMgJQASgCANADQgEALhSAIQAUgSAjgCg");
	this.shape_8.setTransform(-43.7034,-72.118,1.4769,1.4769);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DEA27B").s().p("AgnAHQAsgJAigHQgQARggACg");
	this.shape_9.setTransform(-54.4111,-109.5531,1.4769,1.4769);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DEA27B").s().p("AgOAFIgegLQArAIAugIQgSANgXAAQgIAAgKgCg");
	this.shape_10.setTransform(-4.2329,-119.2179,1.4769,1.4769);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DEA27B").s().p("AgogDIAkACQAlABAIgJQgEAJgMAGQgJAEgLAAQgTAAgagNg");
	this.shape_11.setTransform(-6.3006,-80.2806,1.4769,1.4769);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DEA27B").s().p("AAFAQQgPgIgIgQIAJgMQANAdAPANQgGgBgIgFg");
	this.shape_12.setTransform(55.619,-26.5137,1.4769,1.4769);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DEA27B").s().p("AAQAUQgfgCgbglIAfARQAjAPATABQgJAGgNAAIgFAAg");
	this.shape_13.setTransform(29.6992,-78.0118,1.4769,1.4769);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DEA27B").s().p("AgqgQIAfAOQAkANASgCQgPAHgRABIgDAAQgiAAgQghg");
	this.shape_14.setTransform(39.1514,-112.3179,1.4769,1.4769);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DEA27B").s().p("AjUBRQBUgUBhggQCtg4BHg4Qg2AthKApQiNBRhzAAQgVAAgUgDg");
	this.shape_15.setTransform(-22.0297,-25.8053,1.4769,1.4769);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DEA27B").s().p("AhTAUQBxhtCMggQhEAmhNAxQiYBigqA6QAdgwA5g2g");
	this.shape_16.setTransform(-10.9529,-7.5723,1.4769,1.4769);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DEA27B").s().p("AhMAKIgCg3QAoAlAlATQAvAaAhgKQgJAOgYAEQgJABgJAAQgqAAg+gkg");
	this.shape_17.setTransform(-38.7558,52.9833,1.4769,1.4769);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DEA27B").s().p("AhGFkQgkodAthUQAthWBnAAIgQAPQg/A7AQFEQAICiAUCXg");
	this.shape_18.setTransform(12.7885,97.1409,1.4769,1.4769);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F8B786").s().p("AlHP4IgMq9QgHg+g3jUQg0jKAAgTQAAgOgshKQg7higfg2Qh6jWAygbQAsgYBoCZIBSB+QAuBHAVAZQAUAWALgCQAIgCgBgVIAAgBQgCghgdhmQgmiAgRhDQhEj/A1gcQA0gcBHDaQATA8AmB+QAhBsAXAwQAPAeANANQAMAOAJgLQAQgTAFhrIAIjdQANkyBBgMQBCgNAKD0QADA9gBCNQAAB3AEApQADAmAIAIQAKALAQgkQAQgjAehgIA2ixQBIjfAogBQA+gCgLB6QgLB4hRD0QhSD3AWBqQALAyAigMQAmgOA6hUIAegqQAdgnAggdIAKgIQBQhBBRAKQAfAEAVAOQAUANACANQACAKgIAFQgIAFgVALQgVAMgOAJQhTA6hVCxQhECPhFBAQgoAlhUA6IgQAOQg/A7AQFFQAICjAUCWg");
	this.shape_19.setTransform(-0.1934,-0.3804,1.4769,1.4769);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.8,-150.4,199.39999999999998,301.4);


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#EDEDED").s().p("Ak3G0QgEgEAEgEQAlgiA9gaQAjgPBJgbQA9gZAigcQAmgfAcgzQAZguAPg8QALgtAJhDQAOhiAEgYQANhFAVgxQAshnBchCQAFgEADAFQAEAGgFADQg2AngmA3QgmA2gTBAQgNAtgKBEIgQByQgVCLg2BMQgdAogrAeQgkAYg2AVQhCAYghAOQg3AZgiAfQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBgBQAAAAgBgBg");
	this.shape.setTransform(-0.1861,-0.2763,1.9608,1.9608);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.7,-86.3,123.1,172.1);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#EDEDED").s().p("Ak3G0QgEgEAEgEQAlgiA9gaQAjgPBJgbQA9gZAigcQAmgfAcgzQAZguAPg8QALgtAJhDQAOhiAEgYQANhFAVgxQAshnBchCQAFgEADAFQAEAGgFADQg2AngmA3QgmA2gTBAQgNAtgKBEIgQByQgVCLg2BMQgdAogrAeQgkAYg2AVQhCAYghAOQg3AZgiAfQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBgBQAAAAgBgBg");
	this.shape.setTransform(-0.1861,-0.2763,1.9608,1.9608);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.7,-86.3,123.1,172.1);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#453F3F").s().p("AiUAaQgKAAgIgIQgHgHAAgLQAAgKAHgHQAIgIAKAAIEoAAQALAAAIAIQAHAHAAAKQAAALgHAHQgIAIgLAAg");
	this.shape.setTransform(-0.1186,-31.7637,1.9608,1.9608);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AE9CE6").s().p("AjMFuQgdAAgXgVQgVgVAAgeIAApKQAAgfAVgVQAXgVAdAAIGaAAQAdAAAVAVQAWAVAAAfIAAJKQAAAegWAVQgVAVgdAAg");
	this.shape_1.setTransform(-1.6,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.3,-36.8,68.4,73.19999999999999);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#453F3F").s().p("AiUAaQgKAAgIgIQgHgHAAgLQAAgKAHgHQAIgIAKAAIEoAAQALAAAIAIQAHAHAAAKQAAALgHAHQgIAIgLAAg");
	this.shape.setTransform(-0.1186,-31.7637,1.9608,1.9608);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AC9CCB").s().p("AhnC7QgQAAgLgLQgLgLAAgPIAAkrQAAgPALgLQALgLAQAAIDQAAQAPAAALALQALALAAAPIAAErQAAAPgLALQgLALgPAAg");
	this.shape_1.setTransform(-1.5891,-0.195,1.9608,1.9608);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.3,-36.8,68.4,73.19999999999999);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#453F3F").s().p("Ak7S/QAFgxAUguQAohdBhhKQBEg0B4g5QCVhHAwgZQBug5BOg6QBdhEBChTQBAhQAzhuQBgjNAijwQAkkEhGjVQgghjhDh4QgkhDgYgeQghgrg2gdQhPgtiKgzQh2gthwgWQjsgwjMAwQhlAYhXAtQhdAwhHBFQhbBZgeBaQgQA0gDBDQgBAqAFBOQAAAMgMAAQgNAAAAgMQgFhKABguQAEh/BAheQA4hTBYhDQBQg8BkgoQBeglBpgPQDUgfD2BCQBwAfB2AxQA6AZAzAZQA+AfAiAhQAhAgAiA6QAbAtAeA+QA7B1AbBtQA0DbgxEHQguD6hnDAQg4BphJBPQhGBLhkBCQhTA3hvA3IhpAyQhDAgglATQkBCEgTC7QgBAMgMAAQgNAAABgMg");
	this.shape.setTransform(126.8585,181.0241,1.4769,1.4769);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#453F3F").s().p("AlXQ+QgMgDAEgMQAKgfAPghQAuhlB4iEQCWikAkg2QAkg0AvhhQA2hwAZgpQAfgyA7hRQBDhdAYgkQBkiZAQiHQASiWg7igQg6iahvh0Qh4h+iUgqQhQgXhRAEQhXAGhGAlQg9AggvA6QgqA2gbBGQgEALgMgDQgMgDAEgMQAOglAQgdQAjhCA1gvQA4gyBEgXQBQgbBZAEQBWAFBQAgQCRA6BxCFQBrB9AyCdQA0CigbCcQgNBKgmBPQgfBBgzBJIheCEQg4BPggA4QgeA2g0BvQgmBNgxA/Qg6BNiJCRQh1CGgkB1QgDAJgIAAIgFgBg");
	this.shape_1.setTransform(135.3528,203.11,1.4769,1.4769);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-0.3,-0.1,254.3,363.8), null);


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
	this.shape.graphics.f("#F8D4B1").s().p("AgxAcQgIgEAOgNQAhgeA2gKIAFAGQAFAGgBAHQgDAVg4AOQgVAFgLAAQgIAAgDgCg");
	this.shape.setTransform(12.1423,55.4305,1.9608,1.9608);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DEA27B").s().p("AgxAcQgIgEANgNQAhgeA3gKIAFAGQAEAGAAAHQgDAVg4AOQgUAFgMAAQgIAAgDgCg");
	this.shape_1.setTransform(12.5542,55.4305,1.9608,1.9608);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DEA27B").s().p("AjlBEQCOgtAogUQBRgnEBhyQhAAihYAqQivBSh2AnQh5AogDAnQgCAPAMAKQg7gqBigpg");
	this.shape_2.setTransform(59.4967,37.5716,1.9608,1.9608);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F8D4B1").s().p("AgbATQgCgCACgFQAEgQAtgOIAHAFQABAIggAPQgTAJgFAAIgBAAg");
	this.shape_3.setTransform(5.5752,53.4977,1.9608,1.9608);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DEA27B").s().p("AgbASQgCgCACgEQAEgRAtgNIAHAEQABAIggAPQgSAKgFAAIgCgBg");
	this.shape_4.setTransform(5.8693,53.3167,1.9608,1.9608);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8D4B1").s().p("AguAIQAggXA/gOIAFAJQAFAKgCAJQgEAcg+ADIgOAAQg1AAAegWg");
	this.shape_5.setTransform(37.4797,55.3482,1.9608,1.9608);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DEA27B").s().p("AguAHQAhgXA+gNIAFAIQAFALgCAJQgEAcg+ADIgOAAQg1AAAegXg");
	this.shape_6.setTransform(37.9699,55.1026,1.9608,1.9608);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DEA27B").s().p("AjxBdQgCgJAFgKQAEgHDbhVQDghZAagYIAFAFQAEAHgEAIQgPAchdAiQgqAQjHA+QiBAoAEAMQAGARAEAfIgJADIgIgng");
	this.shape_7.setTransform(75.3227,41.6403,1.9608,1.9608);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DEA27B").s().p("ACwBXQgUAAgkgaQgrglgZgTQhihMhNAWQhRAXgogIQCDhIBQAWQAuANBTBPQAZAZArAWQAQAIBBAbIhFgDg");
	this.shape_8.setTransform(135.8804,70.2994,1.9608,1.9608);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F8B786").s().p("AI1DpQhmgDj2gMIiIgGQgUAAgkgaQgqglgagTQhihNhNAWQhRAXgogIIgFgBQgbgHgXAMQhKAlhXgIIhIgPQhWAagkgVQgXgOAAgdIABgIQgIAAgFgEQgIgHAVgNQAggVIajwQAWgJAUgCQAfgCAdALQFeCQBdAcQA/ATDEgUQBjgJBVgOIAAEzQgMAFhJAAQg1AAhUgCg");
	this.shape_9.setTransform(154.5819,45.8343,1.9608,1.9608);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-0.1,-0.3,309,92.3), null);


// stage content:
(lib.barcelate = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [192];
	// timeline functions:
	this.frame_192 = function() {
		var self = this;
		self.stop();
		
		
		setTimeout(again,2000);
		function again(){
			self.gotoAndPlay(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(192).call(this.frame_192).wait(1));

	// Tween_8
	this.instance = new lib.Tween8("synched",0);
	this.instance.setTransform(226.75,-44.25);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(106).to({_off:false},0).wait(1).to({regX:-0.2,regY:-0.1,x:227.55,y:-35.75,alpha:0.0769},0).wait(1).to({x:228.55,y:-27.2,alpha:0.1538},0).wait(1).to({x:229.55,y:-18.6,alpha:0.2308},0).wait(1).to({x:230.55,y:-10.05,alpha:0.3077},0).wait(1).to({x:231.55,y:-1.45,alpha:0.3846},0).wait(1).to({x:232.55,y:7.05,alpha:0.4615},0).wait(1).to({x:233.55,y:15.65,alpha:0.5385},0).wait(1).to({x:234.55,y:24.2,alpha:0.6154},0).wait(1).to({x:235.55,y:32.8,alpha:0.6923},0).wait(1).to({x:236.55,y:41.35,alpha:0.7692},0).wait(1).to({x:237.55,y:49.95,alpha:0.8462},0).wait(1).to({x:238.55,y:58.5,alpha:0.9231},0).wait(1).to({x:239.55,y:67.1,alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({x:240.9,y:78.25},0).wait(1).to({x:242.3,y:89.4},0).wait(1).to({x:243.7,y:100.6},0).wait(1).to({x:245.05,y:111.75},0).wait(1).to({x:246.65,y:121.65},0).wait(1).to({x:248.2,y:131.5},0).wait(1).to({x:249.75,y:141.4},0).wait(1).to({x:251.3,y:151.3},0).wait(1).to({x:252.85,y:161.15},0).wait(1).to({x:254.4,y:171.05},0).wait(1).to({x:255.95,y:176.2},0).wait(1).to({x:257.5,y:181.4},0).wait(1).to({x:259.05,y:186.55},0).wait(1).to({x:260.6,y:191.7},0).wait(1).to({x:262.15,y:196.85},0).wait(1).to({x:263.7,y:202.05},0).wait(1).to({x:265.25,y:207.2},0).wait(1).to({x:266.8,y:212.35},0).wait(1).to({x:268.4,y:217.55},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Tween_10
	this.instance_1 = new lib.Tween10("synched",0);
	this.instance_1.setTransform(320.25,-48.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(106).to({_off:false},0).wait(1).to({regX:-0.2,regY:-0.1,x:320.05,y:-40.05,alpha:0.0769},0).wait(1).to({y:-31.35,alpha:0.1538},0).wait(1).to({y:-22.6,alpha:0.2308},0).wait(1).to({y:-13.9,alpha:0.3077},0).wait(1).to({y:-5.15,alpha:0.3846},0).wait(1).to({y:3.5,alpha:0.4615},0).wait(1).to({y:12.25,alpha:0.5385},0).wait(1).to({y:20.95,alpha:0.6154},0).wait(1).to({y:29.7,alpha:0.6923},0).wait(1).to({y:38.4,alpha:0.7692},0).wait(1).to({y:47.15,alpha:0.8462},0).wait(1).to({y:55.85,alpha:0.9231},0).wait(1).to({y:64.6,alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({x:319.7,y:72.1},0).wait(1).to({x:319.35,y:79.65},0).wait(1).to({x:319,y:87.15},0).wait(1).to({x:318.7,y:94.7},0).wait(1).to({x:318.35,y:102.2},0).wait(1).to({x:318,y:109.75},0).wait(1).to({x:317.65,y:117.3},0).wait(1).to({x:317.35,y:124.8},0).wait(1).to({x:317,y:132.35},0).wait(1).to({x:316.65,y:139.85},0).wait(1).to({x:316.3,y:147.4},0).wait(1).to({x:316,y:154.9},0).wait(1).to({x:315.65,y:162.45},0).wait(1).to({x:315.3,y:170},0).wait(1).to({x:314.95,y:177.5},0).wait(1).to({x:314.65,y:185.05},0).wait(1).to({x:314.3,y:192.55},0).wait(1).to({x:313.95,y:200.1},0).wait(1).to({x:313.65,y:207.65},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Layer_3
	this.instance_2 = new lib.Tween6("synched",0);
	this.instance_2.setTransform(316.85,771.3);
	this.instance_2.alpha = 0.7109;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(102).to({_off:false},0).wait(1).to({regX:-0.1,regY:0.3,y:745.35,alpha:0.7271},0).wait(1).to({x:316.95,y:719.15,alpha:0.7441},0).wait(1).to({x:317.05,y:692.9,alpha:0.7612},0).wait(1).to({x:317.2,y:666.7,alpha:0.7782},0).wait(1).to({x:317.3,y:640.45,alpha:0.7953},0).wait(1).to({x:317.4,y:614.25,alpha:0.8124},0).wait(1).to({x:317.55,y:588,alpha:0.8294},0).wait(1).to({x:317.65,y:561.8,alpha:0.8465},0).wait(1).to({x:317.75,y:535.55,alpha:0.8635},0).wait(1).to({x:317.85,y:509.35,alpha:0.8806},0).wait(1).to({x:318,y:483.1,alpha:0.8976},0).wait(1).to({x:318.1,y:456.9,alpha:0.9147},0).wait(1).to({x:318.2,y:430.65,alpha:0.9318},0).wait(1).to({x:318.35,y:404.45,alpha:0.9488},0).wait(1).to({x:318.45,y:378.2,alpha:0.9659},0).wait(1).to({x:318.55,y:352,alpha:0.9829},0).wait(1).to({x:318.7,y:325.8,alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Layer_7
	this.instance_3 = new lib.Symbol4();
	this.instance_3.setTransform(380,275.85,1,1,0,0,0,127,181.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(146).to({_off:false},0).wait(1).to({regX:126.9,regY:181.7,x:379.9,y:275.75,alpha:0.0833},0).wait(1).to({alpha:0.1667},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.4167},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.5833},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.8333},0).wait(1).to({alpha:0.9167},0).wait(1).to({alpha:1},0).wait(35));

	// Layer_16
	this.instance_4 = new lib.Tween2("synched",0);
	this.instance_4.setTransform(83.55,306.25);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(17).to({_off:false},0).wait(1).to({regX:-0.1,regY:-0.2,scaleY:1.0087,x:93.05,y:304.75},0).wait(1).to({scaleY:1.0174,x:102.7,y:303.5},0).wait(1).to({scaleY:1.0261,x:112.35,y:302.2},0).wait(1).to({scaleY:1.0348,x:122,y:300.95},0).wait(1).to({scaleY:1.0435,x:131.65,y:299.65},0).wait(1).to({scaleY:1.0522,x:141.3,y:298.4},0).wait(1).to({scaleY:1.0609,x:150.9,y:297.1},0).wait(1).to({scaleY:1.0696,x:160.55,y:295.85},0).wait(1).to({scaleY:1.0783,x:170.2,y:294.55},0).wait(1).to({scaleY:1.087,x:179.85,y:293.3},0).wait(1).to({scaleY:1.0957,x:189.5,y:292},0).wait(1).to({scaleY:1.1044,x:199.15,y:290.75},0).wait(1).to({scaleY:1.1131,x:208.75,y:289.45},0).wait(1).to({scaleY:1.1218,x:218.4,y:288.2},0).wait(1).to({scaleY:1.1305,x:228.05,y:286.85},0).wait(1).to({scaleY:1.1392,x:237.7,y:285.6},0).wait(1).to({scaleY:1.1479,x:247.35,y:284.3},0).wait(1).to({scaleY:1.1566,x:257,y:283.05},0).wait(1).to({scaleY:1.1653,x:266.65,y:281.8},0).wait(1).to({scaleY:1.1995,x:284.8,y:285.4},0).wait(1).to({scaleY:1.2337,x:303,y:289.05},0).wait(1).to({scaleY:1.268,x:321.2,y:292.7},0).wait(1).to({scaleY:1.3022,x:339.4,y:296.35},0).wait(1).to({scaleY:1.2608,x:357.6,y:300},0).wait(1).to({scaleY:1.2195,x:375.8,y:303.65},0).wait(1).to({scaleY:1.1781,x:394,y:307.3},0).wait(1).to({scaleY:1.1368,x:412.2,y:310.95},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({x:384,alpha:0.9474},0).wait(1).to({x:355.8,alpha:0.8947},0).wait(1).to({x:327.6,alpha:0.8421},0).wait(1).to({x:299.4,alpha:0.7895},0).wait(1).to({x:271.2,alpha:0.7368},0).wait(1).to({x:243,alpha:0.6842},0).wait(1).to({x:214.8,alpha:0.6316},0).wait(1).to({x:186.6,alpha:0.5789},0).wait(1).to({x:158.4,alpha:0.5263},0).wait(1).to({x:130.25,alpha:0.4737},0).wait(1).to({x:102.05,alpha:0.4211},0).wait(1).to({x:73.85,alpha:0.3684},0).wait(1).to({x:45.65,alpha:0.3158},0).wait(1).to({x:17.45,alpha:0.2632},0).wait(1).to({x:-10.7,alpha:0.2105},0).wait(1).to({x:-38.9,alpha:0.1579},0).wait(1).to({x:-67.1,alpha:0.1053},0).wait(1).to({x:-95.3,alpha:0.0526},0).wait(1).to({x:-123.5,alpha:0},0).to({_off:true},1).wait(94));

	// צמיד_צד
	this.instance_5 = new lib.Tween1("synched",0);
	this.instance_5.setTransform(83.55,306.25);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:1},16).to({_off:true},1).wait(176));

	// יד_צמיד
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8D4B1").s().p("AgxAcQgIgEAOgNQAhgeA2gKIAFAGQAFAGgBAHQgDAVg4AOQgVAFgLAAQgIAAgDgCg");
	this.shape.setTransform(145.6419,305.7743,1.9607,1.9607);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DEA27B").s().p("AgxAcQgIgEANgNQAhgeA3gKIAFAGQAEAGAAAHQgDAVg4AOQgUAFgMAAQgIAAgDgCg");
	this.shape_1.setTransform(146.0539,305.7743,1.9607,1.9607);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DEA27B").s().p("AjlBEQCOgtAogUQBRgnEBhyQhAAihYAqQivBSh2AnQh5AogDAnQgCAPAMAKQg7gqBigpg");
	this.shape_2.setTransform(192.9949,287.916,1.9607,1.9607);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F8D4B1").s().p("AgbATQgCgCACgFQAEgQAtgOIAHAFQABAIggAPQgTAJgFAAIgBAAg");
	this.shape_3.setTransform(139.075,303.8416,1.9607,1.9607);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DEA27B").s().p("AgbASQgCgCACgEQAEgRAtgNIAHAEQABAIggAPQgSAKgFAAIgCgBg");
	this.shape_4.setTransform(139.3691,303.6606,1.9607,1.9607);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8D4B1").s().p("AguAIQAggXA/gOIAFAJQAFAKgCAJQgEAcg+ADIgOAAQg1AAAegWg");
	this.shape_5.setTransform(170.9785,305.692,1.9607,1.9607);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DEA27B").s().p("AguAHQAhgXA+gNIAFAIQAFALgCAJQgEAcg+ADIgOAAQg1AAAegXg");
	this.shape_6.setTransform(171.4687,305.4464,1.9607,1.9607);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DEA27B").s().p("AjxBdQgCgJAFgKQAEgHDbhVQDghZAagYIAFAFQAEAHgEAIQgPAchdAiQgqAQjHA+QiBAoAEAMQAGARAEAfIgJADIgIgng");
	this.shape_7.setTransform(208.8203,291.9845,1.9607,1.9607);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DEA27B").s().p("ACwBXQgUAAgkgaQgrglgZgTQhihMhNAWQhRAXgogIQCDhIBQAWQAuANBTBPQAZAZArAWQAQAIBBAbIhFgDg");
	this.shape_8.setTransform(269.3762,320.6428,1.9607,1.9607);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F8B786").s().p("AI1DpQhmgDj2gMIiIgGQgUAAgkgaQgqglgagTQhihNhNAWQhRAXgogIIgFgBQgbgHgXAMQhKAlhXgIIhIgPQhWAagkgVQgXgOAAgdIABgIQgIAAgFgEQgIgHAVgNQAggVIajwQAWgJAUgCQAfgCAdALQFeCQBdAcQA/ATDEgUQBjgJBVgOIAAEzQgMAFhJAAQg1AAhUgCg");
	this.shape_9.setTransform(288.077,296.1784,1.9607,1.9607);

	this.instance_6 = new lib.Symbol3();
	this.instance_6.setTransform(670.75,296.6,1,1,0,0,0,154.5,46);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},30).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[]},1).wait(94));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},0).wait(1).to({regX:154.4,regY:45.8,x:659.05,y:296.4},0).wait(1).to({x:647.45},0).wait(1).to({x:635.9},0).wait(1).to({x:624.3},0).wait(1).to({x:612.75},0).wait(1).to({x:601.15},0).wait(1).to({x:589.6},0).wait(1).to({x:578},0).wait(1).to({x:566.45},0).wait(1).to({x:554.85},0).wait(1).to({x:543.3},0).wait(1).to({x:531.7},0).wait(1).to({x:520.15},0).wait(1).to({x:508.55},0).wait(1).to({x:497},0).wait(1).to({x:485.4},0).wait(1).to({x:473.8},0).wait(1).to({x:462.25},0).wait(1).to({x:450.65},0).wait(1).to({x:439.1},0).wait(1).to({x:427.5},0).wait(1).to({x:415.95},0).wait(1).to({x:404.35},0).wait(1).to({x:392.8},0).wait(1).to({x:381.2},0).wait(1).to({x:369.65},0).wait(1).to({x:358.05},0).wait(1).to({x:346.5},0).wait(1).to({x:334.9},0).wait(1).to({x:323.35},0).wait(1).to({x:311.75},0).wait(1).to({x:300.2},0).wait(16).to({regX:154.5,regY:46,x:300.3,y:296.6},0).wait(31).to({regX:154.4,regY:45.8,x:272.5,y:296.4,alpha:0.9474},0).wait(1).to({x:244.8,alpha:0.8947},0).wait(1).to({x:217.15,alpha:0.8421},0).wait(1).to({x:189.45,alpha:0.7895},0).wait(1).to({x:161.75,alpha:0.7368},0).wait(1).to({x:134.15,alpha:0.6842},0).wait(1).to({x:106.45,alpha:0.6316},0).wait(1).to({x:78.75,alpha:0.5789},0).wait(1).to({x:51.1,alpha:0.5263},0).wait(1).to({x:23.4,alpha:0.4737},0).wait(1).to({x:-4.25,alpha:0.4211},0).wait(1).to({x:-31.95,alpha:0.3684},0).wait(1).to({x:-59.65,alpha:0.3158},0).wait(1).to({x:-87.3,alpha:0.2632},0).wait(1).to({x:-115,alpha:0.2105},0).wait(1).to({x:-142.7,alpha:0.1579},0).wait(1).to({x:-170.35,alpha:0.1053},0).wait(1).to({x:-198.05,alpha:0.0526},0).wait(1).to({x:-225.75,alpha:0},0).to({_off:true},1).wait(94));

	// Layer_2
	this.instance_7 = new lib.Tween4("synched",0);
	this.instance_7.setTransform(462,196.65);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(79).to({_off:false},0).wait(1).to({regX:-0.2,regY:-0.3,x:434.1,y:196.35,alpha:0.9474},0).wait(1).to({x:406.4,alpha:0.8947},0).wait(1).to({x:378.75,alpha:0.8421},0).wait(1).to({x:351.05,alpha:0.7895},0).wait(1).to({x:323.35,alpha:0.7368},0).wait(1).to({x:295.7,alpha:0.6842},0).wait(1).to({x:268,alpha:0.6316},0).wait(1).to({x:240.3,alpha:0.5789},0).wait(1).to({x:212.65,alpha:0.5263},0).wait(1).to({x:184.95,alpha:0.4737},0).wait(1).to({x:157.3,alpha:0.4211},0).wait(1).to({x:129.6,alpha:0.3684},0).wait(1).to({x:101.9,alpha:0.3158},0).wait(1).to({x:74.25,alpha:0.2632},0).wait(1).to({x:46.55,alpha:0.2105},0).wait(1).to({x:18.85,alpha:0.1579},0).wait(1).to({x:-8.75,alpha:0.1053},0).wait(1).to({x:-36.45,alpha:0.0526},0).wait(1).to({x:-64.15,alpha:0},0).to({_off:true},1).wait(94));

	// כבל_לבן
	this.instance_8 = new lib.Tween3("synched",0);
	this.instance_8.setTransform(462,196.65);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween4("synched",0);
	this.instance_9.setTransform(462,196.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},49).to({state:[{t:this.instance_9}]},10).to({state:[]},20).to({state:[]},11).wait(103));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(49).to({_off:false},0).to({_off:true,alpha:1},10).wait(134));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-80.3,0,905.5,922.3);
// library properties:
lib.properties = {
	id: 'DC560FF1F0B7BC408142EA93EDF9CA3C',
	width: 600,
	height: 600,
	fps: 30,
	color: "#6699CC",
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
an.compositions['DC560FF1F0B7BC408142EA93EDF9CA3C'] = {
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