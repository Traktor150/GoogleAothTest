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