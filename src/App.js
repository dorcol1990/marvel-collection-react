import marvel from './assets/marvel.png';
import shield from './assets/shield.png';
import { NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';

function App() {

    const [showMenu, setShowMenu] = useState(false);
  
    function handleMenu() {
      setShowMenu(!showMenu);
    }
  
    function handleNavLink (){
      setShowMenu(false)
    }

    const menuClass = showMenu ? "navbar-menu-wraper show-mobile-menu" : "navbar-menu-wraper";

  return (
    <div className="app">
      <nav className="navbar">
        <div className="navbar-container">
          <div className='navbar-logo'>
            <img src={marvel} alt="logo" className='navbar-logo-image' />
          </div>
          <div className={menuClass}>
              <NavLink to="/" className="navbar-navlink" onClick={handleNavLink}>Spider-man</NavLink>
              <NavLink to="/ironman" className="navbar-navlink" onClick={handleNavLink}>Iron Man</NavLink>
              <NavLink to="/captainamerica" className="navbar-navlink" onClick={handleNavLink}>Captain America</NavLink>
              <NavLink to="/hulk" className="navbar-navlink" onClick={handleNavLink}>Hulk</NavLink>
              <NavLink to="/thor" className="navbar-navlink" onClick={handleNavLink}>Thor</NavLink>
          </div>
          <div className="navbar-btn" onClick={handleMenu}>
          <img src={shield} alt="btn" className='navbar-btn-image' />
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
