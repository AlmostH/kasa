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
                <li><NavLink to="/">Accueil</NavLink></li>
                <li><NavLink to="/apropos">A propos</NavLink></li>
            
        </ul>
      </nav>
    </header>
  );
}

