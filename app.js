var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/api/v1/test/available', function (req, res) {
  res.send('This is another API : available');
});

app.get('/api/v1/test/health', function (req, res) {
  res.send('Application runs well!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
