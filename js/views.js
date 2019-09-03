var SongView = Backbone.View.extend({
    // specigy the attributes, tags, elements
    tagName:'sapn',
    className: 'song',
    id: 'new_id',
    attributes: {
        'data-genre': 'Jazz'
    },
    events: {
        'click': 'onClick',
        'click .save': 'clicked',
    },
    onClick: () => alert('button clicked'),
    clicked: (e) => {
                    e.stopPropagation();
                    alert('just clicked')},
    
    
    render: function(){  // define what to render builtIn
        // this.$el.html("New Song Added!!!");  //change the inner html of container($el) to this data.
        this.$el.html('New Song Added!!!    <button>click me</button> <button class="save">save</button>');

        return this;  // return reference to render object (container) data
    }
});

// instance of view

/*************
// add inside the element, no tags,elements, etc will be created
var songView = new SongView({ el: "#song" });  // set element at initialization
songView.render();
*/


// create new div inside the reference(#song) and insert the html data
//  tags,elements, etc will be created
var songView = new SongView();  // set element at initialization


songView.render();
$('#song').html(songView.$el); // no need of this if specify at initialization


// $('#song').html(songView.render().$el);
