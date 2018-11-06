var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "top_songsDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    start();
});

function start() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "What would you like to do?",
                choices: ["Return all songs by a specific artist.", "Return all artists who have multiple songs in the top 5000.", "Returns all data in a specific range on the top 5000 chart.", "Search for a specific song.", "Search for a song and album by album with same years."],
                name: "action"
            }
        ])
        .then(function (inquirerResponse) {
            switch (inquirerResponse.action) {
                case "Return all songs by a specific artist.":
                    searchArtist();
                    break;
                case "Return all artists who have multiple songs in the top 5000.":
                    searchMultiple();
                    break;
                case "Returns all data in a specific range on the top 5000 chart.":
                    serachRange();
                    break;
                case "Search for a specific song.":
                    searchSong();
                    break;
                case "Search for a song and album by album with same years.":
                    songAndAlbumSearch();
                    break;
            }
        });
};

// A query which returns all data for songs sung by a specific artist
function searchArtist() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What artist would you like to search?",
                name: "artist"
            }
        ])
        .then(function (inquirerResponse) {
            var nameArtist = inquirerResponse.artist
            connection.query(`SELECT * FROM top_songsDB.top5000 WHERE artist="${nameArtist}"`, (err, res) => {
                if (err) throw err;
                console.log(`\n Showing all ${nameArtist} Songs`);
                res.forEach(song => {
                    console.log(`Position: ${song.position} \n Year: ${song.year} \n Song: ${song.song} \n ---------------------`);
                });
            });

            setTimeout(start, 1000);

        });

};


// A query which returns all artists who appear within the top 5000 more than once
function searchMultiple() {
    connection.query(`SELECT artist, COUNT(artist) CNT_artist FROM top_songsDB.top5000 GROUP BY artist HAVING COUNT(artist) > 1 ORDER BY COUNT(artist);`, (err, res) => {
        if (err) throw err;
        console.log(`\n Showing all Artist with multipe songs in top 5000`);
        res.forEach(artist => {
            console.log(`Artist: ${artist.artist} \n Number of songs: ${artist.CNT_artist} \n ---------------------`);
        });
    });
    setTimeout(start, 1000);
};

// A query which returns all data contained within a specific range
function serachRange() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the start of the range for your search?",
                name: "minSearch"
            },
            {
                type: "input",
                message: "What is the end of the range for your search?",
                name: "maxSearch"
            }
        ])
        .then(function (inquirerResponse) {

            var minSearch = parseFloat(inquirerResponse.minSearch);
            var maxSearch = parseFloat(inquirerResponse.maxSearch);

            connection.query(`SELECT * FROM top_songsDB.top5000 WHERE position BETWEEN ${minSearch} AND ${maxSearch}; `, (err, res) => {
                if (err) throw err;
                console.log(`\n Showing all artists in the specific range on chart.`);
                res.forEach(song => {
                    console.log(`Position: ${song.position} \n Artist: ${song.artist} \n Year: ${song.year} \n Song: ${song.song} \n ---------------------`);
                });
            });
            setTimeout(start, 1000);
        });
};

// A query which searches for a specific song in the top 5000 and returns the data for it
function searchSong() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What song would you like to search?",
                name: "song"
            }
        ])
        .then(function (inquirerResponse) {
            var nameSong = inquirerResponse.song
            connection.query(`SELECT * FROM top_songsDB.top5000 WHERE song="${nameSong}"`, (err, res) => {
                if (err) throw err;
                console.log(`\n Showing songs titled ${nameSong}`);
                res.forEach(song => {
                    console.log(`Position on Chart: ${song.position} \n Year: ${song.year} \n Artist: ${song.artist} \n ---------------------`);
                });
            });

            setTimeout(start, 1000);

        });

};


function songAndAlbumSearch() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What artist would you like to search?",
                name: "artist"
            }
        ])
        .then(function (inquirerResponse) {
            var nameArtist = inquirerResponse.artist

            connection.query(`SELECT topAlbums.year, topAlbums.album, topAlbums.position, top5000.song, top5000.artist FROM topAlbums INNER JOIN top5000 ON (topAlbums.artist = top5000.artist AND topAlbums.year = top5000.year) WHERE (topAlbums.artist ="${nameArtist}" and top5000.artist = "${nameArtist}") ORDER BY topAlbums.year`, (err, res) => {
                if (err) throw err;
                console.log(res);
            });

            setTimeout(start, 1000);

        });

};
