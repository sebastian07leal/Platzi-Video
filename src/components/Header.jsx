import React from 'react';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import '../assets/styles/components/Header.sass';
import logo from '../assets/static/platzi-video-logo.png';
import userIcon from '../assets/static/user-icon.png';

const Header = () => {
    return (
        <header className="header">
            <Link to="/">
                <img className="header__img" src={logo} alt="Platzi Video"/>
            </Link>
            <div className="header__menu">
                <div className="header__menu--profile">
                    <img src={gravatar('helber.toro@gmail.com')} alt="Icono Usuario"/>
                    <p>Perfil</p>
                </div>
                <ul>
                    <li><a href="/">Cuenta</a></li>
                    <li>
                        <Link to="/login">
                            Iniciar Sesión
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
};

export default Header;