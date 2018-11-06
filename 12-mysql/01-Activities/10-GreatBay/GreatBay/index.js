var mysql = require('mysql');
var inquirer = require("inquirer");


var connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "",
    database: "greatbay_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log(`connection with id ${connection.threadId}`)
    start();
});

function start() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is your name?",
                name: "username"
            },
            {
                type: "password",
                message: "Set your password",
                name: "password"
            },
            {
                type: "list",
                message: "What would you like to do?",
                choices: ["POST AN ITEM", "BID ON AN ITEM"],
                name: "action"
            }
        ])
        .then(function (inquirerResponse) {
            var uname = inquirerResponse.username;
            switch (inquirerResponse.action) {
                case "POST AN ITEM":
                    post_item(uname);
                    break;
                case "BID ON AN ITEM":
                    bid_item(uname);
                    break;
            }
        });
};


function post_item(uname) {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the item name?",
                name: "itemName"
            },
            {
                type: "input",
                message: "What is the starting bid?",
                name: "bidStart"
            }
        ])
        .then(function (inquirerResponse) {
            console.log("Inserting a new product...\n");
            var query = connection.query(
                "INSERT INTO items SET ?",
                {
                    itemName: inquirerResponse.itemName,
                    bid: parseFloat(inquirerResponse.bidStart),
                    bidUser: uname
                },
                function (err, res) {
                    if (err) throw err;
                    console.log(res.affectedRows + " product inserted!\n");
                }

            );

            connection.query("SELECT * FROM items", (err, res) => {
                if (err) throw err;
                res.forEach(item => {
                    console.log(`ID: ${item.id} | Item: ${item.itemName} | Bid: ${item.bid} | User: ${item.bidUser}`);
                });
            });

            start();
        });
};


function bid_item(uname) {





}








