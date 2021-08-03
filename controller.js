'use strict';

var response = require('./response.js');
var connection = require('./connection.js');

module.exports.index = (req, res) => {
  response.success("REST API berjalan dengan baik", res);
}

module.exports.notFound = (req, res) => {
  response.notFound("Data yang anda cari tidak ditemukan", res);
}

module.exports.view = (req, res) => {
  const sql = "SELECT id, fullname, username, job FROM tabel_pemilih";
  
  connection.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else response.success(rows, res);
  });
}

//Order by ID
module.exports.orderByID = (req, res) => {
  const ID = req.params.id;
  const sql = `SELECT fullname, username, job FROM tabel_pemilih WHERE id = ${ID}`;
  
  connection.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else response.success(rows, res);
  })
}