const mysql = require('mysql2');

// Variables de conexión
const MYSQL_URL = "mysql://root:wpetLpuntJaBJtGxkOrLxdVljXMkXbaW@mysql.railway.internal:3306/railway";
const MYSQLHOST = "mysql.railway.internal"; // Solo el host
const MYSQLUSER = "root"; // Usuario extraído de la URL
const MYSQLPASSWORD = "wpetLpuntJaBJtGxkOrLxdVljXMkXbaW"; // Contraseña extraída de la URL
const MYSQL_DATABASE = "railway"; // Nombre de la base de datos

// Crear conexión
const connection = mysql.createConnection({
    host: MYSQLHOST, // Host sin el prefijo mysql://
    user: MYSQLUSER, // Usuario
    password: MYSQLPASSWORD, // Contraseña
    database: MYSQL_DATABASE // Base de datos
});

// Conectar a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err.stack);
        return;
    }
    console.log('Conectado a la base de datos MySQL en RailWay.');
});

module.exports = connection;
