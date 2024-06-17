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


export default function Logement(){

const id = useParams('id').id;
const logement = logements.filter((data) => data.id == id);
if (logement.length === 0) {
    return <Error />}
    else {
        return <ShowLogement />}
}

export function ShowLogement(){
    const [imageSlider, setImageSlider] = useState([]);

    const id = useParams('id').id;
    const logement = logements.filter((data) => data.id == id);


  const equip = logement[0].equipments.map((equip,index) => 
    <li key={index}>{equip}</li>
    )

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
                
                </div>
                <img src={picture} alt="Hôte de l'hébergement" />
                <div className="hoteHebergementNote">
                            {[...Array(5)].map((star, index) => {
                                const ratingValue = index + 1;
                                return (
                                    <img key={index} src={ratingValue <= rating ? redStar : greyStar} alt="star" />
                                )
                            })}
                        </div>
            </div>
          <div className="collapseLogement">
                    <Collapse label="Description">
                    <p>{logement[0].description} </p>
                    </Collapse>
                    <Collapse label ="Equipements">
                    <ul>{equip}</ul>
                    </Collapse>
          </div>

         
          <Footer />
          </>
    )

}