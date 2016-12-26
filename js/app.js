$( document ).ready(function() {

	//An array containing the dialogue of the bartender.
	var bartenderQuestions = [
		"Do ye like yer drinks strong?",
		"Do ye like it with a salty tang?",
		"Are ye a lubber who likes it bitter?",
		"Would ye like a bit of sweetness with yer poison?",
		"Are ye one for a fruity finish?"
	];

	//An object designed to contain the ingredients for a drink provided by the bartender.
	var ingredients = {
		strong: ["Glug of Rum", "Slug of Whisky","Splash of Gin"],
		salty: ["Olive on a stick", "Salt-dusted rim", "Rasher of bacon"],
		bitter: ["Shake of bitters", "Splash of tonic", "Twist of lemon peel"],
		sweet: ["Sugar cube", "Spoonful of honey". "Splash of cola"],
		fruity: ["Slice of orange", "Dash of cassis", "Cherry on top"]
	}

	//An array containing the dialogue of the chef.
	var chefQuestions = [
		"Hey man, what kind of burger do you want?",
		"That's great, do you want any condiments?",
		"Delicious choice, what kind of bun would you like?",
		"Awesome, it'll be on it's way."
	]



    //Grab Value of submit form
    $( "#pirate-question" ).submit(function( event ) {
	  event.preventDefault();
	  console.log("Answer Submitted")
	});

});