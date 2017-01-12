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

var strong = new Question("Do ye like yer drinks strong?");
salty = new Question("Do ye like it with a salty tang?");
bitter = new Question("Are ye a lubber who likes it bitter?");
sweet = new Question("Would ye like a bit of sweetness with yer poison?");
fruity = new Question("Are ye one for a fruity finish?");


});
  //End Constructor functions for Questions, Ingredients, Pantry, MISC.



  //Strong Drinks


