const express = require('express');
const app = express();
const cards= [
    { "id":1,"number": "12345678"},
    { "id":2,"number": "87654321"},
    { "id":3,"number": "13579101"},
    { "id":4,"number": "54398544"},
    { "id":5,"number": "42894091"},
  ];
  app.get("/card/:id", function (req, res) {
    const idOfUser = parseInt(req.params.id);
    const user = cards.find((card) => card.id === idOfUser);
    if (!user) {
      res.status(404).send();
    }
    else{
    res.status(200).json(user);
}
  });
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});