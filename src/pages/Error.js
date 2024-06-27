import Footer from "../components/Footer";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";
export default function Error(){
    return(
        <>
      <Header />
      <section className="error_wrapper">
        <h1 className="error_title">404</h1>
          <p className="error_subtitle">Oups! La page que vous demandez n'existe pas.</p>
            <NavLink className="error_return" to="/">Retourner sur la page d'accueil</NavLink>
      </section>
      <Footer />
        </>
    )
}