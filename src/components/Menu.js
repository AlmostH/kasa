import { NavLink } from "react-router-dom";

export default function Menu(){
    return(
        <div className="menu">
            <ul>
                <li><NavLink to="/">Accueil</NavLink></li>
                <li><NavLink to="/apropos">A propos</NavLink></li>
            </ul>
        </div>
    )

}