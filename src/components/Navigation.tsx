import React from 'react';
import {Link} from "react-router-dom";
import {routes} from "../services/routes";


function Navigation() {
    return (
        <header className="navigation">
            <div className="navigation-links">
                <Link to={routes.home}>Home</Link>
                <Link to={routes.addProduct}>Add product</Link>
                <Link to={routes.contact}>Contact</Link>
                <Link to={routes.login}>Login</Link>
            </div>
        </header>
    )
}

export default Navigation;

