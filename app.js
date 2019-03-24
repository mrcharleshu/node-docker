const express = require('express');
const app = express();

app.get('/v1', function (req, res) {
    console.log('process new request: home');
    res.send('Hello World V1!');
});

app.get('/v1/another', function (req, res) {
    console.log('process new request: anther');
    res.send('This is another API : available (V1)');
});

app.get('/v1/health', function (req, res) {
    console.log('process new request: health');
    res.send('ok');
});

const server = app.listen(3000, function () {
    const host = server.address().address;
    const port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
