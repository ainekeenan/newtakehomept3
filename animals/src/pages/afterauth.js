import React from 'react'
import { useState, useEffect } from "react";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Token from './token';

const Afterauth = ({code}) => {
    const [token, setToken] = useState(false);
    function handleClick(){
        setToken(!token);
    };

    return(
        <div>
            {code}
            <h3> Above is your Spotify API code. You can click the get Token button below to recieve a Spotify API access token</h3>
            <button onClick={handleClick}>Get Token</button>
            { <p>Your token is listed below </p> && token && <Token authCode={code} />}
        </div>

    );

};

export default Afterauth; 