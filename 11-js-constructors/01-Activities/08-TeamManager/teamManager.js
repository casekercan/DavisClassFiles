var inquirer = require("inquirer");

function Player(name, position, offense, defense) {
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;

    Player.prototype.printStats = function () {
        console.log("Name: " + this.name + "\nPosition: " + this.position + "\nOffense: " + this.offense + "\nDefense: " + this.defense);
    };

    Player.prototype.goodGame = function () {
        console.log("GOOD GAME");
        if (Math.floor(Math.round(Math.random() * 1)) == 1) {
            this.offense++;
        } else {
            this.defense++;
        };
        gameOver();
    };

    Player.prototype.badGame = function () {
        console.log("BAD GAME");
        if (Math.floor(Math.round(Math.random() * 1)) == 1) {
            this.offense--;
        } else {
            this.defense--;
        };
        gameOver();
    };


}




var count = 0;
var playerArrayStarter = [];
var playerArraySub = [];

function questions() {
    if (count < 3) {
        inquirer.prompt([
            {
                name: "name",
                message: "What is your name?"
            }, {
                name: "position",
                message: "What is your position?"
            }, {
                name: "offense",
                message: "How good are you on offense (1-10)"
            }, {
                name: "defense",
                message: "How good are you on defense (1-10)"
            }
        ]).then(function (answers) {

            if (count < 2) {
                var newPlayer = new Player(
                    answers.name,
                    answers.position,
                    answers.offense,
                    answers.defense,
                );

                playerArrayStarter.push(newPlayer);
                count++;
                questions();
            } else {
                var newPlayer = new Player(
                    answers.name,
                    answers.position,
                    answers.offense,
                    answers.defense,
                );

                playerArraySub.push(newPlayer);
                count++;
                questions();
            }
        })

    } else {
        for (var x = 0; x < playerArrayStarter.length; x++) {
            playerArrayStarter[x].printStats();
        }
        for (var x = 0; x < playerArraySub.length; x++) {
            playerArraySub[x].printStats();
        }
        playGame();
    }
};
var game = 0;
var score = 0;

function playGame() {
    if (game < 5) {
        var firstNumber = Math.floor(Math.random() * 20) + 1;
        var secondNumber = Math.floor(Math.random() * 20) + 1;
        game++;

        if ((parseInt(playerArrayStarter[0].offense
        ) + parseInt(playerArrayStarter[1].offense)) > firstNumber) {
            score++;
        };

        if ((parseInt(playerArrayStarter[0].defense
        ) + parseInt(playerArrayStarter[1].defense)) < secondNumber) {
            score--;
        }
        playGame();

    } else {
        console.log(score);
        scoreGoodBad();
    }
};

function scoreGoodBad() {
    if (score > 0) {
        for (var x = 0; x < playerArrayStarter.length; x++) {
            playerArrayStarter[x].goodGame();
        }
    } else if (score < 0) {
        for (var x = 0; x < playerArrayStarter.length; x++) {
            playerArrayStarter[x].badGame();
        }
    } else {
        gameOver();
    }
};

function gameOver() {
    console.log("GAME SCORE: " + score);
    for (var x = 0; x < playerArrayStarter.length; x++) {
        playerArrayStarter[x].printStats();
    }
};


questions();