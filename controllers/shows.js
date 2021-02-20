const express = require('express');
const router = express.Router();
const Show = require('../models/users.js');

// normal routes will be in this file
router.get('/', (req, res) => {
    res.render('app/index.ejs');
});

router.get('/edit', (req, res) => {
    res.render('app/edit.ejs');
});

router.get('/new', (req, res) => {
    res.render('app/new.ejs');
});

module.exports = router;
