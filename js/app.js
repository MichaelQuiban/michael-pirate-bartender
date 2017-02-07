"use strict";

$( document ).ready(function() {

  //Hide the thanks section until user supplies a name.
   $("#thanks").hide();
   $("#usual-customer").hide();
   $("#food-drink").hide();
   $("#question-area").hide();
   $("#order-drink").hide();
   $("#order-complete").hide();
   $("#pirate-thanks").hide();
   let customerName;
   let consumer;

  //Constructor function for Questions, Ingredients, and Pantry, or MISC.
  let Worker=function(name) {
    this.name=name;
    this.customers={};
  };

  Worker.prototype.greet=function() {
    $("#usual-customer").show();
    if(this.customers[customerName]) { 
      //Offer the usual
      let usual="<h3>" + this.name + "!" + " Welcome back bucko!</h3><br><p>The usual " + randomName + ".</p>"
      $("#usual-customer").append(usual);
    } else {
      //Add new customer
      this.addCustomer(customerName);
    }
    $("#food-drink").show();
    $("#greeting").hide();
  };
  
  Worker.prototype.addCustomer=function(name){
    let customer=new Customer(name);
    this.customers[name]=customer;
  };

  let Bartender=function(name) {
    Worker.call(this, name);
    this.questions=[];
  };

  Bartender.prototype=Object.create(Worker.prototype);
  Bartender.prototype.constructor=Bartender;

  Bartender.prototype.addQuestion=function(question) {
    this.questions.push(question);
  };

  //Display questions and other sweet stuff for the user.
  Bartender.prototype.askQuestions=function() {
      //Taketh away the order.
    //Append the takers of information.
    for (let i = 0; i < myBartender.questions.length; i++) {
      let displayQuestion="<div class='bartender-question' " + 
                          "id='question"+i+"'>" + myBartender.questions[i].question + "</div>";
      let choice="<select id='user-choice"+i+"'><option>Choose</option><option value='yes'>Yarr!</option><option value='no'>No!</option></select>";
      $("#bartender-question").prepend(displayQuestion, choice);
    }

  };

  //Constructor function for Customers.
  let Customer=function(name) {
    this.name=name;
    this.preferences=[];
    this.ingredients=[];
    this.drink={};
  }

  //Constructor function for Questions.
  let Question=function(type, question) {
    this.type=type;   
    this.question=question;
  };

  //Constructor function for Ingredients.
  let Ingredient=function(type, description) {
    this.type=type;
    this.description=description;
  };

  //Constructor function for the Pantry to store Ingredients.
  let Pantry=function() {
    this.ingredients={}; 
  };

  Pantry.prototype.addIngredient=function(ingredient) {
    if (this.ingredients[ingredient.type]) { //Grab array that matches type.
      this.ingredients[ingredient.type].push(ingredient.description); 
    } else {
      this.ingredients[ingredient.type]=[ingredient.description];
    }
  };

  Pantry.prototype.getIngredient=function(type) {
    if (this.ingredients[type]) { //Grab array that matches type.
      //Generate random number with that range based on item amount.
      let random=Math.floor(Math.random() * this.ingredients[type].length); 
      return this.ingredients[type][random]; // Return the item from that index.
    }
  };

  

  //Generate a random name out of adjectives and nouns for the drink
  Bartender.prototype.makeName=function() {
    let adjectives=["Good", "New", "First", "Last", "Long"];
    let nouns=["Parrot", "Peg-leg", "Poopdeck", "Blackbeard", "Booty"];
    let randomAdjective=adjectives[Math.floor(Math.random() * adjectives.length)];
    let randomNouns=nouns[Math.floor(Math.random() * nouns.length)];
    let randomName=randomAdjective + " " + randomNouns;
    consumer.drink = randomName;
    return randomName;
  };

  //Generate a sweet name for the bartender.
  let myBartender=new Bartender("Tim");

  //Generate questions for the bartender using the Question constructor
  let question=new Question("Strong", "Do ye like yer drinks strong?");
  myBartender.addQuestion(question);

  question=new Question("Salty", "Do ye like it with a salty tang?");
  myBartender.addQuestion(question);

  question=new Question("Bitter", "Are ye a lubber who likes it bitter?");
  myBartender.addQuestion(question);

  question=new Question("Sweet", "Would ye like a bit of sweetness with yer poison?");
  myBartender.addQuestion(question);

  question=new Question("Fruity", "Are ye one for a fruity finish?");
  myBartender.addQuestion(question);

  // Generate ingredients for the pantry
  let myPantry=new Pantry();

  //Create a strong ingredient and add them to the pantry.
  let ingredient=new Ingredient("Strong", "Glug of Rum");
  myPantry.addIngredient(ingredient);

  ingredient=new Ingredient("Strong", "Slug of Whisky");
  myPantry.addIngredient(ingredient);

  ingredient=new Ingredient("Strong", "Splash of Gin");
  myPantry.addIngredient(ingredient);

  //Create a Salty ingredient and add them to the pantry.
  ingredient=new Ingredient("Salty", "Olive on a stick");
  myPantry.addIngredient(ingredient);

  ingredient=new Ingredient("Salty", "Salt-dusted rim");
  myPantry.addIngredient(ingredient);

  ingredient=new Ingredient("Salty", "Twist of lemon peel");
  myPantry.addIngredient(ingredient);

  //Create a Bitter ingredient and add them to the pantry.
  ingredient=new Ingredient("Bitter", "Shake of bitters");
  myPantry.addIngredient(ingredient);

  ingredient=new Ingredient("Bitter", "Splash of Tonic");
  myPantry.addIngredient(ingredient);

  ingredient=new Ingredient("Bitter", "Twist of lemon peel");
  myPantry.addIngredient(ingredient);

  //Create a Sweet ingredient and add them to the pantry.s
  ingredient=new Ingredient("Sweet", "Sugar cube");
  myPantry.addIngredient(ingredient);

  ingredient=new Ingredient("Sweet", "Spoonful of Honey");
  myPantry.addIngredient(ingredient);

  ingredient=new Ingredient("Sweet", "Splash of Cola");
  myPantry.addIngredient(ingredient);

  //Create a Fruity ingredient and add them to the pantry.
  ingredient=new Ingredient("Fruity", "Slice of orange");
  myPantry.addIngredient(ingredient);

  ingredient=new Ingredient("Fruity", "Dash of cassis");
  myPantry.addIngredient(ingredient);

  ingredient=new Ingredient("Fruity", "Cherry on top");
  myPantry.addIngredient(ingredient);

  //Grab the users name, Greet the user, and save the user.
  $("#name").submit(function( event ) {
    event.preventDefault();
    //Grab the name of the user
    customerName=$("#user-name").val();
    //Build an object with the new name.
    consumer=new Customer(customerName);
    console.log(myBartender);
    console.log(consumer);
    //Greet the customer.
    myBartender.greet(consumer);
    //Hide the default greeting.
    $("#customer-greet").hide();
    $("#user-name", "#name-submit").hide();
    //Thank the user and tell them to choose drink preferences.
    $("#thanks").show();
    //Clear the input after name retrieved.
    $("#user-name").val('');
  });

  //Global counter
  let counter=0;

  //Push answers into the preferences array.
  $(document).on("click", "#submit-pref", function () {
    if ($("#user-choice").val() === "yes") {
      //Push preferences into preferences object
      consumer.preferences.push(myBartender.questions[counter].type);
    };
      console.log(consumer);
  });

  $("#bartender-question").submit(function(event) {
    event.preventDefault();
    for (let i = 0; i<myBartender.questions.length; i++) {
      let item = "#user-choice" + i;
      if ($(item).val() === "yes") {
        consumer.preferences.push(myBartender.questions[i].type);        
      }
    }
    $("#question-area").hide();
    $("#order-drink").show();
  });

  //Grab the preferences and radnomly get ingredient from pantry.
  $("#submit-order").click(function(event) {
    event.preventDefault();
    for (let i=0; i < consumer.preferences.length; i++) {
      consumer.ingredients.push(myPantry.getIngredient(consumer.preferences[i]));
    };
    let newDrink = myBartender.makeName();
    let displayEnd = "<p id = 'ingredient-text'>Using a " + consumer.ingredients + " " + " which is really" + " " + consumer.preferences + " I've created a drink called a " + " " + newDrink + "</p>";
    $("#drink").append(displayEnd);
    $("#submit-order").hide();
  });

  $("#food-drink").submit(function( event ) {
    event.preventDefault();
    $("#food-drink").hide();
    $("#question-area").show();
    myBartender.askQuestions();
  });
});
