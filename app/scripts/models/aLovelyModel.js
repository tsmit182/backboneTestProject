
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

//Collection instance
var unfortunatelyArbitraryVariables = new WhatACollection();