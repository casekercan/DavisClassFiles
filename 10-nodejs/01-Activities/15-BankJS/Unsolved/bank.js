var fs = require("fs");
var action = process.argv[2]
var newNum = parseFloat(process.argv[3]);

//`total` - this should tally up all of the money in the bank balance and display it for the user.
if (action === "total") {
    fs.readFile("bank.txt", "utf8", function (error, bank) {
        if (error) {
            return console.log(error);
        }
        var total = 0;
        var bankArr = bank.split(",");
        for (var i = 0; i < bankArr.length; i++) {
            total += parseFloat(bankArr[i]);
        }
        console.log("Total in Bank: $" + total.toFixed(2));
    });
}

//`deposit <number>` - this should add a positive amount to the bank balance. (No need to display the total here)
if (action === "deposit") {
    fs.appendFile("bank.txt", ", " + newNum, function (error) {
        if (error) {
            console.log(error);
        } else {
            console.log("Deposited $" + newNum);
        }
    })
}

//`withdraw <number>` - this should add a negative amount to the bank balance. (No need to display the total here)
if (action === "withdraw") {
    fs.appendFile("bank.txt", ", " + "-" + newNum, function (error) {
        if (error) {
            console.log(error);
        } else {
            console.log("Withdrew $" + newNum);
        }
    })
}

//`lotto` - this should subtract an amount from the bank balance, but if a random number is hit it should add back a larger amount into the bank balance.
if (action === "lotto") {
    //append .25 to bank (cost to play)
    fs.appendFile("bank.txt", ", " + "-.25", function (error) {
        if (error) {
            console.log(error);
        }
    })
    var chance = Math.floor((Math.random() * 10) + 1);

    if (chance === 1) {
        fs.appendFile("bank.txt", ", 2", function (error) {
            if (error) {
                console.log(error);
            } else {
                console.log("Congrats, you won $2");
            }
        })
    } else {
        console.log("you lost the lotto!");
    }
}