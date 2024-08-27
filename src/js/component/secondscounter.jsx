import React from "react";

const SecondsCounter = (props) => {
   
    return <>
        
         <div className="card text-center mb-3" style={{width: "10rem", height: "12rem", backgroundColor: "#1e1c1c"}}>
                <div className="card-body">
                    <h5 className="card-title mt-3 text-white" style={{fontSize: "90px"}}>{props.number}</h5>
                 </div>
         </div>

         
    </>
}

export default SecondsCounter