$( document ).ready(function() {

//Constructor function for Questions, Ingredients, and Pantry, or MISC.
  var Worker = function(name, question) {
  this.name = name;
  this.question = question;
  };

  var Question = function(type, question) {
  this.type = type;
  this.question = question;
  };

  var Ingredient = function(type, description) {
    this.description = description;
  };

  var Pantry = function() {
    this.ingredient = {};
  };

//Generate questions for the bartender using the Question constructor
var strong = new Question("Do ye like yer drinks strong?");
salty = new Question("Do ye like it with a salty tang?");
bitter = new Question("Are ye a lubber who likes it bitter?");
sweet = new Question("Would ye like a bit of sweetness with yer poison?");
fruity = new Question("Are ye one for a fruity finish?");
//Strong, and Strong question should appear in the console.
console.log(strong.type);
console.log(strong.question);

// Generate ingredients for the pantry
var strongIngredient = new Ingredient("Strong" ["Glug of rum", "slug of whisky", "splash of gin"]);
saltyIngredient = new Ingredient("Salty" ["Olive on a stick", "salt-dusted rim", "rasher of bacon"]);
bitterIngredient = new Ingredient("Bitter" ["Shake of bitters", "splash of tonic", "twist of lemon peel"]);
sweetIngredient = new Ingredient("Sweet" ["Sugar cube", "spoonful of honey", "splash of cola"]);
fruityIngredient = new Ingredient("Fruity" ["Slice of orange", "dash of cassis", "cherry on top"]);
//Strong ingredient description & Type should appear.
console.log(strongIngredient.type);
console.log(strongIngredient.description);




});
  //End Constructor functions for Questions, Ingredients, Pantry, MISC.



  //Strong Drinks


