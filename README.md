# AuthApp
Auth App is basically for making authentication procedure from Auth0 

# Installation Steps

npm install

# if you want custom configuration then edit in app.js

angularAuth0Provider.init({
	clientID: 'RxZ4JJkiTzrWfvXrzmttAE5IAQ2RGa7C', 
	domain: 'techies-hub.auth0.com',
	redirectUri:'http://localhost:3000/callback',
	responseType:'token id_token',
	scope:'openid profile',
	audience: 'https://techies-hub.com/api'
});

# Start App

To start the app we need to run https://github.com/lovstuf/angularjs-auth-server
Firstly run Server then follow bellow instructions

npm start


thanks
:)


