const express = require('express');
const { Mongoose } = require('mongoose');
const router = express.Router();
const User = require('../models/users.js');

//MIDDLEWARE
const isAuthenticated = (req, res, next) => {
    if (req.session.currentUser) {
        return next();
    } else {
        res.redirect('/sessions/new');
    }
};

// new route - new show form
router.get('/new', (req, res) => {
    res.render('app/new.ejs');
});

// create route - adding new show to a user's db
router.post('/', (req, res) => {
    if (req.body.completed === 'on') {
        req.body.completed = true;
    }
    User.findOneAndUpdate(
        { _id: req.session.currentUser._id },
        {
            $push: {
                shows: {
                    title: req.body.title,
                    url: req.body.url,
                    category: req.body.category,
                    season: req.body.season,
                    episode: req.body.episode,
                    reviews: req.body.reviews,
                    completed: req.body.completed,
                },
            },
        },
        (error, newShow) => {
            res.redirect('/app');
        },
    );
});

// index route - shows user's main page
router.get('/', isAuthenticated, (req, res) => {
    // finds all users
    User.findById({ _id: req.session.currentUser._id }, (err, currentUser) => {
        // renders the dashboard
        res.render('app/index.ejs', {
            currentUser: currentUser,
        });
    });
});

// show route
router.get('/:id', (req, res) => {
    //console.log(req.session.currentUser._id);
    //console.log(req.params._id);
    User.find(
        { _id: req.session.currentUser._id },
        {
            shows: {
                $elemMatch: {
                    _id: req.params.id,
                },
            },
        },
        {
            'shows.$': 1,
        },
        function (err, results) {
            // console.log(results[0].shows[0]);
            res.render('app/show.ejs', {
                show: results[0].shows[0],
            });
        },
    );
});

// delete route
router.delete('/:id', (req, res) => {
    User.findByIdAndUpdate(
        { _id: req.session.currentUser._id },
        { $pull: { shows: { _id: req.params.id } } },
        { new: true },
        function (error, model) {
            if (error) {
                return res.json(error);
            } else {
                return res.redirect('/app');
            }
        },
    );
});

// edit route
router.get('/:id/edit', (req, res) => {
    console.log(req.session.currentUser._id);
    //console.log(req.params._id);
    User.find(
        { _id: req.session.currentUser._id },
        {
            shows: {
                $elemMatch: { _id: req.params.id },
            },
        },
        { 'shows.$': 1 },
        function (error, user) {
            //console.log(user[0].shows[0]);
            res.render('app/edit.ejs', {
                show: user[0].shows[0],
            });
        },
    );
});

// put route - update
// router.put('/:id', (req, res) => {
//     const index = req.params.id;
//     User.findByIdAndUpdate(
//         req.params.id,
//         req.body,
//         { new: true },
//         (err, updatedShow) => {
//             res.redirect(`/app/${index}`);
//         },
//     );
// });

module.exports = router;

/*-----WIP-----*/
/*
- work on delete, edit, show routes

*/
