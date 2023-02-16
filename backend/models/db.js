import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();


const connection = mysql.createPool({
    //dotenv dando ruim.
    //host: process.env.MYSQL_HOST,
    //user: process.env.MYSQL_USER,
    //password: process.env.MYSQL_PASSWORD,
    //database: process.env.MYSQL_DATABASE
    host: 'localhost',
    user: 'root',
    password: 'Mysqlboxx1$',
    database: 'seriesdb'
    
    
});

export default connection;

