import Footer from "../components/Footer";
import Header from "../components/Header";
import logements from "../logements.json";
import Collapse from "../components/Collapse";
import { useParams } from 'react-router-dom';
import Carrousel from "../components/Carrousel";
import { useState } from "react";
import { useEffect } from "react";
import Error from "./Error";
import redStar from "../images/redStar.png";
import greyStar from "../images/greyStar.png";

{/*  fonction pour rediriger vers 404 si id n'est pas bon*/}

export default function Logement(){
{/*useparams pour recuper l'id de l'url*/}
const id = useParams('id').id;
{/* recuperer l'id du logement, verifier si il est identique a l'id de l'url*/}
const logement = logements.filter((data) => data.id == id);
{/* si l'id ne correspond pas (pas de data trouvée) envoi sur la page 404*/}
if (logement.length === 0) {
    return <Error />}
    else {
         {/* sinon affichage de la page logement*/}
        return <ShowLogement />}
}

export function ShowLogement(){
    const [imageSlider, setImageSlider] = useState([]);

    const id = useParams('id').id;
    const logement = logements.filter((data) => data.id == id);

    {/* liste des equipements*/}
  const equip = logement[0].equipments.map((equip,index) => 
    <li key={index}>{equip}</li>
    )
   {/* affiche le carrousel */}
    useEffect(() => {

        const logement = logements.filter((data) => data.id == id);
        setImageSlider(logement[0].pictures);
    }, [id]);
    const name =logement[0].host.name.split(' '); 
    const picture=logement[0].host.picture;
    const rating = logement[0].rating;
    return (
        <>
        
          <Header />
          <Carrousel imageSlider={imageSlider}/>
        
        <div className="infoLogementWrapper">
            <div className="infoLogement">
                <h1>{logement[0].title}</h1>
                <p>{logement[0].location}</p>
                
                <div className="tags">
                    {logement[0].tags.map((tag, index) => {
                        return (
                            <button key={index}>{tag}</button>
                                    )
                            })}
                </div>
            </div>
                <div className="hotelogement">
                    <div className="hotelogementname">
                        <span>{name[0]}</span>
                        <span>{name[1]}</span>
                        
                    
                        <img src={picture} alt="Hôte de l'hébergement" />
                        </div>
                    <div className="noteWrapper">
                        <div className="hoteHebergementNote">
                            {[...Array(5)].map((star, index) => {
                                    const ratingValue = index + 1;
                                    return (
                                        <img key={index} src={ratingValue <= rating ? redStar : greyStar} alt="star" />
                                    )
                                })}
                        </div>       
                    </div>
                </div>
            </div>
            <div className="collapseWrapper">
          <div className="collapseDescription">
                    <Collapse label="Description">
                    <p>{logement[0].description} </p>
                    </Collapse>
            </div>
                <div className="collapseEquipements">
                    <Collapse label ="Equipements">
                    <ul>{equip}</ul>
                    </Collapse>
                    </div>
            </div>

         
          <Footer />
          </>
    )

}