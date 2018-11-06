var NodeGeocoder = require("node-geocoder");
var inquirer = require("inquirer");


var options = {
  provider: "mapquest",
  apiKey: "iBaYX2L7auGAIYON09MswEyCc1EXhlym"
};

var geocoder = NodeGeocoder(options);


inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "What is your name?",
      name: "username"
    },
    {
      type: "input",
      message: "What is your house number?",
      name: "housenumber"
    },
    {
      type: "input",
      message: "What is your street name?",
      name: "street"
    },
    {
      type: "input",
      message: "What is your city?",
      name: "city"
    },
    {
      type: "input",
      message: "What is your state?",
      name: "state"
    },
    {
      type: "input",
      message: "What is your zipcode?",
      name: "zip"
    },
    // Here we ask the user to confirm.
    {
      type: "confirm",
      message: "Ready to submit order?",
      name: "confirm",
      default: true
    }
  ])
  .then(function (inquirerResponse) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    if (inquirerResponse.confirm) {
      console.log("Thank you " + inquirerResponse.username);

      var address = (inquirerResponse.housenumber + " " + inquirerResponse.street + " " + inquirerResponse.city + " " + inquirerResponse.state + " " + inquirerResponse.zip);
      console.log(address);

      geocoder.geocode(address, function (err, data) {
        if (err) {
          return console.log(err)
        }
        console.log(JSON.stringify(data, null, 2))
      });
    }
    else {
      console.log("Nevermind then");
    }
  });

