# Guide to Google Sing In API

## Start up project in Google Developer Console
This is a must if you want your sign in button to work

Go to https://console.cloud.google.com/home/dashboard

1. Login with Google account
2. Go to API’s And Services
3. Press “Select a Project” then “New Project” and create your project
4. Go to OAuth Consent Screen and choose external or internal depending on what you will use the project for (hover over the question mark to learn more about each option)
5. If you can't find the OAuth Consent Screen, go to Credentials, there should a yellow text at the top concerning OAuth Consent
6. Once in the OAuth Consent Screen fill in all the necessary fields (marked with *), all other fields are optional
7. Go to Credentials and press “New Credential” and choose OAuth Client ID and create a new Web Application 
(For the puposes of this guide you'll be creating a new Web Application)
8. Add your desired URIs to Authorized Javascript origins. Examples of localhost and a heroku app:
- http://localhost
- http://localhost:8042
- https://glacial-plateau-34520.herokuapp.com

If you want to test the application locally both http://localhost and http://localhost:PORT need to be added

9. Click Save and you will receive your Credentials Client ID which will be important for the future. 
Each credentials Client ID is shown in the Credentials page wheer you can also edit previously created Credentials

## Sign in button
### Old way
There is and “old way” which you can read further about here:
https://developers.google.com/identity/sign-in/web/sign-in <br>
And here: https://developers.google.com/identity/gsi/web/guides/migration#the_old_way <br>
Although it is not recommended to use this way since it will be discontinued soon at the time of writing.

### New way

1. Go to: https://developers.google.com/identity/gsi/web/guides/migration#the_new_way 
2. Copy either the code from popup or redirect mode, depending on your needs, and paste it in your html file. 
You can read further about the differences between the modes on the same page and here: https://developers.google.com/identity/gsi/web/reference/html-reference#data-attributes 
3. Where it says "YOUR_CLIENT_ID" paste the client ID you got after creating a Credential
4. Go to: https://developers.google.com/identity/gsi/web/reference/js-reference#google.accounts.id.initialize and paste the script in either your html or js file (client side)
5. The sign in button on your application can now be used to log in a user
6. Go to: https://developers.google.com/identity/gsi/web/tools/configurator to experiment with the sign in button <br>
To read further aboout customizing the button go to: https://developers.google.com/identity/gsi/web/reference/html-reference#element_with_class_g_id_signin
7. To get information about the user go to: https://developers.google.com/identity/gsi/web/guides/handle-credential-responses-js-functions and paste the scripy in your js file (client side)
8. To decode the JWT you have received go to: https://stackoverflow.com/questions/38552003/how-to-decode-jwt-token-in-javascript-without-using-a-library and copy the first answer.
Change the name of the function to what the name of the decoding function is called in handleCredentialResponse (is decodeJwtResponse by default)
There are other ways to decode a JWT but that code example works fine
9. You can now log in a user with a Google Sign in button and get the users information

For further reading go to https://github.com/Kasiem024/GoogleAPIDemo-OAK and use the already finished demo to your liking <br>

## Disclaimer
This guide/documentation is not yet complete at the time of writing as user information is not actually saved anywhere and the user needs to sign in everytime the page gets refreshed
## TODO
Save user information with cookies
