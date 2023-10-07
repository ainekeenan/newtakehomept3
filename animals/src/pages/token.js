import React from "react";
import { useState, useEffect } from "react";



const Token = ({authCode}) =>{
    const[res, setRes] = useState("");
    const code = authCode;
    const url = `http://localhost:9000/spotify/token?code=${code}`

    useEffect(()=> {
    fetch(url)
    .then(response => response.json())
    .then(json => setRes(json))
    .catch(error => console.error(error));

    })

    return(
        <div>
            {res ? <pre>{JSON.stringify(res, null, 2)}</pre> : "Error"}
            <p>Token</p>
        </div>
    );

}

export default Token;