import React from 'react';
import '../assets/styles/components/Header.sass';

const Header = () => (
    <header className="header">
        <img className="header__img" src="img/platzi-video-logo.png" alt="Platzi Video"/>
        <div className="header__menu">
            <div className="header__menu--profile">
                <img src="img/user-icon.png" alt="Icono Usuario"/>
                <p>Perfil</p>
            </div>
            <ul>
                <li><a href="/">Cuenta</a></li>
                <li><a href="/">Cerrar Sesión</a></li>
            </ul>
        </div>
    </header>
)

export default Header;