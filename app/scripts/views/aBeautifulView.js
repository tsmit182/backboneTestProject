var ANewView = Backbone.View.extend({

  template: function(model){
    return _.template($('#purposeful_list').html());
  },

	el: $('.hero-unit p'),

	initialize: function() {
		console.log('Hey! initialize is running!');
		this.render();

		//?? "Uncaught TypeError: Cannot read property 'on' of undefined"
				this.collection.on('change', this.render, this);
				this.collection.on('destroy', this.render, this);
		},


 	render: function(){
  	this.$el.html( this.template(this.collection) )
  },
});



var anExceptionalViewInstance = new ANewView({
		el: '.hero-unit p',
});

