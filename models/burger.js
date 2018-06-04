var orm = require('../config/orm.js');

var burger = {

    validateName: function(burger_name) {
        const regex = new RegExp('^[a-zA-Z ]+$')
        return regex.test(burger_name);
      },
    all: (cb) => {
        orm.all("burgers", (res) => {
            cb(res);
        });
    },

    create: (cols, vals, cb) =>{
        orm.create("burgers", cols, vals , (res) => {
            cb(res);
        });
    },

    update: (objColVals, condition, cb) => {
        orm.update("burgers", objColVals, condition, (res) =>{
            cb(res)
        })
    },
    delete: function(condition, cb) {
      orm.delete("burgers", 'id='+condition, function(res) {
        cb(res);
      });
    }
};

module.exports = burger;