const mysql = require("mysql2");


const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    database: "a-shop",
    user: "root",
    password: "",
    connectionLimit: 10
  });
  connection.connect(function (err) {
    if (err) {
      // mysqlErrorHandling(connection, err);
      console.log(
        "\n\t *** Cannot establish a connection with the database. ***", err
      );
      // connection = reconnect(connection);
    } else {
      console.log("\n\t *** New connection established with the database. ***");
    }
  });

  module.exports = connection;