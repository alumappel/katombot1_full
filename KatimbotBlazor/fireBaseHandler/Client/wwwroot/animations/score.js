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

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Symbol15 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F6D3AE").s().p("AgbAWQAJgaAggfIAPAOQAJAUglAXQgTAOgHAAQgIAAAGgOg");
	this.shape.setTransform(7.4309,27.5055,0.7546,0.7546);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DDA078").s().p("AgbAWQAJgaAggfIAPAPQAJATgkAYQgUANgHAAQgIAAAGgOg");
	this.shape_1.setTransform(7.5079,27.3828,0.7546,0.7546);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F6D3AE").s().p("Ag7AgQgDgGAPgPIAVgRQA1grAWARQALAJAAASQgbAYghAKQgSAGgRACIgKABQgMAAgCgGg");
	this.shape_2.setTransform(34.6558,45.9922,0.7546,0.7546);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DDA078").s().p("AgZgFQA1grAWARQALAJAAASQg9AjgpAFIgJABQgdAAA2gqg");
	this.shape_3.setTransform(34.8218,45.8603,0.7546,0.7546);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F6D3AE").s().p("AgTAWQhRgTAvgRQAsgRBNAFQAHATgHAPQgKAUgiAAQgSAAgZgGg");
	this.shape_4.setTransform(5.4175,2.1654,0.7546,0.7546);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DDA078").s().p("AgTAWQhRgTAvgRQAsgRBNAFQAHATgHAPQgKAUgiAAQgSAAgZgGg");
	this.shape_5.setTransform(5.6817,2.1392,0.7546,0.7546);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F7B583").s().p("AIwFEQgxgsgXgJQgLgEg1AAIhwACQigAAgsgkQgvgniIAEIiQAMQgvAdglAUQhIAngXghQgbgoAog1QApg2BVgkQAXgKBDgWQA5gSAZgOQBOgpgwhPQgVghg5gaQhjgujHgZQhkgNh2gGQg1gCgvgaQg1geAZghQAYgfE6AKQERAJBuARQBCAKEjCAQETB5BJAtQA2AgAxBLQAZAlAOAfIi4DgQgUgUgZgWg");
	this.shape_6.setTransform(59.5768,27.6351,0.7546,0.7546);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E5A67C").s().p("AjUCRQgCgVCCiSQBBhJBAhGICoAjQg7ArhEA0QiGBmgmAqQgrAvgqAIIgPACQgYAAgCgVg");
	this.shape_7.setTransform(21.2609,18.9597,0.7546,0.7546);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DDA078").s().p("Ag/DYQgJgKgHgHQgIgGA+iFIBFiSIhUBxQhdB+gUAIQgiARgbgEQgggFAggqQAwhBAQgaQAcgtgDgWQgDgVA2hUQAbgqAcgmID6CCQgXABgbALQg2AVgWAwQghBJggA1QgpBHgbAPQgTAKgKAAQgEAAgCgBg");
	this.shape_8.setTransform(32.3972,22.2115,0.7546,0.7546);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,119.1,55.3), null);


(lib.Symbol13 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#221F1F").s().p("AgSA+IgEgBQgEgCgCgEQgDgEACgFIAhhkQABgEAFgDQAEgCAFACIAEABQAEACADAFQACAEgCAEIghBkQgBAEgFADIgFABIgEgBg");
	this.shape.setTransform(33.9737,37.6228,0.7546,0.7546);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#221F1F").s().p("AAdBOQgGgCgEgFIhFh6QgEgFACgHQACgGAFgDIAGgDQAFgEAGACQAHACADAFIBGB6QADAGgCAGQgCAGgFADIgFADQgEADgFAAIgDgBg");
	this.shape_1.setTransform(12.7765,44.0265,0.7546,0.7546);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3D3737").s().p("AIIK5QgJgJAJgIQATgUAWgaQBNhgArh4QAqh2ABh8QACiAgth/QgVg8gmhOQgthcgYglQhAhliJhGQgkgShVgmQhWglg3gTQing7h7AQQg2AHhZAcQhkAfgqAIIhDAOQgmAKgZAPQgxAegaBAQgMAcgGAlQgEAVgFAtQgLBWAIA6QACALgNAEQgMADgBgMQgFggABgnQABg2AOhdQALhGAjgzQAmg3A+gVQAagKAsgIQA3gLAQgEQAygNBhgfQBYgYBAgBQBIgBBRAVQBBAQBTAhQA0AVBWAmQBOAjAtAbQA/AmAsAuQAsAuAnBKQBYCmAgB3QAhB9gMCDQgLCCg2B4Qg2B5hZBdQgEAEgFAAQgEAAgFgFg");
	this.shape_2.setTransform(65.3259,52.9633,0.7546,0.7546);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3D3737").s().p("AH0KXQAPizAEhWQAGiUgLh1QgSjPhNinQhZi/iahpQhVg5hrgdQhjgbhvABQiBABhLAxQgoAbgYAnQgaApAAAtQAAAMgNAAQgMAAAAgMQAAgZAGgWQANgsAhgmQAfgkAqgWQBVgrCDADQBzADBlAeQBvAhBWBAQCUBtBXC+QBTC0APDsQAHBtgGCJQgEBPgOCnQgBAMgMAAQgNAAABgMg");
	this.shape_3.setTransform(75.1583,67.2879,0.7546,0.7546);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2D2929").s().p("AgMAmQgOgFgHgPQgHgPAGgOQAFgQAOgIQAPgIANAFQAPAFAGAPQAHAPgFAPQgFAQgPAIQgJAEgHAAQgGAAgGgCg");
	this.shape_4.setTransform(32.4765,41.2856,0.7546,0.7546);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#221F1F").s().p("AgOAsQgOgFgGgQQgHgRAHgRQAGgSAPgKQANgJAPAFQAPAFAGAQQAGARgGARQgHATgOAJQgKAGgJAAQgFAAgFgCg");
	this.shape_5.setTransform(32.0559,41.3392,0.7546,0.7546);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2D2929").s().p("AgLAzQgUgHgMgTQgLgTAFgVQAFgVASgKQASgLATAHQAVAGALAUQAMAUgFATQgFAWgSAKQgLAGgMAAQgHAAgIgCg");
	this.shape_6.setTransform(15.1322,48.7533,0.7546,0.7546);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#221F1F").s().p("AgIA4QgWgIgNgXQgMgWADgWQAEgYASgKQASgKAVAIQAWAJAMAWQANAWgDAWQgEAYgSAKQgKAGgLAAQgJAAgJgEg");
	this.shape_7.setTransform(14.8405,49.2438,0.7546,0.7546);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3D3737").s().p("AAICMIhngeQgHgCgCgMQgCgNAGgQIA6iqQAGgRALgLQAKgLAJADIBlAdQAJADABAMQACANgGAQIg7CpQgFASgKALQgJAJgHAAIgDgBg");
	this.shape_8.setTransform(28.7828,41.8297,0.7546,0.7546);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3D3737").s().p("AAbDWQgPgLgMgWIiQjtQgPgYgEgXQgEgXAJgHIBthVQAJgGAOALQAPALAMAWICQDtQAPAYAEAXQAEAXgJAHIhtBVQgDACgEAAQgHAAgJgHg");
	this.shape_9.setTransform(12.7851,54.6204,0.7546,0.7546);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F6D3AE").s().p("AgZAlQAOgxAUgYQAWgZgGA3QgEAwgXACg");
	this.shape_10.setTransform(29.56,30.8743,0.7546,0.7546);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DDA078").s().p("AgZAlQAOgxAUgYQAWgZgGA3QgEAwgXACg");
	this.shape_11.setTransform(29.4845,31.0252,0.7546,0.7546);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F6D3AE").s().p("AgIBGQgdgMANhMQAJg2ANAAQAHgBAKAWQAHASAEAWQAHAlgKApQgKAGgKAAQgFAAgGgDg");
	this.shape_12.setTransform(63.1417,48.0035,0.7546,0.7546);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DDA078").s().p("AgFBHQgegMAOhMQAPhXARAwQARAsgCBQQgKAGgKAAQgGAAgFgDg");
	this.shape_13.setTransform(62.9696,48.1987,0.7546,0.7546);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F6D3AE").s().p("AgugyQgIg5A+BHQA5A/gYAfQgLAQgXADQguhLgHg0g");
	this.shape_14.setTransform(3.6394,43.3187,0.7546,0.7546);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DDA078").s().p("AgugyQgIg5A+BHQA5A/gYAfQgMAQgXADQguhLgGg0g");
	this.shape_15.setTransform(3.7526,43.5828,0.7546,0.7546);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F7B583").s().p("AGEHzQhMhXgugbQhAgljKidQjXimgjgtQg5hLh3jLQiIjoAOgfQAPggAsAbQAnAZAXAnQAzBUA0BIQBkCMBLA4QAsAhAhABQBNAEAAhLQAAgZgIgyQgLg7gCgWQgIhPAYg1QAWg0AqAFQAiADAABHIgCA0QgCAaACAFIAxBxQA1BpAwATQAuATBCB2IArBVQAVApAIAGQAQAOA1ATQAbAJAYAHIhgGFQgdglglgrg");
	this.shape_16.setTransform(55.3097,94.5645);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E5A67C").s().p("AhrCMQAihnAmhoQBLjRAVgJQAdgMANArQAOAugYBEQgVA9gdC9QgPBfgLBTg");
	this.shape_17.setTransform(26.2634,49.2195,0.7546,0.7546);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DDA078").s().p("AjQB2QAXgwAbgyQA3hjAWgIQAYgIAeg1QASgfAlhTQAZg2AWAeQASAYADArQACAYhLChIhDCRQA5hRAzhDQBjiFALAEQAKAEAPADQAKAHAAAhQAAAjgwBQQglA9g3BHQgkAwAIBCQAFAgALAYg");
	this.shape_18.setTransform(36.5741,57.369,0.7546,0.7546);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,121.9,152.5), null);


(lib.Symbol11 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#674C3A").s().p("AjCBxIAfgJQApgMAtgXQCOhHCCiPQg2BmhNBSQhhBrhPAAQgsAAgmghg");
	this.shape.setTransform(185.4583,201.5214,0.7546,0.7546);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A97E5E").s().p("AAXCeQgvgugphOQgohNgKhCQgKhBAbgOQAbgPAwAuQAvAuApBOQApBNAKBCQAJBCgbAOQgGADgIAAQgYAAglgjg");
	this.shape_1.setTransform(94.6514,163.2614,0.7546,0.7546);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7B583").s().p("AAsAGQhhhqh4gzQAlgUAtgQQBcgiBMB9QBEBuAdC1Qg4hshKhRg");
	this.shape_2.setTransform(103.8474,148.3296,0.7546,0.7546);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7B583").s().p("AghCHQgqgVgrhJQBLAdA3gfQBJgoAiiNQADChgwBHQglA1gnAAQgQAAgPgIg");
	this.shape_3.setTransform(109.0442,184.9459,0.7546,0.7546);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DDA078").s().p("ABiGUQgqgVgqhJQgPgcgPghIgLgbQgzhPg0hWQhpisgKgmQgOgyAXgwQAehCBhgyQAkgUAugQQBbgiBNB9QBEBvAdC1QAMBKABBIQAECigxBHQgkA1gpAAQgPAAgQgIg");
	this.shape_4.setTransform(99.0433,164.6565,0.7546,0.7546);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#674C3A").s().p("AjVk4IBDgmQBQgnBCgCQDWgHAAFqQAACfghCXQgRBMgQArg");
	this.shape_5.setTransform(106.8847,160.5027,0.7546,0.7546);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#674C3A").s().p("ArsBMQB2gsCNgkQHEh0IBAIQDDA3CoCHQlOgllnAAQn3gBnhBJg");
	this.shape_6.setTransform(135.5221,28.5043,0.7546,0.7546);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#826048").s().p("AMpYxIhYhaQgQAGAGAiQACAOAIAWQhcgijCkOQg9hUhAhiIg0hRIn6ltQgNg1gvhNQhciaikh3QhbhDgqgTQghgPgdAFQg1AJgQAAQg7AAhggcQhpgehGg+Qg5gygwhXQgNgYhFiVQg3h1g0hPQh7i7AhiDQAZhiCChgQA1gnCxhpQCShWAtgcQDTiBBthiQB2hqAagUQBKg4BNgVQCvguF7B2QFfBtDShKQBpglAjg6QArBHhtBcQgiAcgtAbIgmAWQDEA2CnCIQCwCOB1DOQB4DSAlDwQAoD9g7D4QhAEMiuDsQlzH4ABFoQABBxAlBUQATAqATAUQhIgNhmhdg");
	this.shape_7.setTransform(116.9911,127.6384,0.7546,0.7546);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DDA078").s().p("AG4K+IiVC1Qgeh3hBhoQguBchaAyQg9AihJAGQgyADgygKQBqlrhykxQiunRqYjPIgZgxQgwhkgdhsIAcjJILlm0IMVMxICpPUQCQBtBrCOQCOC8BFDqQAtCaALCmIgtAJg");
	this.shape_8.setTransform(109.0353,177.4857,0.7546,0.7546);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F7B583").s().p("AAmVTIELkcQARhvgRhwQgEgigKgmQgeh3hBhoQguBchaAyQg9AjhJAFQgyADgygKIgagGQjFiIi0iZQiWh/g+hPQg4hIgPhMQgEgXgBgfIAAhyQgFirgRicQhMhag5hqIgZgxQgwhkgdhrIAcjKILlm0IMVMyICpPUQCQBsBrCPQCOC8BFDpQAtCaALCmIvQDPg");
	this.shape_9.setTransform(109.0353,184.9375,0.7546,0.7546);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,234,298.1), null);


(lib.Symbol9 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#ECECEC").s().p("AB5SRQitgSiQhFQiOhEhzhyQhjhkhqiyQhvi5g3iDQhGikgYi0QgLhSgGhkQgDhFgDhyQgFkCACh9QADjVAWioQABgGAGAAQAGAAgBAGQgGAygEAqQgPCmgBDQQAACBAHD1QADBtAGBMQAIBjAQBSQAfCkBTCsQBICWBkCcQBnCiBxBhQB7BqCXA4QCSA3DAAFQBgADEHgSQDigOCGANQAGABAAAGQAAAGgGgBQgxgEgogBQhngEkGARQh+AIhhAAQhRAAg9gFg");
	this.shape.setTransform(117.7942,86.3352,1.2458,0.7352);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,235.6,172.7), null);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#9D8CBF").s().p("ABMpnIEwiuIr2Yrg");
	this.shape.setTransform(77.0668,173.3726,0.7546,0.7546);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C2A9E8").s().p("AqoETIAtldICPgvIBEBcIFtAnIHVitIBLiDIDEJNg");
	this.shape_1.setTransform(151.8296,25.1675,0.7546,0.7546);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C2A9E8").s().p("AlLnoIj7HoIpBniIGWqiQAag+AtgxQAsgxA7gfIIRkXILkiDIFBDUQBLAxAoBRQAnBRgGBaMAABAtiMgirABYg");
	this.shape_2.setTransform(115.975,175.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,232,351.7), null);


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
	this.shape.graphics.f("#C2A9E8").s().p("AnbC2IAAi0IAwAAIAAgIIgCAAIAAhCIBDAAIAAAbIAcAAIAAARIBUAAIAAAeID5AAIAAgWIBnAAIAAgRIA7AAIAAgXIApAAIAAgtIBGAAIAAgXIARAAIAAgNIAjAAIAAgoIA3AAIAAB5IBDAAIAAA+IAeAAIAAC0g");
	this.shape.setTransform(47.55,18.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C2A9E8").s().p("AnEFTIAAhKIh7AAIAAnyIA+AAIAAhlICtAAIAADIILmAAIAAi7IARAAIAAgQIBPAAIAAAQIBOAAIAAKUg");
	this.shape_1.setTransform(45.275,44.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-12.3,0,115.2,78.2), null);


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
	this.shape.graphics.f("#AE9CE6").s().p("AkbCmQiigWgfhNQgGgNAAgPQA1A+CXAPQCZAPCygpQCxgoBxhLQBvhKgChKQADADALAHQAIAGACAFQAgBNh2BWQh2BZjFAsQiCAehzAAQg7AAg2gIg");
	this.shape.setTransform(36.4459,13.108,0.7546,0.7546);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,72.9,26.2), null);


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
	this.shape.graphics.f("#AE9CE6").s().p("Ag3A8QgQgIgCgOQgCgNBLgtQAkgYAmgUIhyCBQgHgBgIgEg");
	this.shape.setTransform(5.5556,4.9314,0.7546,0.7546);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,11.1,9.9), null);


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
	this.shape.graphics.f("#221F1F").s().p("AgPAiQgGgGgBgNQgBgNAHgNQAGgOAKgGQAIgHAIAGQAGAFABANQAAAOgGANQgHANgKAHQgEADgEAAQgEAAgDgCg");
	this.shape.setTransform(85.3462,58.9378,0.7546,0.7546);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3D3737").s().p("AgUAuQgKgHAAgTQgBgSAJgSQAIgTAOgIQALgJAKAHQAKAHABASQAAATgJASQgJATgNAJQgGAEgGAAQgFAAgEgDg");
	this.shape_1.setTransform(85.3461,58.9472,0.7546,0.7546);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7E7E8").s().p("AwKX4QgJgHAAgRIgt5bQgBgRAJgSQAIgSAMgIMAgagU9QAMgIAJAHQAJAGAAASIAtZaQABARgJASQgIASgMAIMggaAU9QgGAFgGAAQgFAAgEgDg");
	this.shape_2.setTransform(88.0439,127.2636,0.7546,0.7546);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#221F1F").s().p("AwqZOQgWgQgBgqIgo6OQgBgrAUgrQAVgrAdgTMAgcgU8QAdgTAWAQQAWAQABAqIAoaOQABAqgUAsQgUArgeAUMggcAU6QgQALgOAAQgLAAgKgHg");
	this.shape_3.setTransform(87.5911,124.2585,0.7546,0.7546);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FDFFFF").s().p("Aw0ZtQgYgSgCgvIgu6oQgBguAWgwQAXgwAhgWMAgrgVIQAhgWAYASQAYASABAvIAvaoQABAvgWAwQgXAwghAVMggrAVIQgSAMgPAAQgNAAgLgIg");
	this.shape_4.setTransform(86.6856,124.7301,0.7546,0.7546);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3D3737").s().p("AjWCrQgQAAgMgHIgcgPIH0lAIAcAQQAMAHABAJQACAKgLAHInBEfQgKAHgPAAIgCgBg");
	this.shape_5.setTransform(91.409,194.5138,0.7546,0.7546);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E7E7E8").s().p("AjDEaIkGiRQgJgEAAgHQgBgGAGgEIJtmNQAHgEAKAAQALAAAIAEIEHCRQAHAFACAGQAAAGgGAEIptGNQgHAEgKAAQgLAAgIgEg");
	this.shape_6.setTransform(185.4827,246.4862,0.7546,0.7546);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3D3737").s().p("AiuCUIg7ghQgKgGgBgHQgCgIAJgFIFwjsQAIgFANAAQANAAAKAGIA8AhQAKAFABAIQABAIgJAFIlwDrQgIAFgNAAQgNAAgKgFg");
	this.shape_7.setTransform(205.7771,191.4925,0.7546,0.7546);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3D3737").s().p("Ah2BpIgxgbQgMgHgBgJQgBgJAKgHIDriWQALgHAQAAQAQAAAMAHIAwAbQANAGABAKQABAJgKAGIjsCXQgKAHgQAAQgQAAgMgHg");
	this.shape_8.setTransform(198.8052,182.137,0.7546,0.7546);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3D3737").s().p("AhuBlIgygcQgMgGgBgKQgBgJAKgGIDeiOQAKgHAQAAQAPABAMAGIAyAcQAMAHABAJQABAJgKAGIjeCOQgKAHgPAAQgQgBgMgGg");
	this.shape_9.setTransform(210.4036,202.3416,0.7546,0.7546);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3D3737").s().p("AgcA7IhEgmQgIgEgBgGQgBgHAHgEIBdg6QAGgFAKAAQALAAAIAFIBEAmQAIAEABAHQABAGgHADIhdA7QgGAFgKAAQgKAAgJgFg");
	this.shape_10.setTransform(94.3604,276.6328,0.7546,0.7546);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3D3737").s().p("AgcA7IhEgmQgIgEgBgGQgBgHAHgEIBdg6QAGgFAKABQAKAAAJAEIBEAmQAIAEABAHQABAGgHADIhdA7QgGAFgKAAQgKAAgJgFg");
	this.shape_11.setTransform(106.5473,268.8395,0.7546,0.7546);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3D3737").s().p("Ah3BpIgwgaQgMgHgBgJQgCgKALgHIDsiXQAKgGAQAAQAQAAAMAHIAxAaQAMAHABAKQABAJgKAHIjsCXQgKAGgQAAQgQAAgNgHg");
	this.shape_12.setTransform(124.8274,257.1261,0.7546,0.7546);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3D3737").s().p("AlUESQgNAAgKgGIg7ggQgKgGgBgHQgBgIAIgGILpndQAJgFANAAQANAAAKAGIA7AgQAKAGABAIQABAIgIAFIrqHdQgIAFgLAAIgCAAg");
	this.shape_13.setTransform(167.6173,229.7339,0.7546,0.7546);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3D3737").s().p("AgbA7IhFgmQgIgEgBgGQgBgHAHgEIBdg6QAGgFAKABQALAAAIAEIBEAmQAIAEABAHQABAGgHADIhcA7QgHAFgKAAQgKAAgIgFg");
	this.shape_14.setTransform(181.1403,179.6071,0.7546,0.7546);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3D3737").s().p("AhsB7QgRAAgNgHIgtgZQgNgHgBgKQgCgKALgHIENisQALgHARAAQARAAANAHIAtAZQANAHABAKQACAKgLAHIkNCsQgLAHgPAAIgCAAg");
	this.shape_15.setTransform(90.1945,265.4645,0.7546,0.7546);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3D3737").s().p("AgcA7IhEgmQgIgEgBgGQgBgGAHgFIBdg6QAGgFAKABQALgBAIAFIBEAlQAIAFABAHQABAGgHADIhcA7QgHAFgKAAQgLgBgIgEg");
	this.shape_16.setTransform(109.3771,253.1833,0.7546,0.7546);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3D3737").s().p("AgcA7IhEgmQgIgEgBgGQgBgHAHgEIBdg6QAGgFAKAAQALAAAIAFIBEAmQAIAEABAGQABAHgHADIhcA7QgHAFgKAAQgKgBgJgEg");
	this.shape_17.setTransform(121.564,245.392,0.7546,0.7546);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3D3737").s().p("AgbA7IhFgmQgIgEgBgGQgBgHAHgEIBdg6QAGgFAKAAQALAAAIAFIBEAmQAIAEABAHQABAGgHADIhcA7QgHAFgKAAQgKAAgIgFg");
	this.shape_18.setTransform(133.7509,237.5818,0.7546,0.7546);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3D3737").s().p("AgcA7IhEglQgIgFgBgHQgBgGAHgEIBdg6QAGgFAKAAQALABAIAEIBEAmQAIAEABAGQABAGgHAEIhdA7QgGAFgKgBQgKABgJgFg");
	this.shape_19.setTransform(145.9412,229.7905,0.7546,0.7546);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3D3737").s().p("AgbA7IhFglQgIgFgBgGQgBgGAHgFIBdg6QAGgFAKAAQAKABAIAEIBFAmQAIAEABAGQABAGgHAEIhcA8QgIADgJAAQgLABgHgFg");
	this.shape_20.setTransform(158.1281,221.9803,0.7546,0.7546);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3D3737").s().p("AgcA7IhEgmQgIgEgBgGQgBgHAHgEIBcg6QAHgFAKAAQALAAAHAFIBFAmQAIAEABAGQABAHgHADIhdA7QgGAFgKAAQgKgBgJgEg");
	this.shape_21.setTransform(170.3151,214.1889,0.7546,0.7546);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3D3737").s().p("AgbA7IhFgmQgIgEgBgGQgBgHAHgEIBdg6QAGgFAKAAQAKAAAJAFIBEAmQAIAEABAHQABAGgHADIhcA7QgHAFgKAAQgLAAgHgFg");
	this.shape_22.setTransform(182.502,206.3787,0.7546,0.7546);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#3D3737").s().p("Ah2BpIgxgaQgMgHgBgJQgCgKALgHIDsiXQAKgGAQAAQAQAAAMAGIAxAbQAMAIABAJQACAJgLAHIjsCXQgKAGgQAAQgQgBgMgGg");
	this.shape_23.setTransform(76.838,259.7107,0.7546,0.7546);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3D3737").s().p("AgcA7IhEgmQgIgEgBgGQgBgHAHgEIBcg6QAHgFAKAAQALAAAIAFIBEAmQAIAEABAHQABAGgHADIhdA7QgGAFgKAAQgLAAgIgFg");
	this.shape_24.setTransform(95.1217,247.9954,0.7546,0.7546);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3D3737").s().p("AgcA7IhEgmQgIgEgBgGQgBgHAHgEIBcg7QAHgDAKAAQALgBAIAFIBEAlQAIAFABAGQABAHgHADIhdA7QgGAFgKAAQgLAAgIgFg");
	this.shape_25.setTransform(107.3087,240.2041,0.7546,0.7546);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#3D3737").s().p("AgcA7IhEgmQgIgEgBgGQgBgHAHgEIBcg7QAHgDAKAAQALgBAIAFIBEAlQAIAFABAGQABAHgHADIhdA7QgHAFgJAAQgLAAgIgFg");
	this.shape_26.setTransform(119.4956,232.3939,0.7546,0.7546);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#3D3737").s().p("AgcA7IhEgmQgIgEgBgGQgBgHAHgEIBcg6QAHgFAKAAQALAAAIAFIBEAmQAIAEABAGQABAHgHADIhdA7QgGAFgKAAQgLgBgIgEg");
	this.shape_27.setTransform(131.6825,224.6025,0.7546,0.7546);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3D3737").s().p("AgcA7IhEgmQgIgEgBgGQgBgHAHgEIBcg6QAHgFAKAAQALAAAIAFIBEAmQAIAEABAHQABAGgHADIhdA7QgGAFgKAAQgKAAgJgFg");
	this.shape_28.setTransform(143.8694,216.7923,0.7546,0.7546);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#3D3737").s().p("AgcA7IhEgmQgIgEgBgGQgBgHAHgEIBcg6QAHgFAKABQAKAAAJAEIBEAmQAIAEABAHQABAGgHADIhdA7QgGAFgKAAQgKAAgJgFg");
	this.shape_29.setTransform(156.0563,208.9991,0.7546,0.7546);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#3D3737").s().p("AgcA7IhEglQgIgFgBgGQgBgHAHgEIBdg6QAGgFAKAAQALABAIAEIBEAmQAIAEABAHQABAFgHAEIhdA8QgHADgJAAQgLABgIgFg");
	this.shape_30.setTransform(168.2433,201.1908,0.7546,0.7546);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#3D3737").s().p("AgcA7IhEglQgIgFgBgGQgBgHAHgEIBdg6QAGgEAKgBQALABAIAEIBEAmQAIAEABAGQABAHgHADIhdA8QgHADgJAAQgLABgIgFg");
	this.shape_31.setTransform(180.4302,193.3806,0.7546,0.7546);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#3D3737").s().p("AgcA7IhEgmQgIgEgBgGQgBgGAHgFIBdg6QAGgEAKAAQALAAAIAEIBEAmQAIAEABAHQABAGgHADIhdA8QgHAEgJAAQgLgBgIgEg");
	this.shape_32.setTransform(60.1611,257.7487,0.7546,0.7546);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#3D3737").s().p("AgcA7IhEgmQgIgEgBgGQgBgHAHgEIBdg6QAGgFAKAAQALAAAIAFIBEAmQAIAEABAHQABAGgHADIhdA7QgGAFgKAAQgKAAgJgFg");
	this.shape_33.setTransform(72.3636,249.9574,0.7546,0.7546);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#3D3737").s().p("AgcA7IhEgmQgIgEgBgGQgBgHAHgEIBdg6QAGgFAKABQAKAAAJAEIBEAmQAIAEABAHQABAGgHADIhdA7QgGAFgKAAQgKAAgJgFg");
	this.shape_34.setTransform(84.5505,242.1641,0.7546,0.7546);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#3D3737").s().p("AgcA7IhEglQgIgFgBgGQgBgHAHgEIBdg6QAGgEAKgBQALAAAIAFIBEAlQAIAFABAGQABAHgHADIhcA7QgHAFgKAAQgKAAgJgFg");
	this.shape_35.setTransform(96.7374,234.3558,0.7546,0.7546);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#3D3737").s().p("AgcA7IhEglQgIgFgBgGQgBgGAHgFIBdg6QAGgFAKAAQALAAAIAFIBEAlQAIAFABAGQABAHgHADIhcA7QgHAEgKABQgLAAgIgFg");
	this.shape_36.setTransform(108.9243,226.5456,0.7546,0.7546);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#3D3737").s().p("AgcA7IhEgmQgIgEgBgGQgBgHAHgEIBdg6QAGgFAKAAQALAAAIAFIBEAmQAIAEABAGQABAHgHADIhcA7QgHAFgKAAQgKgBgJgEg");
	this.shape_37.setTransform(121.1112,218.7543,0.7546,0.7546);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#3D3737").s().p("AgcA7IhEgmQgIgEgBgGQgBgHAHgEIBdg6QAGgFAKAAQALABAIAEIBEAmQAIAEABAHQABAGgHADIhcA7QgHAFgKAAQgKAAgJgFg");
	this.shape_38.setTransform(133.2982,210.9441,0.7546,0.7546);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#3D3737").s().p("AgcA7IhEgmQgIgEgBgHQgBgGAHgEIBdg7QAGgEAKAAQALABAIAEIBEAmQAIAEABAHQABAFgHAEIhcA7QgHAEgKAAQgKAAgJgEg");
	this.shape_39.setTransform(145.4851,203.1528,0.7546,0.7546);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#3D3737").s().p("AgcA7IhEgmQgIgEgBgGQgBgHAHgEIBdg6QAGgEAKgBQALABAIAEIBEAmQAIAEABAHQABAFgHAEIhcA8QgHADgKAAQgLAAgIgEg");
	this.shape_40.setTransform(157.672,195.3426,0.7546,0.7546);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#3D3737").s().p("AgcA7IhEgmQgIgEgBgGQgBgHAHgEIBdg6QAGgFAKAAQAKAAAJAFIBEAmQAIAEABAGQABAHgHADIhdA7QgGAFgKAAQgLgBgIgEg");
	this.shape_41.setTransform(169.8623,187.5513,0.7546,0.7546);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#3D3737").s().p("AgcA7IhEgmQgIgEgBgGQgBgHAHgEIBcg6QAHgEAKgBQALABAIAEIBEAmQAIAEABAHQABAGgHADIhdA8QgHADgJAAQgLAAgIgEg");
	this.shape_42.setTransform(48.6001,251.3723,0.7546,0.7546);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#3D3737").s().p("AgcA7IhEgmQgIgEgBgGQgBgHAHgEIBcg6QAHgFAKAAQALAAAIAFIBEAmQAIAEABAGQABAHgHADIhdA7QgGAFgKAAQgKgBgJgEg");
	this.shape_43.setTransform(60.7871,243.5809,0.7546,0.7546);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#3D3737").s().p("AgcA7IhEgmQgIgEgBgGQgBgHAHgEIBdg6QAGgFAKAAQAKABAJAEIBEAmQAIAEABAHQABAGgHADIhdA7QgGAFgKAAQgKAAgJgFg");
	this.shape_44.setTransform(72.974,235.7707,0.7546,0.7546);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#3D3737").s().p("AgcA7IhEgmQgIgEgBgGQgBgHAHgEIBdg6QAGgEAKAAQALgBAIAFIBEAlQAIAFABAGQABAHgHADIhdA7QgGAFgKAAQgKAAgJgFg");
	this.shape_45.setTransform(85.1609,227.9794,0.7546,0.7546);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#3D3737").s().p("AgcA7IhEglQgIgFgBgGQgBgHAHgEIBdg6QAGgFAKABQALgBAIAFIBEAlQAIAFABAGQABAHgHADIhdA7QgHAEgJABQgLAAgIgFg");
	this.shape_46.setTransform(97.3787,220.1692,0.7546,0.7546);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#3D3737").s().p("AgcA7IhEgmQgIgEgBgGQgBgHAHgEIBdg6QAGgFAKAAQALAAAIAFIBEAmQAIAEABAGQABAHgHADIhdA7QgGAFgKAAQgKgBgJgEg");
	this.shape_47.setTransform(109.5657,212.3779,0.7546,0.7546);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#3D3737").s().p("AgcA7IhEgmQgIgEgBgGQgBgHAHgEIBdg6QAGgFAKAAQALAAAIAFIBEAmQAIAEABAHQABAGgHADIhdA7QgGAFgKAAQgKAAgJgFg");
	this.shape_48.setTransform(121.7527,204.5677,0.7546,0.7546);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#3D3737").s().p("AgcA7IhEglQgIgFgBgHQgBgGAHgEIBdg6QAGgFAKAAQALABAIAEIBEAmQAIAEABAGQABAGgHAEIhcA7QgHAFgKgBQgKABgJgFg");
	this.shape_49.setTransform(133.9396,196.7764,0.7546,0.7546);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#3D3737").s().p("AgcA7IhEglQgIgFgBgGQgBgHAHgEIBdg6QAGgFAKAAQALABAIAEIBEAmQAIAEABAHQABAFgHAEIhcA8QgHADgKAAQgLABgIgFg");
	this.shape_50.setTransform(146.1265,188.9662,0.7546,0.7546);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#3D3737").s().p("AgcA7IhEgmQgIgEgBgGQgBgHAHgEIBdg6QAGgFAKAAQALAAAIAFIBEAlQAIAFABAGQABAHgHADIhcA7QgHAFgKAAQgKgBgJgEg");
	this.shape_51.setTransform(158.3134,181.1748,0.7546,0.7546);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#3D3737").s().p("AgcA7IhEgmQgIgEgBgGQgBgHAHgEIBdg6QAGgFAKAAQALAAAIAFIBEAlQAIAFABAGQABAHgHADIhcA7QgHAFgKAAQgKgBgJgEg");
	this.shape_52.setTransform(158.3134,181.1748,0.7546,0.7546);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#3D3737").s().p("AgcA7IhEgmQgIgEgBgGQgBgHAHgEIBdg6QAGgFAKAAQALABAIAEIBEAmQAIAEABAHQABAGgHADIhcA7QgHAFgKAAQgKAAgJgFg");
	this.shape_53.setTransform(227.7374,191.2488,0.7546,0.7546);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#3D3737").s().p("AgcA7IhEgmQgIgEgBgGQgBgHAHgEIBdg6QAGgFAKABQALAAAIAEIBEAmQAIAEABAHQABAGgHADIhcA7QgHAFgKAAQgKAAgJgFg");
	this.shape_54.setTransform(193.2895,171.8347,0.7546,0.7546);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#3D3737").s().p("Ah2BpIgwgbQgNgHgBgJQgBgKAKgGIDsiWQAKgHAQAAQAQAAAMAHIAxAbQAMAHABAIQABAKgKAGIjrCXQgLAHgQAAQgQAAgMgHg");
	this.shape_55.setTransform(176.2728,169.6859,0.7546,0.7546);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#E7E7E8").s().p("ApONTQgfAAgXgNIrJmKQgYgNgCgSQgCgSATgNIdzzEQATgMAfAAQAfAAAXANILJGKQAXAMADATQADASgUAMI9zTEQgTANgdAAIgCAAg");
	this.shape_56.setTransform(137.5651,221.3018,0.7546,0.7546);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FDFFFF").s().p("AmVQoI1FrpQgggSgEgZQgEgZAcgSIfr0RQAbgRArAAQArAAAgASIVFLpQAhASADAZQAEAZgcASI/qURQgcARgrAAQgrAAgggSg");
	this.shape_57.setTransform(146.6581,225.0553,0.7546,0.7546);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#E7E7E8").s().p("AlYRUQgsAAghgTI1er2QgigTgDgZQgEgaAdgTMAgggUzQAcgSAsAAQAsABAhASIVeL3QAhASAEAaQAEAagdASMgggAUzQgbASgrAAIgCAAg");
	this.shape_58.setTransform(146.7754,226.2632,0.7546,0.7546);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,285.2,309.9), null);


(lib.Symbol9_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0CB7F").s().p("AgzA0IAAhnIBnAAIAABng");
	this.shape_1.setTransform(5.175,5.175);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9_1, new cjs.Rectangle(0,0,10.4,10.4), null);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#AC9CCB").s().p("AgvAwIAAhfIBfAAIAABfg");
	this.shape.setTransform(4.75,4.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,9.5,9.5), null);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#AC9CCB").s().p("Ag2A3IAAhtIBtAAIAABtg");
	this.shape.setTransform(5.5,5.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,11,11), null);


(lib.Symbol6_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#AC9CCB").s().p("AgmAnIAAhNIBNAAIAABNg");
	this.shape_3.setTransform(3.875,3.875);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6_1, new cjs.Rectangle(0,0,7.8,7.8), null);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#AC9CCB").s().p("Ag3A4IAAhvIBvAAIAABvg");
	this.shape.setTransform(5.575,5.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,11.2,11.2), null);


(lib.Symbol4_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AC9CCB").s().p("AhSBSIAAikICkAAIAACkg");
	this.shape_2.setTransform(8.25,8.25);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4_1, new cjs.Rectangle(0,0,16.5,16.5), null);


(lib.Symbol3_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0CB7F").s().p("AhaAAIBahaIBbBaIhbBag");
	this.shape_1.setTransform(9.075,9.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3_1, new cjs.Rectangle(0,0,18.2,18.1), null);


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
	this.shape.graphics.lf(["rgba(240,203,129,0.698)","rgba(240,203,129,0)"],[0,0.859],-286.6,-282.7,182.4,-0.1).s().p("EgsegrnIgGgHQgOgaAXgDIAJgBMBY9gHXMggWBnHg");
	this.shape.setTransform(0.4984,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#F0CB81","rgba(240,203,129,0)"],[0,0.859],-7.3,0.3,0.2,0).s().p("AgTBCIgDgNIAQgzIAGAIIgSA4gAALg3IAKgKIABAAIgMAnIgIABg");
	this.shape_1.setTransform(-284.1,-280.15);

	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(270.4,-116.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-286.3,-329.9,572.7,659.9);


(lib.Symbol17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_11
	this.instance = new lib.Symbol9_1();
	this.instance.setTransform(367.4,432.65,1,1,0,0,0,5.2,5.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).wait(1).to({rotation:-49.6552,x:284.35,y:471.75},0).wait(1).to({rotation:-99.3103,x:190.45,y:491},0).wait(1).to({rotation:-148.9655,x:201.35,y:409.95},0).wait(1).to({rotation:-198.6207,x:217.1,y:389.2},0).wait(1).to({rotation:-248.2759,x:243.65,y:375.85},0).wait(1).to({rotation:-297.931,x:271.95,y:377},0).wait(1).to({rotation:-347.5862,x:298.7,y:380.05},0).wait(1).to({rotation:-397.2414,x:319.3,y:382.8},0).wait(1).to({rotation:-446.8966,x:292.55,y:367},0).wait(1).to({rotation:-496.5517,x:271.3,y:354.45},0).wait(1).to({rotation:-546.2069,x:245.2,y:344.4},0).wait(1).to({rotation:-595.8621,x:222.3,y:328.35},0).wait(1).to({rotation:-645.5172,x:207,y:305.1},0).wait(1).to({rotation:-695.1724,x:202.2,y:277.6},0).wait(1).to({rotation:-744.8276,x:205.85,y:249.75},0).wait(1).to({rotation:-794.4828,x:214.5,y:223.05},0).wait(1).to({rotation:-844.1379,x:226.2,y:197.55},0).wait(1).to({rotation:-893.7931,x:239.9,y:173.15},0).wait(1).to({rotation:-943.4483,x:255,y:149.5},0).wait(1).to({rotation:-993.1034,x:271.3,y:126.65},0).wait(1).to({rotation:-1042.7586,x:267.75,y:99.8},0).wait(1).to({rotation:-1092.4138,x:260.95,y:73.55},0).wait(1).to({rotation:-1142.069,x:249.7,y:48.85},0).wait(1).to({rotation:-1191.7241,x:232.55,y:27.9},0).wait(1).to({rotation:-1241.3793,x:209.55,y:13.55},0).wait(1).to({rotation:-1291.0345,x:183.3,y:7.1},0).wait(1).to({rotation:-1340.6897,x:156.2,y:7.05},0).wait(1).to({rotation:-1390.3448,x:129.5,y:11.35},0).wait(1).to({rotation:-1440,x:103.45,y:18.65},0).wait(1));

	// Layer_5_copy_copy
	this.instance_1 = new lib.Symbol3_1();
	this.instance_1.setTransform(289.05,452.25,1,1,0,0,0,9.1,9.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).wait(1).to({rotation:30.6383,x:303.8,y:469.4,alpha:0.1667},0).wait(1).to({rotation:61.2766,x:316.55,y:488.05,alpha:0.3333},0).wait(1).to({rotation:91.9149,x:321.95,y:509.55,alpha:0.5},0).wait(1).to({rotation:122.5532,x:304,y:520.9,alpha:0.6667},0).wait(1).to({rotation:153.1915,x:281.4,y:520.7,alpha:0.8333},0).wait(1).to({rotation:183.8298,x:258.95,y:517.25,alpha:1},0).wait(1).to({rotation:214.4681,x:244.95,y:509.15},0).wait(1).to({rotation:245.1064,x:231.3,y:500.3},0).wait(1).to({rotation:275.7447,x:218,y:491.1},0).wait(1).to({rotation:306.383,x:204.9,y:481.55},0).wait(1).to({rotation:337.0213,x:191.95,y:471.8},0).wait(1).to({rotation:367.6596,x:179.2,y:461.65},0).wait(1).to({rotation:398.2979,x:166.65,y:451.35},0).wait(1).to({rotation:428.9362,x:154.35,y:440.6},0).wait(1).to({rotation:459.5745,x:142.5,y:429.55},0).wait(1).to({rotation:490.2128,x:130.85,y:418.05},0).wait(1).to({rotation:520.8511,x:119.8,y:406.2},0).wait(1).to({rotation:551.4894,x:109.35,y:393.75},0).wait(1).to({rotation:582.1277,x:99.85,y:380.55},0).wait(1).to({rotation:612.766,x:91.7,y:366.55},0).wait(1).to({rotation:643.4043,x:85.85,y:351.4},0).wait(1).to({rotation:674.0426,x:93.75,y:341.75},0).wait(1).to({rotation:704.6809,x:109.4,y:337.45},0).wait(1).to({rotation:735.3191,x:125.15,y:333.45},0).wait(1).to({rotation:765.9574,x:140.9,y:329.9},0).wait(1).to({rotation:796.5957,x:156.8,y:326.65},0).wait(1).to({rotation:827.234,x:172.15,y:321.5},0).wait(1).to({rotation:857.8723,x:185.95,y:312.95},0).wait(1).to({rotation:888.5106,x:196.15,y:300.4},0).wait(1).to({rotation:919.1489,x:204.3,y:286.45},0).wait(1).to({rotation:949.7872,x:212.65,y:272.5},0).wait(1).to({rotation:980.4255,x:213,y:262.05},0).wait(1).to({rotation:1011.0638,x:201.1,y:273.1},0).wait(1).to({rotation:1041.7021,x:188.85,y:283.75},0).wait(1).to({rotation:1072.3404,x:175.25,y:292.2},0).wait(1).to({rotation:1102.9787,x:160.85,y:284.8},0).wait(1).to({rotation:1133.617,x:146.9,y:276.35},0).wait(1).to({rotation:1164.2553,x:133.2,y:267.5},0).wait(1).to({rotation:1194.8936,x:119.75,y:258.25},0).wait(1).to({rotation:1225.5319,x:107.4,y:247.8},0).wait(1).to({rotation:1256.1702,x:98,y:234.5},0).wait(1).to({rotation:1286.8085,x:90.9,y:219.95},0).wait(1).to({rotation:1317.4468,x:85.35,y:204.7},0).wait(1).to({rotation:1348.0851,x:81.15,y:189},0).wait(1).to({rotation:1378.7234,x:77.95,y:173.05},0).wait(1).to({rotation:1409.3617,x:75.95,y:157.05},0).wait(1).to({rotation:1440,x:75.5,y:140.85},0).to({_off:true},1).wait(7));

	// Layer_5_copy
	this.instance_2 = new lib.Symbol3_1();
	this.instance_2.setTransform(264.95,406.6,1,1,0,0,0,9.1,9.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).wait(1).to({rotation:41.1429,x:268.9,y:396,alpha:0.2},0).wait(1).to({rotation:82.2857,x:272.1,y:385.05,alpha:0.4},0).wait(1).to({rotation:123.4286,x:274.35,y:373.95,alpha:0.6},0).wait(1).to({rotation:164.5714,x:275.55,y:362.65,alpha:0.8},0).wait(1).to({rotation:205.7143,x:275.4,y:351.25,alpha:1},0).wait(1).to({rotation:246.8571,x:270.05,y:342.35},0).wait(1).to({rotation:288,x:264.45,y:333.65},0).wait(1).to({rotation:329.1429,x:258.55,y:325.2},0).wait(1).to({rotation:370.2857,x:252.35,y:316.85},0).wait(1).to({rotation:411.4286,x:245.75,y:308.8},0).wait(1).to({rotation:452.5714,x:238.9,y:301},0).wait(1).to({rotation:493.7143,x:231.65,y:293.45},0).wait(1).to({rotation:534.8571,x:224.15,y:286.25},0).wait(1).to({rotation:576,x:216.25,y:279.5},0).wait(1).to({rotation:617.1429,x:208,y:273.35},0).wait(1).to({rotation:658.2857,x:199.35,y:267.6},0).wait(1).to({rotation:699.4286,x:190.3,y:262.5},0).wait(1).to({rotation:740.5714,x:180.9,y:258.05},0).wait(1).to({rotation:781.7143,x:169.5,y:251.2},0).wait(1).to({rotation:822.8571,x:156.65,y:247.45},0).wait(1).to({rotation:864,x:143.75,y:243.95},0).wait(1).to({rotation:905.1429,x:131.7,y:238.1},0).wait(1).to({rotation:946.2857,x:120.15,y:231.3},0).wait(1).to({rotation:987.4286,x:109.05,y:223.95},0).wait(1).to({rotation:1028.5714,x:98.35,y:215.85},0).wait(1).to({rotation:1069.7143,x:88.2,y:207.1},0).wait(1).to({rotation:1110.8571,x:79.3,y:197.15},0).wait(1).to({rotation:1152,x:72.15,y:185.8},0).wait(1).to({rotation:1193.1429,x:66.4,y:173.6},0).wait(1).to({rotation:1234.2857,x:61.8,y:161},0).wait(1).to({rotation:1275.4286,x:58.1,y:148.15},0).wait(1).to({rotation:1316.5714,x:55.2,y:135},0).wait(1).to({rotation:1357.7143,x:52.95,y:121.8},0).wait(1).to({rotation:1398.8571,x:51.6,y:108.5},0).wait(1).to({rotation:1440,x:51.4,y:95.2},0).wait(1));

	// Layer_9
	this.instance_3 = new lib.Symbol7();
	this.instance_3.setTransform(309.65,448.9,1,1,0,0,0,5.5,5.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({_off:false},0).wait(1).to({rotation:27,x:310.4,y:495.25},0).wait(1).to({rotation:54,x:297.3,y:522.35},0).wait(1).to({rotation:81,x:270.4,y:530.25},0).wait(1).to({rotation:108,x:229.6,y:518.9},0).wait(1).to({rotation:135,x:236.2,y:494.7},0).wait(1).to({rotation:162,x:241.8,y:471.45},0).wait(1).to({rotation:189,x:246.25,y:449.2},0).wait(1).to({rotation:216,x:249.7,y:427.95},0).wait(1).to({rotation:243,x:252.05,y:407.65},0).wait(1).to({rotation:270,x:253.35,y:388.3},0).wait(1).to({rotation:297,x:253.55,y:369.95},0).wait(1).to({rotation:324,x:252.75,y:352.5},0).wait(1).to({rotation:351,x:250.8,y:336.1},0).wait(1).to({rotation:378,x:247.85,y:320.65},0).wait(1).to({rotation:405,x:243.8,y:306.15},0).wait(1).to({rotation:432,x:238.7,y:292.6},0).wait(1).to({rotation:459,x:232.55,y:280},0).wait(1).to({rotation:486,x:225.3,y:268.35},0).wait(1).to({rotation:513,x:217,y:257.7},0).wait(1).to({rotation:540,x:207.65,y:248},0).wait(1).to({rotation:567,x:197.2,y:239.3},0).wait(1).to({rotation:594,x:185.7,y:231.5},0).wait(1).to({rotation:621,x:173.15,y:224.7},0).wait(1).to({rotation:648,x:159.5,y:218.85},0).wait(1).to({rotation:675,x:139.8,y:200.95},0).wait(1).to({rotation:702,x:121.85,y:185.55},0).wait(1).to({rotation:729,x:105.6,y:172.55},0).wait(1).to({rotation:756,x:91,y:162.1},0).wait(1).to({rotation:783,x:78.2,y:154.05},0).wait(1).to({rotation:810,x:67.05,y:148.5},0).wait(1).to({rotation:837,x:57.65,y:145.45},0).wait(1).to({rotation:864,x:49.9,y:144.85},0).wait(1).to({rotation:891,x:43.9,y:146.65},0).wait(1).to({rotation:918,x:39.6,y:151},0).wait(1).to({rotation:945,x:37,y:157.8},0).wait(1).to({rotation:972,x:36.15,y:167.05},0).wait(1).to({rotation:999,x:36.95,y:178.75},0).wait(1).to({rotation:1026,x:39.45,y:193.05},0).wait(1).to({rotation:1053,x:43.7,y:209.7},0).wait(1).to({rotation:1080,x:49.65,y:228.9},0).to({_off:true},1).wait(4));

	// Layer_8
	this.instance_4 = new lib.Symbol5();
	this.instance_4.setTransform(308.35,458.4,1,1,0,0,0,5.5,5.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).wait(1).to({regX:5.6,regY:5.6,x:293.9,y:459.3},0).wait(1).to({x:279.45,y:458.25},0).wait(1).to({x:265.6,y:453.9},0).wait(1).to({x:254.8,y:444.45},0).wait(1).to({x:250.05,y:430.85},0).wait(1).to({x:250.4,y:416.35},0).wait(1).to({x:253.6,y:402.2},0).wait(1).to({x:258.45,y:388.5},0).wait(1).to({x:265.25,y:371.75},0).wait(1).to({x:271.2,y:354.7},0).wait(1).to({x:276.8,y:337.45},0).wait(1).to({x:282,y:320.15},0).wait(1).to({x:286.8,y:302.75},0).wait(1).to({x:291.3,y:285.2},0).wait(1).to({x:295.35,y:267.6},0).wait(1).to({x:298.95,y:249.9},0).wait(1).to({x:301.95,y:232.05},0).wait(1).to({x:304.15,y:214.1},0).wait(1).to({x:302.95,y:196.1},0).wait(1).to({x:297.2,y:179},0).wait(1).to({x:287.15,y:164.05},0).wait(1).to({x:273.85,y:151.8},0).wait(1).to({x:258.45,y:142.4},0).wait(1).to({x:241.75,y:135.45},0).wait(1).to({x:224.3,y:130.85},0).wait(1).to({x:206.4,y:128.45},0).wait(1).to({x:188.35,y:128.4},0).wait(1).to({x:181.1,y:132.05},0).wait(1).to({x:173.6,y:135.15},0).wait(1).to({x:166,y:137.9},0).wait(1).to({x:158.25,y:140.35},0).wait(1).to({x:150.4,y:142.45},0).wait(1).to({x:142.5,y:144.2},0).wait(1).to({x:134.5,y:145.6},0).wait(1).to({x:126.45,y:146.6},0).wait(1).to({x:118.35,y:147},0).wait(1).to({x:110.25,y:146.7},0).wait(1).to({x:102.25,y:145.45},0).wait(1).to({x:94.6,y:142.85},0).wait(1).to({x:87.7,y:138.65},0).wait(1).to({x:81.25,y:133.75},0).wait(1).to({x:75.15,y:128.35},0).wait(1).to({x:69.45,y:122.6},0).wait(1).to({x:64.15,y:116.45},0).wait(1).to({x:59.25,y:110},0).wait(1).to({x:54.85,y:103.2},0).wait(1).to({x:51.1,y:96},0).wait(1).to({x:48.4,y:88.4},0).to({_off:true},1).wait(7));

	// Layer_7
	this.instance_5 = new lib.Symbol6_1();
	this.instance_5.setTransform(298.4,414.9,1,1,0,0,0,3.9,3.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(16).to({_off:false},0).wait(1).to({x:320.35,y:401.2},0).wait(1).to({x:338.25,y:388.6},0).wait(1).to({x:351.95,y:377},0).wait(1).to({x:361.3,y:366.5},0).wait(1).to({x:366.3,y:357.15},0).wait(1).to({x:366.85,y:349},0).wait(1).to({x:362.95,y:342},0).wait(1).to({x:354.6,y:336.2},0).wait(1).to({x:341.85,y:331.6},0).wait(1).to({x:324.85,y:328.2},0).wait(1).to({x:303.65,y:325.95},0).wait(1).to({x:278.4,y:324.9},0).wait(1).to({x:263.7,y:340.35},0).wait(1).to({x:250.1,y:354.15},0).wait(1).to({x:237.6,y:366.25},0).wait(1).to({x:226.15,y:376.65},0).wait(1).to({x:215.7,y:385.4},0).wait(1).to({x:206.3,y:392.55},0).wait(1).to({x:197.9,y:398.1},0).wait(1).to({x:190.45,y:402.1},0).wait(1).to({x:184.05,y:404.45},0).wait(1).to({x:178.6,y:405.25},0).wait(1).to({x:174.15,y:404.45},0).wait(1).to({x:170.65,y:402.1},0).wait(1).to({x:168.1,y:398.15},0).wait(1).to({x:166.6,y:392.6},0).wait(1).to({x:166.05,y:385.4},0).wait(1).to({x:166.5,y:376.65},0).wait(1).to({x:167.9,y:366.25},0).wait(1).to({x:170.35,y:354.15},0).wait(1).to({x:173.85,y:340.35},0).wait(1).to({x:178.4,y:324.9},0).wait(1).to({x:189.4,y:304.9},0).wait(1).to({x:196.95,y:286},0).wait(1).to({x:201.05,y:268.15},0).wait(1).to({x:201.65,y:251.4},0).wait(1).to({x:198.8,y:235.7},0).wait(1).to({x:192.4,y:221.15},0).wait(1).to({x:182.55,y:207.65},0).wait(1).to({x:169.2,y:195.3},0).wait(1).to({x:152.4,y:184.05},0).wait(1).to({x:132.15,y:173.9},0).wait(1).to({x:108.45,y:164.9},0).wait(1));

	// Layer_6
	this.instance_6 = new lib.Symbol4_1();
	this.instance_6.setTransform(348.9,393.55,1,1,0,0,0,8.2,8.2);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({_off:false},0).wait(1).to({rotation:-20.7692,x:342.35,y:386.4,alpha:0.1},0).wait(1).to({rotation:-41.5385,x:333.8,y:382.2,alpha:0.2},0).wait(1).to({rotation:-62.3077,x:324.75,y:384.8,alpha:0.3},0).wait(1).to({rotation:-83.0769,x:318.2,y:391.8,alpha:0.4},0).wait(1).to({rotation:-103.8462,x:313.25,y:400.15,alpha:0.5},0).wait(1).to({rotation:-124.6154,x:309.3,y:408.9,alpha:0.6},0).wait(1).to({rotation:-145.3846,x:305.95,y:417.95,alpha:0.7},0).wait(1).to({rotation:-166.1538,x:303,y:427.1,alpha:0.8},0).wait(1).to({rotation:-186.9231,x:300.35,y:436.3,alpha:0.9},0).wait(1).to({rotation:-207.6923,x:297.95,y:445.65,alpha:1},0).wait(1).to({rotation:-228.4615,x:289.75,y:455.25},0).wait(1).to({rotation:-249.2308,x:280.9,y:464.2},0).wait(1).to({rotation:-270,x:271.05,y:472.2},0).wait(1).to({rotation:-290.7692,x:260.2,y:478.65},0).wait(1).to({rotation:-311.5385,x:248.3,y:482.85},0).wait(1).to({rotation:-332.3077,x:235.7,y:483.85},0).wait(1).to({rotation:-353.0769,x:223.35,y:481.35},0).wait(1).to({rotation:-373.8462,x:211.95,y:475.8},0).wait(1).to({rotation:-394.6154,x:201.85,y:468.25},0).wait(1).to({rotation:-415.3846,x:192.85,y:459.4},0).wait(1).to({rotation:-436.1538,x:184.8,y:449.7},0).wait(1).to({rotation:-456.9231,x:177.55,y:439.35},0).wait(1).to({rotation:-477.6923,x:170.85,y:428.7},0).wait(1).to({rotation:-498.4615,x:164.7,y:417.6},0).wait(1).to({rotation:-519.2308,x:155.95,y:411.15},0).wait(1).to({rotation:-540,x:147.35,y:401.85},0).wait(1).to({rotation:-560.7692,x:142.65,y:393.95},0).wait(1).to({rotation:-581.5385,x:137.35,y:384.3},0).wait(1).to({rotation:-602.3077,x:132.4,y:374.55},0).wait(1).to({rotation:-623.0769,x:127.45,y:364.7},0).wait(1).to({rotation:-643.8462,x:122.75,y:354.8},0).wait(1).to({rotation:-664.6154,x:118.1,y:344.85},0).wait(1).to({rotation:-685.3846,x:113.75,y:335.1},0).wait(1).to({rotation:-706.1538,x:106.25,y:326.8},0).wait(1).to({rotation:-726.9231,x:97.7,y:320},0).wait(1).to({rotation:-747.6923,x:88.3,y:314.35},0).wait(1).to({rotation:-768.4615,x:78.35,y:309.9},0).wait(1).to({rotation:-789.2308,x:67.75,y:307.05},0).wait(1).to({rotation:-810,x:56.95,y:305.9},0).wait(1).to({rotation:-830.7692,x:46,y:305.4},0).wait(1).to({rotation:-851.5385,x:35.1,y:305.45},0).wait(1).to({rotation:-872.3077,x:28.15,y:297.45},0).wait(1).to({rotation:-893.0769,x:24.3,y:287.2},0).wait(1).to({rotation:-913.8462,x:21.5,y:276.6},0).wait(1).to({rotation:-934.6154,x:19.25,y:265.85},0).wait(1).to({rotation:-955.3846,x:17.7,y:255},0).wait(1).to({rotation:-976.1538},0).wait(1).to({rotation:-996.9231,x:17.65},0).wait(1).to({rotation:-1017.6923,y:254.95},0).wait(1).to({rotation:-1038.4615,x:17.6,y:255},0).wait(1).to({rotation:-1059.2308,y:254.95},0).wait(1).to({rotation:-1080,y:255},0).to({_off:true},1).wait(5));

	// Layer_10_copy
	this.instance_7 = new lib.Symbol8();
	this.instance_7.setTransform(351.25,499.75,1,1,0,0,0,4.8,4.8);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(16).to({_off:false},0).wait(1).to({x:369.9,y:480.75},0).wait(1).to({x:382.95,y:463.6},0).wait(1).to({x:390.4,y:448.3},0).wait(1).to({x:392.4,y:434.8},0).wait(1).to({x:388.95,y:423},0).wait(1).to({x:380,y:412.95},0).wait(1).to({x:365.6,y:404.6},0).wait(1).to({x:345.7,y:397.95},0).wait(1).to({x:320.15,y:393.05},0).wait(1).to({x:288.95,y:389.9},0).wait(1).to({x:261.4,y:399.1},0).wait(1).to({x:233.9,y:407.15},0).wait(1).to({x:207.6,y:413},0).wait(1).to({x:184.75,y:415.1},0).wait(1).to({x:168.75,y:411.8},0).wait(1).to({x:162.2,y:402.6},0).wait(1).to({x:164.45,y:389.05},0).wait(1).to({x:172.8,y:373.25},0).wait(1).to({x:184.8,y:356.6},0).wait(1).to({x:198.9,y:339.9},0).wait(1).to({x:217.15,y:316.15},0).wait(1).to({x:227.6,y:297},0).wait(1).to({x:233.2,y:280.35},0).wait(1).to({x:235.2,y:265.35},0).wait(1).to({x:234.1,y:251.4},0).wait(1).to({x:230.2,y:238.25},0).wait(1).to({x:223.6,y:225.7},0).wait(1).to({x:214.15,y:213.45},0).wait(1).to({x:201.6,y:201.45},0).wait(1).to({x:185.4,y:189.4},0).wait(1).to({x:164.55,y:177.15},0).wait(1).to({x:137.25,y:164.25},0).wait(1).to({x:98.95,y:149.9},0).to({_off:true},1).wait(10));

	// Layer_10
	this.instance_8 = new lib.Symbol8();
	this.instance_8.setTransform(355.5,434.2,1,1,0,0,0,4.8,4.8);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(29).to({_off:false},0).wait(1).to({x:375.75,y:413.35},0).wait(1).to({x:389.25,y:394.65},0).wait(1).to({x:395.9,y:378.15},0).wait(1).to({x:395.8,y:363.8},0).wait(1).to({x:388.85,y:351.6},0).wait(1).to({x:375.15,y:341.55},0).wait(1).to({x:354.65,y:333.65},0).wait(1).to({x:327.3,y:327.9},0).wait(1).to({x:293.2,y:324.35},0).wait(1).to({x:276.2,y:328.5},0).wait(1).to({x:258.5,y:331.5},0).wait(1).to({x:240.6,y:332.35},0).wait(1).to({x:224,y:329.7},0).wait(1).to({x:211.25,y:322.6},0).wait(1).to({x:203.8,y:311.95},0).wait(1).to({x:200.95,y:299.55},0).wait(1).to({x:201.1,y:286.8},0).wait(1).to({x:203.15,y:274.35},0).wait(1).to({x:222.6,y:248.65},0).wait(1).to({x:233.15,y:228.3},0).wait(1).to({x:238.3,y:210.75},0).wait(1).to({x:239.4,y:194.9},0).wait(1).to({x:237.05,y:180.25},0).wait(1).to({x:231.5,y:166.35},0).wait(1).to({x:222.75,y:153.05},0).wait(1).to({x:210.5,y:140},0).wait(1).to({x:194.25,y:127},0).wait(1).to({x:172.95,y:113.85},0).wait(1).to({x:144.4,y:99.95},0).wait(1).to({x:103.2,y:84.35},0).wait(1));

	// Layer_5
	this.instance_9 = new lib.Symbol3_1();
	this.instance_9.setTransform(303.4,496.75,1,1,0,0,0,9.1,9.1);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(8).to({_off:false},0).wait(1).to({rotation:33.4884,x:306.75,y:487.9,alpha:0.1667},0).wait(1).to({rotation:66.9767,x:309.55,y:478.95,alpha:0.3333},0).wait(1).to({rotation:100.4651,x:311.8,y:469.75,alpha:0.5},0).wait(1).to({rotation:133.9535,x:313.35,y:460.4,alpha:0.6667},0).wait(1).to({rotation:167.4419,x:314.05,y:450.9,alpha:0.8333},0).wait(1).to({rotation:200.9302,x:313.9,y:441.45,alpha:1},0).wait(1).to({rotation:234.4186,x:312.65,y:432.15},0).wait(1).to({rotation:267.907,x:310.4,y:423.05},0).wait(1).to({rotation:301.3953,x:307.05,y:414.35},0).wait(1).to({rotation:334.8837,x:302.65,y:406.1},0).wait(1).to({rotation:368.3721,x:297.35,y:398.3},0).wait(1).to({rotation:401.8605,x:291.3,y:391.15},0).wait(1).to({rotation:435.3488,x:284.55,y:384.55},0).wait(1).to({rotation:468.8372,x:277.35,y:378.45},0).wait(1).to({rotation:502.3256,x:269.75,y:372.9},0).wait(1).to({rotation:535.814,x:261.85,y:367.75},0).wait(1).to({rotation:569.3023,x:253.7,y:363.15},0).wait(1).to({rotation:602.7907,x:245.4,y:358.9},0).wait(1).to({rotation:636.2791,x:236.85,y:355},0).wait(1).to({rotation:669.7674,x:228.2,y:351.45},0).wait(1).to({rotation:703.2558,x:219.35,y:348.2},0).wait(1).to({rotation:736.7442,x:210.8,y:342.5},0).wait(1).to({rotation:770.2326,x:201,y:339},0).wait(1).to({rotation:803.7209,x:190.2,y:336.9},0).wait(1).to({rotation:837.2093,x:181,y:333.65},0).wait(1).to({rotation:870.6977,x:171.7,y:329.05},0).wait(1).to({rotation:904.186,x:162.65,y:324},0).wait(1).to({rotation:937.6744,x:153.9,y:318.5},0).wait(1).to({rotation:971.1628,x:145.4,y:312.6},0).wait(1).to({rotation:1004.6512,x:137.25,y:306.35},0).wait(1).to({rotation:1038.1395,x:129.4,y:299.7},0).wait(1).to({rotation:1071.6279,x:121.95,y:292.5},0).wait(1).to({rotation:1105.1163,x:115.65,y:284.3},0).wait(1).to({rotation:1138.6047,x:110.35,y:275.4},0).wait(1).to({rotation:1172.093,x:105.8,y:266},0).wait(1).to({rotation:1205.5814,x:102,y:256.35},0).wait(1).to({rotation:1239.0698,x:98.8,y:246.45},0).wait(1).to({rotation:1272.5581,x:96.1,y:236.4},0).wait(1).to({rotation:1306.0465,x:93.9,y:226.35},0).wait(1).to({rotation:1339.5349,x:92.05,y:216.15},0).wait(1).to({rotation:1373.0233,x:90.7,y:205.9},0).wait(1).to({rotation:1406.5116,x:89.85,y:195.7},0).wait(1).to({rotation:1440,y:185.35},0).wait(5).to({_off:true},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400.6,536.5);


(lib.Symbol14 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol15();
	this.instance.setTransform(59.6,27.6,1,1,0,0,0,59.6,27.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:0.7142,x:60.05,y:27.2},0).wait(1).to({rotation:1.4285,x:60.6,y:26.8},0).wait(1).to({rotation:2.1427,x:61.05,y:26.35},0).wait(1).to({rotation:2.8569,x:61.55,y:25.85},0).wait(1).to({rotation:3.5712,x:62.1,y:25.45},0).wait(1).to({rotation:4.2854,x:62.6,y:25},0).wait(1).to({rotation:4.9996,x:63.05,y:24.6},0).wait(1).to({rotation:5.7139,x:63.55,y:24.15},0).wait(1).to({rotation:6.4281,x:64.05,y:23.7},0).wait(1).to({rotation:7.1423,x:64.55,y:23.3},0).wait(1).to({rotation:7.8566,x:65.1,y:22.85},0).wait(1).to({rotation:8.5708,x:65.6,y:22.45},0).wait(1).to({rotation:9.285,x:66.05,y:21.95},0).wait(1).to({rotation:9.9993,x:66.55,y:21.55},0).wait(1).to({rotation:10.7135,x:67.05,y:21.1},0).wait(1).to({rotation:11.4277,x:67.55,y:20.65},0).wait(1).to({rotation:12.142,x:68.05,y:20.25},0).wait(1).to({rotation:12.8562,x:68.55,y:19.75},0).wait(1).to({rotation:13.5704,x:69.05,y:19.4},0).wait(1).to({rotation:14.2847,x:69.6,y:18.9},0).wait(1).to({rotation:14.9989,x:70.05,y:18.45},0).wait(1).to({rotation:15.4173,x:70.15,y:18.05},0).wait(1).to({rotation:15.8357,x:70.2,y:17.65},0).wait(1).to({rotation:16.2541,x:70.25,y:17.25},0).wait(1).to({rotation:16.6725,x:70.4,y:16.85},0).wait(1).to({rotation:17.0908,x:70.45,y:16.4},0).wait(1).to({rotation:17.5092,x:70.55,y:16},0).wait(1).to({rotation:17.9276,x:70.6,y:15.55},0).wait(1).to({rotation:18.346,x:70.65,y:15.15},0).wait(1).to({rotation:18.7644,x:70.75,y:14.75},0).wait(1).to({rotation:19.1828,x:70.85,y:14.3},0).wait(1).to({rotation:19.6012,x:70.9,y:13.9},0).wait(1).to({rotation:20.0196,x:70.95,y:13.5},0).wait(1).to({rotation:20.4379,x:71,y:13.05},0).wait(1).to({rotation:20.8563,x:71.1,y:12.65},0).wait(1).to({rotation:21.2747,x:71.2,y:12.25},0).wait(1).to({rotation:21.6931,x:71.25,y:11.85},0).wait(1).to({rotation:22.1115,x:71.3,y:11.4},0).wait(1).to({rotation:22.5299,x:71.35,y:11},0).wait(1).to({rotation:22.9483,x:71.5,y:10.55},0).wait(1).to({rotation:23.3667,x:71.55,y:10.15},0).wait(1).to({rotation:23.785,x:71.6,y:9.75},0).wait(1).to({rotation:24.2034,x:71.7,y:9.3},0).wait(1).to({rotation:24.6218,x:71.8,y:8.9},0).wait(1).to({rotation:25.0402,y:8.5},0).wait(1).to({rotation:23.2516,x:70.95,y:9.85},0).wait(1).to({rotation:21.463,x:70.05,y:11.2},0).wait(1).to({rotation:19.6744,x:69.2,y:12.55},0).wait(1).to({rotation:17.8859,x:68.3,y:13.95},0).wait(1).to({rotation:16.0973,x:67.45,y:15.3},0).wait(1).to({rotation:14.3087,x:66.6,y:16.7},0).wait(1).to({rotation:12.5201,x:65.7,y:18.05},0).wait(1).to({rotation:10.7315,x:64.8,y:19.4},0).wait(1).to({rotation:8.9429,x:63.95,y:20.75},0).wait(1).to({rotation:7.1543,x:63.1,y:22.15},0).wait(1).to({rotation:5.3658,x:62.2,y:23.5},0).wait(1).to({rotation:3.5772,x:61.35,y:24.85},0).wait(1).to({rotation:1.7886,x:60.45,y:26.25},0).wait(1).to({rotation:0,x:59.6,y:27.6},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-40.2,124.8,97.30000000000001);


(lib.Symbol12 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol13();
	this.instance.setTransform(61,76.2,1,1,0,0,0,61,76.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:60.9,regY:76.3,rotation:-0.6585,x:60.35,y:76.7},0).wait(1).to({rotation:-1.317,x:59.75,y:77.15},0).wait(1).to({rotation:-1.9755,x:59.15,y:77.55},0).wait(1).to({rotation:-2.634,x:58.55,y:77.95},0).wait(1).to({rotation:-3.2925,x:58,y:78.4},0).wait(1).to({rotation:-3.951,x:57.35,y:78.85},0).wait(1).to({rotation:-4.6095,x:56.8,y:79.3},0).wait(1).to({rotation:-5.268,x:56.2,y:79.75},0).wait(1).to({rotation:-5.9265,x:55.6,y:80.15},0).wait(1).to({rotation:-6.585,x:55,y:80.55},0).wait(1).to({rotation:-7.2435,x:54.35,y:81},0).wait(1).to({rotation:-7.902,x:53.8,y:81.45},0).wait(1).to({rotation:-8.5605,x:53.2,y:81.9},0).wait(1).to({rotation:-9.219,x:52.6,y:82.3},0).wait(1).to({rotation:-9.8775,x:52.05,y:82.7},0).wait(1).to({rotation:-10.536,x:51.4,y:83.15},0).wait(1).to({rotation:-11.1945,x:50.85,y:83.6},0).wait(1).to({rotation:-10.1891,x:51.6,y:82.85},0).wait(1).to({rotation:-9.1836,x:52.35,y:82.05},0).wait(1).to({rotation:-8.1782,x:53.15,y:81.3},0).wait(1).to({rotation:-7.1727,x:53.9,y:80.55},0).wait(1).to({rotation:-6.1673,x:54.65,y:79.8},0).wait(1).to({rotation:-5.1618,x:55.4,y:79.05},0).wait(1).to({rotation:-4.1564,x:56.2,y:78.3},0).wait(1).to({rotation:-3.1509,x:56.95,y:77.55},0).wait(1).to({rotation:-2.1455,x:57.7,y:76.8},0).wait(1).to({rotation:-1.1401,x:58.5,y:76.05},0).wait(1).to({rotation:-0.1346,x:59.3,y:75.35},0).wait(1).to({rotation:0.8708,x:60,y:74.6},0).wait(1).to({rotation:1.8763,x:60.7,y:73.8},0).wait(1).to({rotation:2.8817,x:61.45,y:73.05},0).wait(1).to({rotation:3.8872,x:62.3,y:72.3},0).wait(1).to({rotation:4.8926,x:63.05,y:71.55},0).wait(1).to({rotation:5.898,x:63.8,y:70.8},0).wait(1).to({rotation:6.9035,x:64.6,y:70.05},0).wait(1).to({rotation:7.9089,x:65.3,y:69.3},0).wait(1).to({rotation:8.9144,x:66.1,y:68.6},0).wait(1).to({rotation:9.9198,x:66.85,y:67.8},0).wait(1).to({rotation:10.9253,x:67.65,y:67},0).wait(1).to({rotation:11.9307,x:68.45,y:66.3},0).wait(1).to({rotation:12.9362,x:69.15,y:65.5},0).wait(1).to({rotation:13.9416,x:69.9,y:64.75},0).wait(1).to({rotation:13.1215,x:69.4,y:65.4},0).wait(1).to({rotation:12.3014,x:68.85,y:66.1},0).wait(1).to({rotation:11.4813,x:68.35,y:66.75},0).wait(1).to({rotation:10.6612,x:67.8,y:67.5},0).wait(1).to({rotation:9.8411,x:67.25,y:68.2},0).wait(1).to({rotation:9.021,x:66.75,y:68.85},0).wait(1).to({rotation:8.2009,x:66.2,y:69.5},0).wait(1).to({rotation:7.3808,x:65.65,y:70.15},0).wait(1).to({rotation:6.5608,x:65.15,y:70.9},0).wait(1).to({rotation:5.7407,x:64.6,y:71.55},0).wait(1).to({rotation:4.9206,x:64.1,y:72.2},0).wait(1).to({rotation:4.1005,x:63.55,y:72.9},0).wait(1).to({rotation:3.2804,x:63,y:73.6},0).wait(1).to({rotation:2.4603,x:62.45,y:74.3},0).wait(1).to({rotation:1.6402,x:61.9,y:74.95},0).wait(1).to({rotation:0.8201,x:61.4,y:75.65},0).wait(1).to({rotation:0,x:60.9,y:76.3},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.2,-11.8,149.6,164.3);


(lib.Symbol10 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol2();
	this.instance.setTransform(15.3,13.15,1,1,0,0,0,5.5,4.9);

	this.instance_1 = new lib.Symbol3();
	this.instance_1.setTransform(46.3,13.1,1,1,0,0,0,36.5,13.1);

	this.instance_2 = new lib.Symbol4();
	this.instance_2.setTransform(47.6,24.4,1,1,0,0,0,47.6,18.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-12.3,0,115.2,84.4), null);


(lib.Symbol8_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3D3737").s().p("ABHC0Ij6j6QgXgWAAggQAAghAXgWQAXgXAgAAQAgAAAXAXID5D6QAXAWAAAhQAAAggXAWQgWAXggAAQghAAgWgXg");
	this.shape_1.setTransform(84.6049,141.5889,0.7546,0.7546);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C2A9E8").s().p("AhXEzIjXjOQgWgVABghQABghAYgWIEgkkQAVgWAdgBQAcgCAUAUIDXDNQAWAWgBAgQgBAhgYAXIkhEjQgUAVgdADIgEAAQgZAAgTgSg");
	this.shape_2.setTransform(99.0387,127.459,0.7546,0.7546);

	this.instance = new lib.Symbol12();
	this.instance.setTransform(61,76.2,1,1,0,0,0,61,76.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DDA078").s().p("AgJBSQglh3AYiIQAUATAQAYIARAcIgSBmQgMBxAfA9QgXgggSg8g");
	this.shape_3.setTransform(189.9791,190.5253,0.7546,0.7546);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F7B583").s().p("ABBPnQjzh4kCjTQjii5jLjhIgBgBIgBgCQhchlhShqIAAgBQgzhBhjhYQhKhCgOgrQgoh3BwimQAjg0AugyIAngoICIBxQCLB1AXARIA7ArIC4CLIAAABQH9GGAmBhQBnkKCLkcQEVo4CyhbQCyhbCCAWQBCAMAdAdIC9KtIjdFIQjyFkhnCEQiNC0jLCZQi1CIhdAAQgXAAgSgJg");
	this.shape_4.setTransform(192.3444,162.115,0.7546,0.7546);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.instance},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8_1, new cjs.Rectangle(0,0,289.8,238.2), null);


(lib.Symbol7_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol14();
	this.instance.setTransform(59.6,27.6,1,1,0,0,0,59.6,27.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7B583").s().p("Atjk+Igsl8IBYAbIbHOdInCG9g");
	this.shape_1.setTransform(165.2413,74.7392,0.7546,0.7546);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7_1, new cjs.Rectangle(0,0,234.1,127.5), null);


(lib.Symbol5_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol11();
	this.instance.setTransform(117,149,1,1,0,0,0,117,149);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:0.5901,x:117.85,y:149.5},0).wait(1).to({rotation:1.1801,x:118.85,y:149.9},0).wait(1).to({rotation:1.7702,x:119.7,y:150.4},0).wait(1).to({rotation:2.3602,x:120.6,y:150.8},0).wait(1).to({rotation:2.9503,x:121.5,y:151.3},0).wait(1).to({rotation:3.5403,x:122.45,y:151.7},0).wait(1).to({rotation:4.1304,x:123.3,y:152.2},0).wait(1).to({rotation:4.7204,x:124.2,y:152.7},0).wait(1).to({rotation:5.3105,x:125.1,y:153.15},0).wait(1).to({rotation:5.9005,x:126.05,y:153.6},0).wait(1).to({rotation:6.4906,x:126.9,y:154.05},0).wait(1).to({rotation:5.9544,x:125.7,y:153.8},0).wait(1).to({rotation:5.4183,x:124.55,y:153.55},0).wait(1).to({rotation:4.8822,x:123.3,y:153.3},0).wait(1).to({rotation:4.346,x:122.05,y:153.05},0).wait(1).to({rotation:3.8099,x:120.85,y:152.8},0).wait(1).to({rotation:3.2737,x:119.65,y:152.6},0).wait(1).to({rotation:2.7376,x:118.4,y:152.4},0).wait(1).to({rotation:2.2014,x:117.2,y:152.15},0).wait(1).to({rotation:1.6653,x:116,y:151.9},0).wait(1).to({rotation:1.1291,x:114.8,y:151.55},0).wait(1).to({rotation:0.593,x:113.6,y:151.35},0).wait(1).to({rotation:0.0568,x:112.4,y:151.1},0).wait(1).to({rotation:-0.4793,x:111.2,y:150.85},0).wait(1).to({rotation:-1.0155,x:110,y:150.65},0).wait(1).to({rotation:-1.5516,x:108.75,y:150.4},0).wait(1).to({rotation:-2.0878,x:107.55,y:150.15},0).wait(1).to({rotation:-2.6239,x:106.35,y:149.95},0).wait(1).to({rotation:-3.1601,x:105.1,y:149.65},0).wait(1).to({rotation:-3.6962,x:103.9,y:149.45},0).wait(1).to({rotation:-4.2324,x:102.7,y:149.2},0).wait(1).to({rotation:-4.7685,x:101.5,y:148.95},0).wait(1).to({rotation:-4.5919,x:102.05},0).wait(1).to({rotation:-4.4153,x:102.6},0).wait(1).to({rotation:-4.2387,x:103.2,y:149},0).wait(1).to({rotation:-4.0621,x:103.75,y:148.95},0).wait(1).to({rotation:-3.8855,x:104.4},0).wait(1).to({rotation:-3.7089,x:104.95,y:149},0).wait(1).to({rotation:-3.5323,x:105.55,y:148.95},0).wait(1).to({rotation:-3.3556,x:106.05,y:149},0).wait(1).to({rotation:-3.179,x:106.65,y:148.95},0).wait(1).to({rotation:-3.0024,x:107.25},0).wait(1).to({rotation:-2.8258,x:107.8},0).wait(1).to({rotation:-2.6492,x:108.35,y:149},0).wait(1).to({rotation:-2.4726,x:109,y:148.95},0).wait(1).to({rotation:-2.296,x:109.5,y:149},0).wait(1).to({rotation:-2.1194,x:110.1,y:148.95},0).wait(1).to({rotation:-1.9427,x:110.7,y:149},0).wait(1).to({rotation:-1.7661,x:111.3},0).wait(1).to({rotation:-1.5895,x:111.85},0).wait(1).to({rotation:-1.4129,x:112.4,y:148.95},0).wait(1).to({rotation:-1.2363,x:112.95,y:149},0).wait(1).to({rotation:-1.0597,x:113.6,y:148.95},0).wait(1).to({rotation:-0.8831,x:114.15,y:149},0).wait(1).to({rotation:-0.7065,x:114.75},0).wait(1).to({rotation:-0.5298,x:115.3,y:148.95},0).wait(1).to({rotation:-0.3532,x:115.85,y:149},0).wait(1).to({rotation:-0.1766,x:116.45},0).wait(1).to({rotation:0,x:117},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-3.2,269.7,305.7);


// stage content:
(lib.score = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// light
	this.instance = new lib.Tween4("synched",0);
	this.instance.setTransform(425.6,414.15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// comp
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(198.6,227.05,1,1,0,0,0,142.6,154.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

	// neck
	this.instance_2 = new lib.Symbol10();
	this.instance_2.setTransform(646.65,384.55,1,1,0,0,0,47.6,21.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:45.3,regY:42.2,x:643.25,y:403.1},0).wait(1).to({x:642.15,y:400.75},0).wait(1).to({x:641.1,y:398.4},0).wait(1).to({x:640,y:396.05},0).wait(1).to({x:638.9,y:393.7},0).wait(1).to({x:637.85,y:391.35},0).wait(1).to({x:636.75,y:389},0).wait(1).to({x:635.65,y:386.65},0).wait(1).to({x:634.6,y:384.3},0).wait(1).to({x:633.5,y:381.95},0).wait(1).to({x:632.45,y:379.6},0).wait(1).to({x:631.35,y:377.25},0).wait(1).to({x:630.25,y:374.9},0).wait(1).to({x:629.2,y:372.55},0).wait(1).to({x:628.1,y:370.2},0).wait(1).to({x:627,y:367.85},0).wait(1).to({x:625.95,y:365.5},0).wait(1).to({x:624.85,y:363.15},0).wait(1).to({x:623.8,y:360.8},0).wait(1).to({x:625.85,y:363.3},0).wait(1).to({x:627.9,y:365.85},0).wait(1).to({x:630,y:368.35},0).wait(1).to({x:632.05,y:370.9},0).wait(1).to({x:634.15,y:373.4},0).wait(1).to({x:636.2,y:375.95},0).wait(1).to({x:638.25,y:378.5},0).wait(1).to({x:640.35,y:381},0).wait(1).to({x:642.4,y:383.55},0).wait(1).to({x:644.5,y:386.05},0).wait(1).to({x:646.55,y:388.6},0).wait(1).to({x:648.6,y:391.15},0).wait(1).to({x:650.7,y:393.65},0).wait(1).to({x:652.75,y:396.2},0).wait(1).to({x:654.85,y:398.7},0).wait(1).to({x:656.9,y:401.25},0).wait(1).to({x:658.95,y:403.8},0).wait(1).to({x:661.05,y:406.3},0).wait(1).to({x:663.1,y:408.85},0).wait(1).to({x:665.2,y:411.35},0).wait(1).to({x:667.25,y:413.9},0).wait(1).to({x:669.35,y:416.45},0).wait(1).to({x:667.9,y:415.8},0).wait(1).to({x:666.5,y:415.2},0).wait(1).to({x:665.1,y:414.6},0).wait(1).to({x:663.7,y:414},0).wait(1).to({x:662.25,y:413.35},0).wait(1).to({x:660.85,y:412.75},0).wait(1).to({x:659.45,y:412.15},0).wait(1).to({x:658.05,y:411.55},0).wait(1).to({x:656.65,y:410.95},0).wait(1).to({x:655.2,y:410.3},0).wait(1).to({x:653.8,y:409.7},0).wait(1).to({x:652.4,y:409.1},0).wait(1).to({x:651,y:408.5},0).wait(1).to({x:649.55,y:407.85},0).wait(1).to({x:648.15,y:407.25},0).wait(1).to({x:646.75,y:406.65},0).wait(1).to({x:645.35,y:406.05},0).wait(1).to({x:643.95,y:405.45},0).wait(1));

	// head
	this.instance_3 = new lib.Symbol5_1();
	this.instance_3.setTransform(605.2,253.4,1,1,0,0,0,117,149);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:116.2,regY:153.1,x:603.3,y:255.1},0).wait(1).to({x:602.25,y:252.75},0).wait(1).to({x:601.2,y:250.35},0).wait(1).to({x:600.15,y:248},0).wait(1).to({x:599.1,y:245.65},0).wait(1).to({x:598.05,y:243.25},0).wait(1).to({x:597,y:240.9},0).wait(1).to({x:595.95,y:238.55},0).wait(1).to({x:594.9,y:236.15},0).wait(1).to({x:593.85,y:233.8},0).wait(1).to({x:592.8,y:231.4},0).wait(1).to({x:591.75,y:229.05},0).wait(1).to({x:590.7,y:226.7},0).wait(1).to({x:589.65,y:224.3},0).wait(1).to({x:588.6,y:221.95},0).wait(1).to({x:587.55,y:219.6},0).wait(1).to({x:586.5,y:217.2},0).wait(1).to({x:585.45,y:214.85},0).wait(1).to({x:584.4,y:212.5},0).wait(1).to({x:586.4,y:215},0).wait(1).to({x:588.45,y:217.55},0).wait(1).to({x:590.5,y:220.1},0).wait(1).to({x:592.55,y:222.65},0).wait(1).to({x:594.6,y:225.2},0).wait(1).to({x:596.65,y:227.75},0).wait(1).to({x:598.7,y:230.3},0).wait(1).to({x:600.75,y:232.85},0).wait(1).to({x:602.8,y:235.4},0).wait(1).to({x:604.85,y:237.95},0).wait(1).to({x:606.9,y:240.5},0).wait(1).to({x:608.9,y:243},0).wait(1).to({x:610.95,y:245.55},0).wait(1).to({x:613,y:248.1},0).wait(1).to({x:615.05,y:250.65},0).wait(1).to({x:617.1,y:253.2},0).wait(1).to({x:619.15,y:255.75},0).wait(1).to({x:621.2,y:258.3},0).wait(1).to({x:623.25,y:260.85},0).wait(1).to({x:625.3,y:263.4},0).wait(1).to({x:627.35,y:265.95},0).wait(1).to({x:629.4,y:268.5},0).wait(1).to({x:628,y:267.85},0).wait(1).to({x:626.6,y:267.25},0).wait(1).to({x:625.2,y:266.65},0).wait(1).to({x:623.8,y:266.05},0).wait(1).to({x:622.45,y:265.4},0).wait(1).to({x:621.05,y:264.8},0).wait(1).to({x:619.65,y:264.2},0).wait(1).to({x:618.25,y:263.6},0).wait(1).to({x:616.9,y:263},0).wait(1).to({x:615.5,y:262.35},0).wait(1).to({x:614.1,y:261.75},0).wait(1).to({x:612.7,y:261.15},0).wait(1).to({x:611.3,y:260.55},0).wait(1).to({x:609.95,y:259.9},0).wait(1).to({x:608.55,y:259.3},0).wait(1).to({x:607.15,y:258.7},0).wait(1).to({x:605.75,y:258.1},0).wait(1).to({x:604.4,y:257.5},0).wait(1));

	// body
	this.instance_4 = new lib.Symbol6();
	this.instance_4.setTransform(607.55,539.05,1,1,0,0,0,116,175.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({x:606.45,y:536.65},0).wait(1).to({x:605.4,y:534.3},0).wait(1).to({x:604.35,y:531.9},0).wait(1).to({x:603.3,y:529.55},0).wait(1).to({x:602.25,y:527.2},0).wait(1).to({x:601.2,y:524.8},0).wait(1).to({x:600.15,y:522.45},0).wait(1).to({x:599.1,y:520.1},0).wait(1).to({x:598.05,y:517.7},0).wait(1).to({x:597,y:515.35},0).wait(1).to({x:595.95,y:512.95},0).wait(1).to({x:594.9,y:510.6},0).wait(1).to({x:593.85,y:508.25},0).wait(1).to({x:592.8,y:505.85},0).wait(1).to({x:591.75,y:503.5},0).wait(1).to({x:590.7,y:501.15},0).wait(1).to({x:589.65,y:498.75},0).wait(1).to({x:588.6,y:496.4},0).wait(1).to({x:587.55,y:494.05},0).wait(1).to({x:589.55,y:496.55},0).wait(1).to({x:591.6,y:499.1},0).wait(1).to({x:593.65,y:501.65},0).wait(1).to({x:595.7,y:504.2},0).wait(1).to({x:597.75,y:506.75},0).wait(1).to({x:599.8,y:509.3},0).wait(1).to({x:601.85,y:511.85},0).wait(1).to({x:603.9,y:514.4},0).wait(1).to({x:605.95,y:516.95},0).wait(1).to({x:608,y:519.5},0).wait(1).to({x:610.05,y:522.05},0).wait(1).to({x:612.05,y:524.55},0).wait(1).to({x:614.1,y:527.1},0).wait(1).to({x:616.15,y:529.65},0).wait(1).to({x:618.2,y:532.2},0).wait(1).to({x:620.25,y:534.75},0).wait(1).to({x:622.3,y:537.3},0).wait(1).to({x:624.35,y:539.85},0).wait(1).to({x:626.4,y:542.4},0).wait(1).to({x:628.45,y:544.95},0).wait(1).to({x:630.5,y:547.5},0).wait(1).to({x:632.55,y:550.05},0).wait(1).to({x:631.15,y:549.4},0).wait(1).to({x:629.75,y:548.8},0).wait(1).to({x:628.35,y:548.2},0).wait(1).to({x:626.95,y:547.6},0).wait(1).to({x:625.6,y:546.95},0).wait(1).to({x:624.2,y:546.35},0).wait(1).to({x:622.8,y:545.75},0).wait(1).to({x:621.4,y:545.15},0).wait(1).to({x:620.05,y:544.55},0).wait(1).to({x:618.65,y:543.9},0).wait(1).to({x:617.25,y:543.3},0).wait(1).to({x:615.85,y:542.7},0).wait(1).to({x:614.45,y:542.1},0).wait(1).to({x:613.1,y:541.45},0).wait(1).to({x:611.7,y:540.85},0).wait(1).to({x:610.3,y:540.25},0).wait(1).to({x:608.9,y:539.65},0).wait(1).to({x:607.55,y:539.05},0).wait(1));

	// hand1
	this.instance_5 = new lib.Symbol7_1();
	this.instance_5.setTransform(566.35,377.95,1,1,0,0,0,117,63.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regY:42.9,rotation:0.5765,x:565.45,y:354.7},0).wait(1).to({rotation:1.1529,x:564.7,y:352.3},0).wait(1).to({rotation:1.7294,x:563.8,y:349.95},0).wait(1).to({rotation:2.3059,x:562.9,y:347.55},0).wait(1).to({rotation:2.8823,x:562.1,y:345.25},0).wait(1).to({rotation:3.4588,x:561.25,y:342.8},0).wait(1).to({rotation:4.0353,x:560.45,y:340.5},0).wait(1).to({rotation:4.6117,x:559.55,y:338.15},0).wait(1).to({rotation:5.1882,x:558.7,y:335.8},0).wait(1).to({rotation:5.7647,x:557.9,y:333.45},0).wait(1).to({rotation:6.3412,x:557.05,y:331.1},0).wait(1).to({rotation:6.9176,x:556.2,y:328.8},0).wait(1).to({rotation:7.4941,x:555.35,y:326.4},0).wait(1).to({rotation:8.0706,x:554.55,y:324},0).wait(1).to({rotation:8.647,x:553.65,y:321.75},0).wait(1).to({rotation:9.2235,x:552.8,y:319.4},0).wait(1).to({rotation:9.8,x:552,y:317.05},0).wait(1).to({rotation:10.3764,x:551.1,y:314.7},0).wait(1).to({rotation:10.9529,x:550.25,y:312.4},0).wait(1).to({rotation:9.9973,x:551.95,y:314.9},0).wait(1).to({rotation:9.0417,x:553.7,y:317.35},0).wait(1).to({rotation:8.0861,x:555.4,y:319.85},0).wait(1).to({rotation:7.1304,x:557.1,y:322.35},0).wait(1).to({rotation:6.1748,x:558.8,y:324.9},0).wait(1).to({rotation:5.2192,x:560.5,y:327.35},0).wait(1).to({rotation:4.2636,x:562.2,y:329.9},0).wait(1).to({rotation:3.308,x:563.85,y:332.45},0).wait(1).to({rotation:2.3524,x:565.6,y:334.95},0).wait(1).to({rotation:1.3968,x:567.25,y:337.5},0).wait(1).to({rotation:0.4412,x:568.95,y:340.05},0).wait(1).to({rotation:-0.5145,x:570.7,y:342.55},0).wait(1).to({rotation:-1.4701,x:572.35,y:345.15},0).wait(1).to({rotation:-2.4257,x:574.05,y:347.65},0).wait(1).to({rotation:-3.3813,x:575.8,y:350.2},0).wait(1).to({rotation:-4.3369,x:577.45,y:352.85},0).wait(1).to({rotation:-5.2925,x:579.15,y:355.35},0).wait(1).to({rotation:-6.2481,x:580.85,y:357.95},0).wait(1).to({rotation:-7.2038,x:582.6,y:360.55},0).wait(1).to({rotation:-8.1594,x:584.25,y:363.15},0).wait(1).to({rotation:-9.115,x:585.95,y:365.7},0).wait(1).to({rotation:-10.0706,x:587.7,y:368.35},0).wait(1).to({rotation:-9.5111,x:586.5,y:367.65},0).wait(1).to({rotation:-8.9516,x:585.25,y:367.1},0).wait(1).to({rotation:-8.3922,x:584.1,y:366.45},0).wait(1).to({rotation:-7.8327,x:582.9,y:365.75},0).wait(1).to({rotation:-7.2732,x:581.75,y:365.15},0).wait(1).to({rotation:-6.7137,x:580.55,y:364.45},0).wait(1).to({rotation:-6.1543,x:579.4,y:363.85},0).wait(1).to({rotation:-5.5948,x:578.2,y:363.25},0).wait(1).to({rotation:-5.0353,x:577,y:362.65},0).wait(1).to({rotation:-4.4758,x:575.8,y:361.95},0).wait(1).to({rotation:-3.9163,x:574.65,y:361.35},0).wait(1).to({rotation:-3.3569,x:573.45,y:360.75},0).wait(1).to({rotation:-2.7974,x:572.25,y:360.1},0).wait(1).to({rotation:-2.2379,x:571.1,y:359.5},0).wait(1).to({rotation:-1.6784,x:569.85,y:358.85},0).wait(1).to({rotation:-1.119,x:568.75,y:358.25},0).wait(1).to({rotation:-0.5595,x:567.5,y:357.65},0).wait(1).to({rotation:0,x:566.35,y:357.05},0).wait(1));

	// brace
	this.instance_6 = new lib.Symbol8_1();
	this.instance_6.setTransform(417.05,492.15,1,1,0,0,0,144.8,119);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:133,regY:107.1,x:404.15,y:477.85},0).wait(1).to({x:403.1,y:475.5},0).wait(1).to({x:402.05,y:473.1},0).wait(1).to({x:401,y:470.75},0).wait(1).to({x:399.95,y:468.4},0).wait(1).to({x:398.9,y:466},0).wait(1).to({x:397.85,y:463.65},0).wait(1).to({x:396.8,y:461.3},0).wait(1).to({x:395.75,y:458.9},0).wait(1).to({x:394.7,y:456.55},0).wait(1).to({x:393.65,y:454.15},0).wait(1).to({x:392.6,y:451.8},0).wait(1).to({x:391.55,y:449.45},0).wait(1).to({x:390.5,y:447.05},0).wait(1).to({x:389.45,y:444.7},0).wait(1).to({x:388.4,y:442.35},0).wait(1).to({x:387.35,y:439.95},0).wait(1).to({x:386.3,y:437.6},0).wait(1).to({x:385.25,y:435.25},0).wait(1).to({x:387.25,y:437.75},0).wait(1).to({x:389.3,y:440.3},0).wait(1).to({x:391.35,y:442.85},0).wait(1).to({x:393.4,y:445.4},0).wait(1).to({x:395.45,y:447.95},0).wait(1).to({x:397.5,y:450.5},0).wait(1).to({x:399.55,y:453.05},0).wait(1).to({x:401.6,y:455.6},0).wait(1).to({x:403.65,y:458.15},0).wait(1).to({x:405.7,y:460.7},0).wait(1).to({x:407.75,y:463.25},0).wait(1).to({x:409.75,y:465.75},0).wait(1).to({x:411.8,y:468.3},0).wait(1).to({x:413.85,y:470.85},0).wait(1).to({x:415.9,y:473.4},0).wait(1).to({x:417.95,y:475.95},0).wait(1).to({x:420,y:478.5},0).wait(1).to({x:422.05,y:481.05},0).wait(1).to({x:424.1,y:483.6},0).wait(1).to({x:426.15,y:486.15},0).wait(1).to({x:428.2,y:488.7},0).wait(1).to({x:430.25,y:491.25},0).wait(1).to({x:428.85,y:490.6},0).wait(1).to({x:427.45,y:490},0).wait(1).to({x:426.05,y:489.4},0).wait(1).to({x:424.65,y:488.8},0).wait(1).to({x:423.3,y:488.15},0).wait(1).to({x:421.9,y:487.55},0).wait(1).to({x:420.5,y:486.95},0).wait(1).to({x:419.1,y:486.35},0).wait(1).to({x:417.75,y:485.75},0).wait(1).to({x:416.35,y:485.1},0).wait(1).to({x:414.95,y:484.5},0).wait(1).to({x:413.55,y:483.9},0).wait(1).to({x:412.15,y:483.3},0).wait(1).to({x:410.8,y:482.65},0).wait(1).to({x:409.4,y:482.05},0).wait(1).to({x:408,y:481.45},0).wait(1).to({x:406.6,y:480.85},0).wait(1).to({x:405.25,y:480.25},0).wait(1));

	// wire
	this.instance_7 = new lib.Symbol9();
	this.instance_7.setTransform(233.85,424.7,1,1,0,0,0,117.8,86.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regY:86.3,scaleX:0.995,scaleY:0.9922,x:233.5,y:422.3},0).wait(1).to({scaleX:0.9899,scaleY:0.9843,x:233.15,y:420.1},0).wait(1).to({scaleX:0.9849,scaleY:0.9765,x:232.8,y:417.85},0).wait(1).to({scaleX:0.9799,scaleY:0.9687,x:232.5,y:415.6},0).wait(1).to({scaleX:0.9749,scaleY:0.9608,x:232.15,y:413.35},0).wait(1).to({scaleX:0.9698,scaleY:0.953,x:231.8,y:411.15},0).wait(1).to({scaleX:0.9648,scaleY:0.9452,x:231.45,y:408.85},0).wait(1).to({scaleX:0.9598,scaleY:0.9373,x:231.1,y:406.65},0).wait(1).to({scaleX:0.9547,scaleY:0.9295,x:230.8,y:404.4},0).wait(1).to({scaleX:0.9497,scaleY:0.9217,x:230.5,y:402.15},0).wait(1).to({scaleX:0.9447,scaleY:0.9138,x:230.15,y:399.9},0).wait(1).to({scaleX:0.9397,scaleY:0.906,x:229.8,y:397.7},0).wait(1).to({scaleX:0.9346,scaleY:0.8982,x:229.45,y:395.4},0).wait(1).to({scaleX:0.9296,scaleY:0.8903,x:229.1,y:393.2},0).wait(1).to({scaleX:0.9246,scaleY:0.8825,x:228.75,y:390.95},0).wait(1).to({scaleX:0.9195,scaleY:0.8747,x:228.4,y:388.7},0).wait(1).to({scaleX:0.9145,scaleY:0.8668,x:228.1,y:386.45},0).wait(1).to({scaleX:0.9095,scaleY:0.859,x:227.8,y:384.25},0).wait(1).to({scaleX:0.9044,scaleY:0.8512,x:227.45,y:382},0).wait(1).to({scaleX:0.9146,scaleY:0.8579,x:228.15,y:384.3},0).wait(1).to({scaleX:0.9247,scaleY:0.8646,x:228.9,y:386.6},0).wait(1).to({scaleX:0.9349,scaleY:0.8713,x:229.65,y:388.95},0).wait(1).to({scaleX:0.945,scaleY:0.878,x:230.4,y:391.25},0).wait(1).to({scaleX:0.9552,scaleY:0.8846,x:231.1,y:393.6},0).wait(1).to({scaleX:0.9653,scaleY:0.8913,x:231.85,y:395.9},0).wait(1).to({scaleX:0.9755,scaleY:0.898,x:232.55,y:398.25},0).wait(1).to({scaleX:0.9856,scaleY:0.9047,x:233.3,y:400.6},0).wait(1).to({scaleX:0.9958,scaleY:0.9114,x:234.05,y:402.9},0).wait(1).to({scaleX:1.0059,scaleY:0.9181,x:234.8,y:405.25},0).wait(1).to({scaleX:1.0161,scaleY:0.9248,x:235.55,y:407.55},0).wait(1).to({scaleX:1.0262,scaleY:0.9315,x:236.25,y:409.9},0).wait(1).to({scaleX:1.0364,scaleY:0.9382,x:237,y:412.2},0).wait(1).to({scaleX:1.0465,scaleY:0.9449,x:237.75,y:414.55},0).wait(1).to({scaleX:1.0567,scaleY:0.9516,x:238.45,y:416.85},0).wait(1).to({scaleX:1.0668,scaleY:0.9583,x:239.2,y:419.2},0).wait(1).to({scaleX:1.077,scaleY:0.965,x:239.95,y:421.55},0).wait(1).to({scaleX:1.0871,scaleY:0.9717,x:240.65,y:423.85},0).wait(1).to({scaleX:1.0972,scaleY:0.9783,x:241.4,y:426.2},0).wait(1).to({scaleX:1.1074,scaleY:0.985,x:242.15,y:428.5},0).wait(1).to({scaleX:1.1175,scaleY:0.9917,x:242.9,y:430.85},0).wait(1).to({scaleX:1.1277,scaleY:0.9984,x:243.65,y:433.15},0).wait(1).to({scaleX:1.1206,scaleY:0.9985,x:243.05,y:432.7},0).wait(1).to({scaleX:1.1135,scaleY:0.9986,x:242.5,y:432.25},0).wait(1).to({scaleX:1.1064,scaleY:0.9987,x:242,y:431.75},0).wait(1).to({scaleX:1.0993,scaleY:0.9988,x:241.45,y:431.25},0).wait(1).to({scaleX:1.0922,scaleY:0.9989,x:240.9,y:430.8},0).wait(1).to({scaleX:1.0851,scaleY:0.999,x:240.4,y:430.3},0).wait(1).to({scaleX:1.078,x:239.8,y:429.8},0).wait(1).to({scaleX:1.0709,scaleY:0.9991,x:239.25,y:429.35},0).wait(1).to({scaleX:1.0638,scaleY:0.9992,x:238.7,y:428.9},0).wait(1).to({scaleX:1.0568,scaleY:0.9993,x:238.2,y:428.4},0).wait(1).to({scaleX:1.0497,scaleY:0.9994,x:237.65,y:427.9},0).wait(1).to({scaleX:1.0426,scaleY:0.9995,x:237.1,y:427.45},0).wait(1).to({scaleX:1.0355,scaleY:0.9996,x:236.55,y:426.95},0).wait(1).to({scaleX:1.0284,scaleY:0.9997,x:236,y:426.45},0).wait(1).to({scaleX:1.0213,x:235.45,y:426.05},0).wait(1).to({scaleX:1.0142,scaleY:0.9998,x:234.9,y:425.55},0).wait(1).to({scaleX:1.0071,scaleY:0.9999,x:234.4,y:425.05},0).wait(1).to({scaleX:1,scaleY:1,x:233.85,y:424.6},0).wait(1));

	// Symbol_17
	this.instance_8 = new lib.Symbol17();
	this.instance_8.setTransform(78.35,283.15,1,1,0,0,0,200.3,268.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(5).to({x:316.3,y:332.55},0).wait(55));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(456,359.4,292.5,384.80000000000007);
// library properties:
lib.properties = {
	id: 'FF4E4F6825B9A94D805D7362769932F2',
	width: 800,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
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
an.compositions['FF4E4F6825B9A94D805D7362769932F2'] = {
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