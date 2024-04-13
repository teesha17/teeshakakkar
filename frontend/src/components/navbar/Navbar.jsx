import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"
export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
  
    const closeMobileMenu = () => {
      setIsMobileMenuOpen(false);
    };
  
    return (
      <>
        <div className="navbar-fixed" style={{ display: "flex", justifyContent: "center", flexDirection: "column" ,alignItems:"center"}}>
          <div className="navBar">
            <div className="hamburger" onClick={toggleMobileMenu}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
            <div className={`navbar-items ${isMobileMenuOpen ? "mobilemenu" : ""}`}>
              <a onClick={closeMobileMenu}>
              <Link to='/'>Home</Link>
              </a>
              <a onClick={closeMobileMenu}>
              <a href='#about'>About</a>
              </a>
              <a onClick={closeMobileMenu}>
              <a href='#skills'>Skills</a>
              </a>
              <a onClick={closeMobileMenu}>
              <a href='#projects'>Projects</a>
              </a>
              <a onClick={closeMobileMenu}>
              <a href='#contact'>Contact Me</a>
              </a>
            </div>
          </div>
        </div>
        </>
    )
}
