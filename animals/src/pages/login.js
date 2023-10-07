import React from 'react'
import { useState, useEffect } from "react";
import { loginUrl } from "./spotify";
import "../App.css"



function Login() {
    const empty = "   ";
    {/* const [papi, setPublic] = useState("");
    useEffect(() => {
    
    {/* fetch(`http://localhost:9000/spotifyauth`)
    .then(response => response.json())
    .then(json => {setPublic(json)})
    .catch(error => console.error(error));
      }, []
    );   } */} 
    return (
        <div >
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Z5nJmPgNhlfexGHjDEXTWSwH4zpIKSHN8g&usqp=CAU" alt="Spotify-Logo"/> 
             <a href={loginUrl}>Click HERE to login with Spotify</a>  
             
        </div>
    )
}

export default Login;