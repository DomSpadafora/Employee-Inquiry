const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'local host',
    user: 'root',
    password: 'rootroot',
    database: 'employees'
});

connection.connect((err) => {
    if(err)throw err:
});

module.exports = connection;