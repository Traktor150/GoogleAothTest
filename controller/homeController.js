'use strict';

exports.index = (req, res) => {
    res.sendfile('public/index.html');
};
exports.loggedIn = (req, res) => {
    res.sendfile('public/loggedIn.html');
};