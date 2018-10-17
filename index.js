var express = require('express');
var app = express();
app.use(express.static('public'));
//app.use(express.static(__dirname + '/view'));

//app.get('/',function(req,res) {
  res.send('Hello world');
})

app.get('/page2',function(req,res) {
  res.send('we are at page 2');
})

app.get('/page3',function(req,res) {
  res.sendFile(__dirname + "/" + "view" + "/" + "page.html");
})

var server = app.listen(8081,function(){
  var host = server.address().address
  var port = server.address().port

  console.log("Listening at localhost 8081..:)")
})
