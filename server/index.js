const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();

const port = 3000;

app.use(bodyParser.json());


app.get('/artistinfo', (req, res) => {
  db.artistWidget((data) => {
    res.send(data);
  });
});


app.listen(port, () => console.log(`LISTENING ON PORT ${port}`));
