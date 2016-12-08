'use strict';

import mongoose from 'mongoose';

var ItemsSchema = new mongoose.Schema({
  title: String,
  author: String,
  condition: String,
  description: String,
  price: String,
  isSold: Boolean,
  date: Date,
  sellerName: String,
  sellerEmail: String,
  sellerPhone: String
});

export default mongoose.model('Item', ItemsSchema);
