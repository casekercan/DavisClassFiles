var fs = require("fs");


fs.readFile("best_things_ever.txt", "utf8", function (error, data) {

    if (error) {
        return console.log(error);
    }

    var dataArr = data.split(",");


    dataArr.forEach(function (item) {
        console.log(item);
    })

    // for (i = 0; i < dataArr.length; i++) {
    //     console.log(dataArr[i]);
    // }

});
