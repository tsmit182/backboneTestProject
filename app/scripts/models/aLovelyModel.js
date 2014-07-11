var SomethingConstructed = Backbone.Model.extend ({
		name: '',
		type: 'thing',
		isGood: true,
	});


var goodThingConstructed = new SomethingConstructed ({
     name: 'A Good Thing'
 });