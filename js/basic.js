// Initialize - works as a constructor
// defaults - set the preset/ default for the attribute
// validate - validate if attribue is provided or correct
// set the attribute via .set
// set multiple attributes via {} inside .set or at the initialize phase
// get the attribute via .get(key)
// operation - unset, has, validationError, clear, isValid



let Song = Backbone.Model.extend({
    initialize: function(){     // work as constructor
        console.log("new address space created")
    },

    defaults: {
        genre: "unknown"  // set the default value if no value/attribute  provided
    },

    validate: (attrs) => {  //validating the attribute
        if(!attrs.title){
            return "Title is required";
        }
    }
});

var song = new Song();

// set the attributes
song.set("title", "hurray!!");


// set multiple attributes
song.set({"title1": "t1", "title2":"t2", "title3":"t3"} );


// set attributes at initialize phase
var song2 = new Song(
    {"title1": "t1", "title2":"t2", "title3":"t3"}
);


// accessing/operating over the attributes
console.log(song);
console.log(song2);
console.log(song.get("title"));
console.log(song.has("title"));
console.log(song.unset("title")); 
console.log(song.clear());


// To get the validation error or status
console.log(song2.isValid());
console.log(song2.validationError);




