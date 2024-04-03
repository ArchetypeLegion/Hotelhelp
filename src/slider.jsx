import React from 'react'
import './slider.css'

function Slider(){
    return(
        <React.Fragment>
        <div className="slide_container">
         <div className = "slides">
            <div className="slide">
             <img src="https://hsygvgnykngkzvna.public.blob.vercel-storage.com/room1-s5cRvnxVKITcGYLZUv5q5iEu5Nwiv8.jpg" alt="slide1"/></div>
            <div className="slide">
                <img src="https://hsygvgnykngkzvna.public.blob.vercel-storage.com/bathroom1-Dv4na2BTe6dmI7ECfYd1HuArHPkr2f.jpg " alt="slide2"/></div>
            <div className="slide">
             <img src="https://hsygvgnykngkzvna.public.blob.vercel-storage.com/kitchen1-ElW2KoKrDabhOZuh26DdagFBirlNcb.jpg" alt="slide3"/></div>
        </div>
            <button id="prevBtn" className="prevBtn"><img src="https://hsygvgnykngkzvna.public.blob.vercel-storage.com/left-arrow-r8J0DQkcrtPlTOprbs8PvshETEQCUD.png" alt="left"/></button>
            <button id="nextBtn" className="nextBtn"><img src="https://hsygvgnykngkzvna.public.blob.vercel-storage.com/right-arrow-gZh9IyneHHVY635OTyBOMrWlEbCutW.png" alt="right"/></button>
        </div>
        <script src="../src/js.js"></script>
        </React.Fragment>
    );
}
export default Slider