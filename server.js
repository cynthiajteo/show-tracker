// Dependencies
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const userController = require('./controllers/users.js');
const sessionsController = require('./controllers/sessions.js');
const session = require('express-session');

// Configuration
const PORT = process.env.PORT || 3000;
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017';

// Middleware
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));

app.use(
    session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false,
    }),
);

// Database
mongoose.connect(mongoURI, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});

// Routes
app.get('/', (req, res) => {
    res.render('index.ejs', { currentUser: req.session.currentUser });
});

app.use('/users', userController);
app.use('/sessions', sessionsController);

// Listen
app.listen(PORT, () => console.log('auth happening on port', PORT));
