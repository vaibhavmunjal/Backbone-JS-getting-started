// model created
// collection created
// models added into collection
// Backbone event initialized
// Todo list (ul) view created
//      with .on(...)event function
// functionality of individual todo 
// get new todo from input




var TodoModel = Backbone.Model.extend();

var TodoCollection = Backbone.Collection.extend({
    Model: TodoModel
});

//  list of models
var TodoList = new TodoCollection([
    new TodoModel({title:'title1'}),
    new TodoModel({title:'title2'}),
    new TodoModel({title:'title3'}),
    new TodoModel({title:'title4'}),
]);

// Backbone event initialized
var todo = _.extend({}, Backbone.Events);


// view the todolist
var TodoListView = Backbone.View.extend({
    tagName: 'ul',

    initialize: function() {
        // add event for each todo
        todo.on("addNewTodo", this.addNewTodo, this);
    },

    // list all the TodoList models at user end
    render: function() {
        this.collection.each(function(newtodo) {
            // create views for each model
            // append the created render view in html $el
            // return the resultant context/updted element result
            const todoView = new TodoView({model: newtodo});
            this.$el.append(todoView.render().$el);
        }, this);

    return this;
    },

    // add the event functionality
    addNewTodo: function(title){
		const todomodel = new TodoModel({ title: title });
		const todolist = new TodoView({ model: todomodel });
		this.$el.prepend(todolist.render().$el);
	}
});

// View for delete new todo(from input) 
var TodoView = Backbone.View.extend({
    tagName: 'li',
    
    events: {
        'click .delete': 'delTodo'
    },

    render: function() {
        const newData = $('#new_todo').html();
        const template = _.template(newData);
        this.$el.html(template(this.model.toJSON()));

        return this;
    },

    delTodo: function() {
        this.remove();
    }
});



// add new todo from input to div
var AddTodo = Backbone.View.extend({
    events:{
        'click #add': 'addTodo'
    },
    render: function() {
        const data = $('#add_todo').html();
        const template = _.template(data);
        this.$el.html(template());

        return this;
    },

    addTodo: function() {
        const input = this.$el.find('#todo');
        const value = input.val();
        todo.trigger('addNewTodo', value);
        input.val('');
    }
});



$('#todo_list')
            .append(
                new AddTodo()
                    .render()
                    .$el)
            .append(
                new TodoListView({collection: TodoList})
                    .render()
                    .$el);