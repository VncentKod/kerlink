
const FormClient = require('../models/formClientModel');

const index_page = (req, res) => {
    res.render('index');
}

const new_form = (req, res) => {
    const formClient = new FormClient(req.body);
    formClient.save()
        .then((result) => {
            res.render('done');
        });
}

module.exports = {
    index_page,
    new_form
};