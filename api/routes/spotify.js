var express = require("express");
var router = express.Router();
const spotifyWeb = require('spotify-web-api-node')
const info = {
    redirectUri: "http://localhost:3000/spotifyauth",
    clientId: "d1e0958e07554c9ab948bcd0940b0674",
    clientSecret: "fccbb8aeee21402abffa97565a31a3ef" 
}
var spotifyAPI = new spotifyWeb(info);


router.get("/token", function(req, res){
    const code = req.query.code;

    spotifyAPI.authorizationCodeGrant(code).then(
        
        function(data){
            spotifyAPI.setAccessToken(data.body['access_token']);
            res.send({token: data.body['access_token']})
        }

    );

});

router.get("/top5tracks", function(req, res){
    const code = req.query.code;

    spotifyAPI.getMyTopTracks().then(
        
        function(data){
            let topTracks = data.body.items;
            res.send({topTracks: topTracks});

        }

    );

});

module.exports = router;