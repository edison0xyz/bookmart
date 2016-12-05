'use strict';

import mongoose from 'mongoose';

var ItemsSchema = new mongoose.Schema({
  title: String, 
  condition: String
});

export default mongoose.model('Item', ItemsSchema);
