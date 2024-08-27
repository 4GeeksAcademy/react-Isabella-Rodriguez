//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
setInterval(myCallback, 1000);
    const root = ReactDOM.createRoot(document.getElementById('app'))
   let seconds = 0
    function myCallback() {
    seconds++; 
    console.log("Han pasado " + seconds + " segundos");
    
    root.render(<Home seconds={seconds}/>);
       
    }
//render your react application

