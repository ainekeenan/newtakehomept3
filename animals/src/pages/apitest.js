import React from "react";
import { useState, useEffect } from "react";

const ApiTest = ({amountvar}) => {
      

  const [papi, setPublic] = useState("");
  useEffect(() => {
    //fetch("https://cat-fact.herokuapp.com/facts")
    //const url = `https://cat-fact.herokuapp.com/facts/random?amount=${amount}`;
    
    fetch(`http://localhost:9000/publicAPI?amount=${amountvar}`)
      .then(response => response.json())
      .then(json => {setPublic(json)})
      .catch(error => console.error(error));
      }, []
      );
      return (
        <div>
            {papi ? <pre>{JSON.stringify(papi, null, 2)}</pre> : "Loading..."}
            <p>fine</p>
            <p>{amountvar}</p>
            <p>Hello</p>
             </div>
      );

};

export default ApiTest;