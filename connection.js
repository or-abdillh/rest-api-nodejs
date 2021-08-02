var mysql = require('mysql');

var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: ''
});

conn.connect(err => {
  if (err) throw err;
  console.log('MySQL connected !!');
})