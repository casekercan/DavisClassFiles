function programmer(name, job, age, language) {
    this.name = name;
    this.job = job;
    this.age = age;
    this.language = language;

    this.printStats = function () {
        console.log("Name: " + this.name);
        console.log("Profession: " + this.job);
        console.log("Age: " + this.age);
        console.log("Favorite Progamming Language: " + this.language);
    };
}

var programmer = new programmer("Caroline", "Awesome Job", 26, "javaScript");

programmer.printStats();