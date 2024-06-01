import { Link } from 'react-router-dom'
import LOGO from '../images/logo-white.png'
import card from"../css/card.scss";
import logements from "../logements.json";


/*Card.defaultProps = {
    location:{id:0, title:"Titre de la location", cover:null},
    index:0,
    count:0,
}

function Card({location, index}) {
    return (
      <div className='card'>
        <Link to={"/logements/"+location.id} className={card.link}>
           
            {(location.cover===null) ? <img src={LOGO}/> : <img src={location.cover}/>}
            <p>{index+1+" - "+location.title}</p>
           
        </Link>
        </div>
    )
}

export default Card*/

function Card(){
    return(
       <div className='cards'>
        {
            logements && logements.map( logement => {
                return(
                <div className ="card" key={logement.title}>
                  <img src= {logement.cover}/>
                    <p>{logement.title}</p>

                </div>
                )

            })
        }
        </div>
    );



}
export default Card