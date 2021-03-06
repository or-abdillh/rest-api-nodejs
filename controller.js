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
  const sql = `SELECT id, fullname, username, job FROM tabel_pemilih WHERE id = ${ID}`;
  
  connection.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else response.success(rows, res);
  });
}

//Order by Job
module.exports.orderByJob = (req, res) => {
  const job = req.params.job;
  const sql = `SELECT id, fullname, username FROM tabel_pemilih WHERE job = '${job}'`;
  
  connection.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else response.success(rows, res);
  });
}

//Add new record
module.exports.addNewRecord = (req, res) => {
  //Get data from body
  const data = {
    fullname: req.body.fullname,
    username: req.body.username,
    password: req.body.password,
    job: req.body.job,
    lastModified: new Date()
  };
  
  const sql = `INSERT INTO tabel_pemilih
    (fullname, username, password, job, last_modified)
    VALUES (?, ?, ?, ?, ?)`;
    
  connection.query(sql, [data.fullname, data.username, data.password, data.job, data.lastModified] ,(err, rows, fields) => {
    if (err) throw err;
    else response.success('Record baru berhasil ditambahkan', res);
  });
}

//Update data by ID
//PUT
module.exports.updateRecord = (req, res) => {
  var id = req.body.id;
  var fullname = req.body.fullname;
  var username = req.body.username;
  var password = req.body.password;
  var job = req.body.job;
  var lastModified = new Date();
  
  const sql = "UPDATE tabel_pemilih SET fullname = ?, username = ?, password = ?, job = ?, last_modified = ? WHERE id = ?";
  connection.query(sql, [fullname, username, password, job, lastModified, id],
  (err, rows, fields) => {
    if (err) throw err;
    else response.success(`Record berhasil di UPDATE`, res);
  });
}

//Delete by ID
module.exports.deleteRecord = (req, res) => {
  var id = req.body.id;
  
  const sql = `DELETE FROM tabel_pemilih WHERE id = ${id}`;
  connection.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else response.success(`Record dengan ID = ${id} berhasil dihapus`, res);
  });
}