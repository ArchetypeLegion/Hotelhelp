import React from 'react'
import './header.css'

function Header(){
    return(
        <header>
            <img id = "logo" src="https://hsygvgnykngkzvna.public.blob.vercel-storage.com/logo-XbOxitXNNSrdB9NNaFtXMe30aC1xrz.png" alt="logo" />
            <h1 className="maintext">Hotel Luxurious International Getaway Magnificent Abode</h1>
            <nav className="head_menu">
            <ul>
                <li><a><b>Главная</b></a></li>
                <li><a href="#about_us"><b>О нас</b></a></li>
                <li><a href="#footer"><b>Контакты</b></a></li>
            </ul>
            </nav>
        </header>
    );
}

export default Header