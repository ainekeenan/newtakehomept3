import React from "react";
import { useState, useEffect } from "react";

const ApiTest = () => {
      

  const [papi, setPublic] = useState("");
  const [info, setInfo] = useState({catfacts: "0"});

  useEffect(() => {
    //fetch("https://cat-fact.herokuapp.com/facts")
    //const url = `https://cat-fact.herokuapp.com/facts/random?amount=${amount}`;
    
    fetch(`http://localhost:9000/publicAPI?amount=${info.catfacts}`)
      .then(response => response.json())
      .then(json => {setPublic(json)})
      .catch(error => console.error(error));
      }, [info]
      );

      return (
        <div>
            <label> Amount of Cat Facts: <input value= {info.catfacts} onChange={e => setInfo({...info, catfacts: e.target.value })} /> </label> 
            {papi ? <pre>{JSON.stringify(papi.response, null, 2)}</pre> : "Loading..."}
            <p>Enter how many cat facts you would like in the input box above.</p>
            <p>Enjoy the cat facts, courtesy of https://cat-fact.herokuapp.com</p>
             </div>
      );

};

export default ApiTest;