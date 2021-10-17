'use strict';

exports.index = (req, res) => {
    res.sendfile('public/index.html');
};
exports.loggedIn = (req, res) => {
    res.sendfile('public/loggedIn.html');
};
exports.policy = (req, res) => {
    res.sendfile('public/policy.html');
};
exports.terms = (req, res) => {
    res.sendfile('public/terms.html');
};