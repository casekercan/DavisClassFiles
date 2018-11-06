var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "playlist_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log(`connection with id ${connection.threadId}`)
    showAllSongs();
    printClassicRock("Classic Rock");
    connection.end();
})

function showAllSongs() {
    connection.query('SELECT * FROM songs', (err, res) => {
        if (err) throw err;
        res.forEach(song => {
            console.log(`id: ${song.id} \n Title: ${song.title} \n Artist: ${song.artist} \n Genre: ${song.genre}`);
        });
    });
};

function printClassicRock(genre) {
    connection.query(`SELECT * FROM songs WHERE genre="${genre}"`, (err, res) => {
        if (err) throw err;
        console.log(`\n Showing all ${genre} Songs`);
        res.forEach(song => {
            console.log(`id: ${song.id} \n Title: ${song.title} \n Artist: ${song.artist} \n Genre: ${song.genre}`);
        });
    });
};
