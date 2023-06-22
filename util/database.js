
const mysql = require('mysql2');
/*
    Connection object - It is used to run queries
    There are two ways of connecting to a sql database
    1.We setup one connection to run queries and then close the connection after running the query
    The downside is that we need to again execute the code to setup a new connection for 
    a new query.So it will be very inefficient.
    
    2. Better way = connection pool-> takes js object to provide info about the database
*/
const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'node-complete',
    password:'karan123'
})

//we can use a pool to get a new connection for new queries to run. pools finishes 
//after the code is executed.
module.exports = pool.promise();//to handle queries asynchronously