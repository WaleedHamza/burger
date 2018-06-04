var mysql = require("mysql");
var connection;

if(process.env.JAWSDB_URL){
     connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
    connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burgers_db"
});
};
connection.connect( (err)=>{
    if(err){
        console.log('err connecting to the db @ connection.js', err);
        return;
    }
    console.log(connection.threadId);
});

module.exports = connection;
