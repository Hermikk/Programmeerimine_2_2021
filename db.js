// Impordime MySQLi kliendi
const mysql = require('mysql2');
// Impordime Node util teegi selleks, et saaksime hiljem mysql andmebaasi ühendust kasutada sünkroonselt async/await-iga
//const util = require('util');
// Impordime vajalikud konstandid config failist andmebaasiga ühendumise jaoks
const db = require('./config');

// Loome andmebaasi ühenduse
const connection = mysql.createConnection({
  host: db.host,
  user: db.user,
  password: db.password,
  database: db.database,
  port: db.port,
});


connection.query = (connection.query);

module.exports = connection;
