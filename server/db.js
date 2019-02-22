const mysql = require('mysql');
const credentials = require('../credentials');

const connection = mysql.createConnection({
  host: credentials.host,
  user: credentials.username,
  password: credentials.password,
  database: credentials.database,
});

connection.connect();

const artistWidget = (cb) => {
  connection.query('SELECT * FROM artist_info', (err, results) => {
    if (err) {
      cb(err);
      return;
    }
    cb(results);
  });
};

const songDescription = (songID, cb) => {
  connection.query(`SELECT * FROM song_description WHERE id = ${songID}`, (err, results) => {
    if (err) {
      cb(err);
      return;
    }
    cb(results);
  });
};


module.exports.artistWidget = artistWidget;
module.exports.songDescription = songDescription;
