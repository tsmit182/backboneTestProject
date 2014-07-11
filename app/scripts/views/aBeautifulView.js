var ANewView = Backbone.View.extend({
	initialize: function() {
		console.log('Hey! initialize is running!');
	},
});

var anExceptionalViewInstance = new ANewView({
		el: 'hero-unit',
});