import React from 'react'
import { useState, useEffect } from "react";
import { loginUrl } from "./spotify";


function Login() {
    const [papi, setPublic] = useState("");
    useEffect(() => {
    //fetch("https://cat-fact.herokuapp.com/facts")
    //const url = `https://cat-fact.herokuapp.com/facts/random?amount=${amount}`;
    
    fetch(`http://localhost:9000/spotifyauth`, {redirect:'follow'})
      .then(response => {
        if (response.redirected) {
          window.location.replace(response.url); 
        // creates the second request, and change the content
          return;
        }} )
      .catch(error => console.error(error));
      }, []
      );
    return (
        <div >
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="Spotify-Logo"/>
            {/* <a href={loginUrl}>LOGIN WITH SPOTIFY</a> */}
            {papi ? <pre>{JSON.stringify(papi, null, 2)}</pre> : "Loading..."}
        </div>
    )
}

export default Login