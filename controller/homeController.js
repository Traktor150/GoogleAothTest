'use strict';

exports.index = (req, res) => {
    res.sendfile('public/index.html');
};
exports.test = (req, res) => {
    res.sendfile('public/test.html');
};