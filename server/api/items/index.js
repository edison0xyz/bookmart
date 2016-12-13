'use strict';

var express = require('express');
var controller = require('./items.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id&:price', controller.editPrice);
router.patch('/:id', controller.markSold);
router.delete('/:id', controller.destroy);


module.exports = router;
