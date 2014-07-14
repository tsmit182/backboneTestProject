//
//
//Fetching data and creating views

unfortunatelyArbitraryVariables.fetch().done(function () {
    new ANewView( {collection: unfortunatelyArbitraryVariables } );
});

		//The above worked when pasted into console; presumably an issue lies within my ordering.
		//unfortunatelyArbitraryVariables displays as undefined when linked to from this file.