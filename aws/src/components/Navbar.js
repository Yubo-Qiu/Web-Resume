import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import logo from '../hook.jpg';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click)
    return (
        <>
            <nav className="navbar">
                <div className='navbar-container'>
                    <Link to="/" className="navbar-logo">
                        <img src={logo} alt='Logo' className='navbar-icon' /> {/* moved the img tag before the text */}
                        <strong>YUBO's Hook</strong>
                    </Link>
                </div>
            </nav>
        </>
    )
}
export default Navbar 
