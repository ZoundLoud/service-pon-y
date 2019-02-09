const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'zoundloud',
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


module.exports.artistWidget = artistWidget;
