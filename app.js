// Import
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')

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

// Request
app.get('/', (req, res) => {
    res.render('index');
});

app.use((req, res) => {
    res.status(404).render('404');
});