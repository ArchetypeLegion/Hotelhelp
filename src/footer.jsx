import React from 'react'
import "./footer.css"
function footer(){
    return(
        <div id="footer" className = "footer"> 
            <div class="adress"> 
                <img id = "logoend" src="../vite-project/public/logo.png" alt="logo"/>
                <h1>Charlotte Street Hotel   </h1>
                <p>193 Victoria Street London EC35 4LK</p>
            </div>
            <div class="contact">
                <img class="contactimg" src="../vite-project/public/contacts.png" alt="contacts"/>    
                <p>+4 417-688-18-56</p> 
                <p>HotelLigma@gmail.com</p>
            </div>
            <div class="follow">
                <h2>Следуйте за нами в Instagram</h2>
                <a href="#"><img src="../vite-project/public/instagram.png" alt="instagram"/></a>
                <a href="#"><img src="../vite-project/public/facebook.png" alt="facebook"/></a>
                <a href="#"><img src="../vite-project/public/telegram.png" alt="telegram"/></a>
            </div>
    </div>
    );
}
export default footer