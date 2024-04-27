// Import
const express = require('express');
const morgan = require('morgan');

// Setup
const app = express();
app.set('view engine', 'ejs');

// Middleware & static files 
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));

// TEMPORARY
app.listen(3000);

// Request
app.get('/', (req, res) => {
    res.render('index');
});

app.use((req, res) => {
    res.status(404).render('404');
});