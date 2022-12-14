const express = require('express');
const app = express();
const goods= [
    { "id":1,"onstock": "123","name":"phone","price":1000},
    { "id":2,"onstock": "876","name":"headphones","price":300},
    { "id":3,"onstock": "135","name":"book","price":30},
    { "id":4,"onstock": "543","name":"laptop","price":2000},
    { "id":5,"onstock": "428","name":"smartwatch","price":700},
    { "id":6,"onstock": "123","name":"pen","price":5},
    { "id":7,"onstock": "876","name":"mouse","price":50},
    { "id":8,"onstock": "135","name":"glasses","price":200},
    { "id":9,"onstock": "543","name":"chargers","price":70},
    { "id":10,"onstock": "428","name":"case","price":20},
  ];
app.get('/good/:id', function (req, res) {
    res.send(JSON.stringify(goods.find((good) => good.id == req.params.id)));
  });
  app.get('/', function (req, res) {
    res.send(JSON.stringify(goods));
  });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});