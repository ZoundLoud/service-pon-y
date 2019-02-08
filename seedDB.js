const mysql = require('mysql');
const faker = require('faker');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'zoundloud',
});

connection.connect();

const artistvalues = [];
const songvalues = [];
for (let i = 0; i < 100; i += 1) {
  const artistname = faker.lorem.word();

  artistvalues.push([
    artistname,
    faker.image.avatar(),
    faker.random.number({
      min: 0,
      max: 5000000,
    }),
    faker.random.number({
      min: 0,
      max: 30,
    }),
    faker.random.number({
      min: 0,
      max: 1,
    }),
    faker.random.number({
      min: 0,
      max: 1,
    }),
  ]);

  songvalues.push([
    faker.lorem.words(Math.floor(Math.random * 5)),
    artistname,
    faker.lorem.words(3),
    faker.lorem.paragraphs(4),
    artistname,
    faker.date.past(),
    faker.lorem.words(2),
    faker.lorem.words(),
  ]);
}

const sqlartist = `INSERT INTO artist_info(artistname, avatar_picture, no_of_followers, no_of_tracks, pro_status, is_followed)
     VALUES ?`;

const sqlsong = 'INSERT INTO song_description(songname, artistname, licence, descriptiontext, releasedby, releasedate, pline, tags ) VALUES ?';
connection.query(sqlartist, [artistvalues], (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`# of Artist Records inserted: ${result.affectedRows}`);
  }
});

connection.query(sqlsong, [songvalues], (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`# of song Records inserted: ${result.affectedRows}`);
  }
});
connection.end();
