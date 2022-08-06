//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
import PropTypes from "prop-types";

function SimpleCounter(props){

    return (
        <div className= "bigCounter">

         <div className="calendar">
         <i class="fas fa-clock"></i>
         </div>
         <div className="four">{props.digiFour}</div>
         <div className="three">{props.digiThree}</div>
         <div className="tow">{props.digiTwo}</div>
         <div className="one">{props.digiOne}</div>
             
        </div>
    )

}

SimpleCounter.propTypes ={
    digiFour: PropTypes.number,
    digiThree: PropTypes.number,
    digiTwo: PropTypes.number,
    digiOne: PropTypes.number
};

let counter = 0;
setInterval (function(){
    const four = Math.floor(counter/10000)
    const three = Math.floor(counter/100)
    const two = Math.floor(counter/10)
    const one = Math.floor(counter/1)

    console.log(counter)
    counter++


ReactDOM.render(
    <SimpleCounter digiOne={one} digiTwo={two} digiThree={three} digiFour={four} />,
    document.querySelector("#app")
    
);
}, 1000);
export default SimpleCounter;
