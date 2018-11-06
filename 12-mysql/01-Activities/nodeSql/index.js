var mysql = require('mysql');

//connect file to database

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "ice_creamDB",
});

connection.connect(function (err) {
    if (err) throw err;
    console.log(`connection with id ${connection.threadId}`)
    selectAllProducts();
    connection.end()
})

function selectAllProducts() {
    connection.query('SELECT * FROM products', function (err, res) {
        if (err) throw err;
        console.log(res);
    })
}