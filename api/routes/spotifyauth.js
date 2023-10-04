var express = require("express");
var redirect_uri = "http://localhost:3000/spotifyauth";
const { response } = require("../app");
var router = express.Router();

var client_id = 'CLIENT_ID';

router.get("/",function(req,res){
  
    const authEndpoint = "https://accounts.spotify.com/authorize";
    const redirectUri = "http://localhost:3000/spotifyauth";
    const clientId = "d1e0958e07554c9ab948bcd0940b0674";
    const scopes = [
        "streaming",
        "user-read-email",
        "user-read-private",
      ];


    res.redirect(`${authEndpoint}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes.join(
        "%20"
      )}`
    ); 

    
    

} );

// loginUrl = "https://accounts.spotify.com/authorize?client_id=YourClientId&response_type=code&redirect_uri=https://localhost:3000/&scope=streaming%20user-read-email%20user-read-private"


module.exports = router;


