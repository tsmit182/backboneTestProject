
//Creating a model

var SomethingConstructed = Backbone.Model.extend ({
		name: '',
		type: 'thing',
		isGood: true,
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

var unfortunatelyArbitraryVariables = new WhatACollection();
var ANewView = Backbone.View.extend({
	initialize: function() {
		console.log('Hey! initialize is running!');
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

		//The above worked when pasted into console; presumably an issue lies within my ordering.
		//unfortunatelyArbitraryVariables displays as undefined when linked to from this file.