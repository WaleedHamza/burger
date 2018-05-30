var connection = require('../config/connection.js');

var orm = {
    //query all burgers form the database
    all: (tableInput, cb) => {
        var queryString = "SELECT * FROM "+ tableInput + ";";
        connection.query(queryString, (err, result) => {
            if(err){
                throw err;
            }
            cb(result)
        });
    },
    create: (table, cols, vals, cb) => {
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += " VALUES (";
        queryString += vals.length;
        queryString += ") ";

        console.log("@config folder ( CREATE )orm.js", queryString);
        connection.query(queryString, (err, result) => {
            if(err){
                throw err;
            }
            cb(result)
        });
    },

    update: (table, objColVals, condition, cb) => {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objColVals;
        queryString += " WHERE ";
        queryString += condition;

        console.log("@config folder ( UPDATE )orm.js", queryString);
        connection.query(queryString, (err, result) => {
            if(err){
                throw err;
            }
            cb(result)
        });
    }
    };

module.exports = orm;