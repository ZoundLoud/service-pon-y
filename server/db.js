const mysql = require('mysql');
const credentials = require('../credentials');

const connection = mysql.createConnection({
  host: 'mydbpony.ckmkufajwaoa.us-west-1.rds.amazonaws.com',
  user: credentials.username,
  password: credentials.password,
  database: 'mydbpony',
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

const songDescription = (cb) => {
  connection.query('SELECT * from song_description', (err, results) => {
    if (err) {
      cb(err);
      return;
    }
    cb(results);
  });
};


module.exports.artistWidget = artistWidget;
module.exports.songDescription = songDescription;
