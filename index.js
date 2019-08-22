const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose
  .connect(
    'mongodb://mongo:27017/campus',
    { useNewUrlParser: true }
  )
  .then(() => {})
  .catch(err => console.log(err));

const Item = require('./models/Item');

app.get('/book/:bookId', (req, res) => {
  Item.findById(req.params.bookId, function( err, result ) {
    res.json(result);
  });
});

const port = 3000;

app.listen(port, () => console.log('Server running...'));
