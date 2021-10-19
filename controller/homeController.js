'use strict';

exports.index = (req, res) => {
    const { OAuth2Client } = require('google-auth-library');
    const client = new OAuth2Client(CLIENT_ID);
    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID, // Specify the CLIENT_ID of the app that accesses the backend
            // Or, if multiple clients access the backend:
            //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
        });
        const payload = ticket.getPayload();
        const userid = payload['sub'];
        // If request specified a G Suite domain:
        // const domain = payload['hd'];
    }
    verify().catch(console.error);
    res.sendfile('public/index.html');
};
exports.loggedIn = (req, res) => {
    const { OAuth2Client } = require('google-auth-library');
    const client = new OAuth2Client(CLIENT_ID);
    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID, // Specify the CLIENT_ID of the app that accesses the backend
            // Or, if multiple clients access the backend:
            //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
        });
        const payload = ticket.getPayload();
        const userid = payload['sub'];
        // If request specified a G Suite domain:
        // const domain = payload['hd'];
    }
    verify().catch(console.error);
    res.sendfile('public/loggedIn.html');
};
exports.policy = (req, res) => {
    res.sendfile('public/policy.html');
};
exports.terms = (req, res) => {
    res.sendfile('public/terms.html');
};