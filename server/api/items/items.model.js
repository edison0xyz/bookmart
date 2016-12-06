'use strict';

import mongoose from 'mongoose';

var ItemsSchema = new mongoose.Schema({
  title: String, 
  condition: String, 
  description: String, 
  isSold: Boolean, 
  date: Date
});

export default mongoose.model('Item', ItemsSchema);
