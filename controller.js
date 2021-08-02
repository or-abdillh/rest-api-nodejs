'use strict';

var response = require('./response.js');

module.exports.index = (req, res) => {
  response.success("Rest API berjalan dengan baik", res);
}

module.exports.notFound = (req, res) => {
  response.notFound("Data yang anda cari tidak ditemukan", res);
}