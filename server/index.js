const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require("cors");
const db = require('./db');

const app = express();

const port = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/artistinfo', (req, res) => {
  db.artistWidget((data) => {
    res.send(data);
  });
});

app.get('/songinfo', (req, res) => {
  db.songDescription((data) => {
    res.send(data);
  });
});

app.listen(port, () => console.log(`LISTENING ON PORT ${port}`));
