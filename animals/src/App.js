import React from "react";
import ReactDOM from "react-dom"; 
import { useState, useEffect, useRef } from "react";
 /* import {
  BrowserRouter,
  Route,
  Link
} from "react-router-dom";
import { Routes } from 'react-router-dom'; */
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';


// import ReactDOM from "react-dom";
import "./App.css"

import File from "./pages/cat";
import { NamedExport } from "./pages/dog";
import Form from "./pages/form";
import Name from "./pages/name"
import ApiTest from "./pages/apitest";
//import { use } from "../../api/routes";

const App = () => {

  const [index, setIndex] = useState(0);
  const [data, setData] = useState("");
  const [papi, setPublic] = useState("");
  const [info, setInfo] = useState({catfacts: "0"});
 // to set with input form later const [amount, setAmount] = useState("");
 const amountvar = 7;

 //const amount = 3;
  function handleClick () {
    setIndex(index + 2);
}


   

    useEffect(() => {
      //fetch("https://cat-fact.herokuapp.com/facts")
      fetch("http://localhost:9000/testAPI")
    .then(response => response.json() )
    .then(json => {setData(json)})
    .catch(error => console.error(error))
    }, []
    );

    useEffect(() => {
      //fetch("https://cat-fact.herokuapp.com/facts")
      
    fetch("http://localhost:9000/publicAPI?amount=2")
    .then(response => response.json() )
    .then(json => {setPublic(json)})
    .catch(error => console.error(error))
    }, []
    );
  

    //    {data ? <pre>{JSON.stringify(data,null,2)} </pre>: "Loading ...</p"}
    return(
      <div>
       <File />
       <NamedExport />
       <Form index= {index} handleClick = {handleClick}/>
       <Form index= {index} handleClick = {handleClick}/>
       {/*<label> First Name: <input value= {info.firstName} onChange={e => setInfo( {...info, firstName : e.target.value })} /> </label>*/} 
       <label> Amount of Cat Facts: <input value= {info.catfacts} onChange={e => setInfo({...info, catfacts: e.target.value })} /> </label> 
       <Name /> 
       {data ? <pre>{JSON.stringify(data.message, null, 2)}</pre> : "Loading..."}
       {papi ? <pre>{JSON.stringify(papi, null, 2)}</pre> : "Loading..."}
       <p>{info.catfacts}</p>

       {/*<BrowserRouter>
          <Routes> 
         <Route path = "/" element={<File />}/>
      </Routes> 
      </BrowserRouter> */}
   
            {/* <ul>
               <li><Link to="/cats">Cat</Link></li>
             </ul> 
             
             <ul>
               <li> <Link to = "/cats">Cat</Link></li>
             </ul>*/}
      <Router> 
             <ul>
               <li><Link to="/cats">Cat</Link></li>
               <li><Link to = "/publicAPI">Call API</Link></li>
             </ul> 
       <Routes>
         <Route  path="/cats" element={<File />}></Route>
         <Route  path="/" element={<NamedExport />}></Route>
         <Route path = "/form" element= {<Form index = {index} handleClick={handleClick}/>}></Route>
        { <Route path = "/publicAPI" element = { <ApiTest amountvar= {info.catfacts} />}></Route> }
       </Routes>
      </Router>
     
       </div> );
};

export default App;
