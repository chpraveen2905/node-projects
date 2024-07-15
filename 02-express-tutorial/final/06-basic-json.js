const express = require('express');
const { products } = require('../data');
const app = express();

app.get('/', (req, res) => {
  res.json(products);
});

app.listen(5000, () => console.log('server listening to port 5000....'));
