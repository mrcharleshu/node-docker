const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World V3!');
});

app.get('/api/v1/test/available', function (req, res) {
  res.send('This is another API : available');
});

app.get('/api/v1/test/health', function (req, res) {
  res.send('Application runs well!');
});

const server = app.listen(3000, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
