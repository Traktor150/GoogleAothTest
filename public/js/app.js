'use strict';

console.log('app.js is alive!')

function showCookies() {
    const output = document.getElementById('cookies')
    output.textContent = '> ' + document.cookie
}

function clearOutputCookies() {
    const output = document.getElementById('cookies')
    output.textContent = ''
}

function checkCookieHasASpecificValue(credential) {
    if (document.cookie.indexOf(credential)) {
        const output = document.getElementById('a-specific-value-of-the-cookie')
        output.textContent = '> The cookie "reader" has a value of "1"'
    }
}

function clearASpecificValueOfTheCookie() {
    const output = document.getElementById('a-specific-value-of-the-cookie')
    output.textContent = ''
}

function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    // "credential" is a coded id token that has the users information
    // Needs to be decoded to be useful
    // JWT stands for JSON Web Token
    // Link to documentation
    // https://developers.google.com/identity/gsi/web/guides/handle-credential-responses-js-functions

    // checkCookieHasASpecificValue(response.credential)
    // document.cookie = response.credential;

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
    // Calls to fun
    // Link to documentation
    // https://developers.google.com/identity/gsi/web/reference/js-reference#google.accounts.id.initialize

    google.accounts.id.initialize({
        client_id: "732451709774-58h1h3tbgr6c6c6ouce7lot3vh6d96u8.apps.googleusercontent.com",
        callback: handleCredentialResponse,
    });
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