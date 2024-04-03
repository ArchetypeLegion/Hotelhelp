import React from 'react'
import './about.css'

function About(){
    return(
        <div id="about_us" className = "about_us">
      <div className="square">
        <img className ="icon" src="../vite-project/public/thumb-ups.png" alt="icon1" />
        <h1>Удовлетворенность клиентов, 
          отмеченная наградами</h1>
        <p>Мы заботимся об удобстве наших клиентов!</p>
      </div>
      <div className="square">
        <img className ="icon" src="../vite-project/public/heart.png" alt="icon2" />
        <h1>Мы вкладываем свое сердце и душу во все, что мы делаем</h1>
        <p>Мы делаем каждый элемент с любовью и заботой! </p>
      </div>
      <div className="square">
        <img className ="icon" src="../vite-project/public/bed.png" alt="icon" />
        <h1>Комфорт, который мы предлагаем, не имеет границ</h1>
        <p>Почувствуй удобство и безграничную заботу!</p>
      </div>
  </div>
  
    );
}
export default About