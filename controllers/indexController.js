
const FormClient = require('../models/formClientModel');


let connectedAsAdmin = false;
const index_page = (req, res) => {
    connectedAsAdmin = false;
    res.render('index');
}

const new_form = (req, res) => {
    connectedAsAdmin = false;
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