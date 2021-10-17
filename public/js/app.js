'use strict';

console.log('app.js is alive!')

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function() {
        console.log('User signed out.');
    });
}

function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
}

window.onload = function() {
    google.accounts.id.initialize({
        client_id: "732451709774-58h1h3tbgr6c6c6ouce7lot3vh6d96u8.apps.googleusercontent.com",
        callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
        document.getElementById("buttonDiv"), {
            theme: "outline",
            size: "large"
        } // customization attributes
    );
    google.accounts.id.prompt(); // also display the One Tap dialog
}