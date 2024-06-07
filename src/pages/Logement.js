import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "../components/Banner";
import logements from "../logements.json";
import Collapse from "../components/Collapse";
import { useParams } from 'react-router-dom';

export default function Logement(){
/* collapses*/
    const id = useParams('id').id;
    const logement = logements.filter((data) => data.id == id);
    const equip = logement[0].equipments.map(equip => 
    <li>{equip}</li>
    )

    return (
        <>
        
          <Header />
     
          
          <h1>{logement[0].title}</h1>
          <p>{logement[0].location}</p>
          <div>
                {logement[0].tags.map((tag, index) => {
                    return (
                        <button key={index}>{tag}</button>
                             )
                        })}
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