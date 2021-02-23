const express = require('express');
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

// new route
router.get('/new', (req, res) => {
    res.render('app/new.ejs');
});

// create route
router.post('/', (req, res) => {
    User.create(req.body, (error, createdShow) => {
        res.send(createdShow);
        // res.redirect('/app');
    });
});

// index route
router.get('/', isAuthenticated, (req, res) => {
    // finds all users
    User.find({}, (err, foundUsers) => {
        // renders the dashboard
        res.render('app/index.ejs', {
            currentUser: req.session.currentUser,
        });
    });
});

// show route
// router.get('/:id', (req, res) => {
//     User.findById(req.params.id, (error, foundShow) => {
//         res.render('show.ejs', {
//             show: foundShow,
//         });
//     });
// });

// delete route
// router.delete('/:id', (req, res) => {
//     User.findByIdAndRemove(req.params.id, (error, data) => {
//         res.redirect('/app');
//     });
// });

// edit route
// router.get('/:id/edit', (req, res) => {
//     User.findById(req.params.id, (error, foundShow) => {
//         res.render('edit.ejs', {
//             show: foundShow,
//         });
//     });
// });

// put edit
// router.put('/:id', (req, res) => {
//     const index = req.params.id;
//     User.findByIdAndUpdate(
//         req.params.id,
//         req.body,
//         { new: true },
//         (err, updatedProduct) => {
//             res.redirect(`/app/${index}`);
//         },
//     );
// });

module.exports = router;
