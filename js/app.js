$( document ).ready(function() {

  //Constructor function for Questions, Ingredients, and Pantry, or MISC.
  var Worker = function(name) {
    this.name = name;
    this.customers = {};
  };

  Worker.prototype.greet = function() {
    var name = $("#user-name").val();
    //Look up name
    if(this.customers[name]) {
      //Offer the usual
    } else {
      //Add new customer
      this.addCustomer(name);
    }
    $("#greeting").hide();
  };
  
  Worker.prototype.addCustomer = function(name){
    var customer = new Customer(name);
    this.customers[name] = customer;
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

  var Customer = function(name) {
    this.name = name;
    this.preferences = [];
    this.drink = "";
  }

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

  var Drink = function(name, ingredients) {
    this.name = name;
    this.ingredients = ingredients;
  };

  var Preferences

  Drink.prototype.makeName = function(name) {
    var adjectives = ["Good", "New", "First", "Last", "Long"];
    var nouns = ["Parrot", "Peg-leg", "Poopdeck", "Blackbeard", "Booty"];
    var randomAdjective = adjectives[Math.floor(Math.random() * this.adjectives.length)];
    var randomNouns = nouns[Math.floor(Math.random() * this.nouns.length)];
    var randomName = randomAdjective + " " + randomNouns;
    return randomName;
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

  // Generate ingredients for the pantry
  var myPantry = new Pantry();

  //Strong
  var ingredient = new Ingredient("Strong", "Glug of Rum");
  myPantry.addIngredient(ingredient);

  var ingredient = new Ingredient("Strong", "Slug of Whisky");
  myPantry.addIngredient(ingredient);

  var ingredient = new Ingredient("Strong", "Splash of Gin");
  myPantry.addIngredient(ingredient);

  //Salty
  ingredient = new Ingredient("Salty", "Olive on a stick");
  myPantry.addIngredient(ingredient);

  ingredient = new Ingredient("Salty", "Salt-dusted rim");
  myPantry.addIngredient(ingredient);

  ingredient = new Ingredient("Salty", "Twist of lemon peel");
  myPantry.addIngredient(ingredient);

  //Bitter
  ingredient = new Ingredient("Bitter", "Shake of bitters");
  myPantry.addIngredient(ingredient);

  ingredient = new Ingredient("Bitter", "Splash of Tonic");
  myPantry.addIngredient(ingredient);

  ingredient = new Ingredient("Bitter", "Twist of lemon peel");
  myPantry.addIngredient(ingredient);

  //Sweet
  ingredient = new Ingredient("Sweet", "Sugar cube");
  myPantry.addIngredient(ingredient);

  ingredient = new Ingredient("Sweet", "Spoonful of Honey");
  myPantry.addIngredient(ingredient);

  ingredient = new Ingredient("Sweet", "Splash of Cola");
  myPantry.addIngredient(ingredient);

  //Fruity
  ingredient = new Ingredient("Fruity", "Slice of orange");
  myPantry.addIngredient(ingredient);

  ingredient = new Ingredient("Fruity", "Dash of cassis");
  myPantry.addIngredient(ingredient);

  ingredient = new Ingredient("Fruity", "Cherry on top");
  myPantry.addIngredient(ingredient);

  $("#name-area").submit(function( event ) {
    event.preventDefault();
    myBartender.greet();
    console.log(myBartender);
  });

  $("#food-drink").submit(function( event ) {
    event.preventDefault();


  });


});


