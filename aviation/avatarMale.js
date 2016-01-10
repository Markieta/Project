(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.Watch = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAsgpQAAAAAAAAQAAABABAAQACACACACQACABABABQAKALACAOQAAABAAAAQAAABAAAAQAAACAAACQAAACAAABQAAABgBACQgCANgMALQgOAOgUAAQgNAAgIgFAgggBQAAgBAAgBQAAgNAGgKQABgBAAgBQADgEAEgEQAOgOATAAQAPAAANAIQAAABABAAQAMgDAHgJIAPAeQAMAMgbAOAgMgUIAYASAgggBQgWAOgbABIARAoQAngEATgOQgCgBgCgBQgBAAAAgBQAAAAgBAAQAAAAgBgBQgDgCgCgDQgNgMgBgQgAAQgBIARgPAgPgvIAHgE");
	this.shape.setTransform(8.3,5.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#959577").s().p("AgVApIgFgCIAAAAIgBgBIgBgBIgGgFQgMgMgCgSIAAgCQABgLAFgKIACgCIAGgIQAPgOATAAQAPAAAMAIIABABIABAAIAAABIAFAEIACACQALALABAOIAAABIAAABIAAACIAAAFIAAADQgDANgLALQgPAOgTAAQgLAAgKgFgAABACIARgNgAABACIgCgBgAgBABIgagQgAgbgPIgPgGg");
	this.shape_1.setTransform(9.8,4.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6F502D").s().p("AhRAOQAbgBAWgOQABAQANAMIAFAFIABABIABABIABAAIAEACQgTAOgnAEgABAAAIAAgDIAAgEIAAgBIAAgBQgCgOgKgLIgDgCIgEgEIgBgBIAAAAQAMgDAHgJIAPAeQAMAMgbAOIABgDg");
	this.shape_2.setTransform(8.3,5.2);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1.3,18.5,13);


(lib.Torso = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABqofIAfAcIA8BvIAAAWQACAEACADIACAEIASAXIAKAJABqofIgFgZQhdhqhzBsIgFAkIgZAXIg9BpIABAUQgFCAAQB7IBChdQA/A2A4BBIgEALQAWFQglEpIAZBNIAAABIABAEIgBgEIAAgBIgCgJIACAJADJl3QABACABABAABh2IAWhLIBtjQIgaiOAEggHIACAAIguDKIiYgXIgBAAIAMjDIAAgKIC5AaQgmAogtAVIgXAEIgSgHQgaA7AOAtADFl+QAEB/gPB8IhChdQhGA7g3BHADFhUQADAFABAFQAAADAAACQAAANgMAOIADgEQgJAJgMAAQgKAAgIgGQgCgCgBgBQgIgJAAgOQAAgHACgFQACgEADgEQAAgBABgBQAJgJAMAAQAMAAAJAJQADAEACADQAvAIApgFQgdA5hDgSADPAfQgHADgIgBQgKgBgGgGQgGgGABgGQABgHAIgEQAHgDAJABQAJABAGAGQAFAGgBAGQgBAHgHAEACVhZQgwAAgsgJQATAvAsAHQAPADASgCAFFBzIAAgCQAqhfAHg2AHFifQAJAGAIAGQAAAAAAABQg/CehQBmQgBABgBAAQgBACgCACQACgDABgDAE+CqQACgZACgaACkAzQghgOgcg8ADNA2QgCBBgaAsAHEifIgZgOIgJgFAlIIfIAMALIAiAeIAGAFQBTAWBnAHQAPABAPAAQAYABBTACQABAAABAAQAXAAAWgBQAOgBAPgBQBAgGA3gQQARgFARgGAE+CrQgLDQAaCiIg4AvAjflbQAQgSAKgRAABh2IiGkbIAViBAlHBkQhOhUhAiiQAAgBAAAAQAVgOATgOAhdgXIAAgGAhkgdIiyAWIgBAAIABAAIAAABQAlAnAtAOQAAAAABAAIAVAOIAAgBIARgSIAAAAQAcBEgQA0Ak+BzIgJgPQgnhQgHg4AlMIeQAkjMgYjbIgHgTAibAQQAAAGgHAFIAAABQgGAEgJAAQgKAAgGgFQgGgFAAgGQAAgHAGgFQAGgEAKAAQAJAAAGAEQAHAFAAAHgAidAqIAAAAQAkgGAcg7AjDAvQABA4ARAxAkWgGIAsDJICZgXIgMjDAgUkrQAXAaAfgdAABh2IgCAN");
	this.shape.setTransform(0,-25.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AAMANIgVgQIgHgIIABgFIAgAbIgBAFIAAABIgEgEg");
	this.shape_1.setTransform(-30.1,32.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EDEDED").s().p("AgjFlIAAgBIALgBQARAAALAGIgngEgACWjhQgKgBgGgGQgGgGABgGQABgHAHgEQAIgEAJACQAIABAHAGQAFAGgBAGQgBAHgHAEIAAAAQgFACgGAAIgEAAgAjrjnQgGgFgBgGQABgHAGgFQAGgFAKAAQAJAAAGAFQAHAFAAAHQAAAGgHAFIAAABQgGAEgJAAQgKAAgGgFgABukvIgCgDQgJgJAAgOQAAgHACgFIAFgIIACgCQAIgJANAAQAMAAAJAJIAFAHQADAFABAFIAAAFQAAANgMAOIADgEQgJAJgMAAQgLAAgIgGgACTkuQAMgOAAgNIAAgFQgBgFgDgFQAvAIAogFQgVArgsAAQgOAAgQgEgABOkwQgsgHgTgvQAsAJAvAAIgFAIQgCAFAAAHQAAAOAJAJIACADIgPABIgRgCgABukvIAAAAg");
	this.shape_2.setTransform(4.2,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000066").s().p("AGMBRIgdgSIABgCIAGAEIABAAQAFAAABgEIgBAAQADgFAEgLIAEgTQAUAKASANQAAAYgLASIgWgKgAmsAuQASgNAUgJIAEATQAEALADAEIgBABQABADADAAIACABIABAAIAGgEIABACIgdARIgJAEIgNAHQgLgSAAgZgAFDAhIAAgBQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAIABgBIABgCIgBgBQAGgHAQgaQAPAHAIAHQAAABAAAAQAAABABAAQAAABAAAAQABAAABAAIACADIgBABIgEAMIgGAMQgEAJgBAEIAAADQAAABAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIACAAIABABIAAAAIgCADIglgagAlpA2IAAgBIABAAIACAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAAAIAAgEQgBgEgEgIIgGgMIgEgNIgBgBIACgCQABAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAIgFAPgKQAOAYAHAIIABABIgBABIABACIABABQAAABAAAAQgBAAAAABQAAAAAAAAQAAAAAAABIAAAAIglAbIgCgDgAEVgHIgCgDIACAAIABgBIABgCIAEgGIAHgLIAOgPQANALANAOIgHAIQgIAMgJANIgBADIACADIgegagAkwANIgBgDIgBgCQgIgMgIgKIgHgJQANgOANgLIAOAPIAHAMIAEAFIAAABIABACIABAAIACABIgCADIgeAZIACgDgAEFgZIgBgBIgDgEQgNgQgMgSIAAgBQANgPAVgIQAOANALAQQgEACgHAHQgJAKgJANIAAADIgBgBgAkFgeIAAAAQgJgMgJgKQgHgHgEgDQALgPAOgNQAVAIANAPIgQAXIgJAMIgDAEIgBAAIgBABIAAgDg");
	this.shape_3.setTransform(-0.2,-52.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FDCE91").s().p("AiDgeIAUiBIAFgkQBzhsBdBqIAFAZIAZCOIhtDOIgVBLgAAEBSQANAAAPgNIAAAAIADgCIgDACIAAAAQgPANgNAAIAAAAIgBAAQgLAAgMgMQAMAMALAAIABAAIAAAAg");
	this.shape_4.setTransform(-0.1,-62.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AAvJHIhrgCIgegCQhngHhTgVIgGgGIgigdIgMgMIgEAAIAAgBQAkjLgYjcIACgDIgJgQQgmhOgIg5QAIA5AmBOQhOhShAikIgBgBIAqgcIAGADIABAAIAEgEQAegOAbgQIAAgBQAcgRAXgUIAAAAQAXgUAVgUIABgBIAAgBQAWgZASgdIAAAAIABgBIAAgGQAQgSAKgRIgBgUIA9hpIAZgXIgUCBICFEbIAWhLIBsjQIgZiOIAfAdIA8BuIgBAWIAFAHIACAFIgCgFIACAEIAAABIAAAGIABACIAAAAIAWAfQAQAZAUAXIAAABIABABQAUAUAXATIABAAQAXAUAbARIAAABQAbARAeAOIAEADIABAAIABAAIASAJIAGAEIABAAIAHgCIABAAIASAMIAAABQhACghQBlIgCgBQApheAHg3QgHA3gpBeIgDAFIgEAzIgFAHQAAASAFgYQgLDQAZCjIg4AuIABgCIgCAAIgiALQg2ARhBAFIgcACIgtABIgCAAgAAuJHQgNgHgRAAIgLABIgCgJIABAKIABAAIAAAEIAAgDIApAEIAAAAgAgUH0IAYBOIgYhOQAWi3AAjHQAAh5gHiCQAHCCAAB5QAADHgWC3IAAAAgABbCFIABAAICYAXIAujKIgCAAIi5gaIAAAKQAcA+AhAMQghgMgcg+IAAgKIC5AaIACAAIguDKIiYgXIgBAAIAMjDIgMDDgAjrCcICZgXIgLjDIAAgGIgHAAIAHAGQgdA9giAEIgBAAIgRATIAAAAIgVgOIAVAOIAAAAIARgTIAAABIABgBQAigEAdg9IALDDIiZAXIgrjJQAmApAsAMIABAAIgBAAQgsgMgmgpIAAgBIgBAAIABAAIAAABIArDJgACxB8QAagsAChBQgCBBgaAsgAiRB7QAGgSAAgVQAAglgSgrQASArAAAlQAAAVgGASgACXB0QgEgPAAgRQAAghARgnIASAIIAXgFQAtgTAmgqQgmAqgtATIgXAFIgSgIQgRAnAAAhQAAARAEAPgAixBxQgRgxgBg4QABA4ARAxgACzgiQgHAFgBAGQgBAHAGAFQAGAGAKACQAIABAHgDIAAgBQAHgEABgHQABgGgFgGQgHgGgIgBIgFAAQgGAAgGACgAjBggQgGAFgBAGQABAHAGAEQAGAFAKABQAJAAAGgFIAAgBQAHgEAAgHQAAgGgHgFQgGgGgJAAQgKAAgGAGgAkWguICygWgACrhLQAMAAAJgKIgDAEQBDATAcg6QgoAFgvgHIgFgHQgJgKgMAAQgNAAgIAKIgCABQgvAAgsgJQATAvAsAHQAPADARgCQAIAGALABgAgFiFQA3hHBGg7IBCBdQALhfAAhiIgBg6IABA6QAABigLBfIhChdQhGA7g3BHIADgLQg3hBg/g2IhCBdQgMhdAAhgIABg+IgBA+QAABgAMBdIBChdQA/A2A3BBIgDALgAgCiQIADgNgAkWgtIAAAAgAhdg+gAgFiFgAkKlSIABgBIAAABg");
	this.shape_5.setTransform(0,-21.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAwHwIADAAIAsgBIABADQgUAAgUADIgIgFgAGkkoIgEgEQgegOgbgQIAAgBQgbgRgYgUIAAAAQgXgTgUgVIgBAAIAAgBQgUgXgRgZIgEgGIAAgBIgBgBIAAgIIABgBIAAgEIACAEIABgCIABADQAQgQAXgIIADAAIACABIAPAUIAKAMIAEACIACABIACACIABAAIAAABQAIAGgBAFIASASQADgBADACIAEACIAHAGQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABQACADAAADIAUAPQADgBAJAFQANAHABAHIAmAWIACABIAAADQABAcgNAUIADACIAEADIgBABIgCAAIgKgFIAKAFIgHADIgBAAgAFwlSIgBACIAdASIAWAKQALgSAAgYQgSgNgUgKIABgDIgEgFQgGgIgFgBIgCABIgCADIgCgDQgBAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQgIgHgPgJIACgDQgEgDgDgEQgDgDgGgCIgBACQgNgOgNgLIABgCIgCgEIgJgFIgDgDQgLgQgOgNQgVAIgNAPIAAABQAMASANAQIADAEIABABIABABIADACIAAAAIAFAEIADAEIACAEIACADIAeAcIAAABIAHADQAGAEACADQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAIAAABIAlAaIACgDIAGAFgADonRIgJgJgAGtkrgAmkkrIgHgCIgDgBIgBgBIAEgDIADgBQgNgVABgcIAAgCIACgBIAmgWQABgHANgHQAJgGADACIAUgPQAAgDACgEQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAIAHgGIAEgCQADgCADAAIASgRQgBgFAIgHIAAAAIABAAIACgCIACgCIAEgBQANgQAMgQIACgCIADAAQAXAJAQAQIABgDIABABIACgDIABAFIAAACIAAAGIgBABIAAAAQgSAdgXAZIAAABIgBABQgUAUgXAUIAAAAQgYAUgbARIAAAAQgbARgeAOIgEADgAmDmAIgEAGIABADQgUAJgSANQAAAZALASIANgHIAJgEIAdgRIgBgCIAGgFIACADIAlgbIAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAgBQACgDAGgEIAHgDIAAgBIAegbIACgDIACgEIADgEIAFgFIAAAAIADgCIABgBIABAAIADgEIAJgMIAQgXQgNgPgVgIQgOANgLAPIgDADIgJAFIgCAFIABABQgNALgNAOIgBgBQgGABgDADQgDAFgEACIACADQgPAKgIAHQAAAAAAABQAAAAgBABQAAAAAAAAQgBABgBAAIgCACIgCgDIgCAAQgFABgGAHg");
	this.shape_6.setTransform(-0.2,-12.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF8F6").s().p("AF2BMIgGgEIgGgFIAAAAIgBgBIgCAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBIAAgDQABgEAEgJIAGgMIAEgMIABgBIACgDIACgBQAFABAGAIIAEAFIgBADIgEATQgEALgDAFIABAAQgBAEgFAAgAl2BKIgCgBQgDAAgBgDIABgBQgDgEgEgLIgEgTIgBgDIAEgGQAGgHAFgBIACAAIACADIABABIAEANIAGAMQAEAIABAEIAAAEQAAAAAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgCAAIgBAAIAAABIgGAFIgGAEgAE6AiIgHgDIAAgBIgCgDIABgDQAJgPAIgKIAHgIIABgCQAGACADADQADAEAEACIgCACQgQAcgGAHIABABIgBACIgBABQgCgDgGgEgAlCAlIgBgCIABgBIgBgBQgHgIgOgZIgCgCQAEgCADgFQADgDAGgBIABABIAHAJQAIAIAIAOIABACIABADIgCADIAAABIgHADQgGAEgCADIgBgBgAERgDIgDgEIgFgEIAAgBIAAABIgDgCIAAgDQAJgNAJgKQAHgHAEgCIADADIAJAFIACAEIgBACIgOAPIgHALIgEAGIgBACIgBAAIgCAAIgCgDgAEPgRIAAAAIABAAIAAgBIgBABgAkUgCIgBAAIgBgCIAAgBIgEgFIgHgMIgOgPIgBgBIACgFIAJgFIADgDQAEADAHAHQAJAKAJAMIAAAAIAAADIgDACIAAAAIAAAAIgFAFIgDAEIgCAEIgCgBgAkPgUIABABIAAAAIgBgBgAFggcIgDgCIgFgCIACgBIAAAAIABABQAGAAADAFIACAEIgGgFgAEuhJIgDgCQADABADADIAAABIgDgDg");
	this.shape_7.setTransform(-0.2,-53.8);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-48.1,-88.4,96.2,126.5);


(lib.Shoulder = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACPAaIhWDVQgHgCgIgCQhkghhAhgQgLgQgJgRQAlg3Adg6QAqhWAYhdQAAgDABgCQABgFABgGIABAAIAGgDQAAAAAAAB");
	this.shape.setTransform(2,-22.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AAqDqQhkghhAhfQgLgQgJgRQAlg4Adg5QAqhWAYheIABgEIACgLIABAAIAGgDQCaBMgNCoIABAFIgBgCIABADIABAOIhWDVIgPgFg");
	this.shape_1.setTransform(2,-22);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.3,-47,30.8,49.9);


(lib.Mouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_19).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AA4gIQgZgQgSABQgQABgEAAIgBAAQgEAAgSgCQgTgBgXAWIA/gEQAHABAFAAQAyAEADgGQAIgCAJgFAAZAZIhFAA");
	this.shape.setTransform(0.1,-0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC6666").s().p("AgVgJIAVACIAAAAIAVgBQASgBAaAOQgEAGgygEIgLgBIhAAEQAXgUAUABg");
	this.shape_1.setTransform(-0.7,-2.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AA3gQQgagRgSABQgRAAgCAAIAAAAQgFACgSgCQgTgBgaAWIAEAAIA+gFQAHABAVABQAWABALgBQADAAABgCQAIgCAOgGAhHgIQAmASAmgGQAXgEAYgLAAXAcQgiALgigL");
	this.shape_2.setTransform(0.2,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#660000").s().p("Ag9gCIAAgDIA9gFIAcACIAhAAIABADQgYAKgXAEQgKACgHAAQgeAAgdgNg");
	this.shape_3.setTransform(-0.8,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC6666").s().p("AgUgJQASACADgCIAAAAIAUAAQATgBAaAPQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgiAAIgcgCIg8AFIgFAAQAagUATABg");
	this.shape_4.setTransform(-0.9,-2.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("ABHgXQAAAAAAAAQgcgRgTABQgUABgEAAIAAAAQgEAAgTgBQgWgBgZAVIACAAIBEgDQAAAAADAAIAAAAQAFAAAFABQAzADAHgFgAhEgTQAKALAJAIQAzAtAzgvQAJgJAJgMAAhAiQgfANgmgN");
	this.shape_5.setTransform(-0.7,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#660000").s().p("AgygFQAcgKAXAAQAZABAZAHQgZAXgaAAQgYAAgagVg");
	this.shape_6.setTransform(-0.6,0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhFgGIBEgEIADABIAAAAIAKABQAzADAHgFQgJAKgKAJQgZgHgZgBQgXAAgcAKQgJgIgKgJg");
	this.shape_7.setTransform(-0.6,-1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CC6666").s().p("AhGAKQAZgUAWABIAXACIAAAAIAYgBQATgBAcAOIAAABQgHAFgzgEIgKAAIAAAAIgDgBIhEAEg");
	this.shape_8.setTransform(-0.7,-3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("AA3gQQAIgCAOgGAA3gQQgagRgSABQgRAAgCAAIAAAAQgFACgSgCQgTgBgaAWIAEAAIA+gFQAHABAVABQAWABALgBQADAAABgCgAhHgIQAmASAmgGQAXgEAYgLAAXAcQgiALgigL");
	this.shape_9.setTransform(0.2,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},3).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},3).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_9}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.2,-4.2,16.7,7.1);


(lib.Leg = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AiYqyIAEgCAiVNpIgHx3IAEmkAiVNuQASADATACQA7AHA3gFQABAAAAAAQAfgDAfgGIAAAAQAVgEAVgGQAJgDAIgDIAh7SAACNrIAp5m");
	this.shape.setTransform(16,11.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AhwN3IglgFIAAgFIgHx3IAEmlIABAAIADgCIAAAAQBEjsDtAqIghbTIgRAFIgqALIAAAAQgfAGgfADIgBAAQgVABgYAAQgiAAgjgDgAACNuIAp5lgAiXqvIADgCg");
	this.shape_1.setTransform(16,11.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.7,-78.3,33.5,179.6);


(lib.Head = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AC/gLQADgDADgCQAEgEAFgDQABAFABAFQABAKABAIQAAABABAAQAFA4gPAsQgIAWgcgcQgIBGgEAVQgFAVgCADQgEAHgFAGQgHAIgHAHQgBABgBABQgKAJgMAIQgXAQgdANQgCABgCAAQgQAEgOABQgCAAgCAAIgJAAQgCAAgEAAQgOgBgQgEQgugSgegcACDkAQA+AUAUBHQgVBDgBBKQAAABAAAAQAAAGAAAGACDkAIgjBRQgPgIgSACQhcAkhOAEQgiAfgMAiQgBAAAAABQAAAAAAABQgBABAAABQAAACgBABQgBAIgBAHQAAABAAAAIAAABQAAABAAABQgBABAAABQgBALAAANQAAAHAAAIIAAABQABASAEAXQAAACAAADIABAGQgBgDgBgDQgKgZgKgNQgBgCgCgDQgBgKgBgKQgJhKgUg1QgCgPAAgFIAAgCQAphJBygpQCCgaA6A6gACQhBIAGAOIgHgBIhpgIIAFgXQA2ABAvARgABgivQAqAeAZA+IgBBpIAAAKIAAAGIABAAIgBgGAiPgzIAHgBIBpgIIgFgXQg2ABgvAPgAizgFIAAAAQgFgGgEgFQgFgEgFgDQgGAUgBARQAAABAAABIAAAAQgDAyAOAoQAIAWAegXQAAADABACQAFA6AIAlQACAFABAFIgBACAi9AQIAPAfIABABIAMAZAitAwIgGAPAiaAsIAEA9IAAAEIAeAuAAaB9QgCADgDADQgEADgFACQgEACgFABQgEgBgEgCQgGgCgDgDQgDgDgBgDQgNgHgPABQgBgQAMgLAgSB9QgBgKACgBACjAmQABgCACgCIAAAAQAGgKABgCQAHgUAJgKQABgCABgBACzArIAIASACzArIgQAcIAAghAAaA/QgCgeACgXQAAgBAAAAIABgOIAAgCQAEgaAIgPAAaB9QABgMgCAAAAaB9QAMgHAPABQABgQgMgLACJCSIAag0IAAgXAiLDXQAEAGAaAbADGAGIgTAl");
	this.shape.setTransform(-0.7,-8.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AgOgNIABgCQAEAGAYAZg");
	this.shape_1.setTransform(-13.3,14.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("AicClQgKgZgKgPIgDgFIgCgVQgJhJgUg0IgCgTIAAgCQAphKBygoQCCgaA6A5IgjBSQgPgJgSADQhcAjhOAEQgiAegMAiIgBAAIAAACIgBACIgBADIgCAPIAAABIAAAAIAAADIgBABIgBAYIAAAQIAAAAQABAVAEAWIAAAFIABAGIgCgFgACiCVIABhsQgZg8gqgdIAjhSQA+AUAUBIQgVBBgBBKIgCAQQgJAMgHAUgAAmBBIAFgXQA2ABAvARIgBANgAiJA5QAvgOA2gBIAFAXIhpAIg");
	this.shape_2.setTransform(-0.7,-20.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FDCE91").s().p("AAGDwIgIAAIgHAAQgOgCgQgDQgugTgegbIgBgBIgRgRIAVAUQgagcgEgGIgDgJQgIglgFg7IgBgEQgeAXgIgWQgOgoADgwIAAgBIAAgBQABgTAGgUQAFACAFAFIAJALIAAAAIADAFQAKAPAKAZIACAFIgBgGIAAgFQgEgWgBgVIAAAAIAAgQIABgYIABgBIAAgDIAAAAIAAgBIACgPIABgDIABgCIAAgCIABAAQAMgiAiggQBOgEBcgjQASgDAPAJQAqAdAZA+IgBBsIAAAKIAAAGIABAAIADgEIAAgBIAHgLQAHgUAJgMIACgEIAGgFQAEgEAFgCIACAJIACAUIABACQAFA2gPAsQgIAWgcgcQgIBFgEAVIgHAZIgJAMIgOAQIgCABQgKAKgMAIQgXAQgdANIgEABQgQADgOACIgEAAgAiZAzIAeAvIgegvIAAgEIgEg7IAEA7IAAAEgACgAlIgaAzIAagzIAAgYgAgVBEIAEAFIAJAGIAIACIAJgCIAJgFIAFgGIACgBQAKgGALAAIABAAIAAAAIADAAIABgCQAAgOgMgLQAMALAAAOIgBACIgDAAIAAAAIgBAAQgLAAgKAGIgCABIAAgHQAAgGgBAAQABAAAAAGIAAAHIgFAGIgJAFIgJACIgIgCIgJgGIgEgFIAAgGQAAgFABgBQgBABAAAFIAAAGIgCgBIAAgBIgBAAQgKgFgLAAIAAAAIgBAAIgDAAIAAgCQAAgOALgLQgLALAAAOIAAACIADAAIABAAIAAAAQALAAAKAFIABAAIAAABIACABIAAAAgAixgJIABACIAMAWIgMgWIgBgCIgPgfgACgANIAQgaIgQAaIAAgeIAAAegAAXAGIgBgfIABgUIAAgCIABgQIAAgBQAEgaAIgPQgIAPgEAaIAAABIgBAQIAAACIgBAUIABAfgAi2AFIAGgMgACwgNIAIAQIgIgQIATgkIgTAkgAAYhsIACAAIAJgCIABgBIABAAIADABIgBgBIgDAAIgBAAQgGAAgFADgAAjh1IBpAIIAHAAIgGgNQgvgRg2gBgAiMh9IgGAQIAHAAIBpgIIgFgXQg2ABgvAOgAgVBEIAAAAgACgANg");
	this.shape_3.setTransform(-0.4,-2.5);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23,-39,44.7,61.5);


(lib.Hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ag3ByIAAgCIg4hwIgEAAIAAAAIA6jcABzBzQgoACgNhLQAAgBACgEQACgEgOgaQgNgZgnAfIAAABIAAAAQgBADgBADQgJApALAqIAAADQANgDARAeQgFACgHABIAYApQALAcgRAIIgGgIAAABqIASAeAg3ByIACADIAAABIABAFIBFBiIANgQAhaACIAjBtIAAADAg/AGIAWBlIBHBiABXhDIAdC0AAvjTQgCBCApBO");
	this.shape.setTransform(11.6,22.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDCE91").s().p("Ag0B7IgBgFIAAgBIgBgDIgBgDIgihtIAiBtIAAABIg4hwIgEAAIAAAAIA6jcIBoAJQgCBCApBOIABAAIAdC0IgBACQgpACgMhLQgBgBADgEQACgEgNgaQgOgZgnAfIAAABIAAAAIgCAGQgJApALAqIAAADQANgDARAeIgMADIgSgeIASAeIAYApQALAcgRAIIgGgIIhHhiIgWhlIAWBlIBHBiIgNAQgAAeDNg");
	this.shape_1.setTransform(11.6,22.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,25.2,46.4);


(lib.Foot = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAqhxQAOAfAQAZQAEAFADAFQAMAQANAOQAVATAMASQAIANAEALQAIAagTAWIgDAWQgDgBgEgBQiAgRh+ARID+AAAhBgnQAegIAeABQABgBABABQARAAATADQAFAAAGABAg8gbQAcgFAcAAQAWAAAZAEQADAAADABAg/hBQApgJAnAIQADABACAAACJAUQiCgphdAcIgCABQgRAogtgPACKBcQiKgViCARIAAAAQgSgYgCgfIAAAAQgBgNACgQIAIhrAiDBeIADARAhDhOQAsgKAqAK");
	this.shape.setTransform(0,2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("ACACIQiAgSh+ASIgCgCIgDgRIABgGQgSgYgCgeIAAgBQgBgNACgQIAIhqIADgOQA5gqAdgBQAeAAARADQAPADAdAeIADALQAOAeAQAaIAHAJQAMARANALQAVAWAMASIgBgBIgCAAIgCgBIgBAAIgGgCIAAAAQhFgWg6AAIAAAAIAAAAQgsAAgmAMIgCABIgCAAIAAABIgBABIAAACQgNAZgZAAIAAAAIAAAAQgJAAgKgDIAAAAIgDgBIgBAAIABAAIADABIAAAAQAKADAJAAIAAAAIAAAAQAZAAANgZIAAgCIABgBIAAgBIACAAIACgBQAmgMAsAAIAAAAIAAAAQA6AABFAWIAAAAIAGACIABAAIACABIACAAIABABQAIAMAEALQAIAagTAXIgEgBIgGgBIAAAAIgDAAQhHgKhDAAIAAAAIAAAAQg7AAg6AHIAAAAIAAAAQA6gHA7AAIAAAAIAAAAQBDAABHAKIADAAIAAAAIAGABIAEABIgDAVIgHgBgAgEgIQAWAAAZADIAGABIgGgBQgZgDgWAAIgDAAIgCAAIAAAAIgBAAQgYAAgXAEIgDAAIADAAQAXgEAYAAIABAAIAAAAIACAAIADAAgAhBgQIAEgBIACAAIABAAIABgBIAEAAQAVgFAWAAIABAAIAAAAIACAAIACAAIACAAQARAAATADIALACIgLgCQgTgDgRAAIgCAAIgCAAIgCAAIAAAAIgBAAQgWAAgVAFIgEAAIgBABIgBAAIgCAAIgEABgAARgqIAFABIgFgBIgCgBIgBAAQgPgDgSAAIgBAAIAAAAQgUAAgUAEIgDABIADgBQAUgEAUAAIAAAAIABAAQASAAAPADIABAAIACABIAAAAgAATg3QgqgJgsAJQAWgFAWAAQAWAAAUAFg");
	this.shape_1.setTransform(0,-0.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.1,-13.8,32.3,28.4);


(lib.Eyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_56 = function() {
		///*
		//js
		//this.play(0);
		//*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(56).call(this.frame_56).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AA9gPQAEgBAFgBQAOgDATADQAEAAAEABQAFABAGABQAIASgKAPIhRgCIgCgRQAJgKAPgFgABngRQABAEAAAEQAAAJgGAEQgHAHgJAAQgJAAgGgHQgHgEAAgJQAAgDABgDAg7gOQgRgGgYADQgFAAgEABQgGABgGABQgIASAKAPIBSgCIACgRQgJgJgPgFQABADAAADQAAAIgHAGQgGAGgJAAQgJAAgGgGQgHgGAAgIQAAgEACgF");
	this.shape.setTransform(0.1,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDCE91").s().p("AAHAAIAAAAIgDAAIgJABIgBAAQAGgDAHACg");
	this.shape_1.setTransform(3.4,-3.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().p("AhgAJQgHgGABgHIABgKQAYgDARAGIABAHQAAAHgGAGQgHAHgJAAQgJAAgGgHgABCAIQgGgGAAgHIAAgGIAJgCQAPgDATACIABAJQgBAHgGAGQgHAHgJAAQgIAAgHgHg");
	this.shape_2.setTransform(0.2,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAnAQIgCgQQAJgKAPgFIgBAGQAAAJAHAEQAGAHAJAAQAJAAAHgHQAGgEAAgJIgBgJIAIABIALADQAIASgKAPgAh5gOIAMgDIAJgBIgCAKQAAAIAHAFQAGAHAJAAQAJAAAGgHQAHgFAAgIIgBgHQAPAFAJAKIgCAQIhSADQgKgPAIgSg");
	this.shape_3.setTransform(0.1,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AA9gPQAEgBAFgBQAOgDATADQAEAAAEABQAFABAGABQAIASgKAPIhRgCIgCgRQAJgKAPgFgABngRQABAEAAAEQAAAJgGAEQgHAHgJAAQgJAAgGgHQgHgEAAgJQAAgDABgDAhkgRQgFAAgEABQgGABgGABQgIASAKAPIBSgCIACgRQgJgJgPgFQgRgGgYADgAg7gOQABADAAADQAAAIgHAGQgGAGgJAAQgJAAgGgGQgHgGAAgIQAAgEACgF");
	this.shape_4.setTransform(0.1,1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("ABtgHQAIgBAIAAQADANgIAMIhRgDIABgFQAOgGANgDQASgIAYABIAAAAQAAAHgGAHQgGAGgKAAQgJAAgGgGQgDgEgCgDAAoAJIACgJAB3gQQAFAEABAEAgoAJQgOgGgNgDQgRgIgZABQAAAHAHAHQAGAGAJAAQAJAAAGgGQAEgEABgDAgoAJIgCgJAh8gIQgBACAAABQAAAFAAADQABAHAEAHIBSgDIgCgFAhtgHQgHgBgIAAAh2gQQgFAEgBAE");
	this.shape_5.setTransform(0.1,1.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAnAKIABgFIAbgHQACACADADQAGAGAJAAQAKAAAGgGQAGgFAAgJIAAAAIAQgBQADANgIAMgAh9AAIAAgJIABgDIAPABQAAAJAHAFQAGAGAJAAQAJAAAGgGQAEgDABgCQANACAOAFIACAFIhSADQgEgHgBgGg");
	this.shape_6.setTransform(0.1,1.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0000FF").s().p("ABIAEQgDgDgBgCQARgKAYABIAAABQABAJgHAEQgGAHgJAAQgJAAgHgHgAhmAEQgGgEAAgJQAYgCASAKQgCACgEADQgFAHgKAAQgJAAgGgHg");
	this.shape_7.setTransform(0.1,1.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AAmACQAWAKgDgFAAvgGQgEgHgHANQAvgJApABAgugGQAEgHAHANQgvgJgpABAglADQgWAJADgE");
	this.shape_8.setTransform(0.3,3.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("AB9gIQADANgIAMIhRgDIABgFIACgJABtgHIAAAAQAAAHgGAHQgGAGgKAAQgJAAgGgGQgDgEgCgDABtgHQAIgBAIAAAAoAJQAOgGANgDQASgIAYABAB3gQQAFAEABAEAh8gIQgBACAAABQAAAFAAADQABAHAEAHIBSgDIgCgFIgCgJAhtgHQAAAHAHAHQAGAGAJAAQAJAAAGgGQAEgEABgDQgRgIgZABQgHgBgIAAAgoAJQgOgGgNgDAh2gQQgFAEgBAE");
	this.shape_9.setTransform(0.1,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape_4}]},48).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},2).to({state:[{t:this.shape_8}]},2).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_9}]},3).to({state:[{t:this.shape_6},{t:this.shape_7},{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.5,-3.7,27.3,7.9);


(lib.BackHand = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAXj4QANAPAKAdIARBFQABAGABAGQABAbAZA/AgPhOQAAgEABgEIANgpAApAhQgPgGgaAWIAAABIgBABQgBACAAADQgJApALApIgggmQgGgegQgeQAXg0AQhCQgLA5BDA2gABzCYQgpABgMhKQgBgCADgEQACgEgNgaQgFgIgHgCAg2B8IApArIAiAFAg2B8IAmA5IA3AbAhSBgIARAiIAMAYIAAABIABAEIAYAdIA9A5IACAFQASgIgLgdIgDgFAAACKQAAAAAAABIAAAAQAUAFAKAZQgCABgDABQgCAAgCABQgCAAgBAAQAVAKAAAaABagiQACBaAYBdAhSBgIgdg8IgEAAIAAgBIA6jbAhSBgIAcAc");
	this.shape.setTransform(6,18.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDCE91").s().p("AAgDzIg8g5IgXgdIgCgEIAAgBIgMgYIAMgGIAoArIAiAFIgDAAQAWAKgBAaIADAFQALAdgRAIgAgQCzIA3AbIg3gbIglg5gAgNClIgogrIgdgcIgdg8IgDAAIAAgBIA5jbQACgFAvgtQAeggAYA+IARBGIACALQABAcAZA+IgBgBQACBaAYBdIgBADQgpABgMhKQgBgCADgEQACgEgNgaQgFgIgHgCQg5guAAgyIABgPQgQBCgWA0QAQAeAGAeIAfAmIgfgmQgGgegQgeQAWg0AQhCIgBAPQAAAyA5AuQgPgGgaAWIAAABIgBABIgBAFQgJApALApIAAABIAAAAQAUAFAKAZIgEACIgFABgAgOhYIgBAIIABgIIANgpg");
	this.shape_1.setTransform(6,18.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.6,-7.4,25.2,52);


(lib.Arm = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACYhaQgCgKgGgMACYhYIAAgCIAphUACOgDIADgHQAMgkgDgjQgBgEgBgFACOgBQgDAGgFAKQgYAphHA3Qh4BRgFBsAA5krIhNCgIgBACIABgCAjAEiICrmr");
	this.shape.setTransform(0.3,-11.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDCE91").s().p("AjAEPIAAgCICrmqIACgCIBMigQB2gFAPCAIADABIgoBVQgDgLgGgLQAGALADALIgBABIACAHQADAkgMAkIgCAHIgBABQgDAJgFAJQgYAohHA2Qh4BRgFBtQgiAogaAAQgcAAgSgxgAgUifIABAAIgCACg");
	this.shape_1.setTransform(0.3,-9.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20,-42.8,40.7,65.2);


(lib.Abdomen = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AABimQAFgBAGAAQARAAANAHQAFADAFAEQALAJAEAMQACAGAAAHQAAARgMAMQATAAASgBQgBAhgIAXAAAimIABAAAgNihQAHgDAGgBQAAgBAAAAIAAgJIABAJABZihQACAOABANQACAXAAAUAA5haQgCACgDADQgQAOgYAAQgVAAgRgOQgDgDgDgDQgKgMAAgQQAAgIACgHQAEgKAKgJQAGgFAHgDAAqigQAYAAAXgBQAPgBAOgBQACAOABAMQADAYgBAUQAcgDAagEQBBgKA7gSQgBAOgCAPIAAAAQAAABAAACQgBABAAACQgCAMgEANAEwjcIABAAIABAAIAAAAIgCAAIgXAUQAHAKAEALQAAABABAAQAIAXAAAaQAAABAAAAAExjcIgBAAAExjdIAAABAB2ijQBBgFA2gQQASgFAQgGIAGgBIAEgEAEcAZIAAgBQAAAAABgBQAAAAAAAAQATgXANgXIAChBQgCgEABgDQABgIACgHQAJgugJghQAAgBAAgBQgFgOgHgMAAMDhQABgBACAAQBFgZAigiAAADkIAAgBQgqgVglgYAAMDhQgBAAgCABQgCABgDABQgBAAgBAAQABAAAAAAQAFgCAEgBgACzhSIAMA0IBRAsAB7hdQAAAigIAYAk4giIgBgrQAAgBAAgBQgFgQgCgQQgIgvAGgzIAAgBQABgIABgJIAEACIAeAbIAGAGQBTAVBnAHQAAACAAACQgBAKgBAKQgCAYABAUQABAdAHAUAkmiAIAHhBIABgFAkmiAQAEABAEABQA7AMA4AJQAmAFAkAEAhAiiQASAAATABQAHAAAHAAAheikQAPABAPABQgBADAAADQgBAKgBAKQgBAXAAAUQATABARABAgGDeQgVgOgKgSAithcIgKBBIhPAkAhEhdQACAbAHATAkYhNIgOgz");
	this.shape.setTransform(0.4,57.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AAEDjIAFgCQgBABgCADgAAADjIAAgBIAAABIAAAAIAAgBIAAgCIgGgDQgVgOgKgSQAKASAVAOIgGgDQgigSghgTQg7gjgvgmQg2grgkgtIgBgBIgBgBQgVgZgOgcIgBgrIAAgCQgFgQgCgQQgIgvAGgzIAAgBIACgRIAEADIAeAaIgBAFIgHBBIAIACQA7AMA4AJQAmAFAkAEQgBgUACgYIACgUIAAgEIAeACIgBAGIgCAUQgBAXAAAUIAkACIAGAGQARAOAVAAQAYAAAQgOIAFgFIAlgBQAAgUgCgXIgDgbIAdgCIADAaQADAYgBAUQAcgDAagEQBBgKA7gSIgDAdIAAAAIAAADIgBADIgGAZIAGgZIABgDIAAgDIAAAAIADgdIAAgBQAAgagIgXIgBgBQgEgLgHgKIAXgUIACAAIADADQAHAMAFAOIAAACQAJAhgJAuIgDAPQgBADACAEIgCBBQgNAYgTAWIAAAAIgBABIAAABQg6BHhsBEQgiAjhFAZIgDABIgJADgAC/gfIBRAsIhRgsIgMg0gAi3gcIhPAkIBPgkIAKhBgABzgkQAIgYAAgiQAAAigIAYgABVgkQAIgXABghQgBAhgIAXgAg7gwQgHgTgCgbQACAbAHATgAhZgwQgHgUgBgdQABAdAHAUgAkYhOIgOgzgAExjdIAAgBIABABg");
	this.shape_1.setTransform(0.4,57.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABLA4QAAgHgCgGQgDgMgLgJIgKgHIAvgBIADAbQACAXgBAUIgkABQALgMAAgRgAg9BSQgBgUACgXIACgUIAAgGIgdgCQhogHhTgTIgGgGIgegbQE8hKExBPIAAAAIgXAUQAGAKAFALIAAABQAJAVgBAaIAAABQg7AShAAKQgbAEgbADQAAgUgCgYIgDgaQBAgFA3gOIAigLIAGgBIAEgEIgEAEIgGABIgiALQg3AOhAAFIgdACIgvABQgOgHgQAAIgMABIgCgJIACAJIgBABQgGABgHADIgOAAIglgBIAlABIAOAAQgGADgGAFQgKAJgEAKQgDAHAAAIQAAAQALAMIgkgCgAikBGQg4gJg7gMIgIgCIAHg/IAGABQBTATBoAHIgBAEIgBAUQgCAYABAUQglgEglgFg");
	this.shape_2.setTransform(-0.3,40.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EDEDED").s().p("AgmAhIgHgGQgKgMAAgPQAAgGACgHQAFgLAKgIQAFgFAHgDQAHgEAIgBIAAAAIABAAIAKgBQAQAAAOAHIAKAHQALAJADAMQACAGAAAFQAAAQgMANIgEAEQgRAOgXAAQgVAAgRgOg");
	this.shape_3.setTransform(1.7,45.8);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33.2,31.6,67.3,50.1);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Watch();
	this.instance.setTransform(1.8,-19.2,0.699,0.699,27.3,0,0,8.2,5.4);

	this.instance_1 = new lib.Hand();
	this.instance_1.setTransform(13.1,-18.8,1,1,0,3.9,-176.1);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.6,-25.8,27.3,51.9);


(lib.MaleDefault = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_34 = function() {
		this.stop();
	}
	this.frame_69 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(34).call(this.frame_34).wait(35).call(this.frame_69).wait(1));

	// Eyes
	this.instance = new lib.Eyes();
	this.instance.setTransform(-26.4,-134.2,1,1,-3.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:5.1,x:-23,y:-134.3},5,cjs.Ease.get(-1)).to({rotation:0.9,x:-18.1},6,cjs.Ease.get(1)).to({rotation:0.9},12).wait(13).to({rotation:5.1,x:-23},6,cjs.Ease.get(-1)).to({rotation:-3.2,x:-26.4,y:-134.2},5,cjs.Ease.get(1)).wait(1));

	// Mouth
	this.instance_1 = new lib.Mouth();
	this.instance_1.setTransform(-24.8,-111.3,1,1,-3.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:5.1,y:-111.4},5,cjs.Ease.get(-1)).to({rotation:0.9,x:-18.3},6,cjs.Ease.get(1)).to({rotation:0.9},12).wait(13).to({rotation:5.1,x:-24.8},6,cjs.Ease.get(-1)).to({rotation:-3.2,y:-111.3},5,cjs.Ease.get(1)).wait(1));

	// Head
	this.instance_2 = new lib.Head();
	this.instance_2.setTransform(-2.7,-94.3,1,1,-3.2,0,0,21.2,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:30.8,rotation:5.1,x:-5.4,y:-91.6},5,cjs.Ease.get(-1)).to({rotation:0.9,x:2.6,y:-92.9},6,cjs.Ease.get(1)).to({rotation:0.9},12).wait(13).to({rotation:5.1,x:-5.4,y:-91.6},6,cjs.Ease.get(-1)).to({regY:30.9,rotation:-3.2,x:-2.7,y:-94.3},5,cjs.Ease.get(1)).wait(1));

	// Torso
	this.instance_3 = new lib.Torso();
	this.instance_3.setTransform(-25.1,-39,1,1,0,0,0,-0.1,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({rotation:3.2,x:-22.4,y:-39.1},6,cjs.Ease.get(1)).wait(25).to({rotation:0,x:-25.1,y:-39},6,cjs.Ease.get(-1)).wait(6));

	// Abdomen
	this.instance_4 = new lib.Abdomen();
	this.instance_4.setTransform(-24.8,19,1,1,3.5,0,0,0.4,56.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:3.3,x:-24.9},5,cjs.Ease.get(-1)).to({rotation:3.5,x:-24.8},6,cjs.Ease.get(1)).wait(25).to({rotation:3.3,x:-24.9},6,cjs.Ease.get(-1)).to({rotation:3.5,x:-24.8},5,cjs.Ease.get(1)).wait(1));

	// Rshoulder
	this.instance_5 = new lib.Shoulder();
	this.instance_5.setTransform(-67.6,-49.1,1,1,-10.5,0,0,2,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:-21.9,rotation:1.2,x:-72.2,y:-48.7},4,cjs.Ease.get(-1)).to({regY:-22,rotation:-3.5,x:-70.3,y:-48.8},1).to({rotation:4,x:-68.7,y:-51.4},6,cjs.Ease.get(1)).wait(25).to({rotation:-3.5,x:-70.3,y:-48.8},6,cjs.Ease.get(-1)).to({regY:-21.9,rotation:1.2,x:-72.2,y:-48.7},1).to({regY:-22,rotation:-10.5,x:-67.6,y:-49.1},4,cjs.Ease.get(1)).wait(1));

	// LShoulder
	this.instance_6 = new lib.Shoulder();
	this.instance_6.setTransform(18,-48.9,1,1,0,10.2,-169.8,1.9,-22.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1,scaleY:1,skewX:10.1,skewY:-169.9},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,skewX:9.7,skewY:-170.3,x:22.6,y:-45.8},6,cjs.Ease.get(1)).wait(25).to({scaleX:1,scaleY:1,skewX:10.1,skewY:-169.9,x:18,y:-48.9},6,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,skewX:10.2,skewY:-169.8},5,cjs.Ease.get(1)).wait(1));

	// LHand
	this.instance_7 = new lib.Tween1("synched",0);
	this.instance_7.setTransform(26.6,40.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({startPosition:0},5,cjs.Ease.get(-1)).to({rotation:-5.5,x:28.5,y:44.2},6,cjs.Ease.get(1)).to({startPosition:0},12).to({startPosition:0},1).to({startPosition:0},12).to({rotation:0,x:26.6,y:40.6},6,cjs.Ease.get(-1)).to({startPosition:0},5,cjs.Ease.get(1)).wait(1));

	// LArm
	this.instance_8 = new lib.Arm();
	this.instance_8.setTransform(22.7,-0.2,1,1,0,16.4,-163.6,-1.7,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(5).to({skewX:21.1,skewY:-158.9,x:24.4,y:2.8},6,cjs.Ease.get(1)).wait(25).to({skewX:16.4,skewY:-163.6,x:22.7,y:-0.2},6,cjs.Ease.get(-1)).wait(6));

	// RArm
	this.instance_9 = new lib.Arm();
	this.instance_9.setTransform(-75.3,1,1,1,-14.5,0,0,-1.8,-1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({rotation:-1.8,x:-89.1,y:-4.5},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,skewX:72.7,skewY:-107.3,x:-97.7,y:-14.3},1,cjs.Ease.get(-1)).to({regY:-2,scaleX:1,scaleY:1,skewX:103.7,skewY:-76.3,x:-104.1,y:-30.9},6,cjs.Ease.get(1)).wait(25).to({regY:-1.9,scaleX:1,scaleY:1,skewX:72.7,skewY:-107.3,x:-97.7,y:-14.3},6,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-1.8,skewX:0,skewY:0,x:-89.1,y:-4.5},1,cjs.Ease.get(1)).to({rotation:-14.5,x:-75.3,y:1},4,cjs.Ease.get(1)).wait(1));

	// RHand
	this.instance_10 = new lib.Hand();
	this.instance_10.setTransform(-92.8,24.2,1,1,-10.2);

	this.instance_11 = new lib.BackHand();
	this.instance_11.setTransform(-109.5,7,0.998,0.998,0,20.9,-159.1);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:-4.2,x:-111.6,y:14.9},4,cjs.Ease.get(-1)).to({_off:true,scaleX:1,scaleY:1,rotation:0,skewX:20.9,skewY:-159.1,x:-109.5,y:7},1,cjs.Ease.get(-1)).wait(37).to({_off:false,scaleX:1,scaleY:1,rotation:-4.2,skewX:0,skewY:0,x:-111.6,y:14.9},1,cjs.Ease.get(1)).to({rotation:-10.2,x:-92.8,y:24.2},4,cjs.Ease.get(1)).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(4).to({_off:false},1,cjs.Ease.get(-1)).to({skewX:76.9,skewY:-103.1,x:-122.2,y:-11.2},3,cjs.Ease.get(0.3)).to({scaleX:1,scaleY:1,skewX:58.2,skewY:-121.8,x:-125.2,y:-18.6},3,cjs.Ease.get(1)).wait(25).to({scaleX:1,scaleY:1,skewX:76.9,skewY:-103.1,x:-122.2,y:-11.2},3,cjs.Ease.get(-1)).to({skewX:20.9,skewY:-159.1,x:-109.5,y:7},3,cjs.Ease.get(-0.3)).to({_off:true,scaleX:1,scaleY:1,rotation:-4.2,skewX:0,skewY:0,x:-111.6,y:14.9},1,cjs.Ease.get(1)).wait(5));

	// LLeg
	this.instance_12 = new lib.Leg();
	this.instance_12.setTransform(-0.7,104.7,1,1,-5.5,0,0,15.9,11.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({x:-0.8,y:104.8},5,cjs.Ease.get(-1)).to({x:-0.7,y:104.7},6,cjs.Ease.get(1)).wait(25).to({x:-0.8,y:104.8},6,cjs.Ease.get(-1)).to({x:-0.7,y:104.7},5,cjs.Ease.get(1)).wait(1));

	// RLeg
	this.instance_13 = new lib.Leg();
	this.instance_13.setTransform(-41.7,192,1,1,0,0.7,-179.3,15.2,97.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(48));

	// Rfoot
	this.instance_14 = new lib.Foot();
	this.instance_14.setTransform(-44.8,203.9,1,1,0,0,180,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(48));

	// LFoot
	this.instance_15 = new lib.Foot();
	this.instance_15.setTransform(10.7,202.7,1,1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(48));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.6,-163.6,153.8,381.5);


// Open mouth and hand gesture
(lib.open = function(instance) {
	instance.gotoAndPlay(0);    // Begin gesture
	instance.instance_1.play(); // Open mouth
});

// Close mouth and hand gesture
(lib.close = function(instance) {
	instance.gotoAndPlay(35);           // End gesture
	instance.instance_1.gotoAndStop(0); // Close mouth
});


// stage content:



(lib.MaleDefaultInit = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.MaleDefault();
	this.instance.setTransform(271,210.2,1,1,0,0,0,-26.6,31.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(470,215,153.8,381.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
