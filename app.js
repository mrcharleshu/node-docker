const express = require('express');
const app = express();

app.get('/v2', function (req, res) {
    console.log('process new request: home');
    res.send('Hello World V2!');
});

app.get('/v2/another', function (req, res) {
    console.log('process new request: anther');
    res.send('This is another API : available (V2)');
});

app.get('/v2/health', function (req, res) {
    console.log('process new request: health');
    res.send('ok');
});

const server = app.listen(3000, function () {
    const host = server.address().address;
    const port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
