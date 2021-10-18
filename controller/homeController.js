'use strict';

exports.index = (req, res) => {
    console.log('index')
    const express = require('express');
    const app = express();
    var cookieParser = require('cookie-parser')


    app.use(cookieParser())

    // Cookies that have not been signed
    console.log('Cookies: ', req.cookies)

    // Cookies that have been signed
    console.log('Signed Cookies: ', req.signedCookies)

    res.sendfile('public/index.html');
};
exports.loggedIn = (req, res) => {
    console.log('loggedin')

    const express = require('express');
    const app = express();
    var cookieParser = require('cookie-parser')


    app.use(cookieParser())

    // Cookies that have not been signed
    console.log('Cookies: ', req.cookies)

    // Cookies that have been signed
    console.log('Signed Cookies: ', req.signedCookies)

    res.sendfile('public/loggedIn.html');
};
exports.policy = (req, res) => {
    res.sendfile('public/policy.html');
};
exports.terms = (req, res) => {
    res.sendfile('public/terms.html');
};