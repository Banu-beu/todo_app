const express = require('express');
const { todoSingleData, todoAllList, todoCreate, todoUpdate, todoDelete } = require('../controller/todo');
const router = express.Router();


router.get('/', todoAllList);
router.get('/:id', todoSingleData);
router.post('/',todoCreate);
router.put('/:id', todoUpdate);
router.delete('/:id', todoDelete);

module.exports = router;