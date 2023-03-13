import { useState, useEffect, useRef } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';





export default function Navbar({ path }){

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
                <CustomLink href='/'>home</CustomLink>
                <CustomLink href='/faq'>faq</CustomLink>
                <CustomLink href='/contact'>contact</CustomLink>
                <CustomLink href='/aboutUs'>About Us</CustomLink>
              </ul>
            </div>
          </div>
        </nav>

    )
}

function CustomLink({ href, children, ...props}){
  const path =window.location.pathname
    return(
    <li className="nav-item">
      <Link to={href} className={`nav-link`}>{children}</Link>
    </li>
  )
}