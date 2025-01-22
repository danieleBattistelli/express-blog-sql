const mysql = require("mysql2")

const connection = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"root",
    database:"blog_db",
});

connection.connect((err) => {
    if (err) throw err;
    console.log("connected to MySql")
});

module.exports = connection;