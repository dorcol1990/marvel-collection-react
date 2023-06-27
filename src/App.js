import marvel from './assets/marvel.png';
import shield from './assets/shield.png';
import { NavLink, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="navbar-container">
          <div className='navbar-logo'>
            <img src={marvel} alt="logo" className='navbar-logo-image' />
          </div>
          <div className="navbar-menu-wraper">
              <NavLink to="/" className="navbar-navlink">Spider-man</NavLink>
              <NavLink to="/ironman" className="navbar-navlink">Iron Man</NavLink>
              <NavLink to="/captainamerica" className="navbar-navlink">Captain America</NavLink>
              <NavLink to="/hulk" className="navbar-navlink">Hulk</NavLink>
              <NavLink to="/thor" className="navbar-navlink">Thor</NavLink>
          </div>
          <div className="navbar-btn">
          <img src={shield} alt="btn" className='navbar-btn-image' />
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
