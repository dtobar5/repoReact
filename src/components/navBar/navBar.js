/* rafce */

import * as React from 'react';
import "./navBar.css"
import CartWidget from '../cartWidget/cartWidget';
import { Link } from "react-router-dom";

const NavBar = () => {

    // dice si esta logeado el usuario, en useState puede ir un mensaje ("esta logeado")
    // con el !isLoggeoIn se hace el toggle del boton

    /*
    otra forma de hacer el toggle
    <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Cambiar estado</button>
    */
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    const handleClick = () => {
        if (isLoggedIn === true) {
            setIsLoggedIn(false);
        } else {
            setIsLoggedIn(true);
        }
    }

    return (
        <div className="navBar">
            <span className="logo"><Link to="/">LOGO</Link> </span>
            <ul className="navOptions">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Counter">Counter</Link></li>
            </ul>
            <div className="estado">
                {isLoggedIn.toString()}
                <button onClick={handleClick}>Cambiar estado</button>
            </div>

            <div className="carrito">
                <CartWidget />
            </div>

        </div>
    );
};

export default NavBar;
