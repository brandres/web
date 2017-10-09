var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');
app.use(bodyParser());
app.use(express.static(__dirname + '/node_modules'));
app.get('/',function (req,res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.post('/heik',function (req,res) {
    console.log(req.body);
    console.log(req.body.toString());
    var str = JSON.stringify(req.body);
    console.log(str);
    var prs = JSON.parse(str);
    console.log(prs);
    fs.writeFile('eventsDB.JSON', str, function (err) {
        if (err) throw err;
    console.log('Data written to file');
});
});
app.get('/inicializador.js',function (req,res) {
    res.sendFile(path.join(__dirname + '/inicializador.js'));
});
app.get('/reloj.js',function (req,res) {
    res.sendFile(path.join(__dirname + '/reloj.js'));
});
app.get('/style.css',function (req,res) {
    res.sendFile(path.join(__dirname + '/style.css'));
});
app.get('/AVE_71216_la_gastronomia_ese_elemento_que_nos_une_a_todos.jpg',function (req,res) {
    res.sendFile(path.join(__dirname + '/AVE_71216_la_gastronomia_ese_elemento_que_nos_une_a_todos.jpg'))
});
app.get('/eventsDB.JSON',function (req,res) {
    res.sendFile(path.join(__dirname + '/eventsDB.JSON'))
});
app.listen(63342,function () {
    console.log('started')
});