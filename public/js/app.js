'use strict';

console.log('app.js is alive!')

function onSignIn(googleUser) {
    // This function has to do with the old way button (should not be used anymore)
    // The function gets information about the user on sign in
    // Link to documentation
    // https://developers.google.com/identity/sign-in/web/sign-in#get_profile_information

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
    // This if else is what redirects between pages, there may be another way to do this
    // But not important since this is the old way and should not be used anymore
}

function signOut() {
    // This function is called when sign out is pressed, signs out user
    // This is the old way (should not be used anymore)
    // Link to documentation
    // https://developers.google.com/identity/sign-in/web/sign-in#sign_out_a_user

    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function() {
        console.log('User signed out.');
    });
    location.href = 'http://localhost:8042'; // Redirects to another page, goes back to home after signing out
}

// onSignIn and signOut are the old ways and have nothing to do with the new way,
// old way and new way are completely separate from each other

function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    // "credential" is a coded id token that has the users information
    // Needs to be decoded to be useful
    // JWT stands for JSON Web Token
    // Link to documentation
    // https://developers.google.com/identity/gsi/web/guides/handle-credential-responses-js-functions

    const responsePayload = decodeJwtResponse(response.credential);
    // decodeJwtResponse() is a custom function defined by you
    // to decode the credential response
    // https://jwt.io/
    // This website can be used to decode the token which in this case is "response.credential"
    // Unsure of how it can be used in programming

    console.log("ID: " + responsePayload.sub);
    console.log('Full Name: ' + responsePayload.name);
    console.log('Given Name: ' + responsePayload.given_name);
    console.log('Family Name: ' + responsePayload.family_name);
    console.log("Image URL: " + responsePayload.picture);
    console.log("Email: " + responsePayload.email);
    // This is what shows user information
    // responePayload conatains the information from the decoded JWT
}
window.onload = function() {
    // Currently the code inside google.accounts.id.initialize does nothing,
    // although may be used to redirect when using popupmode, unsure of how
    // Link to documentation
    // Link to documentation
    // https://developers.google.com/identity/gsi/web/reference/js-reference#google.accounts.id.initialize

    google.accounts.id.initialize({
        client_id: "732451709774-58h1h3tbgr6c6c6ouce7lot3vh6d96u8.apps.googleusercontent.com",
        callback: handleCredentialResponse,
    });
    google.accounts.id.prompt(); // Displays the One Tap window
}

function decodeJwtResponse(token) {
    // This is what decides the JWT
    // There are probably several ways to do this
    // Got this from https://stackoverflow.com/questions/38552003/how-to-decode-jwt-token-in-javascript-without-using-a-library

    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
};