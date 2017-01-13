$( document ).ready(function() {

  //Constructor function for Questions, Ingredients, and Pantry, or MISC.
    var Worker = function(name) {
      this.name = name;
    };

    Worker.prototype.greet = function() {
      console.log("What's your name?");
    };

    var Bartender = function(name) {
      Worker.call(this, name);
      this.questions = [];
    };

    Bartender.prototype = Object.create(Worker.prototype);
    Bartender.prototype.constructor = Bartender;

    Bartender.prototype.addQuestion = function(question) {
      this.questions.push(question);
    };

    var Question = function(type, question) {
      this.type = type;   
      this.question = question;
    };

    var Ingredient = function(type, description) {
      this.type = type;
      this.description = description;
    };

    var Pantry = function() {
      this.ingredients = {}; 
    };

  var myBartender = new Bartender("Tim");

  //Generate questions for the bartender using the Question constructor
  var question = new Question("Strong", "Do ye like yer drinks strong?");
  myBartender.addQuestion(question);

  question = new Question("Salty", "Do ye like it with a salty tang?");
  myBartender.addQuestion(question);

  question = new Question("Are ye a lubber who likes it bitter?");
  myBartender.addQuestion(question);

  question = new Question("Would ye like a bit of sweetness with yer poison?");
  myBartender.addQuestion(question);

  question = new Question("Are ye one for a fruity finish?");
  myBartender.addQuestion(question);

  //Strong question should appear in the console.
  console.log(strong.question);


  // Generate ingredients for the pantry
  var myPantry = new Pantry();

  Pantry.prototype.addIngredient = function(ingredient) {
    if (this.ingredients[ingredient.type]) {
      this.ingredients[ingredient.type].push(ingredient.description);
    } else {
      this.ingredients[ingredient.type] = [ingredient.description];
    }
  };

  Pantry.prototype.getIngredient = function(type) {
   // get array that matches the type
   // generate a random number within the range of how many items are in the array
   // return the item from that index
    var random = Math.floor(Math.random() * this.ingredients[type].length);
    return this.ingredients[type][random];
  };

/*"slug of whisky", "splash of gin"]
"salt-dusted rim", "rasher of bacon"
"splash of tonic", "twist of lemon peel
"spoonful of honey", "splash of cola"
*/

  var ingredient = new Ingredient("Strong", "Glug of rum");
  myPantry.addIngredient(ingredient);

  ingredient = new Ingredient("Salty", ["Olive on a stick", "salt-dusted rim", "rasher of bacon"]);
  myPantry.addIngredient(ingredient);

  ingredient = new Ingredient("Bitter", ["Shake of bitters", "splash of tonic", "twist of lemon peel"]);
  myPantry.addIngredient(ingredient);

  ingredient = new Ingredient("Sweet", ["Sugar cube", "spoonful of honey", "splash of cola"]);
  myPantry.addIngredient(ingredient);

  ingredient = new Ingredient("Fruity", ["Slice of orange", "dash of cassis", "cherry on top"]);
  myPantry.addIngredient(ingredient);

});


