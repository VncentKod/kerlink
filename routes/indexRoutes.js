const express = require('express');
const indexController = require('../controllers/indexController');

const router = express.Router()



router.get('/', indexController.index_page);

router.post('/', indexController.new_form);

module.exports = router;