
const Users = require('../models/usersModel');
const FormClient = require('../models/formClientModel');

let connectedAsAdmin = false;

const admin_page = (req, res) => {
    if(connectedAsAdmin) {
        FormClient.find()
            .then((result) => {
                res.render('admin', {formClient: result});
            });
    } else {
        res.redirect('login');
    }
};

const login_page = (req, res) => {
    res.render('login');
};

const verify_log = (req, res) => {
    Users.findById('662d5a472cd3c07bd5a0347e')
    .then((result) => {
        if (result.login === req.body.login && result.password === req.body.password) {
            console.log(result.login);
            console.log(req.body.login);
            connectedAsAdmin = true;
        }
        res.redirect('/admin');
    })
};

const delete_client = (req, res) => {
    const id = req.params.id;
    FormClient.findByIdAndDelete(id)
        .then((result) => {res.json({redirect: '/admin'})})
        .catch((err) => {
            console.log(err);
        })
}

const give_data = (req, res) => {
    const id = req.params.id;
    FormClient.findById(id)
        .then((result) => {
            console.log(result);
            res.json({
                data: {result},
                action: {redirect: '/admin'}
            });
        });
}

const disconnect =(req,res) => {
    connectedAsAdmin = false;
    res.json({action: {redirect: '/admin'}})
}
module.exports = {
    admin_page,
    login_page,
    verify_log,
    delete_client,
    give_data,
    disconnect
};