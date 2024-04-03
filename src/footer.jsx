import React from 'react'
import "./footer.css"

function Footer(){
    return(
        <div id="footer" className = "footer"> 
            <div class="adress"> 
                <img id = "logoend" src="https://hsygvgnykngkzvna.public.blob.vercel-storage.com/logo-XbOxitXNNSrdB9NNaFtXMe30aC1xrz.png" alt="logo"/>
                <h1>Charlotte Street Hotel   </h1>
                <p>193 Victoria Street London EC35 4LK</p>
            </div>
            <div class="contact">
                <img class="contactimg" src="https://hsygvgnykngkzvna.public.blob.vercel-storage.com/contacts-0JtXxad2Ho4yZXZ6doAEwHqIWfRuhW.png" alt="contacts"/>    
                <p>+4 417-688-18-56</p> 
                <p>HotelLigma@gmail.com</p>
            </div>
            <div class="follow">
                <h2>Следуйте за нами в Instagram</h2>
                <a href="#"><img src="./assets/instagram.png" alt="instagram"/></a>
                <a href="#"><img src="./assets/facebook.png" alt="facebook"/></a>
                <a href="#"><img src="./assets/telegram.png" alt="telegram"/></a>
            </div>
    </div>
    );
}
export default Footer