import React from 'react'
import './slider.css'

function Slider(){
    return(
        <React.Fragment>
        <div className="slide_container">
         <div className = "slides">
            <div className="slide">
             <img src="../public/room1.jpg" alt="slide1"/></div>
            <div className="slide">
                <img src="../public/bathroom1.jpg" alt="slide2"/></div>
            <div className="slide">
             <img src="../public/kitchen1.jpg" alt="slide3"/></div>
        </div>
            <button id="prevBtn" className="prevBtn"><img src="./public/left-arrow.png" alt="left"/></button>
            <button id="nextBtn" className="nextBtn"><img src="./public/right-arrow.png" alt="right"/></button>
        </div>
        <script src="../src/js.js"></script>
        </React.Fragment>
    );
}
export default Slider