const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Toqrul Quliyev');
});
app.get('/client', function (req, res) {
  res.send('You send request for transaction route!');
});
app.get('/card', function (req, res) {
    res.send('Этот роут отвечает за карты');
  });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});