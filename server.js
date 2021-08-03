const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const routes = require('./routes');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Routing
routes(app);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

//Termux directory
// cd /sdcard/Android/data/io.spck/files/rest-api-nodejs