const express = require('express');
const app = express();
var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

var $ = jQuery = require('jquery')(window);



app.use(express.urlencoded({extended:true}));

app.use(express.static(__dirname));


app.get("/", function (req, res) {
  res.sendFile(__dirname+"/index.html");
})






app.listen(process.env.PORT || 3000, function(req, res) {
  console.log("Server up.")
})
