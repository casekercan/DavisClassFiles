var http = require("http");
var fs = require("fs");

var PORT = 8080;

var server = http.createServer(handleRequest);

server.listen(PORT, function () {
    console.log("Server is listening on PORT: " + PORT);
});




function handleRequest(req, res) {
    var path = req.url;

    switch (path) {

        case "/":
            return displayIndex(path, req, res);

        case "/foods":
            return displayFoods(path, req, res);

        case "/movies":
            return displayMovies(path, req, res);

        case "/frameworks":
            return displayFrameworks(path, req, res);

        default:
            return display404(path, req, res);
    }

}

function displayIndex(url, req, res) {
    fs.readFile(__dirname + "/index.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function displayFoods(url, req, res) {
    fs.readFile(__dirname + "/foods.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function displayMovies(url, req, res) {
    fs.readFile(__dirname + "/movies.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function displayFrameworks(url, req, res) {
    fs.readFile(__dirname + "/frameworks.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function display404(url, req, res) {
    var data = "<html>" +
        "<body><h1>404 Not Found </h1>" +
        "<p>The page you were looking for: " + url + " can not be found</p>" +
        "</body></html>";
    res.end(data);
}



