import { useState, useEffect } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
export default function Navbar(){

    const [currentScroll, setCurrentScroll] = useState(window.scrollY);
    const [downOrUp, setDownOrUp] = useState('');
    const debounce = (func, delay) => {
        let timerId;
        return (...args) => {
          if (timerId) {
            clearTimeout(timerId);
          }
          timerId = setTimeout(() => {
            func(...args);
          }, delay);
        };
      };
    
    useEffect(() => {
      const handleScroll = () => {
        const newScrollPosition = window.scrollY;
        if (newScrollPosition > currentScroll) {
          setDownOrUp('scrollMynav');
        } else {
            setDownOrUp('');
        }
        setCurrentScroll(newScrollPosition);
      };
    
      const debouncedHandleScroll = debounce(handleScroll, 0);
    
      window.addEventListener('scroll', debouncedHandleScroll);
    
      return () => {
        window.removeEventListener('scroll', debouncedHandleScroll);
      };
    }, [currentScroll]);
    return (
        <nav id="nav" className={`navbar navbar-expand-lg navbar-dark scrolling-navbar fixed-top ${downOrUp}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link to='/' className="nav-link" aria-current="page" >Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/'>Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='./aboutUs' className="nav-link">About Us</Link>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}