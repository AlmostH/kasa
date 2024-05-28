import Logowhite from "../images/logo-white.png";

export default function Footer(){
    return(
        <footer className="footer">
        <img className="logo"src={Logowhite} />
        <p className="footer_text">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}