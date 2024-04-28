const express = require('express');
const adminController = require('../controllers/adminController');

const router = express.Router()



router.get('/login', adminController.login_page);

router.get('/admin', adminController.admin_page);

router.post('/login', adminController.verify_log);

module.exports = router;