import React, { useEffect, useState } from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "./Button";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960){
        setButton(false);
    }
    else{
        setButton(true);
    }
  }

  useEffect(()=>{
    showButton();
  }, [])

  window.addEventListener('resize', showButton)

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            TRVL <AddIcon />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <CloseIcon /> : <MenuIcon />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu "}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Sign-Up</Button>}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
