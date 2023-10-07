# newtakehomept3


Hello! This application serves as the take home assignment for AggieWorks F23 for Aine Keenan.

The application is a mix of experiences, with the main features at the momemnt being: selecting how many cat facts you would like to recieve, and authorize the application to connect to your spotify, and ask the spotify API for an access token. The frontend is written in React and the backend is in the Node framework express.js . 

Future features areand recieve your top tracks, artists, and more from Spotify! After, a feature would be added that will store all users top 5 tracks from the mid-past time range to a database, and will display the overall top 5 tracks. 

The product vision is a place were Aggies can come to distress and connect. They can find cat facts and the top 5 tracks of UC Davis students!

# How to install and start the application: 
- Clone this git hub repository
- cd into api
- run command: npm install
- cd ../animals
- run command: npm install
- cd ../api
- run command: npm start
- cd ../animals
- run command: npm start
- Navigate to http://localhost:3000/

# How to use the application: 
- The main menu provides a welcome and fidget toys.
- Under the main menu, you will see a link for Welcome, Call API, and Spotify Auth
- Under Call API, you can enter how many cat facts you would like, and the JSON will appear.
- Under Spotify Auth, you can click the link to login with your spotify account (account is required, you can create a dummy account)
- After, your spotify API code will be displayed. Click the get Token button and your spotify API token will appeaer. 


Important NOTE: This application is in development mode. While you will recieve your API Token, the backend will stop working due to an error with a library I am using. If you want to continue with the front end and backend connected, cd animals and type npm start. You will now be able to continue using the application. 


Enjoy the application! Listen to music and destress. 

# Error Debugging: 
-  My client ID and secret are encoded into the application. This is normal practice.  If you run into a error due to client reasons, you can replace my client ID and secret with your own. You can create a project, and client ID and secret at https://developer.spotify.com/. 
The following files use the client ID and secret.
- api/routes/spotify.js
- animals/src/pages/spotify.js


