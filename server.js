'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
//const HOST = '127.0.0.1';
// App
const app = express();
app.get('/', (req, res) => {
  res.send('<h1 style="color: blue">Code Engine Demo!</h1>');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);