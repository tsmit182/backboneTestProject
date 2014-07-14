
//Creating a model

var SomethingConstructed = Backbone.Model.extend ({
	defaults:{
		name: '',
		type: 'thing',
		isGood: true,
	},
	idAttribute:('_id'),
	initialize:function(){
		var name = this.get('name');
		console.log(name + ' has been added to the list.');
	}

});


//Making some instances of that model

var goodThingConstructed = new SomethingConstructed ({
     name: 'A Good Thing'
 });

var betterThingConstructed = new SomethingConstructed ({
		name: 'A Better Thing'
});

var bestThingConstructed = new SomethingConstructed ({
		name: 'The Best Thing'
});
	

//Setting up a collection.

var WhatACollection = Backbone.Collection.extend ({
		model: SomethingConstructed,
		url: "http://tiy-atl-fe-server.herokuapp.com/collections/taylorSmith"
});

//Collection instance
var unfortunatelyArbitraryVariables = new WhatACollection();
var ANewView = Backbone.View.extend({

  template: function(model){
    return _.template($('#purposeful_list').html());
  },

	el: $('.hero-unit p'),

	initialize: function() {
		console.log('Hey! initialize is running!');
		this.render();

		//?? "Uncaught TypeError: Cannot read property 'on' of undefined"
				 // this.collection.on('change', this.render, this);
				 // this.collection.on('destroy', this.render, this);
		},


 	render: function(){
  	this.$el.html( this.template(this.collection) )
  },
});



var anExceptionalViewInstance = new ANewView({
		el: '.hero-unit p',
});


//
//
//Fetching data and creating views

unfortunatelyArbitraryVariables.fetch().done(function () {
    new ANewView( {collection: unfortunatelyArbitraryVariables } );
});
