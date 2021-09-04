/* rafce */

import React from 'react';
import "./navBar.css"
import CartWidget from '../cartWidget/cartWidget';

const NavBar = () => {
    return (
        <div className="navBar">
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Contacto</a></li>

            </ul>
            <CartWidget />
        </div>
    );
}

export default NavBar;
