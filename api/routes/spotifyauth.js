var express = require("express");
var redirect_uri = "http://localhost:3000/";
const { response } = require("../app");
var router = express.Router();

var client_id = 'CLIENT_ID';

router.get("/login",function(req,res){
    var state = generateRandomString(16);
    var scope = 'user-read-private user-read-email';
  
    res.redirect('https://accounts.spotify.com/authorize?' +
      querystring.stringify({
        response_type: 'code',
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state
      }));

} );

module.exports(router);


