import mysql from 'mysql2/promise';

const dbPool = mysql.createPool({
    host: "localhost", 
    user:"root", 
    password: '369147MySQL.',
    database: "dbprakerja",
    port: 3308
})

export default dbPool;