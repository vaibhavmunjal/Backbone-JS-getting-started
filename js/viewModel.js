let SongModel = Backbone.Model.extend();

let SongViews = Backbone.View.extend({

    tagName: 'li',

    render: function() {
        this.$el.html(this.model.get('title'));
        this.$el.attr('id', this.model.id);

        return this;
    }
});


// single model view
let viewSong = new SongModel({'title': 'new title'});
let songViews = new SongViews({el: '#song2', model: viewSong});
songViews.render();


// list of model view
// collection views
let SongColl = Backbone.Collection.extend({
    model: SongModel
});

let collView = Backbone.View.extend({

    tagName: 'ul',

    initialize: function() {
        this.model.on('add', this.addSong, this);
        this.model.on('remove', this.removeSong, this);
    },

    addSong: function(song) {
        console.log("add");
        let songView = new SongViews({model: song});
        this.$el.append(songView.render().$el);
    },
    
    removeSong: function(song) {
        console.log("remove");
        this.$('li#' + song.id).remove();
    },

    render: function() {
        let self = this;
        this.model.each((song) =>{
            let songView = new SongViews({model: song});
            this.$el.append(songView.render().$el);
            // self.$el.append(songView.render().$el);
        });
        return this;
    }
});

var songscoll = new SongColl([
    new SongModel({id:'1', title: 'title1'}),
    new SongModel({id:'2', title: 'title2'}),
    new SongModel({id:'3', title: 'title3'}),
    new SongModel({id:'4', title: 'title4'})
]);

let songview = new collView({el: '#song_coll', model: songscoll});
songview.render();


// to add or delete the dom (collection) data
// songscoll.remove(songscoll.at(1))
// songscoll.add(new SongModel({id:'6', title:'5'}))