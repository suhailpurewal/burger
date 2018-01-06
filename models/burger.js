//require ORM
var orm = require('../config/orm.js');

//object for export
var burger = {
    //this function is unnecessary.
    selectWhere: function (burgerName, callback) {
        orm.selectWhere('burgers', 'burger_name', burgerName, function (returnData) {
            callback(returnData)
        });
    }, //end selectWhere
    insertOne: function (column, name, callback) {
        //use orm function(table,col,name,callback). 
        orm.insertOne('burgers', column, name, function (returnData) {
            //callback is passed as parameter when burger.insertOne is called in other file.
            callback(returnData);
        });
    },//end insertOne
    selectAll: function (callback) {
        //select all function used to load display with DB data from table burgers.
        orm.selectAll('burgers', function (returnData) {
            callback(returnData);
        });
    },//end selectAll
    updateOne: function (table, column, id, callback) {
        orm.updateOne('burgers', column, id, function (returnData) {
            callback(returnData);
        })
    },
    deleteOne: function (table, id, callback) {
        orm.deleteOne('burgers', id, function (returnData) {
            callback(returnData);
        })
    }
}//end burger


module.exports = burger;