import Logo from "../images/Logo.jpg";
import { NavLink } from "react-router-dom";

export default function Header(){
return (
    <header>
      <nav className="navigation">
        <div className="nav_logo">
          <img className="logo"src={Logo} />
        </div>
        <ul className="nav_link">
          <li> <NavLink to="/" className={({ isActive }) => (isActive ? "activeLink" : undefined)}>Accueil</NavLink></li>
          <li> <NavLink to="/apropos" className={({ isActive }) => (isActive ? "activeLink" : undefined)}>A propos</NavLink></li>
            
        </ul>
      </nav>
    </header>
  );
}

