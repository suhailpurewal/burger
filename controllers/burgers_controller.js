//dependencies
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var router = express.Router();
var burger = require('../models/burger.js')

//redirect to burger route by default
router.get('/', function(req, res) {
    res.redirect('/burgers');
});

//gets burgers.js
router.get('/burgers', function(req, res) {
    burger.selectAll(function(data) {
        res.render('index', { burgers: data });
    });
});

//create route
router.post('/burgers/create', function(req, res) {
    burger.insertOne('burger_name', req.body.name, function() {
        res.redirect('/burgers');
    })
})

//update route
router.put('/burgers/update/devour/:id', function(req, res) {
    burger.updateOne('burgers','devoured', req.params.id, function() {
        res.redirect('/burgers');
    })
})
//delete route
router.delete('/burgers/delete/:id', function(req, res) {
    //run burger.js logic of deleteOne(table,id,callback)
    burger.deleteOne('burgers',req.params.id, function() {
        //upon delete, redirect home
        res.redirect('/burgers');
    })
})

//initial load/direct
router.use(function(req, res) {
    res.redirect('/burgers');
})


//export
module.exports = router;