const express = require('express');
const Users = require('../models/usersModel');
const FormClient = require('../models/formClientModel');

const router = express.Router()

let connectedAsAdmin = false;

router.get('/login', (req, res) => {
    res.render('login');
})

router.get('/admin', (req, res, next) => {
    if(connectedAsAdmin) {
        FormClient.find()
            .then((result) => {
                res.render('admin', {formClient: result});
            })
    } else {
        res.redirect('login');
    }
})

router.post('/login', (req, res) => {
    Users.findById('662d5a472cd3c07bd5a0347e')
        .then((result) => {
            if (result.login === req.body.login && result.password === req.body.password) {
                console.log(result.login);
                console.log(req.body.login);
                connectedAsAdmin = true;
            }
            res.redirect('/admin');
        })
});

module.exports = router;