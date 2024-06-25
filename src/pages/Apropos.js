import Header from "../components/Header";
import BannerAbout from "../components/BannerAbout";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";






export default function Apropos(){
    return(
        <>

        <Header />
        <main>
        <BannerAbout />
        <div className="collapses">
        <Collapse label="Fiabilité">
                <p>
                    Les annonces postées sur Kasa garantissent une fiabilité totale.
                    Les photos sont conformes aux logements, et toutes les informations
                    sont régulièrements vérifiées par nos équipes.
                </p>
            </Collapse>
           
            <Collapse label="Respect">
                <p>
                    La bienveillance fait partie des valeurs fondatrices de Kasa.
                    Tout comportement discriminatoire ou de perturbation du
                    voisinage entrainera une exclusion de notre plateforme.
                </p>
            </Collapse>
         
            <Collapse label="Service">
                <p>
                    La bienveillance fait partie des valeurs fondatrices de Kasa.
                    Tout comportement discriminatoire ou de perturbation du
                    voisinage entrainera une exclusion de notre plateforme.
                </p>
            </Collapse>
          
            <Collapse label="Sécurité">
                <p>
                    La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes
                    que pour les voyageurs, chaque logement correspond aux critères
                    de sécurité établis par nos services. En laissant une note aussi
                    bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
                    que les standards sont bien respectés. Nous organisons également des
                    ateliers sur la sécurité domestique pour nos hôtes.

                </p>
            </Collapse>
            </div>
            </main>
        <Footer />
        </>
    )
}