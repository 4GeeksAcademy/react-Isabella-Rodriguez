import React from "react";
import SecondsCounter from "./secondscounter";





//create your first component
const Home = (props) => {
	let seconds = props.seconds
	let FirstDigit =  seconds % 10;
	let SecondDigit = Math.floor((seconds/10) % 10);
	let ThirdDigit = Math.floor((seconds/100) % 10);
	let FourthDigit = Math.floor((seconds/1000) % 10);
	let FifthDigit = Math.floor((seconds/10000) % 10);
	let SixDigit = Math.floor((seconds/100000) % 10);
	return <>

		<div className="container-fluid d-flex gap-3 bg-black p-5">
			<div className="card text-center mb-3" style={{width: "10rem", height: "12rem", backgroundColor: "#1e1c1c", marginLeft:"2%"}}>
					<div className="card-body">
						<h5 className="card-title mt-3 text-white" style={{fontSize: "90px"}}>
								<svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
									<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
									<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
								</svg>
						</h5>
					</div>
			</div>
			<SecondsCounter number={SixDigit}/>
			<SecondsCounter number={FifthDigit}/>
			<SecondsCounter number={FourthDigit}/>
			<SecondsCounter number={ThirdDigit}/>
			<SecondsCounter number={SecondDigit}/>
			<SecondsCounter number={FirstDigit}/>
		  </div>
	</>
};

export default Home;