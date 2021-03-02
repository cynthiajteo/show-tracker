const express = require('express');
const { Mongoose } = require('mongoose');
const { update } = require('../models/users.js');
const router = express.Router();
const User = require('../models/users.js');

// MIDDLEWARE
const isAuthenticated = (req, res, next) => {
    if (req.session.currentUser) {
        return next();
    } else {
        res.redirect('/sessions/new');
    }
};

// new route - new show form
router.get('/new', isAuthenticated, (req, res) => {
    res.render('app/new.ejs');
});

// create route - adding new show to a user's db
router.post('/', isAuthenticated, (req, res) => {
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

// show route - shows selected tv show
router.get('/:id', isAuthenticated, (req, res) => {
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

// delete route - deletes selected tv show
router.delete('/:id', isAuthenticated, (req, res) => {
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

// edit route - edit form: reflects current data in edit form
router.get('/:id/edit', isAuthenticated, (req, res) => {
    // console.log(req.session.currentUser._id);
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

// put route - updates tv show from edit form
router.put('/:id', isAuthenticated, (req, res) => {
    const catFromForm = req.body.category;
    const category = catFromForm.split(',');
    const userID = req.session.currentUser._id;
    const showID = req.params.id;
    // console.log('this is show id ' + req.params.id);
    // console.log('this is user id ' + req.session.currentUser._id);
    if (req.body.completed === 'on') {
        req.body.completed = true;
    } else req.body.completed = false;

    User.updateOne(
        { _id: userID, 'shows._id': showID },
        {
            $set: {
                'shows.$.title': req.body.title,
                'shows.$.url': req.body.url,
                'shows.$.category': category,
                'shows.$.season': req.body.season,
                'shows.$.episode': req.body.episode,
                'shows.$.reviews': req.body.reviews,
                'shows.$.completed': req.body.completed,
            },
        },
        { new: true },
        (err, updatedShow) => {
            // if (err) console.log(err);
            // else res.send(updatedShow);
            res.redirect('/app/' + req.params.id);
        },
    );
});

module.exports = router;
