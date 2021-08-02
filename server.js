const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const routes = require('./routes.js');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});