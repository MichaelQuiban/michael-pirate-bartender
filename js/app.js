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

  var Ingredient = function(description) {
    this.description = description;
  };

  var Pantry = function(ingredient) {
    this.ingredient = {};
  };

//Generate questions for the bartender using the Question constructor
var strong = new Question("Strong", "Do ye like yer drinks strong?");
salty = new Question("Salty", "Do ye like it with a salty tang?");
bitter = new Question("Bitter", "Are ye a lubber who likes it bitter?");
sweet = new Question("Sweet", "Would ye like a bit of sweetness with yer poison?");
fruity = new Question("Fruity" ,"Are ye one for a fruity finish?");
console.log(strong.type);
console.log(strong.question);
console.log(salty);

// Generate ingredients for the pantry
var strongIngredient = new Ingredient("");



});
  //End Constructor functions for Questions, Ingredients, Pantry, MISC.



  //Strong Drinks


