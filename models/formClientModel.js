const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const formClientSchema = new Schema({
    date: {type: String, required: true},
    company: {type: String, required: true},
    client_name: {type: String, required: true},
    client_name_2: {type: String, required: true},
    phone: {type: String, required: true},
    mail_c: {type: String, required: true},
    street: {type: String, required: true},
    street_n: {type: String, required: true},
    zip: {type: String, required: true},
    city: {type: String, required: true},
    country: {type: String, required: true},
    object: {type: String, required: true},
    name_sup: {type: String, required: true},
    last_name_sup: {type: String, required: true},
    phone_sup: {type: String, required: true},
    mail: {type: String, required: true},
    start_date: {type: String, required: true},
    netSize: {type: String, required: true},
    periodicity: {type: String, required: true}
}, {timestamps: true});

const formClient = mongoose.model('formClient', formClientSchema);

module.exports = formClient;