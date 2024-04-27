// Import
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')

// Internal import
const FormClient = require('./models/formClientModel');
const Users = require('./models/usersModel');

// Setup
const app = express();
app.set('view engine', 'ejs');

// Database Setup
const dbURI = 'mongodb+srv://kerlookAdmin:look158ker@kerlookcluster.ku0i3sg.mongodb.net/?retryWrites=true&w=majority&appName=kerlookCluster'
mongoose.connect(dbURI)
    .then((result) => {
        console.log('connected to DB');
        app.listen(3000);
    })
    .catch((err) => {
        console.log(err);
    })


// Middleware & static files 
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
let connectedAsAdmin = false;

// Request
app.get('/', (req, res) => {
    res.render('index');
});

app.post('/', (req, res) => {
    const formClient = new FormClient(req.body);
    formClient.save()
        .then((result) => {
            res.render('done');
        });
});

app.get('/login', (req, res) => {
    res.render('login');
})

app.get('/admin', (req, res, next) => {
    if(connectedAsAdmin) {
        res.render('done')
    } else {
        res.redirect('login');
    }
})

app.post('/login', (req, res) => {
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

app.use((req, res) => {
    res.status(404).render('404');
});

