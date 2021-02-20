const express = require('express');
const shows = express.Router();
const Show = require('../models/users.js');

// normal routes will be in this file

// new route
shows.get('/new', (req, res) => {
    res.render('app/new.ejs');
});

// create route
shows.post('/', (req, res) => {
    Show.create(req.body, (error, createdProduct) => {
        // res.send(createdProduct);
        res.redirect('/app');
    });
});

// index route
shows.get('/', (req, res) => {
    Show.find({}, (error, allShows) => {
        res.render('index.ejs', {
            shows: allShows,
        });
    });
});

// show route
shows.get('/:id', (req, res) => {
    Show.findById(req.params.id, (error, foundShow) => {
        res.render('show.ejs', {
            show: foundShow,
        });
    });
});

// delete route
shows.delete('/:id', (req, res) => {
    Show.findByIdAndRemove(req.params.id, (error, data) => {
        res.redirect('/app');
    });
});

// edit route
shows.get('/:id/edit', (req, res) => {
    Show.findById(req.params.id, (error, foundShow) => {
        res.render('edit.ejs', {
            show: foundShow,
        });
    });
});

// put edit
shows.put('/:id', (req, res) => {
    const index = req.params.id;
    Show.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, updatedProduct) => {
            res.redirect(`/app/${index}`);
        },
    );
});

module.exports = shows;
