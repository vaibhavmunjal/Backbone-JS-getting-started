// created a base as Arbitrary extended by the Triangle
// to call the super prototype is used

var Arbitrary = Backbone.Model.extend({  // base
    shape: () => {
        console.log("this is arbitrary shape!!!");
    }
});

var Triangle = Arbitrary.extend({  // extends base
    shape: () => {
        Arbitrary.prototype.shape.apply(this); // base function changed
        console.log("triangle created");
    }
});


var triangle = new Triangle();  // created triangle object
triangle.shape(); // called triangle function shape 