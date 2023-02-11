import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)
  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo">
                TRVL <AddIcon />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                {click ? <MenuIcon /> : <CloseIcon />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu '}>
                <li className="nav-item">
                    <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/services' className="nav-links" onClick={closeMobileMenu}>
                        Services
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/products' className="nav-links" onClick={closeMobileMenu}>
                        Products
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/sign-up' className="nav-links-mobile" onClick={closeMobileMenu}>
                        Sign Up
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar