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
                        <strong>YUBO's HOOK</strong>
                    </Link>
                </div>
                <div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/test' className='nav-links' onClick={handleClick}>
                                About
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/test' className='nav-links' onClick={handleClick}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Navbar 
