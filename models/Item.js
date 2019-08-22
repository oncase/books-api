const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  _id: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    default: 0
  }
});

module.exports = Item = mongoose.model('campus', ItemSchema);
