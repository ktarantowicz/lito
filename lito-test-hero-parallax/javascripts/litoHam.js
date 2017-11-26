(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 50,
	height: 50,
	fps: 24,
	color: "#000000",
	manifest: []
};

(lib.BTinv = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer_1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AmKGLIAAsVIMVAAIAAMVg");
  this.shape.setTransform(25,25,0.633,0.633);
  this.shape._off = true;

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

(lib.MCkreska = function(fill, mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f(fill).s().p("Ai9AtIAAhZIF6AAIAABZg");
	this.shape.setTransform(19,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38,9);

// stage content:
(lib.litoHam = function(fill, mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

  // timeline functions:
  this.isLocked = false;
  this.frame_0 = function() {
    this.stop();
    this.unLock();
  }
  this.frame_10 = function() {
    this.stop();
    this.unLock();
  }
  this.open = function() {
    if(this.isLocked) { return true; }
    this.lock();
    this.gotoAndPlay(0);

    return false;
  }
  this.close = function() {
    if(this.isLocked) { return true; }
    this.lock();
    this.gotoAndPlay(10);

    return false;
  }
  this.lock = function() { this.isLocked = true; }
  this.unLock = function() { this.isLocked = false; }

  // actions tween:
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(10));

  this.mask = new cjs.Shape();
  this.mask.graphics.drawRect(0,0,50,50);

  // BTinv
  this.BTinv = new lib.BTinv();
  this.BTinv.setTransform(25,25,1,1,0,0,0,25,25);
  new cjs.ButtonHelper(this.BTinv, 0, 1, 2, false, new lib.BTinv(), 3);

  this.timeline.addTween(cjs.Tween.get(this.BTinv).wait(20));

  // MCkreska2
  this.MCkreska2 = new lib.MCkreska(fill);
  this.MCkreska2.setTransform(25,33.5,1,1,0,0,0,19,4.5);

  // this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.MCkreska2}]},1).wait(1));
  this.timeline.addTween(cjs.Tween.get(this.MCkreska2).wait(1).to({regX:18.9,rotation:-60,x:24.6,y:25.4},4).to({regX:19,rotation:-45,y:25.3},4,cjs.Ease.get(1)).wait(2).to({regX:18.9,rotation:-60,y:25.4},3).wait(1).to({regX:19,rotation:-55.6,y:25.9},0).wait(1).to({rotation:-39.3,x:24.8,y:28.1},0).wait(1).to({rotation:-16.5,x:24.9,y:31.2},0).wait(1).to({rotation:-3.4,x:25,y:33},0,cjs.Ease.get(1)).wait(1));

  // MCkreska1
  this.MCkreska1 = new lib.MCkreska(fill);
  this.MCkreska1.setTransform(25,16.5,1,1,0,0,0,19,4.5);

  this.timeline.addTween(cjs.Tween.get(this.MCkreska1).to({rotation:60,x:24.6,y:25.4},4).wait(1).to({rotation:58,y:25.3},0).wait(1).to({rotation:53.2},0).wait(1).to({rotation:48.6,y:25.4},0).wait(1).to({rotation:45.8,x:24.5},0).wait(1).to({rotation:45,x:24.6},0).wait(3).to({rotation:60},3).to({rotation:0,x:25,y:16.5},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(25,25,50,50);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
