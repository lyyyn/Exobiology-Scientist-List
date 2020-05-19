// 'Database'
const scientists = require('./models/scientist.js');

module.exports = {
    index: (req, res) => {
        res.render('index.ejs', { scientists });
    },
    init: (req, res) => {
        res.render('new.ejs');
    },
    show: (req, res) => {
        res.render('show.ejs', { scientist: scientists[req.params.idx] });
    },
    create: (req, res) => {
        scientists.push(req.body);
        res.redirect('/scientists');
    },
    edit: (req, res) => {
        res.render('edit.ejs', {
            scientist: scientists[req.params.idx],
            idx: req.params.idx
        });
    },
    update: (req, res) => {
        scientists[req.params.idx] = req.body;
        res.redirect('/scientists');
    },
    delete: (req, res) => {
        scientists.splice(req.params.idx, 1);
        res.redirect('/scientists');
    }

};
