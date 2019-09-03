let Tsong = Backbone.Model.extend();

let TsongView = Backbone.View.extend({
    render: function() {
        let template = _.template($('#template').html());
        let html = template(this.model.toJSON());
        this.$el.html(html);
        console.log(html);

        return this;
    }
});

let tsong = new Tsong({title: 'template string', plays: 10});
let tSongView = new TsongView({el: '#template_string', model: tsong});
tSongView.render();