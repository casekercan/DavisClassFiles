// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)
var config = {
  apiKey: "AIzaSyAMingkuWjz6H7t3mIEaSesO4cYR25lzNc",
  authDomain: "coding-bootcamp-uc-davis.firebaseapp.com",
  databaseURL: "https://coding-bootcamp-uc-davis.firebaseio.com",
  projectId: "coding-bootcamp-uc-davis",
  storageBucket: "coding-bootcamp-uc-davis.appspot.com",
  messagingSenderId: "203976296596"
};

firebase.initializeApp(config);

// Assign the reference to the database to a variable named 'database'
// var database = ...
var database = firebase.database();

// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;
var bidderPrice = 0;
var bidderName = [];

// --------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function (snapshot) {

  if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {
    // Change the HTML to reflect the stored values
    highBidder = snapshot.val().highBidder;
    highPrice = snapshot.val().highPrice;
    // Print the data to the console.
    console.log(snapshot.val());
    console.log(snapshot.val().highBidder);
    console.log(snapshot.val().highPrice);
  }
  $("#highest-bidder").html(highBidder);
  $("#highest-price").html(highPrice);

  // If any errors are experienced, log them to console.
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------



// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function (event) {
  // Prevent form from submitting
  event.preventDefault();

  bidderPrice = $("#bidder-price").val().trim();
  bidderName = $("#bidder-name").val().trim();

  if (bidderPrice > highPrice) {
    // Alert
    alert("You are now the highest bidder.");
    // Save the new price in Firebase
    highBidder = bidderName;
    highPrice = bidderPrice;

    database.ref().set({
      highPrice: highPrice,
      highBidder: highBidder,
    });

    console.log(highPrice);

    $("#highest-bidder").text(highBidder);
    $("#highest-price").text(highPrice);
  }

  else {
    // Alert
    alert("Sorry that bid is too low. Try again.");
  }

});
