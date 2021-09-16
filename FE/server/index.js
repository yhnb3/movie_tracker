const express = require('express');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: 'http://localhost:1234',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen('8080', () => {
  console.log('http://localhost:8080 is open');
});
