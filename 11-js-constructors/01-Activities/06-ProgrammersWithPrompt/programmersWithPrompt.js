// dependency for inquirer npm package
var inquirer = require("inquirer");

// constructor function used to create programmers objects
function Programmer(name, position, age, language, car) {
  this.name = name;
  this.position = position;
  this.age = age;
  this.language = language;
  this.car = car;
}

// creates the printInfo method and applies it to all programmer objects
Programmer.prototype.printInfo = function () {
  console.log("Name: " + this.name + "\nPosition: " + this.position + "\nAge: " +
    this.age + "\nLanguages: " + this.language + "\nCar: " + this.car);
};

// runs inquirer and asks the user a series of questions whose replies are
// stored within the variable answers inside of the .then statement.
inquirer.prompt([
  {
    name: "name",
    message: "What is your name?"
  }, {
    name: "position",
    message: "What is your current position?"
  }, {
    name: "age",
    message: "How old are you?"
  }, {
    name: "language",
    message: "What is your favorite programming language?"
  }, {
    name: "car",
    message: "What car do you drive?"
  }
]).then(function (answers) {
  // initializes the variable newProgrammer to be a programmer object which will take
  // in all of the user's answers to the questions above
  var newProgrammer = new Programmer(answers.name, answers.position, answers.age, answers.language, answers.car);
  // printInfo method is run to show that the newProgrammer object was successfully created and filled
  newProgrammer.printInfo();
});
