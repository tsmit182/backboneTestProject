
var SomethingConstructed = Backbone.Model.extend ({
		name: '',
		type: 'thing',
		isGood: true,
	});


var goodThingConstructed = new SomethingConstructed ({
     name: 'A Good Thing'
 });
var ANewView = Backbone.View.extend({
	initialize: function() {
		console.log('Hey! initialize is running!');
	},
});

var anExceptionalViewInstance = new ANewView({
		el: 'hero-unit',
});