const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const db = require('./db');

const app = express();

const port = 8081;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/song',express.static(path.join(__dirname, '../client/dist')));
app.use('/song/:songID',express.static(path.join(__dirname, '../client/dist')));

app.get('/artistinfo', (req, res) => {
  db.artistWidget((data) => {
    res.send(data);
  });
});

app.get('/song/:songID/songinfo', (req, res) => {
  let { songID } = req.params;
  console.log('song id: ', songID)
  db.songDescription(songID, (data) => {
    console.log(data);
    res.send(data);
  });
});

app.listen(port, () => console.log(`LISTENING ON PORT ${port}`));
