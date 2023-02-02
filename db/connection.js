const mysql = require('mysql2')

const db = mysql.createConnection({
    host: 'local host',
    user: 'root',
    password: 'rootroot',
    database: 'employees'
});

db.connect((err) => {
    if(err)throw err;
});

module.exports = db;