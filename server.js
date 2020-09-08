"use strict";

console.log("uno")
const express = require("express");
const app = express();

app.use(express.static('./dist/angularherokuspotify2020'));

app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/angularherokuspotify2020/'}
    );
});

app.set('port', process.env.PORT || 3000 )


app.listen(process.env.PORT || 3000, function(){
    console.log("[server.js] App is running at localhost:" + app.get('port'));
});

module.exports = app