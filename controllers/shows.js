const express = require('express');
const shows = express.Router();
const Show = require('../models/shows.js');
const User = require('../models/users.js');
const bcrypt = require('bcrypt');

// seed data
// shows.get('/seed', async (req, res) => {
//     const newShow = [
//         {
//             title: 'Dynasty',
//             url:
//                 'https://static.wikia.nocookie.net/dynastytv/images/f/f5/Season2Poster.jpg/revision/latest/scale-to-width-down/768?cb=20180914201628',
//             category: 'family drama',
//             episode: 'Season 2, Episode 3',
//             completed: false,
//             reviews: 'crazy rich family drama',
//         },
//     ];

//     try {
//         const seedItem = await Show.create(newShow);
//         res.send(seedItem);
//     } catch (err) {
//         res.send(err.message);
//     }
// });

// new route
shows.get('/new', (req, res) => {
    res.render('app/new.ejs');
});

// create route
shows.post('/', (req, res) => {
    Show.create(req.body, (error, createdShow) => {
        // res.send(createdShow);
        res.redirect('/app');
    });
});

// index route
// shows.get('/', (req, res) => {
//     Show.find({}, (error, allShows) => {
//         res.render('index.ejs', {
//             shows: allShows,
//         });
//     });
// });

shows.get('/', (req, res) => {
    if (req.session.currentUser) {
        Show.find({}, (error, allShows) => {
            res.render('index.ejs', { shows: allShows });
        });
    } else {
        res.redirect('/sessions/new');
    }
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
