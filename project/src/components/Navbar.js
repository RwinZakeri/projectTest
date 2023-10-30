import React from 'react';
import './navbarStyle.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const Navbar = () => {
    return (
        <div className='navBar'>
            <div>
                <h1>Rwin</h1>
            </div>

            <div>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/shop'>products</Link></li>
                    <li>login</li>
                    <li>about</li>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;