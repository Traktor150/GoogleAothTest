'use strict';

console.log('app.js is alive!')

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    if (window.location.href == 'http://localhost:8042/loggedIn') {
        console.log('Signed in')
    } else {
        location.href = 'http://localhost:8042/loggedIn';
    }
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function() {
        console.log('User signed out.');
    });
    location.href = 'http://localhost:8042';
}

function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
}