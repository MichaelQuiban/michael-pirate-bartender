$( document ).ready(function() {

//Constructor function for Questions, Ingredients, and Pantry, or MISC.
var Questions = function(type, question) {
  this.type = type;
  this.question = question;
};

var Ingredients = function(type, description) {
  this.type = type;
  this.description = ingredient;
};

var Pantry = function (ingredient) {
  this.ingredient = {};
};

var Worker = function (name, question) {
  this.name = name;
  this.question = question;
};

var Bartender = function(name, question) {
  Worker.call(this, name);
  this.question = [];
};
//End Constructor functions for Questions, Ingredients, Pantry, MISC.

Pantry.prototype.addIngredient = function(ingredient) {
  if (this.ingredients[ingredient.type]) {
    this.ingredients[ingredient.type].push(ingredient.description);   
  } else {
    this.ingredients[ingredient.type] = [ingredient.description];
  }
};

Pantry.prototype.getIngredient = function(type) {
  //Grab array that matches the type.
  //Generate a random number within the array. & Return Item.
  var random = Math.floor(Math.random() * this.ingredients[type].length); 
  return this.ingredients[type][random];                                  
};

});


