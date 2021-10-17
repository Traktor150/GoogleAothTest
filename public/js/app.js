'use strict';

console.log('app.js is alive!')

// // Example 1: Use method-specific function
// var request = gapi.client.drive.about.get({ 'fields': 'user' });

// // Execute the API request.
// request.execute(function(response) {
//     console.log(response);
// });


// // Example 2: Use gapi.client.request(args) function
// var request = gapi.client.request({
//     'method': 'GET',
//     'path': '/drive/v3/about',
//     'params': { 'fields': 'user' }
// });
// // Execute the API request.
// request.execute(function(response) {
//     console.log(response);
// });

// gapi.load('auth2', function() {
//     gapi.auth2.init();
// });

// function onSignIn(googleUser) {
//     var profile = googleUser.getBasicProfile();
//     console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
//     console.log('Name: ' + profile.getName());
//     console.log('Image URL: ' + profile.getImageUrl());
//     console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

//     console.log('user is ' + JSON.stringify(googleUser.getBasicProfile()));
// }

// function signOut() {
//     var auth2 = gapi.auth2.getAuthInstance();
//     auth2.signOut().then(function() {
//         console.log('User signed out.');
//     });
// }