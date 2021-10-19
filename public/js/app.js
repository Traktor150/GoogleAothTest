'use strict';

console.log('app.js is alive!')

// A new g_csrf_token is created eveytime a new user logs in
// If same user logs in twice no new g_csrf_token is created
// g_csrf_token probalby has a time limit

function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);

    const responsePayload = decodeJwtResponse(response.credential);

    // responePayload contains the information from the decoded JWT
    console.log("ID: " + responsePayload.sub);
    console.log('Full Name: ' + responsePayload.name);
    console.log('Given Name: ' + responsePayload.given_name);
    console.log('Family Name: ' + responsePayload.family_name);
    console.log("Image URL: " + responsePayload.picture);
    console.log("Email: " + responsePayload.email);
}
window.onload = function() {
    google.accounts.id.initialize({
        client_id: "732451709774-58h1h3tbgr6c6c6ouce7lot3vh6d96u8.apps.googleusercontent.com",
        callback: handleCredentialResponse,
    });
}

function decodeJwtResponse(token) {
    // Decodes JWT

    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
};