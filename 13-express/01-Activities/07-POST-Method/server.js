var http = require("http");
var PORT = 8080;
var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    var requestData = "";

    req.on("data", function (data) {
        requestData += data;
    });
    req.on("end", function () {
        console.log("You did a", req.method, "with the data:\n", requestData);
        res.end();
    });
}

server.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});