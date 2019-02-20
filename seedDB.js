const mysql = require('mysql');
const faker = require('faker');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'artist',
});

connection.connect();
const artistNames = [];
const artistvalues = [];
const songvalues = [];
const urls = ['www.google.com', 'www.instagram.com', 'https://github.com/ZoundLoud', 'https://expressjs.com/', 'https://developer.mozilla.org/en-US/', 'https://twitter.com/'];
const avatars = ['https://s3-us-west-1.amazonaws.com/ponyzoundloudproject/CaramelSleeping.png',
  'https://s3-us-west-1.amazonaws.com/ponyzoundloudproject/GlowPartyDecor.png',
  'https://s3-us-west-1.amazonaws.com/ponyzoundloudproject/LionAvatar.png',
  'https://s3-us-west-1.amazonaws.com/ponyzoundloudproject/ShavedIceIcon.png',
  'https://s3-us-west-1.amazonaws.com/ponyzoundloudproject/dittochu.png',
  'https://s3-us-west-1.amazonaws.com/ponyzoundloudproject/jellyfish.png',
  'https://s3-us-west-1.amazonaws.com/ponyzoundloudproject/paperflowers.png',
];
const songLicence = ['All Rights Reserved', 'Creative Commons License', '', ''];
for (let i = 0; i < 100; i += 1) {
  if (i % 3 === 0) {
    artistNames.push(faker.name.firstName());
  } else if (i % 2 === 0 && i % 3 !== 0) {
    artistNames.push(faker.name.lastName());
  } else {
    artistNames.push(faker.lorem.word());
  }
}

for (let i = 0; i < 100; i += 1) {
  let text = '';
  const pline = `℗ ${faker.company.companyName()}${faker.company.companySuffix()}`;
  text = text.concat(faker.lorem.paragraphs(2), ' @', artistNames[Math.floor(Math.random() * artistNames.length)], ' ', faker.lorem.paragraph(1), ' ', urls[Math.floor(Math.random() * urls.length)], ' ', faker.lorem.paragraph(2));


  artistvalues.push([
    artistNames[i],
    avatars[Math.floor(Math.random() * avatars.length)],
    // faker.image.avatar(),
    Math.floor(Math.random() * 200000),
    Math.floor(Math.random() * 80),
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
    faker.lorem.words(Math.floor(Math.random * 5)), // song name
    artistNames[Math.floor(Math.random() * 100)], // artist name
    songLicence[Math.floor(Math.random() * songLicence.length)], // license
    text, // description text
    faker.company.companyName(), // released by
    faker.date.past(), // release date
    pline, // pline
    faker.lorem.words(4), // tags
  ]);
}

const sqlartist = `INSERT INTO artist_info(artist_name, avatar_picture, no_of_followers, no_of_tracks, pro_status, is_followed)
     VALUES ?`;

const sqlsong = 'INSERT INTO song_description(song_name, artist_name, licence, description_text, released_by, release_date, p_line, tags ) VALUES ?';
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
