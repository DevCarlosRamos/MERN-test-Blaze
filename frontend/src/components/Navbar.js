import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar-expand navbar navbar-dark bg-dark px-5">
            <Link className="navbar-brand" to="/">BLAZE</Link>

                <div className="navbar-nav">
                <Link className="nav-link" to="/Orders">Orders</Link>
                <Link className="nav-link" to="/Products">Products</Link>
                </div>
        </nav>
    )
}

export default Navbar;
