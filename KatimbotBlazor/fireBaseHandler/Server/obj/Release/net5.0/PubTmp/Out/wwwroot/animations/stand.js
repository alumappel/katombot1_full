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
	this.shape.graphics.f("#3D3737").s().p("ABHC0Ij6j6QgXgWAAggQAAghAXgWQAXgXAgAAQAgAAAXAXID5D6QAXAWAAAhQAAAggXAWQgWAXggAAQghAAgWgXg");
	this.shape.setTransform(84.6049,141.5889,0.7546,0.7546);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C2A9E8").s().p("AhXEzIjXjOQgWgVABghQABghAYgWIEgkkQAVgWAdgBQAcgCAUAUIDXDNQAWAWgBAgQgBAhgYAXIkhEjQgUAVgdADIgEAAQgZAAgTgSg");
	this.shape_1.setTransform(99.0387,127.459,0.7546,0.7546);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#221F1F").s().p("AgSA+IgEgBQgEgCgCgEQgDgEACgFIAhhkQABgEAFgDQAEgCAFACIAEABQAEACADAFQACAEgCAEIghBkQgBAEgFADIgFABIgEgBg");
	this.shape_2.setTransform(33.9737,37.6228,0.7546,0.7546);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#221F1F").s().p("AAdBOQgGgCgEgFIhFh6QgEgFACgHQACgGAFgDIAGgDQAFgEAGACQAHACADAFIBGB6QADAGgCAGQgCAGgFADIgFADQgEADgFAAIgDgBg");
	this.shape_3.setTransform(12.7765,44.0265,0.7546,0.7546);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3D3737").s().p("AIIK5QgJgJAJgIQATgUAWgaQBNhgArh4QAqh2ABh8QACiAgth/QgVg8gmhOQgthcgYglQhAhliJhGQgkgShVgmQhWglg3gTQing7h7AQQg2AHhZAcQhkAfgqAIIhDAOQgmAKgZAPQgxAegaBAQgMAcgGAlQgEAVgFAtQgLBWAIA6QACALgNAEQgMADgBgMQgFggABgnQABg2AOhdQALhGAjgzQAmg3A+gVQAagKAsgIQA3gLAQgEQAygNBhgfQBYgYBAgBQBIgBBRAVQBBAQBTAhQA0AVBWAmQBOAjAtAbQA/AmAsAuQAsAuAnBKQBYCmAgB3QAhB9gMCDQgLCCg2B4Qg2B5hZBdQgEAEgFAAQgEAAgFgFg");
	this.shape_4.setTransform(65.3259,52.9633,0.7546,0.7546);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3D3737").s().p("AH0KXQAPizAEhWQAGiUgLh1QgSjPhNinQhZi/iahpQhVg5hrgdQhjgbhvABQiBABhLAxQgoAbgYAnQgaApAAAtQAAAMgNAAQgMAAAAgMQAAgZAGgWQANgsAhgmQAfgkAqgWQBVgrCDADQBzADBlAeQBvAhBWBAQCUBtBXC+QBTC0APDsQAHBtgGCJQgEBPgOCnQgBAMgMAAQgNAAABgMg");
	this.shape_5.setTransform(75.1583,67.2879,0.7546,0.7546);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2D2929").s().p("AgMAmQgOgFgHgPQgHgPAGgOQAFgQAOgIQAPgIANAFQAPAFAGAPQAHAPgFAPQgFAQgPAIQgJAEgHAAQgGAAgGgCg");
	this.shape_6.setTransform(32.4765,41.2856,0.7546,0.7546);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#221F1F").s().p("AgOAsQgOgFgGgQQgHgRAHgRQAGgSAPgKQANgJAPAFQAPAFAGAQQAGARgGARQgHATgOAJQgKAGgJAAQgFAAgFgCg");
	this.shape_7.setTransform(32.0559,41.3392,0.7546,0.7546);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2D2929").s().p("AgLAzQgUgHgMgTQgLgTAFgVQAFgVASgKQASgLATAHQAVAGALAUQAMAUgFATQgFAWgSAKQgLAGgMAAQgHAAgIgCg");
	this.shape_8.setTransform(15.1322,48.7533,0.7546,0.7546);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#221F1F").s().p("AgIA4QgWgIgNgXQgMgWADgWQAEgYASgKQASgKAVAIQAWAJAMAWQANAWgDAWQgEAYgSAKQgKAGgLAAQgJAAgJgEg");
	this.shape_9.setTransform(14.8405,49.2438,0.7546,0.7546);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3D3737").s().p("AAICMIhngeQgHgCgCgMQgCgNAGgQIA6iqQAGgRALgLQAKgLAJADIBlAdQAJADABAMQACANgGAQIg7CpQgFASgKALQgJAJgHAAIgDgBg");
	this.shape_10.setTransform(28.7828,41.8297,0.7546,0.7546);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3D3737").s().p("AAbDWQgPgLgMgWIiQjtQgPgYgEgXQgEgXAJgHIBthVQAJgGAOALQAPALAMAWICQDtQAPAYAEAXQAEAXgJAHIhtBVQgDACgEAAQgHAAgJgHg");
	this.shape_11.setTransform(12.7851,54.6204,0.7546,0.7546);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F6D3AE").s().p("AgZAlQAOgxAUgYQAWgZgGA3QgEAwgXACg");
	this.shape_12.setTransform(29.56,30.8743,0.7546,0.7546);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DDA078").s().p("AgZAlQAOgxAUgYQAWgZgGA3QgEAwgXACg");
	this.shape_13.setTransform(29.4845,31.0252,0.7546,0.7546);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F6D3AE").s().p("AgIBGQgdgMANhMQAJg2ANAAQAHgBAKAWQAHASAEAWQAHAlgKApQgKAGgKAAQgFAAgGgDg");
	this.shape_14.setTransform(63.1417,48.0035,0.7546,0.7546);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DDA078").s().p("AgFBHQgegMAOhMQAPhXARAwQARAsgCBQQgKAGgKAAQgGAAgFgDg");
	this.shape_15.setTransform(62.9696,48.1987,0.7546,0.7546);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F6D3AE").s().p("AgugyQgIg5A+BHQA5A/gYAfQgLAQgXADQguhLgHg0g");
	this.shape_16.setTransform(3.6394,43.3187,0.7546,0.7546);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DDA078").s().p("AgugyQgIg5A+BHQA5A/gYAfQgMAQgXADQguhLgGg0g");
	this.shape_17.setTransform(3.7526,43.5828,0.7546,0.7546);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F7B583").s().p("AICKVQhkhzg9gkQhVgxkMjQQkcjcgvg8QhMhjidkNQi0k0ASgpQATgqA7AkQAzAhAfA0QBDBuBGBhQCFC5BjBKQA6ArArACQBoAGgBhlQAAgggLhDQgOhOgDgdQgKhpAfhFQAehFA3AFQAtAFAABeQAAAVgDAwQgCAiACAHIBCCWQBGCKBAAaQA8AZBXCdIA6BwQAcA2AKAJQAWASBGAZQAkANAfAJIh/IEQgmgygyg5g");
	this.shape_18.setTransform(55.2988,94.5779,0.7546,0.7546);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E5A67C").s().p("AhrCMQAihnAmhoQBLjRAVgJQAdgMANArQAOAugYBEQgVA9gdC9QgPBfgLBTg");
	this.shape_19.setTransform(26.2634,49.2195,0.7546,0.7546);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#DDA078").s().p("AjQB2QAXgwAbgyQA3hjAWgIQAYgIAeg1QASgfAlhTQAZg2AWAeQASAYADArQACAYhLChIhDCRQA5hRAzhDQBjiFALAEQAKAEAPADQAKAHAAAhQAAAjgwBQQglA9g3BHQgkAwAIBCQAFAgALAYg");
	this.shape_20.setTransform(36.5741,57.369,0.7546,0.7546);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#DDA078").s().p("AgJBSQglh3AYiIQAUATAQAYIARAcIgSBmQgMBxAfA9QgXgggSg8g");
	this.shape_21.setTransform(189.9791,190.5253,0.7546,0.7546);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F7B583").s().p("ABBPnQjzh4kCjTQjii5jLjhIgBgBIgBgCQhchlhShqIAAgBQgzhBhjhYQhKhCgOgrQgoh3BwimQAjg0AugyIAngoICIBxQCLB1AXARIA7ArIC4CLIAAABQH9GGAmBhQBnkKCLkcQEVo4CyhbQCyhbCCAWQBCAMAdAdIC9KtIjdFIQjyFkhnCEQiNC0jLCZQi1CIhdAAQgXAAgSgJg");
	this.shape_22.setTransform(192.3444,162.115,0.7546,0.7546);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,289.8,238.2), null);


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

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F7B583").s().p("Atjk+Igsl8IBYAbIbHOdInCG9g");
	this.shape_9.setTransform(165.2413,74.7392,0.7546,0.7546);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,234.1,127.5), null);


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

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,234,298.1), null);


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

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,95.1,36.5), null);


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


// stage content:
(lib.stand = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [79];
	// timeline functions:
	this.frame_79 = function() {
		var self = this;
		self.stop();
		setTimeout(again,2000);
		function again(){
			self.gotoAndPlay(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(1));

	// light
	this.instance = new lib.Tween4("synched",0);
	this.instance.setTransform(155.9,145.9,0.0539,0.0523);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(22).to({_off:false},0).wait(1).to({scaleX:0.1095,scaleY:0.108,x:171.7677,y:161.6824},0).wait(1).to({scaleX:0.1652,scaleY:0.1638,x:187.6353,y:177.4647},0).wait(1).to({scaleX:0.2209,scaleY:0.2195,x:203.5029,y:193.2471},0).wait(1).to({scaleX:0.2765,scaleY:0.2753,x:219.3706,y:209.0294},0).wait(1).to({scaleX:0.3322,scaleY:0.331,x:235.2382,y:224.8118},0).wait(1).to({scaleX:0.3878,scaleY:0.3868,x:251.1059,y:240.5941},0).wait(1).to({scaleX:0.4435,scaleY:0.4425,x:266.9735,y:256.3765},0).wait(1).to({scaleX:0.4991,scaleY:0.4983,x:282.8412,y:272.1588},0).wait(1).to({scaleX:0.5548,scaleY:0.554,x:298.7088,y:287.9412},0).wait(1).to({scaleX:0.6104,scaleY:0.6098,x:314.5765,y:303.7235},0).wait(1).to({scaleX:0.6661,scaleY:0.6655,x:330.4441,y:319.5059},0).wait(1).to({scaleX:0.7217,scaleY:0.7213,x:346.3118,y:335.2882},0).wait(1).to({scaleX:0.7774,scaleY:0.777,x:362.1794,y:351.0706},0).wait(1).to({scaleX:0.833,scaleY:0.8328,x:378.0471,y:366.8529},0).wait(1).to({scaleX:0.8887,scaleY:0.8885,x:393.9147,y:382.6353},0).wait(1).to({scaleX:0.9443,scaleY:0.9443,x:409.7824,y:398.4177},0).wait(1).to({scaleX:1,scaleY:1,x:425.65,y:414.2},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// comp
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(198.6,-169.1,1,1,0,0,0,142.6,154.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:-151.05},0).wait(1).to({y:-133.05},0).wait(1).to({y:-115.05},0).wait(1).to({y:-97.05},0).wait(1).to({y:-79.05},0).wait(1).to({y:-61.05},0).wait(1).to({y:-43.05},0).wait(1).to({y:-25},0).wait(1).to({y:-7},0).wait(1).to({y:11},0).wait(1).to({y:29},0).wait(1).to({y:47},0).wait(1).to({y:65},0).wait(1).to({y:83},0).wait(1).to({y:101.05},0).wait(1).to({y:119.05},0).wait(1).to({y:137.05},0).wait(1).to({y:155},0).wait(1).to({y:173},0).wait(1).to({y:191},0).wait(1).to({y:209},0).wait(1).to({y:227.05},0).wait(58));

	// Layer_10
	this.instance_2 = new lib.Symbol2();
	this.instance_2.setTransform(1187.25,491.9,1,1,0,0,0,5.5,4.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({_off:false},0).wait(1).to({regX:5.6,x:1158.6,y:486.15},0).wait(1).to({x:1129.9,y:480.4},0).wait(1).to({x:1101.2,y:474.7},0).wait(1).to({x:1072.5,y:468.95},0).wait(1).to({x:1043.8,y:463.25},0).wait(1).to({x:1015.1,y:457.5},0).wait(1).to({x:986.35,y:451.8},0).wait(1).to({x:957.65,y:446.05},0).wait(1).to({x:928.95,y:440.35},0).wait(1).to({x:900.25,y:434.6},0).wait(1).to({x:871.55,y:428.85},0).wait(1).to({x:842.85,y:423.15},0).wait(1).to({x:814.15,y:417.4},0).wait(1).to({x:785.4,y:411.7},0).wait(1).to({x:756.7,y:405.95},0).wait(1).to({x:728,y:400.25},0).wait(1).to({x:699.3,y:394.5},0).wait(1).to({x:670.6,y:388.8},0).wait(1).to({x:641.9,y:383.05},0).wait(1).to({x:613.2,y:377.35},0).wait(21));

	// Layer_11
	this.instance_3 = new lib.Symbol3();
	this.instance_3.setTransform(1218.25,521.1,1,1,0,0,0,36.5,13.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(39).to({_off:false},0).wait(1).to({regX:36.4,x:1189.4,y:513.9},0).wait(1).to({x:1160.7,y:506.7},0).wait(1).to({x:1132,y:499.5},0).wait(1).to({x:1103.3,y:492.3},0).wait(1).to({x:1074.6,y:485.15},0).wait(1).to({x:1045.9,y:477.95},0).wait(1).to({x:1017.15,y:470.75},0).wait(1).to({x:988.45,y:463.55},0).wait(1).to({x:959.75,y:456.35},0).wait(1).to({x:931.05,y:449.2},0).wait(1).to({x:902.35,y:442},0).wait(1).to({x:873.65,y:434.8},0).wait(1).to({x:844.95,y:427.6},0).wait(1).to({x:816.2,y:420.4},0).wait(1).to({x:787.5,y:413.25},0).wait(1).to({x:758.8,y:406.05},0).wait(1).to({x:730.1,y:398.85},0).wait(1).to({x:701.4,y:391.65},0).wait(1).to({x:672.7,y:384.45},0).wait(1).to({x:644,y:377.3},0).wait(21));

	// Layer_12
	this.instance_4 = new lib.Symbol4();
	this.instance_4.setTransform(1219.55,532.4,1,1,0,0,0,47.6,18.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(39).to({_off:false},0).wait(1).to({regX:47.5,x:1190.7,y:525.2},0).wait(1).to({x:1162,y:518},0).wait(1).to({x:1133.3,y:510.8},0).wait(1).to({x:1104.6,y:503.6},0).wait(1).to({x:1075.9,y:496.45},0).wait(1).to({x:1047.2,y:489.25},0).wait(1).to({x:1018.45,y:482.05},0).wait(1).to({x:989.75,y:474.85},0).wait(1).to({x:961.05,y:467.65},0).wait(1).to({x:932.35,y:460.5},0).wait(1).to({x:903.65,y:453.3},0).wait(1).to({x:874.95,y:446.1},0).wait(1).to({x:846.25,y:438.9},0).wait(1).to({x:817.5,y:431.7},0).wait(1).to({x:788.8,y:424.55},0).wait(1).to({x:760.1,y:417.35},0).wait(1).to({x:731.4,y:410.15},0).wait(1).to({x:702.7,y:402.95},0).wait(1).to({x:674,y:395.75},0).wait(1).to({x:645.3,y:388.6},0).wait(21));

	// Layer_13
	this.instance_5 = new lib.Symbol5();
	this.instance_5.setTransform(1179.35,397.2,1,1,0,0,0,117,149);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(39).to({_off:false},0).wait(1).to({x:1150.6,y:390},0).wait(1).to({x:1121.9,y:382.8},0).wait(1).to({x:1093.2,y:375.6},0).wait(1).to({x:1064.5,y:368.4},0).wait(1).to({x:1035.8,y:361.25},0).wait(1).to({x:1007.1,y:354.05},0).wait(1).to({x:978.35,y:346.85},0).wait(1).to({x:949.65,y:339.65},0).wait(1).to({x:920.95,y:332.45},0).wait(1).to({x:892.25,y:325.3},0).wait(1).to({x:863.55,y:318.1},0).wait(1).to({x:834.85,y:310.9},0).wait(1).to({x:806.15,y:303.7},0).wait(1).to({x:777.4,y:296.5},0).wait(1).to({x:748.7,y:289.35},0).wait(1).to({x:720,y:282.15},0).wait(1).to({x:691.3,y:274.95},0).wait(1).to({x:662.6,y:267.75},0).wait(1).to({x:633.9,y:260.55},0).wait(1).to({x:605.2,y:253.4},0).wait(21));

	// Layer_14
	this.instance_6 = new lib.Symbol6();
	this.instance_6.setTransform(1181.7,682.85,1,1,0,0,0,116,175.8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(39).to({_off:false},0).wait(1).to({x:1152.95,y:675.65},0).wait(1).to({x:1124.25,y:668.45},0).wait(1).to({x:1095.55,y:661.25},0).wait(1).to({x:1066.85,y:654.05},0).wait(1).to({x:1038.15,y:646.9},0).wait(1).to({x:1009.45,y:639.7},0).wait(1).to({x:980.7,y:632.5},0).wait(1).to({x:952,y:625.3},0).wait(1).to({x:923.3,y:618.1},0).wait(1).to({x:894.6,y:610.95},0).wait(1).to({x:865.9,y:603.75},0).wait(1).to({x:837.2,y:596.55},0).wait(1).to({x:808.5,y:589.35},0).wait(1).to({x:779.75,y:582.15},0).wait(1).to({x:751.05,y:575},0).wait(1).to({x:722.35,y:567.8},0).wait(1).to({x:693.65,y:560.6},0).wait(1).to({x:664.95,y:553.4},0).wait(1).to({x:636.25,y:546.2},0).wait(1).to({x:607.55,y:539.05},0).wait(21));

	// Layer_15
	this.instance_7 = new lib.Symbol7();
	this.instance_7.setTransform(1140.5,521.75,1,1,0,0,0,117,63.8);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(39).to({_off:false},0).wait(1).to({regY:63.7,x:1111.75,y:514.45},0).wait(1).to({x:1083.05,y:507.25},0).wait(1).to({x:1054.35,y:500.05},0).wait(1).to({x:1025.65,y:492.85},0).wait(1).to({x:996.95,y:485.7},0).wait(1).to({x:968.25,y:478.5},0).wait(1).to({x:939.5,y:471.3},0).wait(1).to({x:910.8,y:464.1},0).wait(1).to({x:882.1,y:456.9},0).wait(1).to({x:853.4,y:449.75},0).wait(1).to({x:824.7,y:442.55},0).wait(1).to({x:796,y:435.35},0).wait(1).to({x:767.3,y:428.15},0).wait(1).to({x:738.55,y:420.95},0).wait(1).to({x:709.85,y:413.8},0).wait(1).to({x:681.15,y:406.6},0).wait(1).to({x:652.45,y:399.4},0).wait(1).to({x:623.75,y:392.2},0).wait(1).to({x:595.05,y:385},0).wait(1).to({x:566.35,y:377.85},0).wait(21));

	// Layer_16
	this.instance_8 = new lib.Symbol8();
	this.instance_8.setTransform(991.2,635.95,1,1,0,0,0,144.8,119);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(39).to({_off:false},0).wait(1).to({regX:144.9,regY:119.1,x:962.55,y:628.85},0).wait(1).to({x:933.85,y:621.65},0).wait(1).to({x:905.15,y:614.45},0).wait(1).to({x:876.45,y:607.25},0).wait(1).to({x:847.75,y:600.1},0).wait(1).to({x:819.05,y:592.9},0).wait(1).to({x:790.3,y:585.7},0).wait(1).to({x:761.6,y:578.5},0).wait(1).to({x:732.9,y:571.3},0).wait(1).to({x:704.2,y:564.15},0).wait(1).to({x:675.5,y:556.95},0).wait(1).to({x:646.8,y:549.75},0).wait(1).to({x:618.1,y:542.55},0).wait(1).to({x:589.35,y:535.35},0).wait(1).to({x:560.65,y:528.2},0).wait(1).to({x:531.95,y:521},0).wait(1).to({x:503.25,y:513.8},0).wait(1).to({x:474.55,y:506.6},0).wait(1).to({x:445.85,y:499.4},0).wait(1).to({x:417.15,y:492.25},0).wait(21));

	// Layer_17
	this.instance_9 = new lib.Symbol9();
	this.instance_9.setTransform(233.85,424.7,1,1,0,0,0,117.8,86.4);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(59).to({_off:false},0).wait(1).to({regY:86.3,y:424.6,alpha:0.0909},0).wait(1).to({alpha:0.1818},0).wait(1).to({alpha:0.2727},0).wait(1).to({alpha:0.3636},0).wait(1).to({alpha:0.4545},0).wait(1).to({alpha:0.5455},0).wait(1).to({alpha:0.6364},0).wait(1).to({alpha:0.7273},0).wait(1).to({alpha:0.8182},0).wait(1).to({alpha:0.9091},0).wait(1).to({alpha:1},0).wait(10));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(456,-24,841.7,882.7);
// library properties:
lib.properties = {
	id: '1623176CAE985842B3B00517B8AAEF84',
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
an.compositions['1623176CAE985842B3B00517B8AAEF84'] = {
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