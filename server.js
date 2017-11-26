var express = require('express');
var Push = require('push.js')
var app = express();

app.use(express.static(__dirname));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
});

app.listen(process.env.PORT || 8989, function () {
    console.log('Local Server : http://localhost:8989');
});
