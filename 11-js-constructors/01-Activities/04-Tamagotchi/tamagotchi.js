var DigitalPal = function () {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;

    this.feed = function () {
        if (this.hungry == true) {
            console.log("That was yummy");
            console.log("-------------");
            this.hungry = false;
            this.sleepy = true;
        } else {
            console.log("No Thanks! I'm Full");
            console.log("--------------");
        }
    };

    this.sleep = function () {
        if (this.sleepy == true) {
            console.log("ZZZZZZZZZZZZZZ");
            console.log("---------------");
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
        } else {
            console.log("No way! I'm not tired.");
            console.log("---------------");
        }
    };

    this.play = function () {
        if (this.bored == true) {
            console.log("Yay! Let's play!");
            console.log("----------------");
            this.bored = false;
            this.hungry = true;
        } else {
            console.log("Not right now. Later?");
            console.log("---------------");
        }
    };

    this.increaseAge = function () {
        this.age++;
        console.log("Happy Birthday to me! I am " + this.age + " years old!");
    };

}



// creates dog var
var dog = new DigitalPal();
dog.outside = false;

dog.goOutside = function (outside) {
    if (outside == false) {
        console.log("YAY!  I love the outdoors!");
        console.log("---------------");
        outside = true;
        bark();
    } else {
        console.log("We're already outside though...");
        console.log("---------------");
    }
};

dog.bark = function () {
    console.log("WOOF! Woof!");
    console.log("---------------");
};

dog.goInside = function (outside) {
    if (outside == true) {
        console.log("Do we have to? Fine...");
        console.log("---------------");
        outside == false;
    } else {
        console.log("I'm already inside...");
        console.log("---------------");
    }
};

//creates cat var
var cat = new DigitalPal();
cat.houseCondition = 100;

cat.meow = function () {
    console.log("Meow! Meow!");
    console.log("---------------");
};

cat.destroyFurniture = function (houseCondition) {
    if (houseCondition > 0) {
        houseCondition -= 10;
        console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
        console.log("---------------");
        bored = false;
        sleepy = true;
    }
};

cat.buyNewFurniture = function (houseCondition) {
    houseCondition += 50;
    console.log("Are you sure about that?");
    console.log("---------------");
};


